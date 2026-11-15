<?php
// เช็กลิสต์ termTem — เก็บการติ๊กและคะแนนข้อสอบดีที่สุด "ชุดเดียว" ใช้ร่วมกันทุกเครื่อง
// (ผู้ใช้ขอ 13 พ.ย. 69: ไม่ต้องตั้งรหัส ติ๊กที่เครื่องไหนก็เหมือนกันทุกที่)
//
// GET  → {"ok":true,"todo":{"csi:0":1,...},"best":{"csi:0":{"pct":80,"score":8,"total":10},...},"rev":12}
// POST (JSON) {"todo":{"csi:0":1,"math:2":0}, "best":{"csi:0":{"score":8,"total":10}}}
//      todo: 1 = ติ๊ก, 0 = เอาติ๊กออก ทีละรายการ (ไม่ทับรายการอื่นของเครื่องอื่น)
//      best: เก็บคะแนนที่ได้เปอร์เซ็นต์สูงกว่า (คำนวณเปอร์เซ็นต์ที่นี่ ไม่เชื่อค่าที่ส่งมา)
// ข้อมูลอยู่ที่ ../data/ticks.php บรรทัดแรกเป็นคำสั่ง exit ของ PHP (ดู TT_HEAD) จึงเปิดอ่านทางเว็บไม่ได้
// (ห้ามพิมพ์เครื่องหมายปิดแท็ก PHP ในคอมเมนต์ // เพราะจะจบโหมด PHP กลางบรรทัด)
// (deploy.py ไม่อัปโหลดโฟลเดอร์ data — ไฟล์นี้สร้างโฟลเดอร์และไฟล์เองบน host)
// เขียนให้รันได้ตั้งแต่ PHP 7.0

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

const TT_SUBJECTS = 'thai|math|social|science|english|history|chinese|csi';
const TT_MAX_BODY = 32768;
const TT_MAX_TODO = 300;
const TT_MAX_BEST = 400;
const TT_HEAD = "<?php exit; ?>\n";

