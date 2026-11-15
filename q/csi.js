window.SUBJECT = {
  title: 'CSI',
  subtitle: 'สอบนอกตาราง · ในคาบเรียนตามที่ครูนัด',
  note: 'แนวข้อสอบระบุเพียงชื่อ 3 หัวข้อ หน้านี้จึงสรุป<b>หลักวิทยาศาสตร์ทั่วไป</b>ของแต่ละเรื่อง — รายละเอียดการทดลองและคำศัพท์ที่ครูใช้ในห้อง ให้ทบทวนจากใบงานและสมุดของลูกประกอบ',
  sections: [
    {
      title: '1. Chromatography Lab',
      html: `
<p><b>Chromatography</b> (โครมาโทกราฟี) is a way to <b>separate a mixture</b> into its different parts — วิธีแยกสารผสมออกเป็นส่วน ๆ เช่น แยกสีในหมึกปากกา</p>
<h4>Paper chromatography — ทำอย่างไร</h4>
<ol>
<li>Draw a <b>pencil line</b> near the bottom of the filter paper. (ใช้ดินสอ เพราะ<b>ไส้ดินสอไม่ละลายน้ำ</b> เส้นจึงไม่เลอะ)</li>
<li>Put a small <b>dot of ink</b> on the line.</li>
<li>Dip the bottom of the paper in the <b>solvent</b> (e.g. water) — the ink dot must stay <b>above</b> the solvent level. (ถ้าจุดหมึกจมน้ำ หมึกจะละลายลงไปในน้ำ)</li>
<li>The solvent <b>moves up</b> the paper and carries the colours with it.</li>
<li>Different colours travel <b>different distances</b> → they separate.</li>
</ol>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning</th></tr>
<tr><td><b>mixture</b></td><td>สารผสม — two or more substances mixed together</td></tr>
<tr><td><b>solvent</b></td><td>ตัวทำละลาย — the liquid that dissolves the ink (water, alcohol)</td></tr>
<tr><td><b>soluble</b> / <b>dissolve</b></td><td>ละลายได้ / ละลาย</td></tr>
<tr><td><b>pigment</b> / <b>dye</b></td><td>สารสี</td></tr>
<tr><td><b>chromatogram</b></td><td>แผ่นกระดาษที่แสดงผลการแยกสี</td></tr>
</table></div>
<div class="anim" data-anim="chroma"></div>
<div class="key"><b>Why do the colours separate?</b> A colour that is <b>more soluble</b> in the solvent travels <b>further</b> up the paper. A colour that sticks more strongly to the paper travels a <b>shorter</b> distance.</div>
<h4>CSI — ใช้ในงานสืบสวน</h4>
<p>Each brand of pen has its own mix of dyes, so it makes its own pattern. Detectives compare the pattern from a <b>ransom note</b> with the patterns from <b>suspects’ pens</b> — the one that <b>matches</b> is the pen that was used.</p>`,
      quiz: [
        { q: 'What is chromatography used for?', c: ['Separating the parts of a mixture', 'Measuring temperature', 'Making new colours', 'Testing blood type'], why: 'Chromatography แยกสารผสมออกเป็นส่วน ๆ' },
        { q: 'Why do we draw the start line with a pencil, not a pen?', c: ['Pencil does not dissolve in the solvent', 'Pencil is easier to see', 'Pencil is cheaper', 'Pencil makes the colours brighter'], why: 'ไส้ดินสอ (graphite) ไม่ละลายน้ำ เส้นจึงไม่เคลื่อนไปกับตัวทำละลาย' },
        { q: 'In paper chromatography, the liquid that moves up the paper is called the ______.', c: ['solvent', 'pigment', 'mixture', 'chromatogram'], why: 'solvent = ตัวทำละลาย' },
        { q: 'Why must the ink dot be ABOVE the level of the solvent?', c: ['So the ink does not wash off into the solvent', 'So the paper stays dry', 'So the ink dries faster', 'So the colours mix together'], why: 'ถ้าจุดหมึกจม หมึกจะละลายลงไปในตัวทำละลายแทนที่จะเคลื่อนขึ้นกระดาษ' },
        { q: 'Which colour travels the furthest up the paper?', c: ['The one that is most soluble in the solvent', 'The darkest colour', 'The one that is least soluble', 'All colours travel the same distance'], why: 'สีที่ละลายในตัวทำละลายได้ดีที่สุดจะเคลื่อนที่ไปได้ไกลที่สุด' },
        { q: 'Black ink separates into blue, red and yellow. What does this show?', c: ['Black ink is a mixture of several dyes', 'Black ink is a pure substance', 'The paper changed the colour', 'The water was dirty'], why: 'หมึกสีดำเป็นสารผสมของสารสีหลายชนิด' },
        { q: 'How can a detective use chromatography to find which pen wrote a note?', c: ['Compare the colour pattern of the note’s ink with each suspect’s pen', 'Measure how heavy each pen is', 'Smell the ink of each pen', 'Check which pen is the newest'], why: 'ปากกาแต่ละยี่ห้อให้รูปแบบการแยกสีต่างกัน รูปแบบที่ตรงกันคือปากกาที่ใช้' },
        { q: 'A dot of ink does not move at all when water is used. What is the best explanation?', c: ['The ink is not soluble in water', 'The paper is too long', 'The ink is a mixture', 'The water is too cold'], why: 'หมึกที่ไม่ละลายน้ำ (เช่น หมึกถาวร) ต้องใช้ตัวทำละลายอื่น เช่น แอลกอฮอล์' }
      ]
    },
    {
      title: '2. Thermal Insulators',
      html: `
<p><b>Heat</b> always moves from a <b>hotter</b> place to a <b>cooler</b> place — ความร้อนถ่ายโอนจากที่อุณหภูมิสูงไปที่อุณหภูมิต่ำเสมอ</p>
<div class="tw"><table>
<tr><th></th><th>Thermal conductor ตัวนำความร้อน</th><th>Thermal insulator ฉนวนความร้อน</th></tr>
<tr><td><b>Meaning</b></td><td>lets heat pass through <b>easily</b></td><td>does <b>not</b> let heat pass through easily — <b>slows down</b> heat transfer</td></tr>
<tr><td><b>Examples</b></td><td>metals: copper, aluminium, iron, steel</td><td>plastic, wood, rubber, foam (polystyrene), wool, cotton, paper, <b>air</b></td></tr>
<tr><td><b>Used for</b></td><td>pots, pans, radiators</td><td>pot handles, cooler boxes, jackets, thermos flasks, house walls</td></tr>
</table></div>
<figure class="fig"><svg viewBox="0 0 340 160" width="340" role="img" font-size="12" fill="#1f1b2e"><defs><marker id="arH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#dc2626"/></marker></defs><g stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#arH)"><path d="M52 70L22 50"/><path d="M52 100L18 100"/><path d="M108 70L138 50"/><path d="M108 100L142 100"/><path d="M80 44L80 16"/><path d="M260 44L260 26"/></g><rect x="54" y="48" width="52" height="76" rx="4" fill="#fecaca" stroke="#6b6780" stroke-width="2"/><rect x="218" y="40" width="84" height="92" rx="10" fill="#e5e7eb" stroke="#6b6780" stroke-width="2" stroke-dasharray="3 3"/><rect x="234" y="48" width="52" height="76" rx="4" fill="#f87171" stroke="#6b6780" stroke-width="2"/><g text-anchor="middle"><text x="80" y="92" font-weight="700">45°C</text><text x="260" y="92" font-weight="700" fill="#fff">68°C</text><text x="80" y="146">No cover</text><text x="260" y="150">Wrapped in bubble wrap</text></g></svg><figcaption>ลูกศรแดง = ความร้อนที่หนีออก — แก้วที่มีฉนวนหุ้มเสียความร้อนน้อยกว่า น้ำจึงยังร้อนอยู่</figcaption></figure>
<div class="key"><b>Trapped air is a very good insulator.</b> Materials like wool, foam, feathers and bubble wrap work well because they hold lots of tiny pockets of air.</div>
<p>An insulator works <b>both ways</b>: it keeps hot things <b>hot</b> (stops heat getting out) and cold things <b>cold</b> (stops heat getting in). A jacket does not make heat — it keeps your body heat from escaping.</p>
<h4>A fair test — การทดลองที่ยุติธรรม</h4>
<div class="tw"><table>
<tr><td><b>Change</b> (independent variable)</td><td>the <b>material</b> wrapped around the cup</td></tr>
<tr><td><b>Measure</b> (dependent variable)</td><td>the <b>temperature</b> of the water after a set time</td></tr>
<tr><td><b>Keep the same</b> (controlled variables)</td><td>amount of water, starting temperature, type and size of cup, time, thickness of material</td></tr>
</table></div>
<p>The <b>best insulator</b> is the one where the temperature changes the <b>least</b>.</p>`,
      quiz: [
        { q: 'A thermal insulator is a material that ______.', c: ['slows down the transfer of heat', 'lets heat pass through easily', 'makes heat', 'is always cold'], why: 'ฉนวนความร้อนทำให้ความร้อนถ่ายโอนได้ช้าลง' },
        { q: 'Which of these is a good thermal insulator?', c: ['Foam', 'Copper', 'Aluminium', 'Steel'], why: 'โฟมมีอากาศกักอยู่มาก ส่วนโลหะเป็นตัวนำความร้อน' },
        { q: 'Why are the handles of cooking pots often made of plastic or wood?', c: ['They are insulators, so the handle does not get too hot', 'They are conductors, so the food cooks faster', 'They are heavier than metal', 'They melt easily'], why: 'พลาสติกและไม้เป็นฉนวน ความร้อนจึงถ่ายโอนมาถึงมือได้ยาก' },
        { q: 'Heat always moves from ______.', c: ['a hotter place to a cooler place', 'a cooler place to a hotter place', 'top to bottom only', 'metal to plastic only'], why: 'ความร้อนถ่ายโอนจากอุณหภูมิสูงไปต่ำ' },
        { q: 'Why does a woolly jumper keep you warm?', c: ['It traps air, which is a good insulator', 'Wool makes its own heat', 'Wool is a good conductor', 'It lets cold air in'], why: 'อากาศที่ถูกกักไว้ในเส้นใยช่วยไม่ให้ความร้อนจากร่างกายหนีออกไป' },
        { q: 'You want to keep ice cream cold. Which is the best container?', c: ['A foam box', 'A metal tin', 'An aluminium tray', 'A steel bowl'], why: 'ฉนวนกันไม่ให้ความร้อนจากข้างนอกเข้ามา จึงเก็บความเย็นได้' },
        { q: 'In a fair test of insulating materials, which one thing should you change?', c: ['The material around the cup', 'The amount of water', 'The starting temperature', 'The size of the cup'], why: 'เปลี่ยนตัวแปรเดียว (วัสดุ) และควบคุมตัวแปรอื่นให้เหมือนกัน' },
        { q: 'Four cups of hot water start at 80°C. After 20 minutes: foil 52°C, paper 58°C, bubble wrap 68°C, no cover 45°C. Which is the best insulator?', c: ['Bubble wrap', 'Foil', 'Paper', 'No cover'], why: 'อุณหภูมิลดลงน้อยที่สุด (เหลือ 68°C) จึงเป็นฉนวนที่ดีที่สุด' },
        { q: 'Which material is a thermal conductor?', c: ['Iron', 'Rubber', 'Wool', 'Wood'], why: 'โลหะเป็นตัวนำความร้อนที่ดี' }
      ]
    },
    {
      title: '3. Blood Basics and Blood Typing',
      html: `
<h4>What is blood made of?</h4>
<div class="tw"><table>
<tr><th>Part</th><th>Job</th></tr>
<tr><td><b>Plasma</b> น้ำเลือด</td><td>the yellowish <b>liquid</b> part (about 55% of blood); carries blood cells, nutrients, hormones and waste</td></tr>
<tr><td><b>Red blood cells</b> เซลล์เม็ดเลือดแดง</td><td>carry <b>oxygen</b> around the body; contain <b>haemoglobin</b>, which makes blood red</td></tr>
<tr><td><b>White blood cells</b> เซลล์เม็ดเลือดขาว</td><td><b>fight germs</b> and infection — part of the immune system</td></tr>
<tr><td><b>Platelets</b> เกล็ดเลือด</td><td>help the blood to <b>clot</b> and stop bleeding when you are cut</td></tr>
</table></div>
<figure class="fig"><div class="cards"><div><em>🔴</em><b>Red blood cells</b><span>carry oxygen</span></div><div><em>⚪</em><b>White blood cells</b><span>fight germs</span></div><div><em>🩹</em><b>Platelets</b><span>help blood clot</span></div><div><em>💧</em><b>Plasma</b><span>the liquid part</span></div></div></figure>
<h4>Blood types — the ABO system</h4>
<p>Your blood type depends on the <b>antigens</b> (markers) on the surface of your red blood cells. <b>Antibodies</b> in the plasma attack antigens that do not belong.</p>
<div class="tw"><table>
<tr><th>Blood type</th><th>Antigens on red blood cells</th><th>Antibodies in plasma</th></tr>
<tr><td><b>A</b></td><td>A</td><td>anti-B</td></tr>
<tr><td><b>B</b></td><td>B</td><td>anti-A</td></tr>
<tr><td><b>AB</b></td><td>A and B</td><td>none</td></tr>
<tr><td><b>O</b></td><td>none</td><td>anti-A and anti-B</td></tr>
</table></div>
<p><b>Rh factor:</b> if you have the Rh antigen you are <b>positive (+)</b>; if not, you are <b>negative (−)</b>. So there are 8 common types: A+, A−, B+, B−, AB+, AB−, O+, O−.</p>
<div class="key"><b>O negative</b> = universal <b>donor</b> (can give to everyone) · <b>AB positive</b> = universal <b>recipient</b> (can receive from everyone)</div>
<h4>Blood typing test</h4>
<p>Add <b>anti-A</b> and <b>anti-B</b> serum to drops of blood. If the blood <b>clumps</b> (agglutination), that antigen is present.</p>
<div class="tw"><table>
<tr><th>Clumps with anti-A?</th><th>Clumps with anti-B?</th><th>Blood type</th></tr>
<tr><td>Yes</td><td>No</td><td><b>A</b></td></tr>
<tr><td>No</td><td>Yes</td><td><b>B</b></td></tr>
<tr><td>Yes</td><td>Yes</td><td><b>AB</b></td></tr>
<tr><td>No</td><td>No</td><td><b>O</b></td></tr>
</table></div>
<figure class="fig"><svg viewBox="0 0 330 216" width="330" role="img" font-size="12" fill="#1f1b2e"><g text-anchor="middle" font-weight="700"><text x="110" y="16">anti-A</text><text x="200" y="16">anti-B</text><text x="286" y="16">Type</text></g><circle cx="110" cy="44" r="18" fill="#fee2e2" stroke="#9a96ad" stroke-width="1.5"/><circle cx="102" cy="38" r="3" fill="#991b1b"/><circle cx="115" cy="35" r="3" fill="#991b1b"/><circle cx="119" cy="47" r="3" fill="#991b1b"/><circle cx="107" cy="48" r="3" fill="#991b1b"/><circle cx="100" cy="51" r="3" fill="#991b1b"/><circle cx="113" cy="55" r="3" fill="#991b1b"/><circle cx="110" cy="42" r="3" fill="#991b1b"/><circle cx="200" cy="44" r="18" fill="#f87171" stroke="#9a96ad" stroke-width="1.5"/><text x="286" y="50" text-anchor="middle" font-size="16" font-weight="700" fill="#6d3fd6">A</text><text x="40" y="48" text-anchor="middle" font-size="11" fill="#6b6780">Sample 1</text><circle cx="110" cy="90" r="18" fill="#f87171" stroke="#9a96ad" stroke-width="1.5"/><circle cx="200" cy="90" r="18" fill="#fee2e2" stroke="#9a96ad" stroke-width="1.5"/><circle cx="192" cy="84" r="3" fill="#991b1b"/><circle cx="205" cy="81" r="3" fill="#991b1b"/><circle cx="209" cy="93" r="3" fill="#991b1b"/><circle cx="197" cy="94" r="3" fill="#991b1b"/><circle cx="190" cy="97" r="3" fill="#991b1b"/><circle cx="203" cy="101" r="3" fill="#991b1b"/><circle cx="200" cy="88" r="3" fill="#991b1b"/><text x="286" y="96" text-anchor="middle" font-size="16" font-weight="700" fill="#6d3fd6">B</text><text x="40" y="94" text-anchor="middle" font-size="11" fill="#6b6780">Sample 2</text><circle cx="110" cy="136" r="18" fill="#fee2e2" stroke="#9a96ad" stroke-width="1.5"/><circle cx="102" cy="130" r="3" fill="#991b1b"/><circle cx="115" cy="127" r="3" fill="#991b1b"/><circle cx="119" cy="139" r="3" fill="#991b1b"/><circle cx="107" cy="140" r="3" fill="#991b1b"/><circle cx="100" cy="143" r="3" fill="#991b1b"/><circle cx="113" cy="147" r="3" fill="#991b1b"/><circle cx="110" cy="134" r="3" fill="#991b1b"/><circle cx="200" cy="136" r="18" fill="#fee2e2" stroke="#9a96ad" stroke-width="1.5"/><circle cx="192" cy="130" r="3" fill="#991b1b"/><circle cx="205" cy="127" r="3" fill="#991b1b"/><circle cx="209" cy="139" r="3" fill="#991b1b"/><circle cx="197" cy="140" r="3" fill="#991b1b"/><circle cx="190" cy="143" r="3" fill="#991b1b"/><circle cx="203" cy="147" r="3" fill="#991b1b"/><circle cx="200" cy="134" r="3" fill="#991b1b"/><text x="286" y="142" text-anchor="middle" font-size="16" font-weight="700" fill="#6d3fd6">AB</text><text x="40" y="140" text-anchor="middle" font-size="11" fill="#6b6780">Sample 3</text><circle cx="110" cy="182" r="18" fill="#f87171" stroke="#9a96ad" stroke-width="1.5"/><circle cx="200" cy="182" r="18" fill="#f87171" stroke="#9a96ad" stroke-width="1.5"/><text x="286" y="188" text-anchor="middle" font-size="16" font-weight="700" fill="#6d3fd6">O</text><text x="40" y="186" text-anchor="middle" font-size="11" fill="#6b6780">Sample 4</text></svg><figcaption>จุดเข้ม ๆ = เลือดจับกลุ่ม (clumps) แปลว่ามีแอนติเจนชนิดนั้น · สีเรียบ = ไม่จับกลุ่ม</figcaption></figure>
<div class="anim" data-anim="blood"></div>
<p><b>CSI:</b> blood found at a crime scene can be typed and compared with the suspects. A different blood type <b>rules a suspect out</b>; the same type means the suspect <b>could</b> be the source (many people share a type, so it is not proof on its own).</p>`,
      quiz: [
        { q: 'Which part of the blood carries oxygen?', c: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], why: 'เซลล์เม็ดเลือดแดงมีฮีโมโกลบินทำหน้าที่ลำเลียงออกซิเจน' },
        { q: 'What is the job of white blood cells?', c: ['To fight germs and infection', 'To carry oxygen', 'To help blood clot', 'To make blood red'], why: 'เซลล์เม็ดเลือดขาวเป็นส่วนหนึ่งของระบบภูมิคุ้มกัน' },
        { q: 'Which part of the blood helps stop bleeding when you get a cut?', c: ['Platelets', 'Plasma', 'Red blood cells', 'Haemoglobin'], why: 'เกล็ดเลือดช่วยให้เลือดแข็งตัว' },
        { q: 'The liquid part of the blood is called ______.', c: ['plasma', 'platelets', 'antigen', 'serum test'], why: 'พลาสมาคือส่วนที่เป็นของเหลว ประมาณ 55% ของเลือด' },
        { q: 'What are the four blood types in the ABO system?', c: ['A, B, AB and O', 'A, B, C and D', 'A, B, O and Rh', 'A+, B+, C+ and O+'], why: 'ระบบ ABO มี 4 หมู่: A, B, AB, O' },
        { q: 'A person with type A blood has which antigens on their red blood cells?', c: ['A antigens', 'B antigens', 'Both A and B antigens', 'No antigens'], why: 'หมู่ A มีแอนติเจน A และมีแอนติบอดี anti-B ในพลาสมา' },
        { q: 'A blood sample clumps with anti-A serum and ALSO with anti-B serum. What type is it?', c: ['AB', 'A', 'B', 'O'], why: 'จับกลุ่มกับทั้งสองชนิด แสดงว่ามีทั้งแอนติเจน A และ B' },
        { q: 'A blood sample does NOT clump with anti-A or anti-B serum. What type is it?', c: ['O', 'AB', 'A', 'B'], why: 'ไม่มีทั้งแอนติเจน A และ B จึงเป็นหมู่ O' },
        { q: 'Which blood type is called the “universal donor”?', c: ['O negative', 'AB positive', 'A positive', 'B negative'], why: 'O− ไม่มีแอนติเจน A, B และ Rh จึงให้ได้กับทุกหมู่' },
        { q: 'What does “positive” mean in blood type A positive (A+)?', c: ['The Rh antigen is present', 'The blood is healthy', 'The blood has no antigens', 'The person can give blood to anyone'], why: 'มี Rh factor = positive, ไม่มี = negative' },
        { q: 'Blood at a crime scene is type B. Suspect 1 is type A and Suspect 2 is type B. What can the detective conclude?', c: ['Suspect 1 can be ruled out; Suspect 2 could be the source', 'Suspect 2 is definitely guilty', 'Suspect 1 is definitely guilty', 'Nothing at all'], why: 'หมู่เลือดไม่ตรงตัดผู้ต้องสงสัยออกได้ แต่หมู่ตรงกันยังไม่ใช่หลักฐานยืนยัน เพราะคนจำนวนมากมีหมู่เลือดเดียวกัน' },
        { q: 'What makes blood red?', c: ['Haemoglobin in red blood cells', 'Plasma', 'Platelets', 'White blood cells'], why: 'ฮีโมโกลบินเป็นโปรตีนที่มีธาตุเหล็ก ทำให้เลือดมีสีแดง' }
      ]
    }
  ]
};
