/* เช็กลิสต์สอบกลางภาค 2/2569 — ใช้ร่วมกันระหว่าง index.html (เช็กลิสต์บนหน้าแรก) และ plan.html (หน้าเช็กลิสต์แยก)
   เรียงตามตารางสอบ ให้อ่านจากบนลงล่างได้เลย (ผู้ใช้ขอ 13 พ.ย. 69):
     1) สอบนอกตาราง (สอบก่อน) — English 30 พ.ย. – 3 ธ.ค. คาบ 9 แล้ว CSI ประวัติศาสตร์ จีน ตามลำดับในเอกสารของโรงเรียน
        (3 วิชานี้สอบตามที่ครูนัด เอกสารไม่ได้ระบุวัน ถ้าครูประกาศวันแล้วให้เรียงตามวันจริง)
     2) สอบในตาราง ศุกร์ 11 ธ.ค. 69 — ตามเวลาสอบ: ไทย คณิต สังคม วิทย์ อังกฤษ
   ภายในวิชาเรียงตามหัวข้อในเอกสารเนื้อหาสอบ ไม่มีวันที่กำกับรายวัน ติ๊กเมื่อทำเสร็จเท่านั้น
   แต่ละรายการ: [วิชา, เรื่อง, ข้อความ]  = เรื่องที่มีสรุป + ข้อสอบในเว็บ (มีลิงก์ "เปิด")
             เรื่อง = ตำแหน่งใน sections ของ q/<วิชา>.js นับจาก 0 — ไม่ใช่เลขหน้าชื่อเรื่อง
             (English แสดงเลข 1–8 ตาม order ในไฟล์นั้น เช่น ['english', 3] คือหัวข้อ "1. English for Daily Life 6")
             หรือ [null, 'ชื่อย่อ', ข้อความ, วิชา, เรื่อง]      = งานที่ทำในหนังสือ (📖) + เนื้อหาช่วยฝึกในเว็บ (ลิงก์ "เปิด" ไปเรื่องนั้น)
             (งาน 📖 ทั้ง 6 รายการมีเนื้อหาในเว็บตั้งแต่ 13 พ.ย. 69 — คีย์การติ๊กยังเป็น 'book:ชื่อย่อ' เหมือนเดิม)
   การติ๊กเก็บในเครื่องนี้ (localStorage) คีย์ของรายการ = 'วิชา:เรื่อง' หรือ 'book:ชื่อย่อ' */
window.TODO_SUBJECTS = {
  thai: 'ไทย', math: 'คณิต', social: 'สังคม', science: 'วิทย์',
  english: 'English', history: 'ประวัติฯ', chinese: 'จีน', csi: 'CSI'
};