function tt_out($code, $data)
{
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function tt_dir()
{
    return __DIR__ . '/../data';
}

function tt_file()
{
    return tt_dir() . '/ticks.php';
}

function tt_empty()
{
    return array('todo' => array(), 'best' => array(), 'rev' => 0);
}

function tt_read()
{
    $raw = @file_get_contents(tt_file());
    if ($raw === false || strpos($raw, TT_HEAD) !== 0) {
        return tt_empty();
    }
    $d = json_decode(substr($raw, strlen(TT_HEAD)), true);
    if (!is_array($d)) {
        return tt_empty();
    }
    return array(
        'todo' => isset($d['todo']) && is_array($d['todo']) ? $d['todo'] : array(),
        'best' => isset($d['best']) && is_array($d['best']) ? $d['best'] : array(),
        'rev' => isset($d['rev']) ? (int) $d['rev'] : 0,
    );
}

function tt_public($d)
{
    // (object) ให้ได้ {} แทน [] เมื่อยังไม่มีข้อมูล
    return array('ok' => true, 'todo' => (object) $d['todo'], 'best' => (object) $d['best'], 'rev' => $d['rev']);
}

function tt_valid_todo_id($k)
{
    return is_string($k) && (preg_match('/^(' . TT_SUBJECTS . '):\d{1,2}$/', $k) || preg_match('/^book:[a-z0-9-]{1,20}$/', $k));
}

function tt_valid_best_key($k)
{
    return is_string($k) && preg_match('/^(' . TT_SUBJECTS . ')(:\d{1,2})?(:retry)?$/', $k);
}

function tt_clean_best($v)
{
    if (!is_array($v) || !isset($v['score'], $v['total']) || !is_int($v['score']) || !is_int($v['total'])) {
        return null;
    }
    $score = $v['score'];
    $total = $v['total'];
    if ($total < 1 || $total > 300 || $score < 0 || $score > $total) {
        return null;
    }
    return array('pct' => (int) round($score * 100 / $total), 'score' => $score, 'total' => $total);
}

// เตรียมโฟลเดอร์ data (ครั้งแรกบน host) พร้อมกันไม่ให้เปิดดูรายชื่อไฟล์ / อ่านไฟล์ทางเว็บ
function tt_prepare_dir()
{
    $dir = tt_dir();
    if (!is_dir($dir) && !@mkdir($dir, 0755, true) && !is_dir($dir)) {
        return false;
    }
    if (!is_file($dir . '/index.html')) {
        @file_put_contents($dir . '/index.html', '');
    }
    if (!is_file($dir . '/.htaccess')) {
        @file_put_contents($dir . '/.htaccess', "<IfModule mod_authz_core.c>\nRequire all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\nOrder allow,deny\nDeny from all\n</IfModule>\n");
    }
    return true;
}

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';

if ($method === 'GET') {
    tt_out(200, tt_public(tt_read()));
}
if ($method !== 'POST') {
    header('Allow: GET, POST');
    tt_out(405, array('ok' => false, 'error' => 'method'));
}

$body = file_get_contents('php://input', false, null, 0, TT_MAX_BODY + 1);
if ($body === false || strlen($body) > TT_MAX_BODY) {
    tt_out(413, array('ok' => false, 'error' => 'too large'));
}
$in = json_decode($body, true);
if (!is_array($in)) {
    tt_out(400, array('ok' => false, 'error' => 'bad json'));
}
if (!tt_prepare_dir()) {
    tt_out(500, array('ok' => false, 'error' => 'storage'));
}
$lock = @fopen(tt_dir() . '/ticks.lock', 'c');
if (!$lock || !flock($lock, LOCK_EX)) {
    tt_out(503, array('ok' => false, 'error' => 'busy'));
}

$d = tt_read();
$changed = false;
if (isset($in['todo']) && is_array($in['todo'])) {
    foreach ($in['todo'] as $k => $v) {
        if (!tt_valid_todo_id($k)) {
            continue;
        }
        if ($v === 1 || $v === true) {
            if (empty($d['todo'][$k])) {
                $d['todo'][$k] = 1;
                $changed = true;
            }
        } elseif ($v === 0 || $v === false) {
            if (isset($d['todo'][$k])) {
                unset($d['todo'][$k]);
                $changed = true;
            }
        }
    }
}
if (isset($in['best']) && is_array($in['best'])) {
    foreach ($in['best'] as $k => $v) {
        if (!tt_valid_best_key($k)) {
            continue;
        }
        $b = tt_clean_best($v);
        if ($b === null) {
            continue;
        }
        $old = isset($d['best'][$k]) && is_array($d['best'][$k]) ? $d['best'][$k] : null;
        if ($old === null || $b['pct'] > (int) $old['pct'] || ($b['pct'] === (int) $old['pct'] && $b != $old)) {
            $d['best'][$k] = $b;
            $changed = true;
        }
    }
}
if (count($d['todo']) > TT_MAX_TODO || count($d['best']) > TT_MAX_BEST) {
    flock($lock, LOCK_UN);
    fclose($lock);
    tt_out(413, array('ok' => false, 'error' => 'too many'));
}
if ($changed) {
    $d['rev']++;
    $json = json_encode(array('todo' => (object) $d['todo'], 'best' => (object) $d['best'], 'rev' => $d['rev'], 'at' => time()), JSON_UNESCAPED_UNICODE);
    $tmp = tt_dir() . '/ticks.tmp.php';
    $ok = $json !== false && @file_put_contents($tmp, TT_HEAD . $json) !== false && @rename($tmp, tt_file());
    if (!$ok) {
        flock($lock, LOCK_UN);
        fclose($lock);
        tt_out(500, array('ok' => false, 'error' => 'write'));
    }
}
flock($lock, LOCK_UN);
fclose($lock);
tt_out(200, tt_public($d));
