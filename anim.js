/* ภาพเคลื่อนไหว / ของเล่นประกอบบทเรียน
   ในเนื้อหาใส่ <div class="anim" data-anim="ชื่อ"></div> แล้ว quiz.js จะเรียก ANIM.init() ให้ */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var INK = '#1f1b2e', ACC = '#6d3fd6', RED = '#c53030', MUTED = '#6b6780';

  function S(tag, attrs, parent, text) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function H(tag, cls, html, parent) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  }
  function btn(text, parent, fn, cls) {
    var b = H('button', cls || '', text, parent);
    b.type = 'button';
    b.onclick = fn;
    return b;
  }
  function frame(box, title, w, h) {
    box.innerHTML = '';
    H('div', 'atitle', title, box);
    var f = {};
    if (w) { f.svg = S('svg', { viewBox: '0 0 ' + w + ' ' + h, width: w, 'font-size': 12, fill: INK }); box.appendChild(f.svg); }
    else f.stage = H('div', 'astage', '', box);
    f.info = H('div', 'ainfo', '', box);
    f.bar = H('div', 'abar', '', box);
    return f;
  }
  function stepper(f, texts, render) {
    var s = 0;
    var prev = btn('← ย้อน', f.bar, function () { go(s - 1); });
    var next = btn('ขั้นต่อไป →', f.bar, function () { go(s + 1); }, 'pri');
    function go(n) {
      if (n >= texts.length) n = 0;
      s = Math.max(0, n);
      f.info.innerHTML = '<b>' + (s + 1) + '/' + texts.length + '</b> ' + texts[s];
      next.textContent = s === texts.length - 1 ? 'เริ่มใหม่ ↺' : 'ขั้นต่อไป →';
      prev.disabled = s === 0;
      render(s);
    }
    go(0);
  }
  function show(el, on) { el.style.opacity = on ? 1 : 0; }
  function fade(el, sec) { el.style.transition = 'opacity ' + (sec || 0.8) + 's, transform 1s, fill 1s'; return el; }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function drag(el, svg, cb) {
    el.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      try { el.setPointerCapture(e.pointerId); } catch (err) {}
      function mv(ev) {
        var pt = svg.createSVGPoint();
        pt.x = ev.clientX; pt.y = ev.clientY;
        var q = pt.matrixTransform(svg.getScreenCTM().inverse());
        cb(q.x, q.y);
      }
      function up() {
        el.removeEventListener('pointermove', mv);
        el.removeEventListener('pointerup', up);
        el.removeEventListener('pointercancel', up);
      }
      el.addEventListener('pointermove', mv);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
    });
  }

  var W = {};

  // ============================== คณิต: ลากจุดยอดสามเหลี่ยม ==============================
  W.triangle = function (box) {
    var f = frame(box, '🖐 ลากจุดสีม่วงเพื่อเปลี่ยนรูปสามเหลี่ยม', 320, 220);
    var P = [{ x: 60, y: 180 }, { x: 260, y: 180 }, { x: 150, y: 50 }];
    var poly = S('polygon', { fill: '#efe8ff', stroke: ACC, 'stroke-width': 2, 'stroke-linejoin': 'round' }, f.svg);
    var labels = P.map(function () { return S('text', { 'text-anchor': 'middle', 'font-weight': 700, 'font-size': 13, fill: RED }, f.svg); });
    var dots = P.map(function (p) {
      var c = S('circle', { r: 12, fill: ACC, stroke: '#fff', 'stroke-width': 3, style: 'cursor:grab;touch-action:none' }, f.svg);
      drag(c, f.svg, function (x, y) {
        p.x = Math.max(14, Math.min(306, x)); p.y = Math.max(14, Math.min(206, y)); draw();
      });
      return c;
    });
    function ang(a, b, c) {
      var ux = b.x - a.x, uy = b.y - a.y, vx = c.x - a.x, vy = c.y - a.y;
      var d = (ux * vx + uy * vy) / ((Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy)) || 1);
      return Math.acos(Math.max(-1, Math.min(1, d))) * 180 / Math.PI;
    }
    function draw() {
      poly.setAttribute('points', P.map(function (p) { return p.x + ',' + p.y; }).join(' '));
      var A = Math.round(ang(P[0], P[1], P[2])), B = Math.round(ang(P[1], P[0], P[2])), C = 180 - A - B;
      var a = [A, B, C], cx = (P[0].x + P[1].x + P[2].x) / 3, cy = (P[0].y + P[1].y + P[2].y) / 3;
      P.forEach(function (p, i) {
        dots[i].setAttribute('cx', p.x); dots[i].setAttribute('cy', p.y);
        var dx = cx - p.x, dy = cy - p.y, len = Math.sqrt(dx * dx + dy * dy) || 1;
        labels[i].setAttribute('x', p.x + dx / len * 34);
        labels[i].setAttribute('y', p.y + dy / len * 34 + 5);
        labels[i].textContent = a[i] + '°';
      });
      var mx = Math.max(A, B, C);
      var byAngle = mx === 90 ? 'มุมฉาก' : mx > 90 ? 'มุมป้าน' : 'มุมแหลม';
      var bySide = (A === B && B === C) ? 'ด้านเท่า' : (A === B || B === C || A === C) ? 'หน้าจั่ว' : 'ด้านไม่เท่า';
      f.info.innerHTML = A + '° + ' + B + '° + ' + C + '° = <b>180°</b><br>เป็นรูปสามเหลี่ยม<b>' + byAngle + '</b> และเป็นรูปสามเหลี่ยม<b>' + bySide + '</b>';
    }
    function preset(name, pts) {
      btn(name, f.bar, function () { pts.forEach(function (q, i) { P[i].x = q[0]; P[i].y = q[1]; }); draw(); });
    }
    preset('ด้านเท่า', [[70, 185], [250, 185], [160, 29.1]]);
    preset('หน้าจั่ว', [[90, 185], [230, 185], [160, 45]]);
    preset('มุมฉาก', [[70, 180], [250, 180], [70, 60]]);
    preset('มุมป้าน', [[110, 180], [270, 180], [40, 90]]);
    draw();
  };

  // ============================== คณิต: พื้นที่ ==============================
  W.area = function (box) {
    var f = frame(box, '🎚 เลื่อนแล้วดูว่าพื้นที่เปลี่ยนเมื่อไร', 320, 190);
    var BY = 165, X1 = 80, X2 = 240, U = 20;
    for (var gx = 0; gx <= 320; gx += U) S('path', { d: 'M' + gx + ' 25V' + BY, stroke: '#eeeaf6' }, f.svg);
    for (var gy = BY; gy >= 25; gy -= U) S('path', { d: 'M0 ' + gy + 'H320', stroke: '#eeeaf6' }, f.svg);
    var ext = S('path', { stroke: MUTED, 'stroke-dasharray': '4 3', fill: 'none' }, f.svg);
    var tri = S('polygon', { fill: '#dcebd3', stroke: '#2f855a', 'stroke-width': 2, 'stroke-linejoin': 'round' }, f.svg);
    var hl = S('path', { stroke: RED, 'stroke-width': 2, 'stroke-dasharray': '5 3', fill: 'none' }, f.svg);
    var ht = S('text', { fill: RED, 'font-weight': 700 }, f.svg);
    S('text', { x: 160, y: 182, 'text-anchor': 'middle', 'font-weight': 700 }, f.svg, 'ฐาน 8 หน่วย');
    var row1 = H('label', 'arow', 'ตำแหน่งจุดยอด ', f.bar), s1 = H('input', '', null, row1);
    s1.type = 'range'; s1.min = 20; s1.max = 300; s1.value = 180;
    var row2 = H('label', 'arow', 'ความสูง ', f.bar), s2 = H('input', '', null, row2);
    s2.type = 'range'; s2.min = 1; s2.max = 7; s2.value = 5;
    function draw() {
      var ax = +s1.value, h = +s2.value, ay = BY - h * U;
      tri.setAttribute('points', X1 + ',' + BY + ' ' + X2 + ',' + BY + ' ' + ax + ',' + ay);
      hl.setAttribute('d', 'M' + ax + ' ' + ay + 'V' + BY);
      ext.setAttribute('d', ax < X1 ? 'M' + ax + ' ' + BY + 'H' + X1 : ax > X2 ? 'M' + X2 + ' ' + BY + 'H' + ax : '');
      ht.setAttribute('x', ax + 6); ht.setAttribute('y', (ay + BY) / 2 + 4);
      ht.textContent = 'สูง ' + h;
      f.info.innerHTML = 'พื้นที่ = ½ × 8 × ' + h + ' = <b>' + (4 * h) + ' ตารางหน่วย</b><br><small>เลื่อนจุดยอดไปซ้าย–ขวา พื้นที่ไม่เปลี่ยน เพราะฐานและความสูงเท่าเดิม</small>';
    }
    s1.oninput = draw; s2.oninput = draw;
    draw();
  };

  // ============================== คณิต: ไม้ขีด ==============================
  W.match = function (box) {
    var f = frame(box, '➕ กดเพิ่มรูปสามเหลี่ยม แล้วนับไม้ขีด', 320, 110);
    var g = S('g', { 'stroke-width': 4, 'stroke-linecap': 'round' }, f.svg), n = 1;
    function pt(k) { return [22 + 30 * k, k % 2 ? 28 : 80]; }
    function stick(a, b, isNew) {
      var p = pt(a), q = pt(b);
      S('path', { d: 'M' + p[0] + ' ' + p[1] + 'L' + q[0] + ' ' + q[1], stroke: isNew ? RED : '#c2410c', 'class': isNew ? 'apop' : '' }, g);
    }
    function draw() {
      g.innerHTML = '';
      for (var i = 0; i < n; i++) {
        var isNew = i === n - 1 && n > 1;
        if (i === 0) stick(0, 1, false);
        stick(i + 1, i + 2, isNew);
        stick(i, i + 2, isNew);
      }
      f.info.innerHTML = '<b>' + n + '</b> รูป ใช้ไม้ขีด (2 × ' + n + ') + 1 = <b>' + (2 * n + 1) + ' ก้าน</b>' +
        (n > 1 ? '<br><small>สีแดงคือ 2 ก้านที่เพิ่มเข้ามา</small>' : '<br><small>รูปแรกใช้ 3 ก้าน</small>');
      minus.disabled = n === 1; plus.disabled = n === 8;
    }
    var minus = btn('− ลดรูป', f.bar, function () { n--; draw(); });
    var plus = btn('+ เพิ่มรูป', f.bar, function () { n++; draw(); }, 'pri');
    draw();
  };

  // ============================== คณิต: สร้างสามเหลี่ยมด้วยวงเวียน ==============================
  W.compass = function (box) {
    var f = frame(box, '📐 สร้างรูปสามเหลี่ยมที่มีด้านยาว 8, 6 และ 5 ซม.', 300, 190);
    var s = f.svg;
    function arc(d) {
      var p = S('path', { d: d, fill: 'none', stroke: RED, 'stroke-width': 2, pathLength: 1, 'stroke-dasharray': 1, 'stroke-dashoffset': 1 }, s);
      p.style.transition = 'stroke-dashoffset 1.2s';
      return p;
    }
    var base = fade(S('path', { d: 'M50 160L210 160', stroke: INK, 'stroke-width': 3 }, s));
    var r1 = fade(S('path', { d: 'M50 160L143.7 85.1', stroke: MUTED, 'stroke-dasharray': '4 3' }, s));
    var a1 = arc('M166.6 131.8A120 120 0 0 0 103.4 52.5');
    var r2 = fade(S('path', { d: 'M210 160L143.7 85.1', stroke: MUTED, 'stroke-dasharray': '4 3' }, s));
    var a2 = arc('M181.6 64.1A100 100 0 0 0 118.3 120.1');
    var sides = fade(S('path', { d: 'M50 160L143.7 85.1L210 160', fill: 'none', stroke: ACC, 'stroke-width': 3, 'stroke-linejoin': 'round' }, s));
    var cdot = fade(S('circle', { cx: 143.7, cy: 85.1, r: 4, fill: RED }, s));
    var t = { 'text-anchor': 'middle' };
    S('text', { x: 44, y: 177, 'text-anchor': 'middle' }, s, 'ก');
    S('text', { x: 216, y: 177, 'text-anchor': 'middle' }, s, 'ข');
    S('text', { x: 130, y: 177, 'text-anchor': 'middle' }, s, '8 ซม.');
    var l1 = fade(S('text', { x: 84, y: 116, 'text-anchor': 'middle', fill: MUTED }, s, '6 ซม.'));
    var l2 = fade(S('text', { x: 192, y: 116, 'text-anchor': 'middle', fill: MUTED }, s, '5 ซม.'));
    var lc = fade(S('text', { x: 144, y: 74, 'text-anchor': 'middle', 'font-weight': 700, fill: RED }, s, 'ค'));
    stepper(f, [
      'ลากส่วนของเส้นตรง กข ยาว 8 ซม. เป็นฐาน',
      'กางวงเวียน 6 ซม. ปักที่จุด ก แล้วเขียนส่วนโค้ง',
      'กางวงเวียน 5 ซม. ปักที่จุด ข เขียนส่วนโค้งให้ตัดกับเส้นแรก',
      'จุดตัดคือจุด ค — ลากเส้น กค และ ขค ได้รูปสามเหลี่ยม'
    ], function (n) {
      show(r1, n >= 1); show(l1, n >= 1); a1.style.strokeDashoffset = n >= 1 ? 0 : 1;
      show(r2, n >= 2); show(l2, n >= 2); a2.style.strokeDashoffset = n >= 2 ? 0 : 1;
      show(sides, n >= 3); show(cdot, n >= 3); show(lc, n >= 3);
    });
  };

  // ============================== วิทย์: วัฏจักรหิน ==============================
  W.rock = function (box) {
    var f = frame(box, '👆 กดปุ่มเพื่อดูว่าหินเปลี่ยนประเภทได้อย่างไร', 360, 262), s = f.svg;
    var ARROWS = [
      { p: [180, 210, 180, 58], name: 'เย็นตัว แข็งตัว', text: '<b>แมกมา → หินอัคนี</b> หินหนืดเย็นตัวลงแล้วแข็ง เช่น แกรนิต บะซอลต์' },
      { p: [232, 44, 292, 124], name: 'ผุพัง ทับถม', text: '<b>หินอัคนี → หินตะกอน</b> หินผุพัง ถูกน้ำและลมพัดพาไปทับถมเป็นชั้น แล้วอัดแน่นจนเป็นหิน' },
      { p: [240, 150, 122, 150], name: 'ร้อน + ความดัน', text: '<b>หินตะกอน → หินแปร</b> ถูกความร้อนและความดันสูงจนแปรสภาพ เช่น หินปูน → หินอ่อน' },
      { p: [128, 44, 72, 124], name: 'ร้อน + ความดัน (หินอัคนี)', text: '<b>หินอัคนี → หินแปร</b> หินอัคนีก็แปรสภาพได้ เช่น แกรนิต → หินไนส์' },
      { p: [82, 172, 140, 214], name: 'หลอมเหลว', text: '<b>หินแปร → แมกมา</b> หินจมลึกลงใต้ผิวโลก ร้อนจนหลอมเหลวกลับเป็นแมกมา' },
      { p: [286, 172, 222, 214], name: 'หลอมเหลว (หินตะกอน)', text: '<b>หินตะกอน → แมกมา</b> หินทุกประเภทหลอมเหลวได้ถ้าจมลึกพอ' }
    ];
    var defs = S('defs', {}, s);
    ['#b8b4c8', ACC].forEach(function (c, i) {
      var m = S('marker', { id: 'rk' + i, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto' }, defs);
      S('path', { d: 'M0 0L10 5L0 10z', fill: c }, m);
    });
    var lines = ARROWS.map(function (a) {
      return S('path', { d: 'M' + a.p[0] + ' ' + a.p[1] + 'L' + a.p[2] + ' ' + a.p[3], stroke: '#b8b4c8', 'stroke-width': 2, 'marker-end': 'url(#rk0)' }, s);
    });
    [[128, 14, '#fde2d4', '#c2410c', 'หินอัคนี'], [242, 128, '#fdf0c4', '#b7791f', 'หินตะกอน'], [14, 128, '#dbe7f5', '#3b6ea5', 'หินแปร'], [128, 212, '#fed7d7', RED, 'แมกมา']]
      .forEach(function (b) {
        S('rect', { x: b[0], y: b[1], width: 104, height: 40, rx: 10, fill: b[2], stroke: b[3], 'stroke-width': 2 }, s);
        S('text', { x: b[0] + 52, y: b[1] + 25, 'text-anchor': 'middle', 'font-weight': 700, 'font-size': 13 }, s, b[4]);
      });
    var ball = S('circle', { r: 7, fill: ACC, stroke: '#fff', 'stroke-width': 2, opacity: 0 }, s);
    var token = 0, buttons = [];
    function play(i, then) {
      var my = ++token, a = ARROWS[i].p, t0 = null, DUR = 1100, loops = 2;
      lines.forEach(function (l, j) {
        l.setAttribute('stroke', j === i ? ACC : '#b8b4c8');
        l.setAttribute('stroke-width', j === i ? 4 : 2);
        l.setAttribute('marker-end', 'url(#rk' + (j === i ? 1 : 0) + ')');
      });
      buttons.forEach(function (b, j) { b.classList.toggle('on', j === i); });
      f.info.innerHTML = ARROWS[i].text;
      ball.setAttribute('opacity', 1);
      function tick(ts) {
        if (my !== token) return;
        if (t0 === null) t0 = ts;
        var t = (ts - t0) / DUR, k = t - Math.floor(t);
        if (t >= loops) { ball.setAttribute('opacity', 0); if (then) then(); return; }
        ball.setAttribute('cx', a[0] + (a[2] - a[0]) * k);
        ball.setAttribute('cy', a[1] + (a[3] - a[1]) * k);
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    ARROWS.forEach(function (a, i) { buttons.push(btn(a.name, f.bar, function () { play(i); })); });
    btn('▶ เล่นครบรอบ', f.bar, function () {
      var order = [0, 1, 2, 4], k = 0;
      (function nextOne() { if (k < order.length) play(order[k++], nextOne); })();
    }, 'pri');
    f.info.innerHTML = 'กดชื่อกระบวนการด้านล่าง';
  };

  // ============================== วิทย์: ซากดึกดำบรรพ์ ==============================
  W.fossil = function (box) {
    var f = frame(box, '🦴 ซากดึกดำบรรพ์เกิดขึ้นได้อย่างไร', 320, 200), s = f.svg;
    var sky = fade(S('rect', { x: 0, y: 0, width: 320, height: 200, fill: '#fff7ed' }, s));
    var water = fade(S('rect', { x: 0, y: 0, width: 320, height: 150, fill: '#bfdbfe' }, s), 1.2);
    S('rect', { x: 0, y: 150, width: 320, height: 50, fill: '#c9a66b' }, s);
    var L = [['#dcc48e', 128], ['#cfae72', 106], ['#bf9a5a', 84]].map(function (c) {
      var r = fade(S('rect', { x: 0, y: c[1], width: 320, height: 22, fill: c[0], opacity: 0 }, s), 1);
      return r;
    });
    var fish = S('g', {}, s);
    fish.style.transition = 'transform 1.2s';
    var body = fade(S('ellipse', { cx: 0, cy: 0, rx: 24, ry: 10, fill: '#f59e0b', stroke: INK, 'stroke-width': 1.5 }, fish));
    var tail = fade(S('path', { d: 'M22 0L38 -10L38 10Z', fill: '#f59e0b', stroke: INK, 'stroke-width': 1.5 }, fish));
    var eye = fade(S('circle', { cx: -13, cy: -2, r: 2, fill: INK }, fish));
    var bones = fade(S('path', { d: 'M-6 -8V8M2 -9V9M10 -8V8M-18 0H24', stroke: INK, 'stroke-width': 1.2, fill: 'none', opacity: 0 }, fish));
    var pick = fade(S('text', { x: 205, y: 132, 'font-size': 26, opacity: 0 }, s, '⛏️'));
    var years = fade(S('text', { x: 160, y: 24, 'text-anchor': 'middle', 'font-weight': 700, fill: MUTED, opacity: 0 }, s, 'หลายล้านปีต่อมา…'));
    stepper(f, [
      'สัตว์อาศัยอยู่ในน้ำ',
      'เมื่อตาย ซากจมลงสู่ก้นน้ำ',
      'ตะกอนทับถมอย่างรวดเร็ว ส่วนที่อ่อนนุ่มสลายไป เหลือแต่ส่วนแข็ง (กระดูก)',
      'ตะกอนทับถมหนาขึ้นเป็นชั้น ๆ อัดแน่นเป็นหินตะกอน แร่ธาตุเข้าแทนที่จนซากกลายเป็นหิน',
      'ชั้นหินถูกยกตัวและกัดเซาะ ซากดึกดำบรรพ์จึงโผล่ให้เราพบ'
    ], function (n) {
      fish.style.transform = n === 0 ? 'translate(150px,70px)' : 'translate(150px,140px) rotate(' + (n >= 1 ? 180 : 0) + 'deg)';
      var col = n >= 3 ? '#78716c' : n >= 2 ? '#fafaf9' : '#f59e0b';
      body.setAttribute('fill', col); tail.setAttribute('fill', col);
      show(eye, n < 2); show(bones, n >= 2);
      show(L[0], n >= 2 && n < 4); show(L[1], n === 3); show(L[2], n === 3);
      show(water, n < 4); show(pick, n === 4); show(years, n === 4);
    });
  };

  // ============================== ไทย: สัมผัสกลอนสุภาพ ==============================
  W.klon = function (box) {
    var f = frame(box, '🎵 ดูสัมผัสของกลอนสุภาพทีละคู่');
    var LINES = [
      ['วรรคสดับ', ['เมื่อ', 'ทำ', 'การ', 'สิ่ง', 'ใด', 'ด้วย', 'ใจ', 'รัก']],
      ['วรรครับ', ['ถึง', 'งาน', 'หนัก', 'ก็', 'เบา', 'ลง', 'แล้ว', 'ครึ่ง', 'หนึ่ง']],
      ['วรรครอง', ['ด้วย', 'ใจ', 'รัก', 'เป็น', 'แรง', 'ที่', 'เร้า', 'รึง']],
      ['วรรคส่ง', ['ให้', 'มุ่ง', 'มั่น', 'ฝัน', 'ถึง', 'ซึ่ง', 'ปลาย', 'ทาง']]
    ];
    var spans = LINES.map(function (ln) {
      var row = H('div', 'krow', '<small>' + ln[0] + '</small>', f.stage);
      return ln[1].map(function (w) { return H('span', '', w, row); });
    });
    var STEPS = [
      { text: 'กลอนสุภาพ 1 บท มี 4 วรรค วรรคละ 7–9 คำ', on: [] },
      { text: 'คำสุดท้ายของ<b>วรรคสดับ</b> (รัก) สัมผัสกับคำที่ 3 ของ<b>วรรครับ</b> (หนัก)', on: [[0, 7], [1, 2]], c: 'k1' },
      { text: 'คำสุดท้ายของ<b>วรรครับ</b> (หนึ่ง) สัมผัสกับคำสุดท้ายของ<b>วรรครอง</b> (รึง)', on: [[1, 8], [2, 7]], c: 'k2' },
      { text: 'คำสุดท้ายของ<b>วรรครอง</b> (รึง) สัมผัสกับคำที่ 3 หรือ 5 ของ<b>วรรคส่ง</b> — บทนี้คือคำที่ 5 (ถึง)', on: [[2, 7], [3, 4]], c: 'k2' }
    ];
    stepper(f, STEPS.map(function (x) { return x.text; }), function (n) {
      spans.forEach(function (r) { r.forEach(function (sp) { sp.className = ''; }); });
      STEPS[n].on.forEach(function (p) { spans[p[0]][p[1]].className = 'khit ' + STEPS[n].c; });
    });
  };

  // ============================== English: Direct → Reported ==============================
  W.reported = function (box) {
    var f = frame(box, '🔄 เปลี่ยน Direct speech เป็น Reported speech ทีละขั้น');
    var EX = [
      { who: 'Tom', parts: [['I', 'he', 2], ['am', 'was', 3], ['tired'], ['today', 'that day', 4]] },
      { who: 'Mia', parts: [['I', 'she', 2], ['will', 'would', 3], ['call'], ['my', 'her', 2], ['mum'], ['tomorrow', 'the next day', 4]] },
      { who: 'The boys', parts: [['We', 'they', 2], ['can', 'could', 3], ['play'], ['here', 'there', 4], ['now', 'then', 4]] },
      { who: 'Anna', parts: [['I', 'she', 2], ['visited', 'had visited', 3], ['my', 'her', 2], ['grandma'], ['yesterday', 'the day before', 4]] }
    ];
    var ex = 0, cur = 0;
    var LABELS = ['ประโยคที่พูดจริง (Direct speech)', 'เอาเครื่องหมายคำพูดออก แล้วเติม that', 'เปลี่ยน<b>สรรพนาม</b>ให้ตรงกับคนพูด',
      '<b>ถอย tense</b> ไปหนึ่งขั้น', 'เปลี่ยน<b>คำบอกเวลา / สถานที่</b> — เสร็จแล้ว!'];
    function render(n) {
      cur = n;
      var e = EX[ex], html = '<span class="rw who">' + e.who + ' said' + (n === 0 ? ',' : '') + '</span>';
      if (n === 0) html += '<span class="rw">“</span>'; else html += '<span class="rw' + (n === 1 ? ' rnew' : '') + '">(that)</span>';
      e.parts.forEach(function (p, i) {
        var changed = p[1] && n >= p[2], w = changed ? p[1] : p[0];
        if (i === 0 && n === 0) w = w.charAt(0).toUpperCase() + w.slice(1);
        if (i === 0 && n > 0 && !changed && w === 'We') w = 'we';
        html += '<span class="rw' + (changed ? ' rchg k' + p[2] : '') + (changed && n === p[2] ? ' rnew' : '') + '">' + w + '</span>';
      });
      html += '<span class="rw">.' + (n === 0 ? '”' : '') + '</span>';
      f.stage.innerHTML = '<div class="rline">' + html + '</div>';
    }
    stepper(f, LABELS, render);
    btn('ตัวอย่างถัดไป', f.bar, function () { ex = (ex + 1) % EX.length; render(cur); });
  };

  // ============================== English: เกมเรียงคำคุณศัพท์ ==============================
  W.adjgame = function (box) {
    var f = frame(box, '🎮 แตะคำคุณศัพท์ตามลำดับที่ถูกต้อง');
    var ROUNDS = [
      ['bag', [['beautiful', 'opinion'], ['big', 'size'], ['red', 'colour']]],
      ['table', [['small', 'size'], ['round', 'shape'], ['wooden', 'material']]],
      ['car', [['lovely', 'opinion'], ['new', 'age'], ['Italian', 'origin']]],
      ['house', [['nice', 'opinion'], ['big', 'size'], ['old', 'age'], ['white', 'colour']]],
      ['scarf', [['long', 'size'], ['blue', 'colour'], ['Thai', 'origin'], ['silk', 'material']]]
    ];
    var r = 0, pos = 0;
    var phrase = H('div', 'gphrase', '', f.stage), pool = H('div', 'gpool', '', f.stage);
    var next = btn('ข้อต่อไป →', f.bar, function () { r = (r + 1) % ROUNDS.length; start(); }, 'pri');
    function drawPhrase() {
      var R = ROUNDS[r], html = '<span>a</span>';
      R[1].forEach(function (w, i) {
        html += i < pos ? '<b>' + w[0] + '<small>' + w[1] + '</small></b>' : '<i>___</i>';
      });
      phrase.innerHTML = html + '<span class="gn">' + R[0] + '</span>';
    }
    function start() {
      pos = 0; pool.innerHTML = ''; next.style.display = 'none';
      var R = ROUNDS[r];
      f.info.innerHTML = 'ข้อ ' + (r + 1) + '/' + ROUNDS.length + ' — คำไหนต้องมาก่อน?';
      shuffle(R[1]).forEach(function (w) {
        var b = btn(w[0], pool, function () {
          if (w === R[1][pos]) {
            pos++; b.style.visibility = 'hidden'; drawPhrase();
            if (pos === R[1].length) { f.info.innerHTML = '✅ ถูกต้อง! ' + R[1].map(function (x) { return x[1]; }).join(' → ') + ' → noun'; next.style.display = ''; }
            else f.info.innerHTML = '👍 ใช่ — <b>' + w[0] + '</b> เป็น ' + w[1] + ' คำต่อไปคือคำไหน?';
          } else {
            b.classList.remove('ashake'); void b.offsetWidth; b.classList.add('ashake');
            f.info.innerHTML = '❌ ยังไม่ใช่ — <b>' + w[0] + '</b> เป็น ' + w[1] + '<br><small>Opinion → Size → Age → Shape → Colour → Origin → Material</small>';
          }
        });
      });
      drawPhrase();
    }
    start();
  };

  // ============================== CSI: โครมาโทกราฟี ==============================
  W.chroma = function (box) {
    var f = frame(box, '🔍 ปากกาด้ามไหนเขียนโน้ต? เลือกปากกาแล้วดูผล', 340, 205), s = f.svg;
    var PENS = {
      A: [['#2563eb', 0.3], ['#dc2626', 0.6]],
      B: [['#2563eb', 0.3], ['#dc2626', 0.55], ['#eab308', 0.85]],
      C: [['#7c3aed', 0.45], ['#eab308', 0.85]]
    };
    var START = 158, TOP = 34, RUN = START - TOP;
    // แถบจากโน้ต (ผลสำเร็จแล้ว)
    S('text', { x: 62, y: 16, 'text-anchor': 'middle', 'font-weight': 700 }, s, 'หมึกจากโน้ต');
    S('rect', { x: 50, y: 24, width: 24, height: 150, fill: '#eff6ff', stroke: '#9a96ad' }, s);
    S('path', { d: 'M50 ' + START + 'h24', stroke: MUTED, 'stroke-width': 1.5 }, s);
    PENS.B.forEach(function (d) { S('ellipse', { cx: 62, cy: START - d[1] * RUN, rx: 7, ry: 5, fill: d[0] }, s); });
    // แถบทดสอบ
    var title = S('text', { x: 232, y: 16, 'text-anchor': 'middle', 'font-weight': 700 }, s, 'ปากกาที่ทดสอบ');
    S('rect', { x: 190, y: 66, width: 84, height: 122, rx: 6, fill: 'none', stroke: MUTED, 'stroke-width': 2 }, s);
    S('rect', { x: 192, y: 168, width: 80, height: 18, fill: '#bfdbfe' }, s);
    S('rect', { x: 220, y: 24, width: 24, height: 160, fill: '#fff', stroke: '#9a96ad' }, s);
    var wet = S('rect', { x: 221, y: 168, width: 22, height: 16, fill: '#dbeafe' }, s);
    S('path', { d: 'M220 ' + START + 'h24', stroke: MUTED, 'stroke-width': 1.5 }, s);
    S('text', { x: 286, y: 162, 'font-size': 11, fill: MUTED }, s, 'เส้นดินสอ');
    S('text', { x: 286, y: 182, 'font-size': 11, fill: MUTED }, s, 'น้ำ');
    var spots = S('g', {}, s), token = 0, buttons = {};
    function run(name) {
      var my = ++token, pen = PENS[name], t0 = null, DUR = 4000;
      spots.innerHTML = '';
      title.textContent = 'ปากกา ' + name;
      Object.keys(buttons).forEach(function (k) { buttons[k].classList.toggle('on', k === name); });
      var origin = S('circle', { cx: 232, cy: START, r: 5, fill: '#111' }, spots);
      var els = pen.map(function (d) { return S('ellipse', { cx: 232, cy: START, rx: 7, ry: 5, fill: d[0], opacity: 0 }, spots); });
      f.info.innerHTML = 'น้ำกำลังซึมขึ้นกระดาษและพาสีขึ้นไปด้วย…';
      function tick(ts) {
        if (my !== token) return;
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / DUR);
        var front = 168 - (168 - 28) * p;
        wet.setAttribute('y', front); wet.setAttribute('height', 184 - front);
        origin.setAttribute('opacity', 1 - p * 0.85);
        els.forEach(function (e, i) {
          e.setAttribute('cy', START - pen[i][1] * RUN * p);
          e.setAttribute('opacity', Math.min(1, p * 4));
        });
        if (p < 1) requestAnimationFrame(tick);
        else f.info.innerHTML = name === 'B'
          ? '✅ <b>ลายสีตรงกับโน้ต</b> (น้ำเงิน แดง เหลือง ที่ระดับเดียวกัน) — ปากกา B คือด้ามที่ใช้เขียน'
          : '❌ ลายสีไม่ตรงกับโน้ต — ตัดปากกา ' + name + ' ออกได้ ลองด้ามอื่น';
      }
      requestAnimationFrame(tick);
    }
    ['A', 'B', 'C'].forEach(function (k) { buttons[k] = btn('ทดสอบปากกา ' + k, f.bar, function () { run(k); }); });
    f.info.innerHTML = 'แถบซ้ายคือผลจากหมึกบนโน้ตของคนร้าย กดเลือกปากกาของผู้ต้องสงสัยเพื่อเปรียบเทียบ';
  };

  // ============================== CSI: ทดสอบหมู่เลือด ==============================
  W.blood = function (box) {
    var f = frame(box, '🩸 ห้องแล็บ: หยดเซรุ่มแล้วหาว่าเลือดตัวอย่างเป็นหมู่อะไร', 320, 170), s = f.svg;
    var TYPES = { A: [1, 0], B: [0, 1], AB: [1, 1], O: [0, 0] }, type, done, round = 0;
    var wells = [100, 220].map(function (cx, i) {
      S('text', { x: cx, y: 18, 'text-anchor': 'middle', 'font-weight': 700 }, s, i ? 'anti-B' : 'anti-A');
      var c = S('circle', { cx: cx, cy: 100, r: 36, fill: '#f87171', stroke: '#9a96ad', 'stroke-width': 2 }, s);
      c.style.transition = 'fill .8s';
      var g = fade(S('g', { opacity: 0 }, s));
      [[-16, -12], [10, -18], [18, 6], [-6, 8], [-20, 14], [6, 22], [0, -4], [22, -8], [-10, -24]].forEach(function (d) {
        S('circle', { cx: cx + d[0], cy: 100 + d[1], r: 5, fill: '#991b1b' }, g);
      });
      var label = S('text', { x: cx, y: 158, 'text-anchor': 'middle', fill: MUTED }, s, '');
      return { cx: cx, c: c, g: g, label: label };
    });
    var dropBar = H('div', 'abar', '', null), ansBar = H('div', 'abar', '', null);
    box.insertBefore(dropBar, f.bar); box.insertBefore(ansBar, f.bar);
    function drop(i) {
      if (done[i]) return;
      done[i] = true;
      var my = round;
      var w = wells[i], d = S('circle', { cx: w.cx, cy: 30, r: 6, fill: i ? '#facc15' : '#60a5fa' }, s);
      d.style.transition = 'transform .6s ease-in';
      requestAnimationFrame(function () { requestAnimationFrame(function () { d.style.transform = 'translateY(50px)'; }); });
      setTimeout(function () {
        if (d.parentNode) s.removeChild(d);
        if (my !== round) return;
        var clump = TYPES[type][i];
        if (clump) { w.c.setAttribute('fill', '#fee2e2'); show(w.g, true); }
        w.label.textContent = clump ? 'จับกลุ่ม (clumps)' : 'ไม่จับกลุ่ม';
        if (done[0] && done[1]) { f.info.innerHTML = 'เลือดตัวอย่างนี้เป็นหมู่อะไร?'; ansBar.style.display = ''; }
      }, 700);
    }
    btn('💧 หยด anti-A', dropBar, function () { drop(0); });
    btn('💧 หยด anti-B', dropBar, function () { drop(1); });
    Object.keys(TYPES).forEach(function (k) {
      btn(k, ansBar, function () {
        var t = TYPES[type];
        var why = (t[0] ? 'จับกลุ่มกับ anti-A = มีแอนติเจน A' : 'ไม่จับกลุ่มกับ anti-A = ไม่มีแอนติเจน A') + ' · ' +
          (t[1] ? 'จับกลุ่มกับ anti-B = มีแอนติเจน B' : 'ไม่จับกลุ่มกับ anti-B = ไม่มีแอนติเจน B');
        f.info.innerHTML = (k === type ? '✅ ถูกต้อง! หมู่ <b>' + type + '</b>' : '❌ ยังไม่ใช่ — คำตอบคือหมู่ <b>' + type + '</b>') + '<br><small>' + why + '</small>';
        ansBar.style.display = 'none';
      });
    });
    function reset() {
      var keys = Object.keys(TYPES), prev = type;
      do { type = keys[Math.floor(Math.random() * keys.length)]; } while (type === prev);
      done = [false, false]; round++;
      wells.forEach(function (w) { w.c.setAttribute('fill', '#f87171'); show(w.g, false); w.label.textContent = ''; });
      ansBar.style.display = 'none';
      f.info.innerHTML = 'กดหยดเซรุ่มลงบนเลือดทั้งสองหลุม แล้วสังเกตว่าจับกลุ่มหรือไม่';
    }
    btn('🔁 ตัวอย่างใหม่', f.bar, reset, 'pri');
    reset();
  };

  // ============================== ไทย: ฝึกท่องบทอาขยานแบบซ่อนวรรค ==============================
  // บทกลอนมีลิขสิทธิ์ จึงไม่ใส่ตัวบทไว้ในเว็บ — ผู้ปกครองพิมพ์จากหนังสือครั้งเดียว ข้อความเก็บใน localStorage ของเครื่องนั้นเท่านั้น
  // <div class="anim" data-anim="memo" data-key="ชื่อ"></div>
  W.memo = function (box) {
    var KEY = 'termtem-memo-' + (box.getAttribute('data-key') || 'poem');
    var f = frame(box, '🧠 ฝึกท่องแบบซ่อนวรรค');
    var text = '', mode = 'show';
    try { text = localStorage.getItem(KEY) || ''; } catch (e) { text = ''; }
    var list = H('div', 'memo-lines', '', null);
    box.insertBefore(list, f.info);
    function el(tag, cls, txt, parent) { var e = H(tag, cls, null, parent); if (txt != null) e.textContent = txt; return e; }
    // บทคั่นด้วยบรรทัดว่าง ถ้าไม่เว้นบรรทัดเลย ตัดบทละ 4 วรรค · บรรทัดที่มี 2 วรรคคั่นด้วยช่องว่างยาว/แท็บ แยกเป็น 2 วรรค
    function parse(t) {
      var raw = t.replace(/\r/g, '').split('\n').map(function (s) { return s.trim(); });
      var blanks = raw.some(function (s, i) { return !s && i > 0 && i < raw.length - 1; });
      var out = [], cur = [];
      raw.forEach(function (s) {
        if (!s) { if (cur.length) { out.push(cur); cur = []; } return; }
        s.split(/\s{2,}|\t|　/).forEach(function (v) { v = v.trim(); if (v) cur.push(v); });
        if (!blanks && cur.length >= 4) { out.push(cur); cur = []; }
      });
      if (cur.length) out.push(cur);
      return out;
    }
    function firstWord(v) {
      try {
        if (window.Intl && Intl.Segmenter) {
          var it = new Intl.Segmenter('th', { granularity: 'word' }).segment(v)[Symbol.iterator]().next();
          if (!it.done && it.value.segment.trim()) return it.value.segment;
        }
      } catch (e) {}
      return v.slice(0, 3);
    }
    function save(t) { text = t; try { if (t) localStorage.setItem(KEY, t); else localStorage.removeItem(KEY); } catch (e) {} }
    function editor() {
      list.innerHTML = '';
      f.bar.innerHTML = '';
      f.info.innerHTML = 'พิมพ์บทอาขยานจากหนังสือ <b>1 วรรคต่อ 1 บรรทัด</b> และเว้นบรรทัดว่างระหว่างบท<br><small>ข้อความเก็บไว้ในเครื่องนี้เท่านั้น ไม่ถูกส่งขึ้นเว็บ</small>';
      var ta = el('textarea', 'memo-text', null, list);
      ta.value = text;
      ta.setAttribute('aria-label', 'บทอาขยาน');
      btn('💾 บันทึกแล้วเริ่มฝึก', f.bar, function () { save(ta.value.trim()); if (text) practice('show'); else editor(); }, 'pri');
      if (text) btn('ยกเลิก', f.bar, function () { practice(mode); });
    }
    function practice(m) {
      mode = m;
      var st = parse(text), n = 0;
      list.innerHTML = '';
      st.forEach(function (stanza, si) {
        var d = el('div', 'st', null, list);
        el('small', null, 'บทที่ ' + (si + 1), d);
        stanza.forEach(function (v, vi) {
          n++;
          var hide = m === 'all' || (m === 'half' && vi % 2 === 1);
          if (!hide) { el('span', 'v', v, d); return; }
          var cover = m === 'all' ? firstWord(v) + ' …' : '… แตะเพื่อดูวรรคนี้ …';
          var b = el('button', 'hid', cover, d);
          b.type = 'button';
          b.onclick = function () { var open = b.classList.toggle('open'); b.textContent = open ? v : cover; };
        });
      });
      f.info.innerHTML = m === 'show' ? 'อ่านออกเสียงทีละวรรค <b>' + st.length + ' บท ' + n + ' วรรค</b> แล้วลองโหมดซ่อน'
        : m === 'half' ? 'ซ่อนวรรคเว้นวรรค — ท่องวรรคที่ซ่อนก่อน แล้วแตะดูว่าถูกไหม'
        : 'ซ่อนทุกวรรค เหลือแค่คำแรก — ท่องให้ได้ทั้งบท แล้วแตะดูทีละวรรค';
      f.bar.innerHTML = '';
      [['show', '📖 อ่านทั้งบท'], ['half', '🙈 ซ่อนวรรคเว้นวรรค'], ['all', '🧠 ซ่อนทุกวรรค']].forEach(function (x) {
        btn(x[1], f.bar, function () { practice(x[0]); }, x[0] === m ? 'on' : '');
      });
      btn('✏️ แก้ข้อความ', f.bar, editor);
    }
    if (text) practice('show'); else editor();
  };

  window.ANIM = {
    init: function (root) {
      Array.prototype.forEach.call(root.querySelectorAll('.anim[data-anim]'), function (el) {
        var fn = W[el.getAttribute('data-anim')];
        if (!fn || el._ready) return;
        el._ready = true;
        try { fn(el); } catch (e) { el.style.display = 'none'; if (window.console) console.error('anim', el.getAttribute('data-anim'), e); }
      });
    }
  };
})();