window.TODO = [
  { id: 'off', title: '📝 สอบนอกตาราง',
    when: 'สอบก่อน ในคาบเรียน · English 30 พ.ย. – 3 ธ.ค. คาบ 9 → CSI → ประวัติศาสตร์ → จีน (ตามที่ครูนัด) · ควรทำให้ครบก่อน 30 พ.ย.',
    subjects: [
      { name: 'English for Daily Life · Develop Reading Skills', color: '#b57fe0', items: [
        ['english', 3, 'English for Daily Life 6 (Unit 5–6)'],
        ['english', 4, 'Develop Reading Skills — คำศัพท์ 11 คำ'],
        [null, 'drs-u5', 'อ่านบทอ่านในหนังสือ Develop Reading Skills หน้า 20–21 และ 44–45', 'english', 5],
        [null, 'drs-u6', 'อ่านบทอ่านในหนังสือ Develop Reading Skills หน้า 68–69 และ 72–73', 'english', 6] ] },
      { name: 'CSI', color: '#93c178', items: [
        ['csi', 0, 'Chromatography Lab'],
        ['csi', 1, 'Thermal Insulators'],
        ['csi', 2, 'Blood Basics and Blood Typing'] ] },
      { name: 'ประวัติศาสตร์', color: '#e8c84a', items: [
        ['history', 0, 'ผลงานของบุคคลสำคัญสมัยรัตนโกสินทร์'],
        ['history', 1, 'ภูมิปัญญาไทยสมัยรัตนโกสินทร์'] ] },
      { name: 'ภาษาจีน', color: '#9a96ad', items: [
        ['chinese', 0, 'บทที่ 5 อาหารจีนอร่อยมาก'],
        ['chinese', 1, 'บทที่ 6 ไปพระบรมมหาราชวังหรือตลาดน้ำ'],
        [null, 'zh-book', 'ทวนคำศัพท์ในหนังสือจีน บทที่ 5–6 (หน้า 27–38)', 'chinese', 2] ] }
    ] },
  { id: 'in', title: '📅 สอบในตาราง',
    when: 'ศุกร์ 11 ธ.ค. 69 · ไทย 08.15 → คณิต 09.35 → สังคม 11.00 → วิทย์ 13.10 → อังกฤษ 14.30',
    subjects: [
      { name: 'ภาษาไทย', color: '#8fb1dc', items: [
        ['thai', 0, 'คำบุพบทและคำเชื่อม'],
        ['thai', 1, 'การแต่งกลอนสุภาพ'],
        ['thai', 2, 'ประโยคสามัญ ประโยครวม ประโยคซ้อน'],
        ['thai', 3, 'สำนวน คำพังเพย สุภาษิต'],
        ['thai', 4, 'คำที่มาจากภาษาต่างประเทศ'],
        ['thai', 5, 'วรรณคดี: สุภาษิตสอนหญิง และบทอาขยาน ผู้ชนะ'],
        [null, 'thai-poem', 'ท่องบทอาขยาน ผู้ชนะ ให้ได้ทั้งบท', 'thai', 6] ] },
      { name: 'คณิตศาสตร์', color: '#e9a47f', items: [
        ['math', 0, 'แบบรูป'],
        ['math', 1, 'ชนิดของรูปสามเหลี่ยม'],
        ['math', 2, 'การสร้างรูปสามเหลี่ยม'],
        ['math', 3, 'ความยาวรอบรูปและพื้นที่ของรูปสามเหลี่ยม'],
        [null, 'math-draw', 'ลองสร้างรูปสามเหลี่ยมจริงบนกระดาษ 3 รูป ด้วยวงเวียนและโพรแทรกเตอร์', 'math', 4] ] },
      { name: 'สังคม', color: '#e8c84a', items: [
        ['social', 0, 'ผู้ผลิต ผู้บริโภค'],
        ['social', 1, 'การใช้ทรัพยากรให้เกิดประโยชน์สูงสุด'],
        ['social', 2, 'ระบบเศรษฐกิจและความสัมพันธ์ทางเศรษฐกิจ'],
        ['social', 3, 'การรวมกลุ่มเชิงเศรษฐกิจ'],
        ['social', 4, 'สิทธิของผู้บริโภคและผู้ใช้แรงงาน'],
        ['social', 5, 'ภาษีและหน่วยงานที่จัดเก็บภาษี'] ] },
      { name: 'วิทยาศาสตร์', color: '#93c178', items: [
        ['science', 0, 'หินและแร่ — สมบัติและประเภท'],
        ['science', 1, 'วัฏจักรหิน'],
        ['science', 2, 'ประโยชน์ของหินและแร่'],
        ['science', 3, 'ซากดึกดำบรรพ์'] ] },
      { name: 'English · Reported Speech · Order of Adjectives', color: '#b57fe0', items: [
        ['english', 0, 'Reported Speech: Statements'],
        ['english', 1, 'Reported Speech: Imperatives & Questions'],
        ['english', 2, 'Order of Adjectives'],
        [null, 'eng-book', 'ทวน Vocabulary 1–2 และบทอ่าน Unit 5–6 ในหนังสือ OWSB / OWWB', 'english', 7] ] }
    ] }
];

window.TODO_KEY = 'termtem-todo-2-2569';

