window.SUBJECT = {
  title: 'English (EEP)',
  subtitle: 'สอบ 30 พ.ย. – 3 ธ.ค. 69 (คาบ 9) และศุกร์ 11 ธ.ค. 69 (14.30 – 15.30 น.)',
  note: 'หน้านี้ทบทวน <b>ไวยากรณ์</b> <b>คำศัพท์ตามแนวข้อสอบ</b> และมี<b>บทอ่านฝึกที่เขียนขึ้นใหม่</b> (หัวข้อ 3, 4 และ 8) ในเรื่องเดียวกับหนังสือ — แต่ข้อสอบถามจากบทอ่านในหนังสือ จึงต้องอ่าน Develop Reading Skills และ OWSB / OWWB ในเล่มด้วย',
  /* ลำดับที่แสดงบนหน้า = ลำดับเดียวกับเรื่อง English ในเช็กลิสต์หน้าแรก เป็นรายการเดียว ไม่แบ่งกลุ่ม ไม่เขียนกำกับว่าสอบนอก/ในตาราง
     (ผู้ใช้ขอ 13 พ.ย. 69: "เอาแบบเรียงเนื้อหาในหน้าแรกมาเลย ไม่ต้องแตกย่อยในหน้าย่อย ๆ ว่านอกหรือใน" — ใช้งานโดยติ๊กไล่จากบนลงล่างในหน้าแรก)
     ตัวเลขคือตำแหน่งของเรื่องใน sections ด้านล่าง (นับจาก 0) ซึ่งเป็นคีย์ติ๊ก/คะแนน 'english:ตำแหน่ง' ที่เช็กลิสต์ใน plan.js อ้างถึง
     — ห้ามสลับตำแหน่งใน sections · เลข 1. 2. … หน้าชื่อเรื่องคือลำดับที่แสดงบนหน้า */
  order: [3, 4, 5, 6, 0, 1, 2, 7],
  sections: [
    {
      title: '5. Reported Speech: Statements (Unit 5)',
      html: `
<p>ใช้เล่าว่า<b>ใครพูดอะไร</b> โดยไม่ยกคำพูดมาตรง ๆ — ต้องเปลี่ยน 3 อย่าง: <b>tense, pronoun, คำบอกเวลา/สถานที่</b></p>
<div class="ex">Direct: Tom said, “I <b>am</b> tired.”<br>Reported: Tom said (that) <b>he was</b> tired.</div>
<figure class="fig"><div class="bubbles"><div class="bub"><small>Direct speech</small>Tom: “<u>I</u> <b>am</b> tired <i>today</i>.”</div><div class="bub r"><small>Reported speech</small>Tom said <u>he</u> <b>was</b> tired <i>that day</i>.</div></div><figcaption>เปลี่ยน 3 จุด: <u>สรรพนาม</u> · <b>tense</b> · <i>คำบอกเวลา</i></figcaption></figure>
<div class="anim" data-anim="reported"></div>
<h4>① ถอย tense ไปหนึ่งขั้น (backshift)</h4>
<div class="tw"><table>
<tr><th>Direct speech</th><th>Reported speech</th></tr>
<tr><td>am / is / are</td><td>was / were</td></tr>
<tr><td>play / plays (present simple)</td><td>played (past simple)</td></tr>
<tr><td>is playing (present continuous)</td><td>was playing (past continuous)</td></tr>
<tr><td>played (past simple)</td><td>had played (past perfect)</td></tr>
<tr><td>have played (present perfect)</td><td>had played</td></tr>
<tr><td>will</td><td>would</td></tr>
<tr><td>can</td><td>could</td></tr>
<tr><td>must / have to</td><td>had to</td></tr>
</table></div>
<h4>② เปลี่ยน pronoun ให้ตรงกับผู้พูด</h4>
<p>I → he / she · we → they · my → his / her · our → their</p>
<h4>③ เปลี่ยนคำบอกเวลาและสถานที่</h4>
<div class="tw"><table>
<tr><td>now → then</td><td>today → that day</td><td>tonight → that night</td></tr>
<tr><td>tomorrow → the next day</td><td>yesterday → the day before</td><td>last week → the week before</td></tr>
<tr><td>next week → the following week</td><td>here → there</td><td>this → that · these → those</td></tr>
</table></div>
<div class="key"><b>say</b> ไม่ต้องมีกรรม: He <b>said</b> (that)… · <b>tell</b> ต้องมีกรรม: He <b>told me</b> (that)…</div>`,
      quiz: [
        { q: '“I am hungry,” said Ben. → Ben said that ______.', c: ['he was hungry', 'I am hungry', 'he is hungry', 'I was hungry'], why: 'am → was และ I → he' },
        { q: '“We live in Chiang Mai,” they said. → They said that ______.', c: ['they lived in Chiang Mai', 'we live in Chiang Mai', 'they live in Chiang Mai', 'we lived in Chiang Mai'], why: 'live → lived และ we → they' },
        { q: '“I will call you tomorrow,” she said. → She said she ______.', c: ['would call me the next day', 'will call me tomorrow', 'would call you tomorrow', 'called me the next day'], why: 'will → would, you → me, tomorrow → the next day' },
        { q: '“I can swim,” said Mia. → Mia said that she ______ swim.', c: ['could', 'can', 'will', 'is'], why: 'can → could' },
        { q: '“I am reading a book now,” he said. → He said he ______ a book then.', c: ['was reading', 'is reading', 'read', 'reads'], why: 'am reading → was reading และ now → then' },
        { q: '“I visited my grandma yesterday,” Anna said. → Anna said she ______ her grandma the day before.', c: ['had visited', 'visits', 'has visited', 'was visiting'], why: 'past simple → past perfect (had + V3)' },
        { q: 'Which sentence is correct?', c: ['She told me that she was busy.', 'She said me that she was busy.', 'She told that she was busy.', 'She said to that she was busy.'], why: 'tell + กรรม (told me) · say ไม่ตามด้วยกรรมโดยตรง' },
        { q: 'In reported speech, “here” changes to ______.', c: ['there', 'that', 'then', 'those'], why: 'here → there' },
        { q: '“This is my bag,” said Tom. → Tom said that ______.', c: ['that was his bag', 'this is my bag', 'that is my bag', 'this was my bag'], why: 'this → that, is → was, my → his' }
      ]
    },
    {
      title: '6. Reported Speech: Imperatives & Questions (Unit 6)',
      html: `
<h4>Imperatives — คำสั่ง / คำขอร้อง</h4>
<p>โครงสร้าง: <b>told / asked + คน + to + V1</b> · ปฏิเสธ: <b>not to + V1</b></p>
<div class="ex">“Open the door.” → He <b>told me to open</b> the door.<br>“Don’t run!” → The teacher <b>told us not to run</b>.<br>“Please help me.” → She <b>asked me to help</b> her.</div>
<h4>Wh- Questions</h4>
<p>โครงสร้าง: <b>asked + (คน) + question word + ประธาน + กริยา</b></p>
<div class="ex">“Where <u>do you live</u>?” → She asked me <b>where I lived</b>.<br>“What <u>are you doing</u>?” → He asked <b>what I was doing</b>.</div>
<h4>Yes/No Questions</h4>
<p>โครงสร้าง: <b>asked + (คน) + if / whether + ประธาน + กริยา</b></p>
<div class="ex">“Do you like pizza?” → He asked me <b>if I liked</b> pizza.<br>“Can you swim?” → She asked <b>whether I could</b> swim.</div>
<figure class="fig"><div class="blocks"><div class="brow"><small>Wh- question</small><div><b class="b1">She asked me</b><i>where</i><b class="b2">I</b><b class="b3">lived</b></div></div><div class="brow"><small>Yes/No question</small><div><b class="b1">He asked me</b><i>if</i><b class="b2">I</b><b class="b3">liked pizza</b></div></div><div class="brow"><small>Imperative</small><div><b class="b1">He told me</b><i>to</i><b class="b3">open the door</b></div></div></div><figcaption>ม่วง = คนถาม/สั่ง · เหลือง = คำเชื่อม · เขียว = ประธาน · ฟ้า = กริยา (ประธานมาก่อนกริยาเสมอ)</figcaption></figure>
<div class="key"><b>3 ข้อห้ามของ reported question</b><br>① ห้ามใช้ do / does / did ② ห้ามเรียงแบบคำถาม — ต้องเป็น <b>ประธาน + กริยา</b> ③ ห้ามใส่เครื่องหมาย ?</div>`,
      quiz: [
        { q: '“Close the window,” Mum said to me. → Mum told me ______ the window.', c: ['to close', 'close', 'closed', 'closing'], why: 'คำสั่ง → told + คน + to + V1' },
        { q: '“Don’t touch that!” he said to us. → He told us ______ that.', c: ['not to touch', 'to not touched', 'don’t touch', 'didn’t touch'], why: 'คำสั่งปฏิเสธ → not to + V1' },
        { q: '“Please sit down,” the teacher said. → The teacher asked us ______.', c: ['to sit down', 'sit down', 'sat down', 'that sit down'], why: 'คำขอร้อง → asked + คน + to + V1' },
        { q: '“Where do you live?” she asked me. → She asked me ______.', c: ['where I lived', 'where did I live', 'where do I live', 'where I live?'], why: 'ไม่ใช้ do/did เรียงแบบประธาน + กริยา และถอย tense' },
        { q: '“Do you like football?” he asked. → He asked me ______ football.', c: ['if I liked', 'do I like', 'that I liked', 'did I like'], why: 'Yes/No question ใช้ if หรือ whether' },
        { q: '“What are you doing?” Dad asked. → Dad asked what ______.', c: ['I was doing', 'was I doing', 'are you doing', 'I am doing?'], why: 'ประธานมาก่อนกริยา และ are → was' },
        { q: '“Can you help me?” she asked him. → She asked him ______.', c: ['whether he could help her', 'can he help her', 'if could he help her', 'that he can help her'], why: 'whether + ประธาน + could' },
        { q: '“When will the bus arrive?” I asked. → I asked when ______.', c: ['the bus would arrive', 'would the bus arrive', 'will the bus arrive', 'the bus will arrive?'], why: 'will → would และเรียงประธาน + กริยา' },
        { q: 'Which reported question is correct?', c: ['He asked me why I was late.', 'He asked me why was I late.', 'He asked me why I am late?', 'He asked me that why I was late.'], why: 'question word + ประธาน + กริยา ไม่มี ? และไม่ใช้ that' },
        { q: '“Don’t be late,” Mum said to Tom. → Mum told Tom ______ late.', c: ['not to be', 'don’t be', 'to not being', 'not be'], why: 'not to + V1 (be)' }
      ]
    },
    {
      title: '7. Order of Adjectives (Unit 5)',
      html: `
<p>เมื่อมีคำคุณศัพท์หลายคำหน้าคำนาม ต้องเรียงตามลำดับนี้</p>
<div class="tw"><table>
<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th></th></tr>
<tr><td><b>Opinion</b><br>ความเห็น</td><td><b>Size</b><br>ขนาด</td><td><b>Age</b><br>อายุ</td><td><b>Shape</b><br>รูปร่าง</td><td><b>Colour</b><br>สี</td><td><b>Origin</b><br>ที่มา</td><td><b>Material</b><br>วัสดุ</td><td><b>Purpose</b><br>ใช้ทำอะไร</td><td><b>Noun</b></td></tr>
<tr><td>beautiful<br>lovely<br>ugly</td><td>big<br>small<br>tall</td><td>old<br>new<br>young</td><td>round<br>square</td><td>red<br>blue</td><td>Thai<br>Italian</td><td>wooden<br>plastic<br>silk</td><td>dining<br>sleeping<br>school</td><td>table<br>bag</td></tr>
</table></div>
<figure class="fig"><div class="train"><span>a</span><b style="--c:#fde2d4">lovely<small>opinion</small></b><b style="--c:#fdf0c4">small<small>size</small></b><b style="--c:#dcebd3">old<small>age</small></b><b style="--c:#dbe7f5">round<small>shape</small></b><b style="--c:#f5d0e6">red<small>colour</small></b><b style="--c:#e6cff5">Thai<small>origin</small></b><b style="--c:#e2e8f0">wooden<small>material</small></b><b class="n">box<small>noun</small></b></div><figcaption>เรียงเหมือนขบวนรถไฟ — คำนามอยู่ท้ายขบวนเสมอ</figcaption></figure>
<div class="key">ท่องว่า <b>O-S-A-Sh-C-O-M-P</b>: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose</div>
<div class="anim" data-anim="adjgame"></div>
<div class="ex">a <b>beautiful big old</b> house ✔ (opinion–size–age)<br>a <b>small round wooden</b> table ✔ (size–shape–material)<br>a <b>lovely new red Italian</b> car ✔ (opinion–age–colour–origin)<br>a <s>red beautiful</s> dress ✘ → a <b>beautiful red</b> dress</div>`,
      quiz: [
        { q: 'Choose the correct order: She has a ______ bag.', c: ['beautiful big red', 'red big beautiful', 'big red beautiful', 'red beautiful big'], why: 'opinion (beautiful) → size (big) → colour (red)' },
        { q: 'Choose the correct order: We sat at a ______ table.', c: ['small round wooden', 'wooden round small', 'round small wooden', 'wooden small round'], why: 'size → shape → material' },
        { q: 'Choose the correct order: He bought a ______ car.', c: ['lovely new Italian', 'Italian new lovely', 'new lovely Italian', 'new Italian lovely'], why: 'opinion → age → origin' },
        { q: 'Which type of adjective comes FIRST?', c: ['Opinion', 'Colour', 'Material', 'Size'], why: 'Opinion (ความเห็น) มาก่อนเสมอ' },
        { q: 'Choose the correct order: I found an ______ box.', c: ['old square metal', 'metal old square', 'square metal old', 'square old metal'], why: 'age → shape → material' },
        { q: 'Choose the correct order: They live in a ______ house.', c: ['nice big old white', 'white old big nice', 'big nice white old', 'old nice big white'], why: 'opinion → size → age → colour' },
        { q: 'Choose the correct order: She wore a ______ scarf.', c: ['long blue Thai silk', 'silk Thai blue long', 'blue long silk Thai', 'Thai silk long blue'], why: 'size → colour → origin → material' },
        { q: 'In “a comfortable sleeping bag”, the word “sleeping” tells us the ______.', c: ['purpose', 'opinion', 'material', 'shape'], why: 'purpose (ใช้ทำอะไร) อยู่ติดคำนามมากที่สุด' }
      ]
    },
    {
      title: '1. English for Daily Life 6 (Unit 5–6)',
      html: `
<h4>Unit 5: Was he causing trouble? — Past Continuous</h4>
<p>ใช้เล่าสิ่งที่<b>กำลังเกิดขึ้น ณ เวลาหนึ่งในอดีต</b>: <b>was / were + V-ing</b></p>
<div class="ex">He <b>was talking</b> in class. · <b>Was</b> he <b>causing</b> trouble? — Yes, he <b>was</b>. / No, he <b>wasn’t</b>.<br><b>Were</b> they <b>fighting</b>? — Yes, they <b>were</b>. / No, they <b>weren’t</b>.<br>I <b>was doing</b> my homework <b>when</b> the phone <b>rang</b>. (เหตุการณ์ยาว + when + เหตุการณ์สั้น)</div>
<h4>Vocabulary about bad behavior</h4>
<div class="tw"><table>
<tr><td><b>bully</b> รังแก</td><td><b>tease</b> ล้อเลียน</td><td><b>cheat</b> โกง ลอกข้อสอบ</td></tr>
<tr><td><b>lie</b> โกหก</td><td><b>steal</b> ขโมย</td><td><b>fight</b> ทะเลาะวิวาท</td></tr>
<tr><td><b>gossip</b> นินทา</td><td><b>be rude</b> หยาบคาย</td><td><b>skip class</b> โดดเรียน</td></tr>
<tr><td><b>litter</b> ทิ้งขยะไม่เป็นที่</td><td><b>break the rules</b> ทำผิดกฎ</td><td><b>cause trouble</b> ก่อเรื่อง</td></tr>
</table></div>
<h4>Buying souvenirs</h4>
<div class="ex">A: Can I help you? — B: Yes, I’m looking for a souvenir.<br>B: <b>How much is this?</b> / <b>How much are these?</b> — A: It’s 150 baht. / They’re 80 baht each.<br>B: Do you have it in a different colour / a smaller size?<br>B: <b>I’ll take it.</b> / I’ll take two, please. — A: Here you are. Here’s your change.</div>
<h4>Unit 6: What should I do? — should / shouldn’t</h4>
<p>ใช้ให้<b>คำแนะนำ</b>: <b>should / shouldn’t + V1</b> (ไม่เติม s ไม่ใช้ to)</p>
<div class="ex">You <b>should see</b> a doctor. · You <b>shouldn’t eat</b> too much candy. · What <b>should I do</b>?</div>
<h4>Vocabulary about illnesses and remedies</h4>
<div class="tw"><table>
<tr><th>Illness</th><th>Remedy</th></tr>
<tr><td>a headache ปวดหัว</td><td>take a painkiller, rest</td></tr>
<tr><td>a sore throat เจ็บคอ</td><td>throat lozenges, drink warm water</td></tr>
<tr><td>a cough ไอ</td><td>cough syrup / cough medicine</td></tr>
<tr><td>a fever / a temperature ไข้</td><td>take medicine, rest, drink water</td></tr>
<tr><td>a stomachache ปวดท้อง</td><td>stomach medicine, eat light food</td></tr>
<tr><td>a cold / a runny nose หวัด น้ำมูกไหล</td><td>rest, tissues, cold medicine</td></tr>
<tr><td>a toothache ปวดฟัน</td><td>see a dentist</td></tr>
<tr><td>a cut / a burn แผลบาด แผลไหม้</td><td>a plaster (bandage), ointment / cream</td></tr>
</table></div>
<h4>Asking for help at a pharmacy</h4>
<div class="ex">A: Hello. How can I help you? — B: <b>Have you got anything for</b> a sore throat?<br>A: Yes. You should try these lozenges. <b>Take one every four hours.</b><br>B: How often should I take them? / Are there any side effects?<br>A: Don’t take more than six a day. If you don’t feel better, you should see a doctor.</div>`,
      quiz: [
        { q: '______ he causing trouble in class yesterday?', c: ['Was', 'Were', 'Did', 'Is'], why: 'Past continuous กับ he ใช้ was + V-ing' },
        { q: 'They ______ fighting in the playground when the teacher arrived.', c: ['were', 'was', 'are', 'did'], why: 'they ใช้ were + V-ing' },
        { q: 'I was doing my homework when the phone ______.', c: ['rang', 'was ringing', 'rings', 'ring'], why: 'เหตุการณ์สั้นที่เข้ามาแทรกใช้ past simple' },
        { q: 'A student who copies answers from a friend in a test is ______.', c: ['cheating', 'teasing', 'littering', 'gossiping'], why: 'cheat = โกง ลอกข้อสอบ' },
        { q: 'To “gossip” means to ______.', c: ['talk about other people’s private lives', 'take something that is not yours', 'hurt someone smaller than you', 'not go to class'], why: 'gossip = นินทา พูดเรื่องส่วนตัวของคนอื่น' },
        { q: 'A big boy who hurts or frightens smaller children is a ______.', c: ['bully', 'liar', 'thief', 'cheat'], why: 'bully = คนที่ชอบรังแกผู้อื่น' },
        { q: 'You want to know the price of two keyrings. What do you say?', c: ['How much are these?', 'How many is this?', 'How much is these?', 'What price you have?'], why: 'ของหลายชิ้นใช้ How much are these?' },
        { q: 'You decide to buy the T-shirt. What do you say?', c: ['I’ll take it.', 'I’m just looking.', 'It’s too expensive.', 'Do you have a bigger size?'], why: 'I’ll take it = ตกลงซื้อ' },
        { q: 'You have a toothache. You ______ see a dentist.', c: ['should', 'shouldn’t', 'should to', 'shoulds'], why: 'should + V1 ใช้ให้คำแนะนำ' },
        { q: 'You have a fever. You ______ go out and play in the rain.', c: ['shouldn’t', 'should', 'shouldn’t to', 'don’t should'], why: 'shouldn’t + V1 = ไม่ควร' },
        { q: 'Which remedy is best for a cough?', c: ['Cough syrup', 'A plaster', 'Ointment', 'A bandage'], why: 'cough syrup = ยาแก้ไอน้ำ' },
        { q: 'You cut your finger. What do you need?', c: ['A plaster', 'Throat lozenges', 'Cough syrup', 'A painkiller for a headache'], why: 'plaster = พลาสเตอร์ปิดแผล' },
        { q: 'At the pharmacy, how do you ask for medicine for a headache?', c: ['Have you got anything for a headache?', 'Do you have a headache?', 'What is a headache?', 'I should a headache.'], why: 'Have you got anything for …? = มียาสำหรับอาการ…ไหม' },
        { q: 'The pharmacist says, “Take one tablet every four hours.” This tells you ______.', c: ['how often to take the medicine', 'how much the medicine costs', 'where to buy the medicine', 'what the medicine tastes like'], why: 'every four hours = ทุก 4 ชั่วโมง (ความถี่)' }
      ]
    },
    {
      title: '2. Develop Reading Skills — Vocabulary',
      html: `
<p>คำศัพท์ที่ระบุไว้ในแนวข้อสอบ — อ่านบทอ่านในหนังสือตามหน้าที่กำหนดประกอบด้วย</p>
<h4>Unit 5: Health and Personal Care</h4>
<p>บทอ่าน: Benefits of Drinking Water (pp. 20–21) · Acne (pp. 44–45)</p>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>aggravate</b> (v.)</td><td>to make something worse<br>ทำให้แย่ลง</td><td>Touching your face can <b>aggravate</b> acne.</td></tr>
<tr><td><b>outbreak</b> (n.)</td><td>a sudden start of something bad, e.g. spots or a disease<br>การปะทุ การระบาด</td><td>She had an <b>outbreak</b> of pimples before the party.</td></tr>
<tr><td><b>over the counter</b></td><td>(medicine) you can buy without a doctor’s prescription<br>ยาที่ซื้อได้เองไม่ต้องมีใบสั่งแพทย์</td><td>You can buy this cream <b>over the counter</b>.</td></tr>
<tr><td><b>lethargic</b> (adj.)</td><td>having no energy; not wanting to do anything<br>เซื่องซึม ไม่มีแรง</td><td>If you don’t drink enough water, you feel <b>lethargic</b>.</td></tr>
<tr><td><b>sluggish</b> (adj.)</td><td>moving or working more slowly than normal<br>เฉื่อย อืดอาด</td><td>I feel <b>sluggish</b> after a big lunch.</td></tr>
<tr><td><b>replenish</b> (v.)</td><td>to fill something up again<br>เติมให้เต็มอีกครั้ง</td><td>Drink water to <b>replenish</b> the fluids you lose.</td></tr>
</table></div>
<h4>Unit 6: Self-Improvement and Productivity</h4>
<p>บทอ่าน: Boost Your Energy! (pp. 68–69) · Exam Do’s and Don’ts (pp. 72–73)</p>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>slouch</b> (v.)</td><td>to sit or stand with your shoulders and head bent forward<br>นั่ง/ยืนหลังค่อม ห่อไหล่</td><td>Don’t <b>slouch</b> — sit up straight!</td></tr>
<tr><td><b>daunting</b> (adj.)</td><td>making you feel worried because it seems difficult<br>น่าหวั่นใจ ดูยากจนท้อ</td><td>The exam looked <b>daunting</b> at first.</td></tr>
<tr><td><b>caffeine</b> (n.)</td><td>a substance in coffee, tea and cola that makes you feel more awake<br>กาเฟอีน</td><td>Too much <b>caffeine</b> can keep you awake at night.</td></tr>
<tr><td><b>mugging</b> (mugging up)</td><td>studying a lot in a short time just before an exam<br>อ่านหนังสืออัดก่อนสอบ</td><td>Last-minute <b>mugging</b> is not a good way to learn.</td></tr>
<tr><td><b>ambiguities</b> (n., pl.)</td><td>things that are unclear or can be understood in more than one way<br>ความกำกวม ไม่ชัดเจน</td><td>Read the question carefully and ask about any <b>ambiguities</b>.</td></tr>
</table></div>
<div class="key">เทคนิคทำข้อสอบ reading: อ่านคำถามก่อน → หาคำสำคัญในบทอ่าน → เดาความหมายคำศัพท์จากประโยครอบข้าง (context clues)</div>`,
      quiz: [
        { q: '“Aggravate” means ______.', c: ['to make something worse', 'to make something better', 'to fill something again', 'to buy medicine'], why: 'aggravate = ทำให้แย่ลง' },
        { q: 'Medicine that you can buy “over the counter” is medicine that ______.', c: ['you can buy without a doctor’s prescription', 'only doctors can give you', 'is very expensive', 'is kept behind a locked door'], why: 'ซื้อได้เองที่ร้านขายยาโดยไม่ต้องมีใบสั่งแพทย์' },
        { q: 'If you feel “lethargic”, you ______.', c: ['have no energy', 'are very excited', 'are very hungry', 'are angry'], why: 'lethargic = เซื่องซึม ไม่มีแรง' },
        { q: 'Which word is closest in meaning to “sluggish”?', c: ['slow', 'quick', 'clever', 'noisy'], why: 'sluggish = เฉื่อย ช้ากว่าปกติ' },
        { q: 'After running, you should drink water to ______ the fluids you lost.', c: ['replenish', 'aggravate', 'slouch', 'outbreak'], why: 'replenish = เติมให้เต็มอีกครั้ง' },
        { q: 'An “outbreak” of acne is ______.', c: ['a sudden appearance of many spots', 'a cream for your skin', 'a way to wash your face', 'a healthy diet'], why: 'outbreak = การปะทุขึ้นอย่างฉับพลัน' },
        { q: 'To “slouch” means to ______.', c: ['sit with your shoulders bent forward', 'sit up straight', 'run very fast', 'study very hard'], why: 'slouch = นั่งหรือยืนห่อไหล่ หลังค่อม' },
        { q: 'A “daunting” task is one that ______.', c: ['seems difficult and makes you worried', 'is fun and easy', 'takes only a minute', 'you have done many times'], why: 'daunting = ดูยากจนน่าหวั่นใจ' },
        { q: 'Which drink contains caffeine?', c: ['Coffee', 'Water', 'Milk', 'Orange juice'], why: 'caffeine พบในกาแฟ ชา และน้ำอัดลมประเภทโคล่า' },
        { q: 'In “Exam Do’s and Don’ts”, last-minute “mugging” means ______.', c: ['studying a lot just before the exam', 'stealing from someone', 'drinking from a mug', 'sleeping early'], why: 'mugging (up) = อ่านหนังสืออัดในเวลาสั้น ๆ ก่อนสอบ' },
        { q: '“Ambiguities” in an exam question are parts that are ______.', c: ['unclear or have more than one meaning', 'very easy', 'printed in bold', 'worth the most marks'], why: 'ambiguity = ความกำกวม เข้าใจได้มากกว่าหนึ่งแบบ' },
        { q: 'Choose the best word: “Scratching the spot will only ______ it.”', c: ['aggravate', 'replenish', 'slouch', 'daunting'], why: 'การเกาจะทำให้แย่ลง = aggravate' },
        { q: 'Choose the best word: “I didn’t sleep well, so I feel ______ this morning.”', c: ['sluggish', 'daunting', 'over the counter', 'replenish'], why: 'นอนไม่พอจึงรู้สึกเฉื่อย ไม่กระฉับกระเฉง' }
      ]
    },
    {
      // งานในเช็กลิสต์ 📖 — เนื้อหาเขียนใหม่และตรวจแล้ว 13 พ.ย. 69 (drs-reading, ผลตรวจ: ผู้ตรวจอิสระ fixed)
      title: "3. Develop Reading Skills — ฝึกอ่าน Unit 5: Drinking Water & Acne",
      html: `
<p>บทอ่าน 2 เรื่องนี้<b>เขียนขึ้นใหม่สำหรับเว็บนี้</b>เพื่อฝึกอ่านในหัวข้อเดียวกับหนังสือ <b>ไม่ใช่บทอ่านในหนังสือ</b> — ต้องอ่านบทอ่านจริงใน Develop Reading Skills หน้า 20–21 (Benefits of Drinking Water) และหน้า 44–45 (Acne) ด้วย</p>
<h4>Passage 1: Why Your Body Needs Water</h4>
<div class="ex"><p>Did you know that more than half of your body is water? Water is in your blood, your muscles and even your brain. Every day, you lose some water when you sweat, breathe and go to the toilet. That is why you need to drink water to <b>replenish</b> what you lose.</p>
<p>Water does many important jobs. It helps keep your body at the right temperature. When you get hot, you sweat, and the sweat cools you down. Water also protects your joints, such as your knees, and helps your body get rid of waste.</p>
<p>If you do not drink enough, you can become dehydrated. You may feel thirsty or dizzy, or get a headache. You may also feel <b>lethargic</b>, with no energy to play or study. Your brain can feel <b>sluggish</b> too, so it is hard to think clearly.</p>
<p>So how can you check? Look at the colour of your pee. Pale yellow is good, but dark yellow means you need more water. Drink more on hot days and when you play sports. Also, choose water instead of sweet drinks, because sugar can damage your teeth.</p></div>
<p><small><b>ตัวหนา</b> = คำศัพท์ออกสอบ (ความหมายอยู่ในหัวข้อ 2) · คำช่วยอ่าน: <i>sweat</i> เหงื่อ, เหงื่อออก · <i>joints</i> ข้อต่อ · <i>waste</i> ของเสีย · <i>dehydrated</i> ร่างกายขาดน้ำ · <i>dizzy</i> เวียนหัว · <i>pee</i> ฉี่ ปัสสาวะ · <i>pale</i> (สี) อ่อน จาง</small></p>
<h4>Passage 2: Acne — What Is Happening to My Skin?</h4>
<div class="ex"><p>Acne is one of the most common skin problems, especially for teenagers. During puberty, your skin starts to make more oil. Tiny holes in your skin, called pores, can get blocked with this oil and dead skin cells. Then bacteria can grow inside, and the skin becomes red and swollen. That is how a pimple starts.</p>
<p>Many people think dirty skin causes acne, but acne really starts under the skin, inside a blocked pore. Still, gentle care helps. Wash your face twice a day with a mild cleanser and warm water. Do not scrub hard, because scrubbing can <b>aggravate</b> acne. Keep your hands away from your face, and never pick or squeeze a spot. Squeezing can leave a scar.</p>
<p>Stress can also make acne worse. If you get an <b>outbreak</b> of spots before a big day, try to stay calm. For mild acne, you can buy creams and gels <b>over the counter</b> at a pharmacy. Go with a parent, ask the pharmacist to help you choose, and follow the label. These products can take weeks or even months to work, so be patient. If your acne is painful or does not get better, see a doctor.</p></div>
<p><small>คำช่วยอ่าน: <i>puberty</i> ช่วงวัยเริ่มเป็นหนุ่มสาว · <i>pores</i> รูขุมขน · <i>dead skin cells</i> เซลล์ผิวที่ตายแล้ว · <i>swollen</i> บวม · <i>pimple</i>, <i>spot</i> เม็ดสิว · <i>mild cleanser</i> สบู่หรือโฟมล้างหน้าชนิดอ่อนโยน · <i>scrub</i> ขัดถูแรง ๆ · <i>squeeze</i> บีบ · <i>scar</i> แผลเป็น · <i>mild acne</i> สิวที่เป็นไม่มาก · <i>pharmacist</i> เภสัชกร · <i>label</i> ฉลากยา · <i>be patient</i> ใจเย็น ๆ อดทนรอ</small></p>
<div class="key"><b>วิธีตอบคำถามจากบทอ่าน 5 แบบ</b><br>
① <b>Main idea</b> ใจความสำคัญ / ชื่อเรื่องที่ดีที่สุด — ดูชื่อเรื่องและประโยคแรกของแต่ละย่อหน้า เลือกข้อที่ครอบคลุมทั้งเรื่อง ไม่ใช่รายละเอียดที่อยู่แค่ประโยคเดียว<br>
② <b>Details</b> รายละเอียด — หาคำสำคัญในโจทย์ แล้วหาคำเดียวกันในบทอ่าน คำตอบมักอยู่ในประโยคนั้นหรือประโยคถัดไป<br>
③ <b>Vocabulary from context</b> เดาความหมายจากบริบท — อ่านประโยครอบ ๆ คำนั้น มักมีคำอธิบาย ตัวอย่าง หรือผลที่ตามมาอยู่ใกล้ ๆ เช่น <i>Your brain can feel sluggish too, so it is hard to think clearly.</i> → sluggish = ช้า ไม่กระฉับกระเฉง<br>
④ <b>True / False</b> จริงหรือไม่จริง — ต้องมีหลักฐานในบทอ่าน ระวังคำอย่าง <i>always, never, only, all</i> ที่มักทำให้ข้อความไม่จริง<br>
⑤ <b>Inference</b> อนุมาน — คำตอบไม่ได้เขียนไว้ตรง ๆ ต้องคิดต่อจากข้อมูลในบทอ่าน เลือกข้อที่บทอ่านสนับสนุน ไม่ใช่ความเห็นของเราเอง<br>
<small>ตอนทำข้อสอบจะมองไม่เห็นบทอ่าน ให้อ่านทั้งสองเรื่องให้จบก่อน (บางข้อยกประโยคจากบทอ่านมาให้ในโจทย์แล้ว)</small></div>`,
      quiz: [
        { q: "Passage 1 (Water): What is the passage mainly about?", c: ["Why your body needs water and how to drink enough", "How to make tasty fruit drinks at home", "Why sweet drinks are better than water for sports", "How to keep your teeth white and strong"], why: "ทุกย่อหน้าพูดเรื่องน้ำกับร่างกาย — น้ำทำหน้าที่อะไร ขาดน้ำแล้วเป็นอย่างไร และเช็กอย่างไรว่าดื่มพอ ส่วนเรื่องฟันเป็นเพียงรายละเอียดเล็ก ๆ" },
        { q: "Passage 1 (Water): According to the passage, how does sweat help your body?", c: ["It cools you down when you get hot.", "It cleans the dirt from your skin.", "It gives you more energy for sports.", "It makes your bones and teeth stronger."], why: "บทอ่านบอกว่า “When you get hot, you sweat, and the sweat cools you down.” เหงื่อช่วยให้ร่างกายเย็นลง" },
        { q: "Passage 1 (Water): The passage names three ways you lose water every day. Which one is NOT one of them?", c: ["Eating", "Sweating", "Breathing", "Going to the toilet"], why: "บทอ่านบอกว่าเราเสียน้ำเมื่อเหงื่อออก หายใจ และเข้าห้องน้ำ ไม่ได้พูดถึงการกิน" },
        { q: "Passage 1 (Water): “That is why you need to drink water to <b>replenish</b> what you lose.” Here, “replenish” means ______.", c: ["to put back what is lost", "to lose even more", "to make something cold", "to give something away"], why: "คำใบ้คือ “what you lose” — ดื่มน้ำเพื่อเติมส่วนที่เสียไปกลับคืนมา" },
        { q: "Passage 1 (Water): Which words in the passage help you guess the meaning of “lethargic”?", c: ["“with no energy to play or study”", "“more than half of your body is water”", "“when you sweat, breathe and go to the toilet”", "“such as your knees”"], why: "ข้อความที่ตามหลัง lethargic ทันทีอธิบายความหมาย = ไม่มีแรงจะเล่นหรือเรียน" },
        { q: "Passage 1 (Water): Which sentence is TRUE according to the passage?", c: ["Dark yellow pee means you need more water.", "You only need to drink water when you play sports.", "Pale yellow pee means you are dehydrated.", "Sweet drinks are better for your teeth than water."], why: "บทอ่านบอกว่าฉี่สีเหลืองเข้มแปลว่าต้องดื่มน้ำเพิ่ม ส่วนสีเหลืองอ่อนถือว่าดี" },
        { q: "Passage 1 (Water): Ploy played football for an hour on a hot afternoon. Now she feels tired and has a headache. What would the writer most likely tell her to do?", c: ["Drink some water.", "Drink a sweet fizzy drink.", "Play for another hour.", "Stop drinking until dinner."], why: "เหนื่อยและปวดหัวหลังเล่นฟุตบอลตอนบ่ายที่อากาศร้อนอาจเป็นอาการขาดน้ำ บทอ่านบอกให้ดื่มน้ำมากขึ้นในวันที่ร้อนและตอนเล่นกีฬา" },
        { q: "Passage 2 (Acne): What is the best title for this passage?", c: ["Acne: Why It Happens and How to Care for Your Skin", "The Best Make-up Products for Teenagers to Buy", "Why Washing Your Face Often Stops All Acne", "How to Become a Pharmacist When You Grow Up"], why: "บทอ่านอธิบายว่าสิวเกิดจากอะไรและควรดูแลผิวอย่างไร ข้ออื่นไม่ได้พูดถึงหรือขัดกับบทอ่าน" },
        { q: "Passage 2 (Acne): According to the passage, what happens after a pore gets blocked?", c: ["Bacteria can grow inside, and the skin becomes red and swollen.", "The oil slowly turns into water, and the pore opens again.", "The skin stops making oil, and the spot goes away by itself.", "The pore cleans itself, so you do not need to wash your face."], why: "บทอ่านบอกว่า “Then bacteria can grow inside, and the skin becomes red and swollen.” จึงเกิดเป็นสิว" },
        { q: "Passage 2 (Acne): “Do not scrub hard, because scrubbing can <b>aggravate</b> acne.” This means scrubbing hard makes acne ______.", c: ["worse", "better", "disappear", "smaller"], why: "aggravate = ทำให้แย่ลง ประโยคนี้จึงเตือนว่าอย่าขัดหน้าแรง" },
        { q: "Passage 2 (Acne): Which sentence is NOT true according to the passage?", c: ["Acne is caused by dirty skin.", "Acne is very common in teenagers.", "Squeezing a spot can leave a scar.", "Stress can make acne worse."], why: "บทอ่านบอกว่าหลายคนเข้าใจผิดว่าสิวเกิดจากผิวสกปรก ความจริงสิวเริ่มจากรูขุมขนที่อุดตันใต้ผิว" },
        { q: "Passage 2 (Acne): You can buy some acne creams <b>over the counter</b>. According to the passage, who can help you choose one?", c: ["The pharmacist", "Your teacher", "A dentist", "Your best friend"], why: "บทอ่านบอกให้ไปกับผู้ปกครองและ “ask the pharmacist to help you choose” — เภสัชกรช่วยเลือกยาที่ซื้อได้เองโดยไม่ต้องมีใบสั่งแพทย์" },
        { q: "Passage 2 (Acne): Nok gets an <b>outbreak</b> of spots three days before a school concert, and she feels very stressed. Which plan follows the passage best?", c: ["Stay calm, wash her face gently and leave the spots alone.", "Scrub her face hard five times a day to clean the spots.", "Squeeze every spot so that it goes away before the concert.", "Stop washing her face until the concert is over."], why: "ความเครียดอาจทำให้สิวแย่ลง ควรทำใจให้สบาย ล้างหน้าเบา ๆ วันละ 2 ครั้ง และไม่แกะ ไม่บีบสิว" },
        { q: "Passage 2 (Acne): Ben has used a spot cream for three days. He says, “It doesn’t work!” What would the writer most likely tell him?", c: ["Be patient. It can take weeks or even months to work.", "Put on much more cream, and use the whole tube today.", "Stop washing your face, because water stops the cream.", "Throw the cream away and squeeze the spots instead."], why: "บทอ่านบอกว่า “These products can take weeks or even months to work, so be patient.” — ใช้มาแค่ 3 วันยังเร็วเกินไป ต้องใช้ต่อเนื่องและรอดูผล" }
      ]
    },
    {
      // งานในเช็กลิสต์ 📖 — เนื้อหาเขียนใหม่และตรวจแล้ว 13 พ.ย. 69 (drs-reading, ผลตรวจ: ผู้ตรวจอิสระ fixed)
      title: "4. Develop Reading Skills — ฝึกอ่าน Unit 6: Boost Your Energy & Exam Tips",
      html: `
<p>บทอ่าน 2 เรื่องนี้<b>เขียนขึ้นใหม่สำหรับเว็บนี้</b>เพื่อฝึกอ่านในหัวข้อเดียวกับหนังสือ <b>ไม่ใช่บทอ่านในหนังสือ</b> — ต้องอ่านบทอ่านจริงใน Develop Reading Skills หน้า 68–69 (Boost Your Energy!) และหน้า 72–73 (Exam Do’s and Don’ts) ด้วย</p>
<h4>Passage 3: Recharge Your Body!</h4>
<div class="ex"><p>Do you ever feel tired in class? Like a phone, your body needs to recharge. Here are five easy ways to keep your energy up.</p>
<p>First, get enough sleep. Children aged 6 to 12 need 9 to 12 hours of sleep every night. Turn off screens about an hour before bed, because they can make it harder to fall asleep.</p>
<p>Second, eat breakfast. After a long night, your body needs fuel. A healthy breakfast helps you pay attention in the morning.</p>
<p>Third, keep moving. Try to be active for at least 60 minutes every day. Even a short break to stretch or walk can help you concentrate.</p>
<p>Fourth, watch how you sit. When you are tired, you may <b>slouch</b> over your desk. Staying in one position for too long can make your neck and back stiff, so move and stretch often.</p>
<p>Finally, choose your drinks carefully. Coffee, tea, many colas and energy drinks contain <b>caffeine</b>. It can make you feel awake for a while, but too much can make you shaky and nervous and can stop you from sleeping well. Doctors say energy drinks are not for children. Water is a much better choice.</p></div>
<p><small><b>ตัวหนา</b> = คำศัพท์ออกสอบ (ความหมายอยู่ในหัวข้อ 2) · คำช่วยอ่าน: <i>recharge</i> ชาร์จพลังใหม่ · <i>fuel</i> เชื้อเพลิง พลังงาน · <i>pay attention</i> ตั้งใจฟัง ใส่ใจ · <i>stretch</i> ยืดเส้นยืดสาย · <i>concentrate</i> มีสมาธิ · <i>stiff</i> ตึง ปวดเมื่อย · <i>shaky</i> มือสั่น ตัวสั่น · <i>nervous</i> กระวนกระวาย ประหม่า</small></p>
<h4>Passage 4: Ready for the Exam?</h4>
<div class="ex"><p>Does a big exam look <b>daunting</b>? Don’t worry. With a good plan, you can do your best.</p>
<p>DO start early. Study a little every day for two or three weeks before the exam. Break the work into small parts, and test yourself with quizzes or flashcards. Studies show that this works better than reading your notes again and again.</p>
<p>DON’T leave everything until the last night. <b>Mugging up</b> until midnight makes you tired, and a tired brain does not remember well.</p>
<p>DO get a good night’s sleep before the exam. Sleep helps your brain remember what you have learned. In the morning, eat breakfast and get to school early with your pencils and eraser.</p>
<p>DON’T drink coffee or energy drinks to stay awake. Too much <b>caffeine</b> can make you shaky and nervous.</p>
<p>In the exam, read the instructions carefully. If there are any <b>ambiguities</b> in a question, raise your hand and ask the teacher. Answer the easy questions first, and then go back to the difficult ones. If you feel nervous, take a few deep breaths. At the end, use any extra time to check your answers.</p></div>
<p><small>คำช่วยอ่าน: <i>flashcards</i> บัตรคำช่วยจำ · <i>leave everything until the last night</i> ทิ้งทุกอย่างไว้ทำคืนสุดท้าย · <i>a good night’s sleep</i> นอนหลับให้เต็มอิ่มทั้งคืน · <i>eraser</i> ยางลบ · <i>instructions</i> คำชี้แจงในข้อสอบ · <i>raise your hand</i> ยกมือ · <i>deep breaths</i> หายใจเข้าลึก ๆ</small></p>
<div class="key"><b>ดูคำในโจทย์ ก็รู้ว่าต้องหาคำตอบแบบไหน</b><br>
① <i>mainly about / main idea / best title</i> → <b>main idea</b>: ถามตัวเองว่า “ทั้งเรื่องพูดถึงอะไร” ข้อที่ถูกต้องครอบคลุมทุกย่อหน้า<br>
② <i>According to the passage / What / Why / How many</i> → <b>details</b>: คำตอบเขียนไว้ในบทอ่าน หาประโยคที่มีคำเดียวกับโจทย์<br>
③ <i>The word … means / closest in meaning</i> → <b>vocabulary from context</b>: ลองแทนแต่ละตัวเลือกลงในประโยค ข้อที่อ่านแล้วเข้ากับเนื้อเรื่องคือคำตอบ<br>
④ <i>Which is TRUE / NOT true</i> → <b>true / false</b>: ตรวจทีละตัวเลือกกับบทอ่าน ถ้าโจทย์ถาม NOT true ให้หาข้อที่<u>ขัด</u>กับบทอ่าน<br>
⑤ <i>most likely / probably / We can infer</i> → <b>inference</b>: เอาข้อมูลในบทอ่านมาคิดต่อ เช่น “Nid is wearing a raincoat and holding an umbrella.” → อนุมานได้ว่าข้างนอกน่าจะมีฝนตก<br>
<small>ตอนทำข้อสอบจะมองไม่เห็นบทอ่าน ให้อ่านทั้งสองเรื่องให้จบก่อน (บางข้อยกประโยคจากบทอ่านมาให้ในโจทย์แล้ว)</small></div>`,
      quiz: [
        { q: "Passage 3 (Energy): What is the main idea of the passage?", c: ["There are simple, healthy ways to keep your energy up.", "Phones need to be charged every night.", "Energy drinks are the best way to stay awake.", "Children should sleep in class when they feel tired."], why: "บทอ่านให้วิธีง่าย ๆ 5 ข้อเพื่อเพิ่มพลัง: นอนให้พอ กินอาหารเช้า ขยับร่างกาย ระวังท่านั่ง และเลือกเครื่องดื่ม" },
        { q: "Passage 3 (Energy): The writer says, “Like a phone, your body needs to recharge.” What does this mean?", c: ["Your body needs rest and good habits to get its energy back.", "You should keep your phone next to your bed every night.", "You should use your phone more often to feel more awake.", "Your body works better when you sit next to a screen."], why: "เปรียบร่างกายกับโทรศัพท์ที่แบตหมดแล้วต้องชาร์จ — ร่างกายก็ต้องได้พักและดูแลให้ดีจึงจะมีพลังอีกครั้ง" },
        { q: "Passage 3 (Energy): According to the passage, how much sleep do children aged 6 to 12 need every night?", c: ["9 to 12 hours", "5 to 6 hours", "7 to 8 hours", "13 to 15 hours"], why: "บทอ่านบอกว่าเด็กอายุ 6–12 ปี ต้องนอน 9–12 ชั่วโมงทุกคืน" },
        { q: "Passage 3 (Energy): Why does the writer say you should turn off screens about an hour before bed?", c: ["Screens can make it harder to fall asleep.", "Screens use too much electricity at night.", "Screens make you feel hungry before bed.", "Screens make your bedroom too hot to sleep."], why: "บทอ่านบอกว่า “they can make it harder to fall asleep” — หน้าจอทำให้หลับยากขึ้น" },
        { q: "Passage 3 (Energy): “When you are tired, you may <b>slouch</b> over your desk.” A student who is slouching is ______.", c: ["sitting with the shoulders and head bent forward", "sitting up tall with a straight back and neck", "jumping up and down next to the desk at school", "walking slowly around the classroom with a friend"], why: "slouch = นั่งหลังค่อม ห่อไหล่ ก้มหัว มักเป็นตอนที่เหนื่อย" },
        { q: "Passage 3 (Energy): Which sentence is TRUE according to the passage?", c: ["Too much caffeine can stop you from sleeping well.", "Caffeine gives you energy all day and all night.", "Plain water contains a lot of caffeine, like coffee.", "Doctors say energy drinks are good for children."], why: "บทอ่านบอกว่าคาเฟอีนทำให้ตื่นตัวได้ชั่วคราว แต่ถ้ามากเกินไปอาจทำให้ตัวสั่น กระวนกระวาย และนอนหลับไม่ดี" },
        { q: "Passage 3 (Energy): Tom plays games on his tablet until midnight. The next morning he has no time for breakfast. Why does he probably feel tired in class?", c: ["He did not get enough sleep, and he did not eat breakfast.", "He drank too much water before he went to school that day.", "He was active for 60 minutes the day before.", "He sat up straight and changed position all morning."], why: "บทอ่านบอกว่าการนอนให้พอ ปิดจอก่อนนอน และกินอาหารเช้าช่วยให้มีพลัง ทอมไม่ได้ทำเลยสักข้อ" },
        { q: "Passage 4 (Exams): What is the passage mainly about?", c: ["How to prepare for an exam and what to do during it", "Why exams are not really important for most students", "How teachers write, mark and check exam questions", "How to stay awake all night before an important exam"], why: "บทอ่านบอกสิ่งที่ควรทำ (DO) และไม่ควรทำ (DON’T) ตั้งแต่ก่อนสอบจนถึงในห้องสอบ" },
        { q: "Passage 4 (Exams): According to the passage, what works better than reading your notes again and again?", c: ["Studying a little every day and testing yourself", "Reading your notes ten times on the last night", "Copying the whole book into your notebook", "Studying only on the morning of the exam"], why: "บทอ่านบอกให้อ่านทีละนิดทุกวัน แบ่งเป็นส่วนเล็ก ๆ และทดสอบตัวเองด้วย quiz หรือ flashcards" },
        { q: "Passage 4 (Exams): “Does a big exam look <b>daunting</b>? Don’t worry.” Which words best explain “daunting”?", c: ["hard and a bit scary", "easy and a lot of fun", "short and quiet", "funny and exciting"], why: "daunting = ดูยากจนน่าหวั่นใจ — คำใบ้คือ “Don’t worry” ที่ตามมาทันที" },
        { q: "Passage 4 (Exams): Which part of the passage is the best clue to the meaning of “mugging up”?", c: ["“DON’T leave everything until the last night.”", "“eat breakfast and get to school early”", "“If you feel nervous, take a few deep breaths.”", "“At the end, use any extra time to check your answers.”"], why: "ประโยคก่อนหน้าบอกว่าอย่าทิ้งทุกอย่างไว้คืนสุดท้าย mugging up จึงหมายถึงการอ่านอัดในเวลาสั้น ๆ ก่อนสอบ" },
        { q: "Passage 4 (Exams): “If there are any <b>ambiguities</b> in a question, raise your hand and ask the teacher.” When should you ask the teacher?", c: ["When part of a question is not clear", "When you have finished every question", "When a question is very easy", "When you want to know a friend’s answer"], why: "ambiguities = ส่วนที่กำกวม ไม่ชัดเจน จึงควรยกมือถามครู" },
        { q: "Passage 4 (Exams): Which sentence is NOT true according to the passage?", c: ["You should answer the most difficult questions first.", "Sleep helps your brain remember what you have learned.", "Deep breaths can help when you feel nervous.", "You should use extra time to check your answers."], why: "บทอ่านแนะนำให้ทำข้อง่ายก่อน แล้วค่อยกลับไปทำข้อยาก" },
        { q: "Passage 4 (Exams): Mint has an exam tomorrow. She plans to drink an energy drink and study until 2 a.m. What would the writer most likely tell her?", c: ["Don’t do that. Get a good night’s sleep instead.", "Good idea! Energy drinks help you remember.", "Drink coffee too, so you can study even longer.", "Skip breakfast so you have more time to study."], why: "บทอ่านเตือนว่าอย่าอ่านอัดจนดึก และอย่าดื่มกาแฟหรือเครื่องดื่มชูกำลังเพื่อให้ตาสว่าง ควรนอนให้พอ" }
      ]
    },
    {
      // งานในเช็กลิสต์ 📖 — เนื้อหาเขียนใหม่และตรวจแล้ว 13 พ.ย. 69 (our-world, ผลตรวจ: ผู้ตรวจอิสระ fixed)
      title: "8. Our World Unit 5–6 — Vocabulary & Reading",
      html: `
<p>หัวข้อนี้ช่วยทวน <b>คำศัพท์ Vocabulary 1–2</b> ของ Unit 5–6 และฝึกอ่าน — แต่ข้อสอบออกจากหนังสือ จึงต้อง<b>อ่านบทอ่านใน OWSB / OWWB</b> และทวนคำศัพท์จากในเล่มด้วยนะ</p>
<p><small>รายการคำศัพท์เทียบจากเอกสาร 2 ชุดของสำนักพิมพ์ National Geographic Learning (ตารางสรุปเนื้อหา Our World 6 ฉบับ American English และรายการคำศัพท์ Our World 6 ฉบับ British English) ส่วนคำอธิบาย ประโยคตัวอย่าง และบทอ่านฝึก เขียนขึ้นใหม่ ไม่ได้มาจากหนังสือ — ถ้าคำในหนังสือต่างไปเล็กน้อย ให้ยึดตามหนังสือ</small></p>
<h4>Unit 5: It’s a Small World — Vocabulary 1</h4>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning · Example</th></tr>
<tr><td><b>cell</b>* (n.)</td><td>the smallest unit of a living thing<br>เซลล์ หน่วยที่เล็กที่สุดของสิ่งมีชีวิต<br><i>All living things are made of <b>cells</b>.</i></td></tr>
<tr><td><b>centimetre</b> (n.)</td><td>a unit of length: 1 metre = 100 cm<br>เซนติเมตร (ซม.)<br><i>My pencil is about 15 <b>centimetres</b> long.</i></td></tr>
<tr><td><b>common</b> (adj.)</td><td>found often; there are many of them<br>พบได้ทั่วไป พบบ่อย<br><i>Ants are very <b>common</b> in our school garden.</i></td></tr>
<tr><td><b>female</b>* (adj./n.)</td><td>a girl or a woman; an animal that can be a mother<br>เพศหญิง เพศเมีย<br><i>The <b>female</b> bird sat on her eggs.</i></td></tr>
<tr><td><b>grab</b> (v.)</td><td>to take something quickly and suddenly<br>คว้า ฉวย<br><i>The monkey <b>grabbed</b> my banana and ran away!</i></td></tr>
<tr><td><b>habitat</b> (n.)</td><td>the place where an animal or plant naturally lives<br>แหล่งที่อยู่ ถิ่นที่อยู่ตามธรรมชาติ<br><i>A pond is the <b>habitat</b> of frogs and fish.</i></td></tr>
<tr><td><b>horrible</b> (adj.)</td><td>very bad or unpleasant<br>แย่มาก น่าขยะแขยง<br><i>The old milk had a <b>horrible</b> smell.</i></td></tr>
<tr><td><b>human</b> (n.)</td><td>a person<br>มนุษย์ คน<br><i><b>Humans</b> have two legs, but spiders have eight.</i></td></tr>
<tr><td><b>male</b> (adj./n.)</td><td>a boy or a man; an animal that can be a father<br>เพศชาย เพศผู้<br><i>Our puppy is <b>male</b>, so we called him Max.</i></td></tr>
<tr><td><b>microscope</b> (n.)</td><td>a tool that makes very small things look much bigger<br>กล้องจุลทรรศน์<br><i>We looked at an onion skin under a <b>microscope</b>.</i></td></tr>
<tr><td><b>millimetre</b> (n.)</td><td>a very small unit of length: 1 cm = 10 mm<br>มิลลิเมตร (มม.)<br><i>This ant is only three <b>millimetres</b> long.</i></td></tr>
<tr><td><b>organism</b> (n.)</td><td>any living thing: a plant, an animal or a very tiny living thing<br>สิ่งมีชีวิต<br><i>Trees, ants and even tiny bacteria are all <b>organisms</b>.</i></td></tr>
<tr><td><b>thin</b> (adj.)</td><td>not thick; very narrow<br>บาง เส้นเล็ก (ถ้าพูดถึงคนหรือสัตว์ = ผอม)<br><i>Spider silk is very <b>thin</b>, but it is strong.</i></td></tr>
</table></div>
<p><small>* <b>cell</b> และ <b>female</b> อยู่ในรายการ Vocabulary 1 ฉบับ American English แต่ไม่พบในรายการคำศัพท์ของหน่วยนี้ฉบับ British English จึงอาจไม่มีในหนังสือของเรา — รู้ไว้ก็ไม่เสียหาย</small></p>
<div class="key"><b>centi-</b> = หนึ่งในร้อย · <b>milli-</b> = หนึ่งในพัน<br>1 m = 100 cm = 1,000 mm · 1 cm = 10 mm</div>
<h4>Unit 5 — Vocabulary 2 (คำบรรยายลักษณะ)</h4>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning · Example</th></tr>
<tr><td><b>adult</b> (n./adj.)</td><td>fully grown<br>ผู้ใหญ่ ตัวเต็มวัย<br><i>A tadpole grows into an <b>adult</b> frog.</i></td></tr>
<tr><td><b>furry</b> (adj.)</td><td>covered with soft fur<br>มีขนนุ่มปุกปุย<br><i>My rabbit is soft and <b>furry</b>.</i></td></tr>
<tr><td><b>pointed</b> (adj.)</td><td>with a sharp end<br>แหลม ปลายแหลม<br><i>A rose has small <b>pointed</b> thorns.</i></td></tr>
<tr><td><b>spotted</b> (adj.)</td><td>with a pattern of round spots<br>มีลายจุด<br><i>A leopard has <b>spotted</b> fur.</i></td></tr>
<tr><td><b>strange</b> (adj.)</td><td>unusual or surprising<br>แปลก ประหลาด<br><i>I heard a <b>strange</b> noise in the kitchen last night.</i></td></tr>
<tr><td><b>tiny</b> (adj.)</td><td>very, very small<br>เล็กมาก จิ๋ว<br><i>An ant is <b>tiny</b> next to an elephant.</i></td></tr>
</table></div>
<p><small>คำอื่นในรายการคำศัพท์ Unit 5 ฉบับ British English (ไม่ใช่คำหลัก แต่อาจเจอในเล่ม): eyelash ขนตา · crawl คลาน · antennae หนวดของแมลง · transparent โปร่งใส มองทะลุได้ · observe สังเกต · rare หายาก · curious อยากรู้อยากเห็น</small></p>
<h4>Unit 6: Good Choice — Vocabulary 1</h4>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning · Example</th></tr>
<tr><td><b>break</b> (v.)</td><td>to go into pieces, or to stop working because it is damaged<br>แตก หัก พัง เสีย<br><i>If you drop a glass, it may <b>break</b>.</i></td></tr>
<tr><td><b>cost</b> (v./n.)</td><td>to have a price; the money you must pay<br>มีราคา ราคา ค่าใช้จ่าย<br><i>How much does this T-shirt <b>cost</b>?</i></td></tr>
<tr><td><b>crash test</b> (n.)</td><td>a test where a car is crashed on purpose to check how safe it is<br>การทดสอบการชน<br><i>In a <b>crash test</b>, a car hits a wall on purpose.</i></td></tr>
<tr><td><b>customer</b> (n.)</td><td>a person who buys something from a shop or company<br>ลูกค้า<br><i>The shop gives every <b>customer</b> a free bag.</i></td></tr>
<tr><td><b>dip</b> (v.)</td><td>to put something into a liquid for a moment and then lift it out<br>จุ่ม<br><i>I like to <b>dip</b> my biscuit in milk.</i></td></tr>
<tr><td><b>drop</b> (v.)</td><td>to let something fall<br>ทำตก ปล่อยให้ตก<br><i>Be careful! Don’t <b>drop</b> your phone.</i></td></tr>
<tr><td><b>dummy</b> (n.)</td><td>a model of a person, used in tests<br>หุ่นจำลองคน หุ่นทดสอบ<br><i>A <b>dummy</b> sits in the driver’s seat during a crash test.</i></td></tr>
<tr><td><b>fix</b> (v.)</td><td>to repair something that is broken<br>ซ่อม<br><i>Dad <b>fixed</b> my bike yesterday.</i></td></tr>
<tr><td><b>impact</b> (n.)</td><td>the force of one thing hitting another<br>แรงกระแทก<br><i>A helmet protects your head from the <b>impact</b> when you fall.</i></td></tr>
<tr><td><b>manufacturer</b> (n.)</td><td>a company that makes things to sell<br>ผู้ผลิต บริษัทผู้ผลิต<br><i>This <b>manufacturer</b> makes 500 bikes every day.</i></td></tr>
<tr><td><b>product</b> (n.)</td><td>something that is made to be sold<br>ผลิตภัณฑ์ สินค้า<br><i>This shop sells <b>products</b> made from coconut.</i></td></tr>
<tr><td><b>quality</b> (n.)</td><td>how good or bad something is<br>คุณภาพ<br><i>Good-<b>quality</b> shoes can last for years.</i></td></tr>
<tr><td><b>safety</b> (n.)</td><td>being safe; not being in danger<br>ความปลอดภัย<br><i>Always wear a seat belt for your <b>safety</b>.</i></td></tr>
<tr><td><b>tear</b> (v.)</td><td>to pull something apart so that it rips (อ่านว่า “แทร์” · tear – tore – torn)<br>ฉีก ขาด<br><i>My little brother <b>tore</b> my drawing!</i></td></tr>
<tr><td><b>test</b> (v./n.)</td><td>to try something to check that it works well<br>ทดสอบ<br><i>They <b>test</b> every phone before they sell it.</i></td></tr>
<tr><td><b>waterproof</b> (adj.)</td><td>does not let water in<br>กันน้ำ<br><i>My watch is <b>waterproof</b>, so I can wear it when I swim.</i></td></tr>
</table></div>
<h4>Unit 6 — Vocabulary 2 (โทรศัพท์และเทคโนโลยี)</h4>
<div class="tw"><table>
<tr><th>Word</th><th>Meaning · Example</th></tr>
<tr><td><b>app</b> (n.)</td><td>a program on a phone or tablet<br>แอป (แอปพลิเคชัน)<br><i>I use an <b>app</b> to practise English words.</i></td></tr>
<tr><td><b>key</b> (n.)</td><td>a button on a keyboard<br>ปุ่มบนแป้นพิมพ์<br><i>Press the Enter <b>key</b> to start.</i></td></tr>
<tr><td><b>reception</b> (n.)</td><td>how strong the signal is for a phone, radio or TV<br>การรับสัญญาณ (โทรศัพท์ วิทยุ ทีวี)<br><i>My phone has bad <b>reception</b> inside the lift.</i></td></tr>
<tr><td><b>text message</b> (n.)</td><td>a short written message sent by phone<br>ข้อความ SMS<br><i>Mum sent me a <b>text message</b>: “Dinner is ready!”</i></td></tr>
<tr><td><b>wear and tear</b> (n.)</td><td>damage that comes from normal use over a long time<br>การสึกหรอจากการใช้งาน<br><i>After two years, my football shows a lot of <b>wear and tear</b>.</i></td></tr>
<tr><td><b>Wi-Fi</b> (n.)</td><td>a way to connect to the internet without wires<br>ไวไฟ อินเทอร์เน็ตไร้สาย<br><i>The library has free <b>Wi-Fi</b>.</i></td></tr>
</table></div>
<div class="key">คำหลายความหมาย ดูจากประโยครอบข้าง: <b>key</b> = กุญแจ / ปุ่มบนแป้นพิมพ์ · <b>reception</b> = แผนกต้อนรับ / การรับสัญญาณโทรศัพท์ · <b>tear</b> อ่านว่า “แทร์” = ฉีก แต่อ่านว่า “เทียร์” = น้ำตา · <b>break</b> = แตก / พัง / ช่วงพัก<br>รูปอดีต (ใช้บ่อยในบทอ่าน): break → broke · cost → cost · tear → tore · drop → dropped · dip → dipped · grab → grabbed</div>
<p><small>คำอื่นในรายการคำศัพท์ Unit 6 ฉบับ British English (ไม่ใช่คำหลัก แต่อาจเจอในเล่ม): ad / advertisement โฆษณา · advertiser ผู้ลงโฆษณา · brand ยี่ห้อ · detective นักสืบ · notice สังเกตเห็น · testimonial คำรับรองจากผู้ใช้หรือคนดัง · repetition การพูดซ้ำ ๆ · technique เทคนิค วิธีการ · pressure แรงกดดัน</small></p>
<h4>บทอ่านในหนังสือ (ต้องอ่านเองจากเล่ม)</h4>
<ul>
<li>Unit 5: (OWSB) <i>Life Is Everywhere</i> · (OWWB) <i>Web Masters</i></li>
<li>Unit 6: (OWSB) <i>Be an Ad Detective!</i> · (OWWB) <i>Cool Stuff – for Free!</i></li>
</ul>
<p>อ่านเรื่องละ 2 รอบ: รอบแรกหาว่าเรื่องพูดถึงอะไร รอบสองมองหาคำศัพท์จากตารางข้างบนที่อยู่ในเรื่อง แล้วลองเล่าเรื่องสั้น ๆ ให้คนที่บ้านฟัง</p>
<h4>Passage 5 (Unit 5): A Tiny World in the Garden</h4>
<p><small>บทอ่านนี้เขียนขึ้นใหม่สำหรับเว็บนี้ ไม่ใช่บทอ่านในหนังสือ · ข้อสอบที่ขึ้นต้นว่า Passage 5 ถามจากเรื่องนี้ (ตอนทำข้อสอบจะมองไม่เห็นบทอ่าน ให้อ่านให้จบก่อน)</small></p>
<div class="ex"><p>Ploy loves small living things. On Saturday, she and her dad explored their garden.</p>
<p>First, they found a spider web between two bushes. It was about 30 centimetres wide. Each line of silk was very thin – less than 0.01 millimetres thick – but the web was strong enough to catch a fly. A big brown spider sat in the middle. “It’s probably a female,” said Dad. “In many kinds of spiders, the female is much bigger than the male.”</p>
<p>Suddenly, a fly hit the web. The spider ran out and grabbed it. “Horrible!” said Ploy’s little brother. But Ploy thought it was amazing. Spiders are not insects – they have eight legs, but insects have six. Spiders help humans because they eat lots of insects.</p>
<p>Next, Ploy put a drop of water from the garden pond under her microscope. She saw many strange tiny organisms swimming around. Some were made of only one cell! The pond is their habitat.</p>
<p>That night, Ploy wrote in her notebook: “Our garden is a small world, and it is full of life.”</p></div>
<p><small>explore สำรวจ · bush พุ่มไม้ · silk เส้นใย (ใยแมงมุม) · probably น่าจะ · amazing น่าทึ่ง · pond บ่อน้ำ · notebook สมุดบันทึก</small></p>
<h4>Passage 6 (Unit 6): Is It Really Free?</h4>
<p><small>บทอ่านนี้เขียนขึ้นใหม่สำหรับเว็บนี้ ไม่ใช่บทอ่านในหนังสือ · ข้อสอบที่ขึ้นต้นว่า Passage 6 ถามจากเรื่องนี้ (ตอนทำข้อสอบจะมองไม่เห็นบทอ่าน ให้อ่านให้จบก่อน)</small></p>
<div class="ex"><p>One evening, an ad popped up in Ben’s favourite game: “Congratulations! Download our new app today and get a FREE waterproof watch! Only 10 watches left!”</p>
<p>Ben was excited, but his sister Nina said, “Wait. Let’s read the small print first.” The small print was at the bottom of the ad. The watch was free, but delivery cost 250 baht. The app was free for only seven days. After that, it would cost 99 baht every month!</p>
<p>Then Nina looked for reviews from real customers. Many said the watch was poor quality. One customer wrote, “I dipped my watch in water and it stopped working. It isn’t really waterproof!” Another wrote, “The strap tore after one week.” And nobody could find the name of the manufacturer.</p>
<p>Ben decided to say no to the offer. “Ads often want us to act fast, so we don’t stop and think,” said Nina. “Before you say yes to something free, ask: What will I really pay?” Later, Ben sent his friend a text message: “Don’t download that app!”</p></div>
<p><small>pop up เด้งขึ้นมา · small print ตัวหนังสือเล็ก ๆ ที่บอกเงื่อนไข · delivery การส่งของ · review ความเห็นของคนที่เคยซื้อ · strap สายนาฬิกา · offer ข้อเสนอ · download ดาวน์โหลด</small></p>
<div class="key"><b>เทคนิคที่โฆษณามักใช้ชวนให้ซื้อ</b> (ความรู้ทั่วไป ไม่ได้มาจากหนังสือ)<br>• <b>Testimonial</b> — คนดัง นักกีฬา หรืออินฟลูเอนเซอร์บอกว่า “ใช้แล้วดี” ให้เราอยากใช้ตาม (บางคนได้เงินค่าโฆษณา)<br>• <b>Bandwagon</b> (“Everyone has one!”) — ทำให้ดูเหมือนทุกคนมีแล้ว ถ้าเราไม่มีจะตกเทรนด์ (สร้าง pressure)<br>• <b>Association</b> — โยงสินค้ากับสิ่งดี ๆ เช่น ความสนุก ความเท่ ความแข็งแรง<br>• <b>Repetition</b> — พูดชื่อสินค้าหรือคำขวัญซ้ำ ๆ ให้เราจำได้<br>• <b>Urgency</b> — เร่งให้รีบ เช่น “วันนี้วันสุดท้าย!” “เหลือ 10 ชิ้น!” จะได้ไม่ทันคิด<br>• <b>“FREE!”</b> — ของฟรีอาจมีค่าส่ง หรือฟรีแค่ช่วงแรกแล้วเก็บเงินทุกเดือน ต้องอ่านเงื่อนไขก่อนเสมอ</div>
<div class="key"><b>เทคนิคทำ Unseen Reading (บทอ่านที่ไม่เคยเห็นมาก่อน)</b><br>① อ่านชื่อเรื่องและคำถามก่อน จะได้รู้ว่าต้องหาอะไร<br>② อ่านทั้งเรื่องรอบแรกเร็ว ๆ หาใจความ: เรื่องนี้เกี่ยวกับใคร/อะไร<br>③ หาคำสำคัญจากคำถาม (ชื่อ ตัวเลข คำศัพท์) แล้วกลับไปหาในเรื่อง อ่านประโยครอบ ๆ ให้ดี<br>④ เจอคำที่ไม่รู้ ให้เดาจากประโยครอบข้าง ไม่ต้องรู้ทุกคำก็ตอบได้<br>⑤ ระวังคำว่า NOT, EXCEPT, only, always, never ในคำถามและตัวเลือก<br>⑥ ตอบตามที่เรื่องบอก ไม่ใช่ตามที่เราคิดเอง — ตัวเลือกที่เป็นความจริงแต่ไม่ได้ตอบคำถาม ก็ยังเป็นคำตอบที่ผิด</div>`,
      quiz: [
        { q: "What does “habitat” mean?", c: ["the natural home of an animal or plant", "any living thing, like a plant or an animal", "an animal that is fully grown", "a tool for looking at tiny things"], why: "habitat = ถิ่นที่อยู่ตามธรรมชาติ ส่วนตัวเลือกอื่นคือความหมายของ organism, adult และ microscope" },
        { q: "Which tool helps you see organisms that are too tiny for your eyes?", c: ["a microscope", "a telescope", "a thermometer", "a ruler"], why: "microscope = กล้องจุลทรรศน์ ทำให้ของเล็ก ๆ ดูใหญ่ขึ้น ส่วน telescope (กล้องโทรทรรศน์) ใช้ดูของที่อยู่ไกล" },
        { q: "1 centimetre = ______ millimetres", c: ["10", "100", "1,000", "1"], why: "1 m = 100 cm = 1,000 mm ดังนั้น 1 cm = 1,000 ÷ 100 = 10 mm" },
        { q: "Which animal is <b>spotted</b>?", c: ["a leopard", "a crow", "a black cat", "a polar bear"], why: "spotted = มีลายจุด เสือดาวมีลายจุดทั่วตัว ส่วนตัวเลือกอื่นมีสีเดียวล้วน" },
        { q: "The baby ______ my glasses and threw them on the floor!", c: ["grabbed", "tested", "fixed", "dipped"], why: "grab = คว้า จับอย่างรวดเร็ว" },
        { q: "A “manufacturer” is ______.", c: ["a company that makes products", "a person who buys things in a shop", "a model of a person used in tests", "a program on a phone"], why: "manufacturer = ผู้ผลิต ส่วนคนซื้อคือ customer หุ่นทดสอบคือ dummy โปรแกรมในโทรศัพท์คือ app" },
        { q: "Our new car did very well in the ______, so we know it is safe.", c: ["crash test", "text message", "habitat", "reception"], why: "crash test = การทดสอบการชน ใช้ตรวจว่ารถปลอดภัยแค่ไหน" },
        { q: "“Be careful not to <b>tear</b> the page.” Here, “tear” means ______.", c: ["to rip it (ฉีก)", "to cry over it (ร้องไห้)", "to fix it (ซ่อม)", "to wash it (ล้าง)"], why: "tear ที่เป็นกริยาอ่านว่า “แทร์” = ฉีก ส่วน tear ที่อ่านว่า “เทียร์” แปลว่า น้ำตา" },
        { q: "I can’t make a phone call here. The ______ is too weak.", c: ["reception", "quality", "customer", "impact"], why: "reception ในประโยคนี้ = การรับสัญญาณโทรศัพท์" },
        { q: "My school bag is three years old and shows a lot of “wear and tear”. This means the bag ______.", c: ["is damaged from being used for a long time", "is still new and has no marks on it", "is wet because someone cried on it", "is waterproof, so rain can’t get in"], why: "wear and tear = การสึกหรอจากการใช้งานนาน ๆ (tear ในวลีนี้อ่านว่า “แทร์”)" },
        { q: "Passage 5 (Garden): Why did Dad think the big spider was a female?", c: ["It was big, and in many kinds of spiders females are bigger.", "It was sitting quietly in the very middle of the web.", "It ran out very quickly and grabbed the fly.", "It was brown, and all female spiders are brown."], why: "พ่อบอกว่าแมงมุมหลายชนิดตัวเมียตัวใหญ่กว่าตัวผู้มาก ตัวนี้ตัวใหญ่จึงน่าจะเป็นตัวเมีย — ที่มันนั่งอยู่กลางใยเป็นเรื่องจริงในบทอ่าน แต่ไม่ใช่เหตุผลที่พ่อบอก" },
        { q: "Passage 5 (Garden): Why are spiders helpful to humans?", c: ["They eat lots of insects.", "They have eight legs.", "Their silk is very thin.", "They live in gardens."], why: "เรื่องบอกว่า Spiders help humans because they eat lots of insects — ตัวเลือกอื่นไม่ใช่เหตุผลที่แมงมุมช่วยมนุษย์" },
        { q: "Passage 6 (Free offer): If Ben said yes to the offer, what would he have to pay?", c: ["250 baht for delivery, and later 99 baht a month for the app", "nothing at all, because the watch and the app were both free", "250 baht for the watch, but the app would always be free", "99 baht for the watch, and the delivery would be free"], why: "ตัวหนังสือเล็ก ๆ บอกว่าค่าส่ง 250 บาท และแอปฟรีแค่ 7 วัน หลังจากนั้นเดือนละ 99 บาท" },
        { q: "Passage 6 (Free offer): What is the main lesson of the story?", c: ["Read the small print, because “free” things may cost money.", "Download free apps quickly, before they are all gone.", "Waterproof watches are always of poor quality.", "Ads always tell us everything about a product."], why: "ใจความสำคัญ: ของ “ฟรี” อาจมีค่าใช้จ่ายแอบแฝง ต้องอ่านเงื่อนไขก่อนตัดสินใจ" }
      ]
    }
  ]
};
