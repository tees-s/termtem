/* เครื่องทบทวน + ทำข้อสอบ ใช้ร่วมกันทุกวิชา
   ข้อมูลแต่ละวิชาอยู่ใน q/<id>.js  รูปแบบ:
   window.SUBJECT = { title, subtitle, note, order?, sections: [ { title, html, quiz: [ { q, c:[ถูก, ผิด, ผิด, ผิด], why } ] } ] }
   ตัวเลือกแรกของ c คือคำตอบที่ถูกเสมอ — ตอนแสดงผลจะสลับลำดับให้เอง
   order (ไม่ใส่ก็ได้) = ลำดับที่แสดง เป็นตำแหน่งใน sections เช่น English [3, 4, 5, 6, 0, 1, 2, 7] ให้ตรงกับลำดับในเช็กลิสต์หน้าแรก
     แสดงเป็นรายการเดียว ไม่แบ่งกลุ่ม · ตำแหน่งใน sections ยังเป็นคีย์คะแนน 'วิชา:ตำแหน่ง' (ตรงกับรายการในเช็กลิสต์ plan.js)
     ลำดับที่แสดงจึงเปลี่ยนได้โดยคะแนน/ติ๊กเดิมไม่หาย */
(function () {
  var IDS = ['thai', 'math', 'social', 'science', 'english', 'history', 'chinese', 'csi'];
  var BEST_KEY = 'termtem-quiz-best';
  var id = (new URLSearchParams(location.search).get('s') || '').toLowerCase();
  var $ = function (s) { return document.getElementById(s); };

  // เปิดอยู่ในป๊อปอัปเต็มจอของหน้าเช็กลิสต์ (todoOpen ใน plan.js): ซ่อนลิงก์ย้อนกลับ เพราะมีปุ่ม "✕ ปิด" ด้านบนแล้ว
  // ลิงก์กลับหน้าแรกที่เหลือ และปุ่ม Esc = ปิดป๊อปอัป
  var host = null;
  try { if (window.parent !== window && typeof window.parent.todoClose === 'function') host = window.parent; } catch (e) { host = null; }
  if (host) {
    document.documentElement.classList.add('in-pop');
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') host.todoClose(); });
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href="index.html"]') : null;
      if (a) { e.preventDefault(); host.todoClose(); }
    });
  }

  if (IDS.indexOf(id) < 0) {
    $('title').textContent = 'ไม่พบวิชานี้';
    $('subtitle').innerHTML = '<a href="index.html">กลับไปเลือกวิชา</a>';
    return;
  }

  var s = document.createElement('script');
  // ?v= ของหน้า (ลิงก์จากเช็กลิสต์ใส่มาให้) ส่งต่อให้ไฟล์เนื้อหาวิชา ไม่ให้เบราว์เซอร์ใช้ไฟล์เก่าที่จำไว้
  var ver = (new URLSearchParams(location.search).get('v') || '').replace(/[^0-9a-z]/gi, '');
  s.src = 'q/' + id + '.js' + (ver ? '?v=' + ver : '');
  s.onload = start;
  s.onerror = function () { $('title').textContent = 'โหลดเนื้อหาไม่สำเร็จ ลองรีเฟรชอีกครั้ง'; };
  document.head.appendChild(s);

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function loadBest() { try { return JSON.parse(localStorage.getItem(BEST_KEY)) || {}; } catch (e) { return {}; } }
  function saveBest(key, score, total) {
    var b = loadBest();
    var pct = Math.round(score * 100 / total);
    if (!b[key] || pct >= b[key].pct) {
      b[key] = { pct: pct, score: score, total: total };
      try { localStorage.setItem(BEST_KEY, JSON.stringify(b)); } catch (e) {}
      // ส่งขึ้น host ให้ทุกเครื่องเห็นคะแนนเดียวกัน (ส่งไม่ได้ก็ไม่เป็นไร หน้าเช็กลิสต์จะส่งให้อีกรอบ)
      var up = {};
      up[key] = { score: score, total: total };
      try {
        if (host && host.todoPushBest) host.todoPushBest(up);
        else if (window.fetch) fetch('api/ticks.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ best: up }), cache: 'no-store' }).catch(function () {});
      } catch (e) {}
    }
  }

  function start() {
    var S = window.SUBJECT;
    document.title = S.title + ' · ทบทวนสอบกลางภาค ป.6';
    $('title').textContent = S.title;
    $('subtitle').textContent = S.subtitle || '';

    var review = $('review'), quiz = $('quiz');
    function show(which) {
      review.hidden = which !== 'review';
      quiz.hidden = which !== 'quiz';
      $('tab-review').classList.toggle('on', which === 'review');
      $('tab-quiz').classList.toggle('on', which === 'quiz');
      window.scrollTo(0, 0);
    }
    $('tab-review').onclick = function () { show('review'); };
    $('tab-quiz').onclick = function () { menu(); show('quiz'); };

    // ลำดับที่แสดง = ตำแหน่งใน sections ตาม S.order (ถ้ามี) ต่อด้วยเรื่องที่ไม่ได้อยู่ใน order (ไม่ให้หายไปจากหน้า)
    // ไม่มี order = ตามลำดับใน sections
    // q/english.js รุ่นก่อน (20261113g) เก็บลำดับไว้ใน groups:[{sections:[...]}] — ถ้าได้ไฟล์รุ่นนั้น (ช่วงอัปโหลดยังไม่ครบ
    // หรือเครื่องที่ยังจำไฟล์เก่าไว้) ก็อ่านลำดับจาก groups แทน จะได้ไม่กลับไปเอาเรื่องสอบในตารางขึ้นก่อน (ผลตรวจ 13 พ.ย. 69)
    var SHOWN = (function () {
      var ord = Array.isArray(S.order) ? S.order : [];
      if (!ord.length && Array.isArray(S.groups)) S.groups.forEach(function (g) { if (g && Array.isArray(g.sections)) ord = ord.concat(g.sections); });
      var out = [], used = {};
      ord.forEach(function (i) { if (S.sections[i] && !used[i]) { used[i] = 1; out.push(i); } });
      S.sections.forEach(function (sec, i) { if (!used[i]) out.push(i); });
      return out;
    })();

    // ---------- ทบทวน ----------
    // ทุกเรื่องหุบไว้เหมือนกันหมด ไม่มีเรื่องไหนกางเองหรือมีกรอบสี ให้กดเปิดเอง (ผู้ใช้ขอ 13 พ.ย. 69)
    // ลิงก์จากเช็กลิสต์ยังมี ?t=N ติดมา แต่หน้านี้ไม่ได้ใช้แล้ว
    // รายการเดียวเรียงแบบเช็กลิสต์หน้าแรก ไม่แบ่งกลุ่มว่าสอบนอก/ในตาราง (ผู้ใช้ขอ 13 พ.ย. 69 — ไล่ติ๊กจากบนลงล่างในหน้าแรกอยู่แล้ว)
    var openAll = new URLSearchParams(location.search).get('open') === 'all';   // ?open=all กางทุกเรื่อง (ไว้พิมพ์)
    if (S.note) review.appendChild(el('p', 'warn', S.note));
    SHOWN.forEach(function (i) {
      var sec = S.sections[i];
      var d = el('details', 'lesson');
      if (openAll) d.open = true;
      d.appendChild(el('summary', null, '<span>' + sec.title + '</span><span class="n">ข้อสอบ ' + sec.quiz.length + ' ข้อ</span>'));
      var body = el('div', 'body', sec.html);
      var go = el('button', 'go', 'ลองทำข้อสอบเรื่องนี้ →');
      go.type = 'button';
      go.onclick = function () { run(sec.quiz, sec.title, id + ':' + i); show('quiz'); };
      body.appendChild(go);
      d.appendChild(body);
      review.appendChild(d);
    });

    if (window.ANIM) window.ANIM.init(review);

    // ---------- เมนูข้อสอบ ----------
    function menu() {
      quiz.innerHTML = '';
      var best = loadBest();
      var m = el('div', 'menu');
      var all = [];
      S.sections.forEach(function (sec) { all = all.concat(sec.quiz); });
      function item(label, qs, key, cls) {
        var b = el('button', cls);
        b.type = 'button';
        var bs = best[key] ? ' · ดีที่สุด ' + best[key].score + '/' + best[key].total : '';
        b.innerHTML = '<b>' + label + '</b><span class="meta">' + qs.length + ' ข้อ' + bs + '</span>';
        b.onclick = function () { run(qs, label, key); };
        m.appendChild(b);
      }
      item('รวมทุกเรื่อง (สุ่มลำดับ)', all, id, 'all');
      SHOWN.forEach(function (i) { item(S.sections[i].title, S.sections[i].quiz, id + ':' + i); });   // เรียงเหมือนหน้าทบทวน
      quiz.appendChild(m);
    }

    // ---------- ทำข้อสอบ ----------
    function run(questions, label, key) {
      var qs = shuffle(questions), n = 0, score = 0, missed = [];
      next();

      function next() {
        if (n >= qs.length) return finish();
        var item = qs[n], answer = item.c[0];
        quiz.innerHTML = '';
        quiz.appendChild(el('div', 'qhead', '<span>' + label + '</span><span>ข้อ ' + (n + 1) + ' / ' + qs.length + '</span>'));
        quiz.appendChild(el('div', 'bar', '<i style="width:' + (n * 100 / qs.length) + '%"></i>'));
        var card = el('div', 'qcard');
        card.appendChild(el('p', 'qtext', item.q));
        var box = el('div', 'choices');
        shuffle(item.c).forEach(function (c) {
          var b = el('button', null, c);
          b.type = 'button';
          b.onclick = function () {
            var ok = c === answer;
            Array.prototype.forEach.call(box.children, function (x) {
              x.disabled = true;
              if (x._c === answer) x.classList.add('right');
            });
            if (!ok) b.classList.add('wrong');
            if (ok) score++; else missed.push(item);
            card.appendChild(el('div', 'why ' + (ok ? 'ok' : 'no'), '<b>' + (ok ? '✅ ถูกต้อง!' : '❌ ยังไม่ถูก') + '</b>' + (item.why || '')));
            var nb = el('button', 'next', n + 1 < qs.length ? 'ข้อต่อไป →' : 'ดูคะแนน');
            nb.type = 'button';
            nb.onclick = function () { n++; next(); window.scrollTo(0, 0); };
            card.appendChild(nb);
            nb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          };
          b._c = c;
          box.appendChild(b);
        });
        card.appendChild(box);
        quiz.appendChild(card);
        var q = el('button', 'quit', 'เลิกทำ กลับไปเลือกเรื่อง');
        q.type = 'button';
        q.onclick = menu;
        quiz.appendChild(q);
      }

      function finish() {
        saveBest(key, score, qs.length);
        var pct = Math.round(score * 100 / qs.length);
        var msg = pct === 100 ? 'เยี่ยมมาก! ถูกหมดทุกข้อ 🎉'
          : pct >= 80 ? 'เก่งมาก! เหลืออีกนิดเดียว 👍'
          : pct >= 50 ? 'ผ่านครึ่งแล้ว ทบทวนข้อที่ผิดอีกรอบนะ 💪'
          : 'ไม่เป็นไร กลับไปอ่านสรุปแล้วลองใหม่ ✌️';
        quiz.innerHTML = '';
        var r = el('div', 'result');
        r.appendChild(el('div', null, label));
        r.appendChild(el('div', 'big', score + ' / ' + qs.length));
        r.appendChild(el('div', 'msg', msg));
        var row = el('div', 'row');
        function btn(text, cls, fn) { var b = el('button', cls, text); b.type = 'button'; b.onclick = fn; row.appendChild(b); }
        if (missed.length) btn('ทำเฉพาะข้อที่ผิด (' + missed.length + ')', 'pri', function () { run(missed, label + ' — ข้อที่ผิด', key + ':retry'); });
        btn('ทำใหม่ทั้งชุด', missed.length ? '' : 'pri', function () { run(questions, label, key); });
        btn('เลือกเรื่องอื่น', '', menu);
        btn('กลับไปอ่านสรุป', '', function () { show('review'); });
        r.appendChild(row);
        if (missed.length) {
          var ms = el('div', 'missed', '<h4>ข้อที่ควรทบทวน</h4>');
          missed.forEach(function (it) {
            ms.appendChild(el('div', 'm', '<div>' + it.q + '</div><div class="a">ตอบ: ' + it.c[0] + '</div><div>' + (it.why || '') + '</div>'));
          });
          r.appendChild(ms);
        }
        quiz.appendChild(r);
        window.scrollTo(0, 0);
      }
    }

    if (location.hash === '#quiz') { menu(); show('quiz'); }
  }
})();