/* รุ่นก่อนเป็นแผนอ่านรายวัน 30 วัน (คีย์ 'termtem-plan-2-2569' เก็บเป็น 'วันที่:ลำดับงาน')
   ตอนเปิดเช็กลิสต์ครั้งแรกในเครื่องนั้น จะยกเครื่องหมายถูกเดิมมาให้ตามตารางนี้ (งาน "ทำข้อสอบรวม" และงานทั่วไปไม่ได้ยกมา) */
window.TODO_LEGACY = {
  '2026-11-12:0': 'english:4', '2026-11-12:1': 'math:0', '2026-11-13:0': 'chinese:0', '2026-11-13:1': 'thai:0',
  '2026-11-14:0': 'english:3', '2026-11-14:1': 'history:0', '2026-11-14:2': 'math:1', '2026-11-15:0': 'csi:0',
  '2026-11-15:1': 'thai:2', '2026-11-15:2': 'science:0', '2026-11-16:0': 'chinese:1', '2026-11-16:1': 'math:2',
  '2026-11-16:2': 'book:math-draw', '2026-11-17:0': 'history:1', '2026-11-17:1': 'thai:1', '2026-11-18:0': 'csi:1',
  '2026-11-18:1': 'math:3', '2026-11-19:0': 'english:4', '2026-11-19:1': 'book:drs-u5', '2026-11-19:2': 'social:0',
  '2026-11-20:0': 'csi:2', '2026-11-20:1': 'thai:3', '2026-11-21:0': 'science:1', '2026-11-21:1': 'social:1',
  '2026-11-21:2': 'social:2', '2026-11-21:3': 'english:0', '2026-11-22:0': 'science:3', '2026-11-22:1': 'thai:4',
  '2026-11-22:2': 'english:1', '2026-11-23:0': 'social:3', '2026-11-24:0': 'thai:5', '2026-11-24:1': 'english:2',
  '2026-11-25:0': 'social:4', '2026-11-25:1': 'science:2', '2026-11-26:0': 'social:5', '2026-11-26:1': 'book:drs-u6',
  '2026-11-27:0': 'english:3', '2026-11-27:1': 'english:4', '2026-11-28:3': 'book:zh-book', '2026-11-30:1': 'math:0',
  '2026-12-01:1': 'math:3', '2026-12-02:1': 'thai:2', '2026-12-03:1': 'thai:3', '2026-12-05:2': 'book:thai-poem',
  '2026-12-07:0': 'english:0', '2026-12-07:1': 'english:1', '2026-12-07:2': 'english:2', '2026-12-07:3': 'book:eng-book'
};

window.todoId = function (it) { return it[0] ? it[0] + ':' + it[1] : 'book:' + it[1]; };
// v = รุ่นของหน้าเนื้อหา เปลี่ยนเมื่อแก้ quiz.html / quiz.js / quiz.css / q/<วิชา>.js เพื่อไม่ให้เบราว์เซอร์ใช้หน้าเก่าที่จำไว้
window.TODO_PAGE_VER = '20261113h';
// งาน 📖 ที่เนื้อหาในเว็บขึ้นแล้ว (เปิดทีละเรื่องเมื่อเนื้อหาพร้อม)
window.TODO_BOOK_READY = ['math-draw', 'drs-u5', 'drs-u6', 'eng-book', 'zh-book', 'thai-poem'];
// วิชาและเรื่องที่ลิงก์ "เปิด" พาไป (งาน 📖 ใช้ช่องที่ 4–5) — ไม่มีเนื้อหาในเว็บคืน null
window.todoTarget = function (it) {
  if (it[0]) return [it[0], it[1]];
  return it[3] && window.TODO_BOOK_READY.indexOf(it[1]) >= 0 ? [it[3], it[4]] : null;
};
window.todoHref = function (it) {
  var t = window.todoTarget(it);
  return t ? 'quiz.html?s=' + t[0] + '&t=' + t[1] + '&v=' + window.TODO_PAGE_VER : '';
};
window.todoSave = function (state) {
  try { localStorage.setItem(window.TODO_KEY, JSON.stringify(state)); } catch (e) { /* เก็บไม่ได้ (เช่น โหมดส่วนตัว) ก็ใช้ได้เฉพาะครั้งนี้ */ }
};
// อ่านสถานะการติ๊ก ถ้ายังไม่เคยมี ให้ยกเครื่องหมายถูกจากแผนรายวันรุ่นก่อนมา (ทำครั้งเดียว)
window.todoLoad = function () {
  var state = null;
  try {
    var raw = localStorage.getItem(window.TODO_KEY);
    if (raw !== null) state = JSON.parse(raw) || {};
  } catch (e) { state = {}; }
  if (state === null) {
    state = {};
    var old = {};
    try { old = JSON.parse(localStorage.getItem('termtem-plan-2-2569')) || {}; } catch (e) { old = {}; }
    Object.keys(old).forEach(function (k) { if (old[k] && window.TODO_LEGACY[k]) state[window.TODO_LEGACY[k]] = 1; });
    window.todoSave(state);
  }
  return state;
};
// ทุกรายการเรียงตามลำดับในเช็กลิสต์ [{group, subject, item}]
window.todoAll = function () {
  var all = [];
  window.TODO.forEach(function (g) {
    g.subjects.forEach(function (sj) { sj.items.forEach(function (it) { all.push({ group: g, subject: sj, item: it }); }); });
  });
  return all;
};

/* ---------- ติ๊กตรงกันทุกเครื่อง (ผู้ใช้ขอ 13 พ.ย. 69: ไม่ต้องตั้งรหัส ติ๊กที่ไหนก็เหมือนกันทุกที่) ----------
   เก็บชุดเดียวบน host ที่ api/ticks.php · เครื่องนี้เก็บสำเนาไว้ใน localStorage ด้วย (ใช้ได้แม้เน็ตหลุด)
   ส่ง/ดึงตอน: เปิดหน้า, ติ๊กหรือเอาติ๊กออก, กลับมาที่หน้านี้ (ไม่ถี่กว่า 15 วินาที), เน็ตกลับมา
   ส่งไม่สำเร็จ: เก็บรายการค้างไว้ (termtem-sync-pending) แล้วส่งใหม่รอบหน้า
   เครื่องที่ติ๊กไว้ก่อนมีระบบนี้: ครั้งแรกจะรวมติ๊กของเครื่องนั้นขึ้นไปด้วย (ไม่ลบติ๊กของเครื่องอื่น)
   หน้าเว็บฟังเหตุการณ์ 'todo-sync' (detail = 'ok' | 'offline') แล้ววาดช่องติ๊กใหม่ */
(function () {
  var API = 'api/ticks.php', PENDING = 'termtem-sync-pending', JOINED = 'termtem-sync-joined', BEST = 'termtem-quiz-best';
  var last = 0, busy = false, again = false;
  function getObj(k) { try { var v = JSON.parse(localStorage.getItem(k)); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; } catch (e) { return {}; } }
  function setObj(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function joined() { try { return localStorage.getItem(JOINED) === '1'; } catch (e) { return false; } }
  function notify(s) { window.todoSyncState = s; try { window.dispatchEvent(new CustomEvent('todo-sync', { detail: s })); } catch (e) {} }
  // คะแนนในเครื่องที่ดีกว่า/ยังไม่มีบน host (ส่งขึ้นไปรวม)
  function betterBest(server) {
    var mine = getObj(BEST), out = {}, n = 0;
    Object.keys(mine).forEach(function (k) {
      var m = mine[k], s = server ? server[k] : null;
      if (!m || typeof m.score !== 'number' || typeof m.total !== 'number') return;
      if (!s || m.pct > s.pct) { out[k] = { score: m.score, total: m.total }; n++; }
    });
    return n ? out : null;
  }
  window.todoSyncState = 'idle';
  window.todoSync = function (force) {
    if (!window.fetch) return;
    if (busy) { again = true; return; }
    var pending = getObj(PENDING), isNew = !joined(), hasPending = Object.keys(pending).length > 0;
    if (!force && !hasPending && !isNew && Date.now() - last < 15000) return;
    last = Date.now();
    busy = true;
    var body = null;
    if (isNew) {
      body = { todo: {}, best: betterBest(null) || {} };
      var local = window.todoLoad();
      Object.keys(local).forEach(function (k) { if (local[k]) body.todo[k] = 1; });
      Object.keys(pending).forEach(function (k) { body.todo[k] = pending[k]; });
    } else if (hasPending) {
      body = { todo: pending };
    }
    var req = body
      ? fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), cache: 'no-store' })
      : fetch(API, { cache: 'no-store' });
    req.then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (res) {
        if (!res || res.ok !== true || typeof res.todo !== 'object') throw new Error('bad reply');
        // รายการค้างที่ส่งไปแล้วเอาออก (ที่ติ๊กเพิ่มระหว่างรอคำตอบยังเก็บไว้ส่งรอบหน้า)
        var still = getObj(PENDING);
        if (body && body.todo) Object.keys(body.todo).forEach(function (k) { if (still[k] === body.todo[k]) delete still[k]; });
        setObj(PENDING, still);
        // ของบน host คือชุดหลัก + ทับด้วยรายการที่ยังค้างส่ง
        var st = {};
        Object.keys(res.todo).forEach(function (k) { if (res.todo[k]) st[k] = 1; });
        Object.keys(still).forEach(function (k) { if (still[k]) st[k] = 1; else delete st[k]; });
        window.todoSave(st);
        var mine = getObj(BEST), sb = res.best || {};
        Object.keys(sb).forEach(function (k) { if (!mine[k] || sb[k].pct >= mine[k].pct) mine[k] = sb[k]; });
        setObj(BEST, mine);
        try { localStorage.setItem(JOINED, '1'); } catch (e) {}
        notify('ok');
        var up = betterBest(sb);
        if (up) window.todoPushBest(up);
        if (Object.keys(still).length) again = true;
      })
      .catch(function () { notify('offline'); })
      .then(function () { busy = false; if (again) { again = false; setTimeout(function () { window.todoSync(true); }, 300); } });
  };
  // ติ๊ก/เอาติ๊กออกหลายรายการ {id: 1|0}: เก็บในเครื่องทันที แล้วส่งขึ้น host
  window.todoSetMany = function (changes) {
    var st = window.todoLoad(), pending = getObj(PENDING);
    Object.keys(changes).forEach(function (id) {
      if (changes[id]) st[id] = 1; else delete st[id];
      pending[id] = changes[id] ? 1 : 0;
    });
    window.todoSave(st);
    setObj(PENDING, pending);
    window.todoSync(true);
    return st;
  };
  window.todoSet = function (id, on) { var c = {}; c[id] = on ? 1 : 0; return window.todoSetMany(c); };
  // ส่งคะแนนดีที่สุดขึ้น host (quiz.js เรียกเองเมื่อทำข้อสอบได้คะแนนดีขึ้น)
  window.todoPushBest = function (best) {
    if (!window.fetch) return;
    try { fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ best: best }), cache: 'no-store' }).catch(function () {}); } catch (e) {}
  };
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') window.todoSync(false); });
  window.addEventListener('focus', function () { window.todoSync(false); });
  window.addEventListener('online', function () { window.todoSync(true); });
})();

/* ---------- ปุ่ม "เปิด →" = ป๊อปอัปเด้งขึ้นมาเต็มจอ 100% ทับเช็กลิสต์ (ผู้ใช้ขอ 13 พ.ย. 69) ----------
   หน้าเนื้อหา (quiz.html) แสดงในกรอบที่คลุมทั้งหน้า แล้วสั่งโหมดเต็มหน้าจอของเบราว์เซอร์ทันทีในจังหวะที่กด
   (iPhone ไม่มีโหมดเต็มหน้าจอสำหรับหน้าเว็บ หรือถ้าเบราว์เซอร์ไม่ยอม ก็ยังเป็นป๊อปอัปเต็มหน้าต่าง)
   ปิดได้ด้วยปุ่ม "✕ ปิด" (ซ้ายบน), ปุ่ม Esc หรือปุ่มย้อนกลับของมือถือ แล้วกลับมาที่เช็กลิสต์เดิมให้ติ๊กต่อ
   ออกจากเต็มจอเพราะจอดับ / สลับแอป / สลับแท็บ / กด Esc ครั้งแรก: ป๊อปอัปยังค้างเต็มหน้าต่าง (ข้อสอบที่ทำค้างไม่หาย)
   แล้วกดปุ่ม "⛶ เต็มจอ" เพื่อกลับเข้าเต็มจอได้ (ผลตรวจ 13 พ.ย. 69)
   ✕ อยู่ซ้าย เพราะถ้าดับเบิลคลิกตรงมุมขวาบน คลิกที่สองอาจโดนปุ่มปิดหน้าต่างเบราว์เซอร์ที่โผล่กลับมาหลังออกจากเต็มจอ
   ระหว่างเปิด หน้าเช็กลิสต์ด้านหลัง (.wrap) เป็น inert กด Tab แล้วไม่หลุดไปติ๊กข้างหลังโดยมองไม่เห็น
   คลิกกลาง / Ctrl+คลิก ยังเปิดเป็นแท็บใหม่ได้ตามปกติ */
(function () {
  var pop = null, label, body, fsBtn, from = null, after = null, full = false;
  function fsElement() { return document.fullscreenElement || document.webkitFullscreenElement || null; }
  function canFull() { return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled); }
  function enterFull() {
    var req = pop.requestFullscreen || pop.webkitRequestFullscreen;
    if (!req || fsElement()) return;
    try { var p = req.call(pop); if (p && p.catch) p.catch(function () {}); } catch (e) {}
  }
  function exitFull() {
    var ex = document.exitFullscreen || document.webkitExitFullscreen;
    if (!ex || !fsElement()) return;
    try { var p = ex.call(document); if (p && p.catch) p.catch(function () {}); } catch (e) {}
  }
  function backPage(on) { var w = document.querySelector('.wrap'); if (w) { if (on) w.removeAttribute('inert'); else w.setAttribute('inert', ''); } }
  function build() {
    var css = document.createElement('style');
    css.textContent = [
      // top/right/bottom/left แทน inset — iPhone/iPad รุ่น iOS 14.4 ลงไปไม่รู้จัก inset
      '#topicpop { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; display: flex; flex-direction: column; background: var(--bg, #f7f6fb); }',
      '#topicpop[hidden] { display: none !important; }',
      '#topicpop .tp-bar { flex: none; display: flex; align-items: center; gap: 10px; padding: 6px 10px; background: var(--card, #fff); border-bottom: 1px solid var(--line, #e4e1ee); }',
      '#topicpop .tp-bar b { flex: 1; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: .95rem; }',
      '#topicpop .tp-bar button { flex: none; font: inherit; font-size: .95rem; font-weight: 700; padding: 6px 16px; border-radius: 999px; border: 0; background: var(--accent, #6d3fd6); color: #fff; cursor: pointer; }',
      '#topicpop .tp-bar button.tp-fs { background: var(--accent-soft, #efe8ff); color: var(--accent, #6d3fd6); }',
      '#topicpop .tp-bar button[hidden] { display: none; }',
      '#topicpop .tp-body { flex: 1; min-height: 0; overflow: auto; -webkit-overflow-scrolling: touch; }',
      '#topicpop iframe { display: block; width: 100%; height: 100%; border: 0; }',
      'html.tp-open, html.tp-open body { overflow: hidden; }'
    ].join('\n');
    document.head.appendChild(css);
    pop = document.createElement('div');
    pop.id = 'topicpop';
    pop.hidden = true;
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-modal', 'true');
    var bar = document.createElement('div');
    bar.className = 'tp-bar';
    var x = document.createElement('button');
    x.type = 'button';
    x.className = 'tp-close';
    x.textContent = '✕ ปิด';
    x.addEventListener('click', function () { window.todoClose(); });
    label = document.createElement('b');
    fsBtn = document.createElement('button');
    fsBtn.type = 'button';
    fsBtn.className = 'tp-fs';
    fsBtn.textContent = '⛶ เต็มจอ';
    fsBtn.hidden = true;
    fsBtn.addEventListener('click', enterFull);
    bar.appendChild(x);
    bar.appendChild(label);
    bar.appendChild(fsBtn);
    body = document.createElement('div');
    body.className = 'tp-body';
    pop.appendChild(bar);
    pop.appendChild(body);
    document.body.appendChild(pop);
    function onFs() {
      if (fsElement() === pop) {
        if (pop.hidden) { exitFull(); return; }   // เต็มจอเข้ามาช้า หลังป๊อปอัปปิดไปแล้ว → ออกทันที ไม่ให้หน้าค้าง
        full = true;
      } else {
        full = false;                              // ออกจากเต็มจอด้วยเหตุใดก็ตาม: ป๊อปอัปยังอยู่ ปิดเองด้วย ✕ / Esc / ย้อนกลับ
      }
      fsBtn.hidden = full || !canFull();
    }
    document.addEventListener('fullscreenchange', onFs);
    document.addEventListener('webkitfullscreenchange', onFs);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') window.todoClose(); });
    window.addEventListener('popstate', function () { window.todoClose(true); });   // ปุ่มย้อนกลับ = ปิดป๊อปอัป ไม่ออกจากหน้าเช็กลิสต์
  }
  // href = หน้าเนื้อหา, text = ข้อความบนแถบด้านบน, link = ลิงก์ที่กด (คืนโฟกัสตอนปิด), done = ทำต่อหลังปิด
  window.todoOpen = function (href, text, link, done) {
    if (!pop) build();
    var wasOpen = !pop.hidden;
    from = link || null;
    after = done || null;
    label.textContent = text || '';
    body.textContent = '';
    var f = document.createElement('iframe');   // สร้างใหม่ทุกครั้ง จะได้ไม่เพิ่มประวัติการย้อนกลับ
    f.title = text || 'เนื้อหา';
    f.src = href;
    f.addEventListener('load', function () { try { f.contentWindow.focus(); } catch (e) {} });
    body.appendChild(f);
    pop.hidden = false;
    backPage(false);
    document.documentElement.classList.add('tp-open');
    fsBtn.hidden = !!fsElement() || !canFull();
    enterFull();   // โหมดเต็มหน้าจอต้องสั่งทันทีในจังหวะที่กด
    if (!wasOpen) { try { history.pushState({ topicpop: 1 }, ''); } catch (e) {} }
  };
  // viaHistory = ปิดเพราะกดย้อนกลับ (ประวัติถอยไปแล้ว ไม่ต้องถอยซ้ำ)
  window.todoClose = function (viaHistory) {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    body.textContent = '';                       // เอาหน้าเนื้อหาออก (หยุดภาพเคลื่อนไหว)
    document.documentElement.classList.remove('tp-open');
    backPage(true);
    full = false;
    exitFull();
    if (!viaHistory && history.state && history.state.topicpop) { try { history.back(); } catch (e) {} }
    if (from) { try { from.focus({ preventScroll: true }); } catch (e) {} from = null; }
    if (after) { var fn = after; after = null; fn(); }
  };
  // ผูกปุ่ม "เปิด" ของรายการ it ให้เด้งป๊อปอัปเต็มจอ
  window.todoLink = function (a, it, done) {
    a.addEventListener('click', function (e) {
      if (e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;   // คลิกกลาง / Ctrl+คลิก = แท็บใหม่ตามปกติ
      e.preventDefault();
      window.todoOpen(a.getAttribute('href'), window.TODO_SUBJECTS[window.todoTarget(it)[0]] + ' · ' + it[2], a, done);
    });
  };
})();
