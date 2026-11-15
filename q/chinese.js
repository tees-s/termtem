window.SUBJECT = {
  title: 'ภาษาจีน',
  subtitle: 'สอบนอกตาราง · ในคาบเรียนตามที่ครูนัด',
  note: 'หน้านี้ทบทวน<b>โครงสร้างไวยากรณ์</b>ที่ระบุในแนวข้อสอบ — คำศัพท์ทั้งหมดของบทที่ 5–6 ต้องทบทวนจากหนังสือ JoinChinese for Kids (หน้า 27–38) และแบบฝึกทักษะฟัง-พูด (หน้า 4–5, 8–9) ด้วย',
  sections: [
    {
      title: 'บทที่ 5 中国菜很好吃。 อาหารจีนอร่อยมาก',
      html: `
<p class="zh">中国菜很好吃。</p>
<p>Zhōngguó cài hěn hǎochī — อาหารจีนอร่อยมาก</p>
<div class="tw"><table>
<tr><th>คำ</th><th>พินอิน</th><th>ความหมาย</th></tr>
<tr><td class="zh">中国</td><td>Zhōngguó</td><td>ประเทศจีน</td></tr>
<tr><td class="zh">菜</td><td>cài</td><td>อาหาร กับข้าว</td></tr>
<tr><td class="zh">很</td><td>hěn</td><td>มาก</td></tr>
<tr><td class="zh">好吃</td><td>hǎochī</td><td>อร่อย</td></tr>
<tr><td class="zh">喜欢</td><td>xǐhuan</td><td>ชอบ</td></tr>
<tr><td class="zh">吃饱了</td><td>chī bǎo le</td><td>กินอิ่มแล้ว</td></tr>
</table></div>
<figure class="fig"><div class="blocks"><div class="brow"><small>很 + คุณศัพท์</small><div><b class="b1 zh">中国菜</b><i class="zh">很</i><b class="b3 zh">好吃</b></div></div><div class="brow"><small>ประโยค + 吗?</small><div><b class="b1 zh">你喜欢中国菜</b><i class="zh">吗</i><b class="b1">?</b></div></div><div class="brow"><small>…，不过…</small><div><b class="b1 zh">菜很好吃</b><i class="zh">不过</i><b class="b1 zh">我吃饱了</b></div></div></div><figcaption>วงเหลือง = คำไวยากรณ์ที่ต้องจำตำแหน่ง</figcaption></figure>
<h4>① <span class="zh">很</span> + คำคุณศัพท์</h4>
<p>ภาษาจีน<b>ไม่ใช้ 是 (เป็น/คือ)</b> หน้าคำคุณศัพท์ แต่ใช้ <span class="zh">很</span> เชื่อมแทน</p>
<div class="ex"><span class="zh">很好吃</span> hěn hǎochī อร่อยมาก · <span class="zh">很喜欢</span> hěn xǐhuan ชอบมาก<br><span class="zh">中国菜很好吃。</span> ✔　<span class="zh">中国菜是好吃。</span> ✘</div>
<h4>② <span class="zh">第…次</span> บอกลำดับครั้ง</h4>
<p><span class="zh">第</span> (dì) + ตัวเลข + <span class="zh">次</span> (cì) = ครั้งที่…</p>
<div class="ex"><span class="zh">第一次</span> dì yī cì ครั้งที่หนึ่ง (ครั้งแรก) · <span class="zh">第二次</span> dì èr cì ครั้งที่สอง · <span class="zh">第三次</span> dì sān cì ครั้งที่สาม</div>
<h4>③ ประโยคคำถาม <span class="zh">吗</span>?</h4>
<p>นำ <span class="zh">吗</span> (ma) ไปวาง<b>ท้ายประโยคบอกเล่า</b> ก็กลายเป็นคำถาม “…ไหม / …หรือเปล่า”</p>
<div class="ex"><span class="zh">中国菜好吃。</span> อาหารจีนอร่อย → <span class="zh">中国菜好吃<b>吗</b>?</span> อาหารจีนอร่อยไหม<br><span class="zh">你喜欢中国菜<b>吗</b>?</span> Nǐ xǐhuan Zhōngguó cài ma? เธอชอบอาหารจีนไหม</div>
<h4>④ <span class="zh">不过</span> แต่ / แต่ว่า</h4>
<p><span class="zh">不过</span> (búguò) เชื่อมสองประโยคที่ขัดแย้งกัน</p>
<div class="ex"><span class="zh">菜很好吃，<b>不过</b>我吃饱了。</span><br>Cài hěn hǎochī, búguò wǒ chī bǎo le. — อาหารอร่อยมาก แต่ว่าฉันกินอิ่มแล้ว</div>`,
      quiz: [
        { q: '<span class="zh">很好吃</span> แปลว่าอะไร', c: ['อร่อยมาก', 'ชอบมาก', 'อิ่มแล้ว', 'ไม่อร่อย'], why: '很 = มาก, 好吃 = อร่อย' },
        { q: 'เติมคำ: <span class="zh">中国菜 ___ 好吃。</span>', c: ['很', '是', '吗', '第'], why: 'หน้าคำคุณศัพท์ใช้ 很 ไม่ใช้ 是' },
        { q: '<span class="zh">喜欢</span> อ่านว่าอย่างไร', c: ['xǐhuan', 'hǎochī', 'búguò', 'xīngqī'], why: '喜欢 xǐhuan = ชอบ' },
        { q: '<span class="zh">第三次</span> แปลว่าอะไร', c: ['ครั้งที่สาม', 'สามครั้ง', 'วันที่สาม', 'สามคน'], why: '第 + ตัวเลข + 次 = ครั้งที่…' },
        { q: '“ครั้งแรก” ภาษาจีนคือข้อใด', c: ['<span class="zh">第一次</span>', '<span class="zh">第二次</span>', '<span class="zh">一次第</span>', '<span class="zh">星期一</span>'], why: '第一次 dì yī cì = ครั้งที่หนึ่ง' },
        { q: 'ทำให้เป็นประโยคคำถาม: <span class="zh">你喜欢中国菜 ___?</span>', c: ['吗', '很', '次', '不过'], why: '吗 วางท้ายประโยคบอกเล่าเพื่อทำเป็นคำถาม' },
        { q: '<span class="zh">吗</span> ต้องวางไว้ตำแหน่งใดของประโยค', c: ['ท้ายประโยค', 'ต้นประโยค', 'หน้าคำกริยา', 'หลังประธาน'], why: '吗 วางท้ายประโยคบอกเล่าเสมอ' },
        { q: '<span class="zh">不过</span> มีความหมายว่าอย่างไร', c: ['แต่ว่า', 'และ', 'หรือ', 'เพราะว่า'], why: '不过 búguò = แต่ / แต่ว่า' },
        { q: '<span class="zh">菜很好吃，不过我吃饱了。</span> แปลว่าอะไร', c: ['อาหารอร่อยมาก แต่ว่าฉันอิ่มแล้ว', 'อาหารไม่อร่อย ฉันจึงไม่กิน', 'ฉันชอบอาหารจีนมาก', 'อาหารอร่อยมาก ฉันยังไม่อิ่ม'], why: '不过 = แต่ว่า, 吃饱了 = กินอิ่มแล้ว' },
        { q: '<span class="zh">你喜欢中国菜吗?</span> แปลว่าอะไร', c: ['เธอชอบอาหารจีนไหม', 'เธอชอบอาหารจีนมาก', 'อาหารจีนอร่อยไหม', 'เธอเป็นคนจีนไหม'], why: '你 เธอ, 喜欢 ชอบ, 中国菜 อาหารจีน, 吗 ไหม' },
        { q: 'ประโยคใดถูกต้อง', c: ['<span class="zh">我很喜欢中国菜。</span>', '<span class="zh">我喜欢很中国菜。</span>', '<span class="zh">很我喜欢中国菜。</span>', '<span class="zh">我喜欢中国菜很。</span>'], why: '很 วางหน้าคำที่ต้องการขยาย: 很喜欢 = ชอบมาก' }
      ]
    },
    {
      title: 'บทที่ 6 我们去大皇宫还是水上市场? ไปพระบรมมหาราชวังหรือตลาดน้ำดี',
      html: `
<p class="zh">我们去大皇宫还是水上市场?</p>
<p>Wǒmen qù Dà huánggōng háishi shuǐshàng shìchǎng? — พวกเราจะไปพระบรมมหาราชวังหรือตลาดน้ำดี</p>
<div class="tw"><table>
<tr><th>คำ</th><th>พินอิน</th><th>ความหมาย</th></tr>
<tr><td class="zh">我们</td><td>wǒmen</td><td>พวกเรา</td></tr>
<tr><td class="zh">去</td><td>qù</td><td>ไป</td></tr>
<tr><td class="zh">大皇宫</td><td>Dà huánggōng</td><td>พระบรมมหาราชวัง</td></tr>
<tr><td class="zh">水上市场</td><td>shuǐshàng shìchǎng</td><td>ตลาดน้ำ</td></tr>
<tr><td class="zh">读</td><td>dú</td><td>อ่าน (ออกเสียง)</td></tr>
</table></div>
<h4>① <span class="zh">星期 = 周</span> สัปดาห์ / วันในสัปดาห์</h4>
<p><span class="zh">星期</span> (xīngqī) กับ <span class="zh">周</span> (zhōu) ใช้แทนกันได้</p>
<div class="tw"><table>
<tr><th>วัน</th><th>星期</th><th>周</th></tr>
<tr><td>จันทร์</td><td class="zh">星期一</td><td class="zh">周一</td></tr>
<tr><td>อังคาร</td><td class="zh">星期二</td><td class="zh">周二</td></tr>
<tr><td>พุธ</td><td class="zh">星期三</td><td class="zh">周三</td></tr>
<tr><td>พฤหัสบดี</td><td class="zh">星期四</td><td class="zh">周四</td></tr>
<tr><td>ศุกร์</td><td class="zh">星期五</td><td class="zh">周五</td></tr>
<tr><td>เสาร์</td><td class="zh">星期六</td><td class="zh">周六</td></tr>
<tr><td>อาทิตย์</td><td class="zh">星期天 / 星期日</td><td class="zh">周日</td></tr>
</table></div>
<div class="tw"><table>
<tr><td class="zh">上星期</td><td>shàng xīngqī</td><td>สัปดาห์ที่แล้ว</td></tr>
<tr><td class="zh">这星期</td><td>zhè xīngqī</td><td>สัปดาห์นี้</td></tr>
<tr><td class="zh">下星期</td><td>xià xīngqī</td><td>สัปดาห์หน้า</td></tr>
<tr><td class="zh">那星期</td><td>nà xīngqī</td><td>สัปดาห์นั้น</td></tr>
</table></div>
<figure class="fig"><div class="week"><div><b class="zh">一</b><small>จ.</small></div><div><b class="zh">二</b><small>อ.</small></div><div><b class="zh">三</b><small>พ.</small></div><div><b class="zh">四</b><small>พฤ.</small></div><div><b class="zh">五</b><small>ศ.</small></div><div><b class="zh">六</b><small>ส.</small></div><div><b class="zh">天</b><small>อา.</small></div></div><figcaption><span class="zh">星期</span> หรือ <span class="zh">周</span> + ตัวเลข 1–6 = จันทร์–เสาร์ · วันอาทิตย์ใช้ <span class="zh">天 / 日</span></figcaption></figure>
<figure class="fig"><div class="flow"><span><em>⬅️</em><span class="zh">上星期</span><br>สัปดาห์ที่แล้ว</span><i>→</i><span><em>📍</em><span class="zh">这星期</span><br>สัปดาห์นี้</span><i>→</i><span><em>➡️</em><span class="zh">下星期</span><br>สัปดาห์หน้า</span></div></figure>
<div class="key">จำ: <span class="zh">上</span> (บน) = ที่แล้ว · <span class="zh">下</span> (ล่าง) = หน้า/ถัดไป · <span class="zh">这</span> = นี้ · <span class="zh">那</span> = นั้น</div>
<h4>② <span class="zh">还是</span> หรือว่า (ใช้ในคำถามให้เลือก)</h4>
<p>โครงสร้าง: <b>A + <span class="zh">还是</span> + B?</b> — ไม่ต้องเติม <span class="zh">吗</span></p>
<div class="ex"><span class="zh">你喝茶<b>还是</b>咖啡?</span> Nǐ hē chá háishi kāfēi? เธอดื่มชาหรือกาแฟ<br><span class="zh">我们去大皇宫<b>还是</b>水上市场?</span> พวกเราไปพระบรมมหาราชวังหรือตลาดน้ำ</div>
<h4>③ <span class="zh">怎么</span> + คำกริยา = …อย่างไร</h4>
<div class="ex"><span class="zh">怎么去</span> zěnme qù ไปอย่างไร · <span class="zh">怎么读</span> zěnme dú อ่านอย่างไร<br><span class="zh">我们怎么去大皇宫?</span> พวกเราไปพระบรมมหาราชวังอย่างไร</div>
<figure class="fig"><div class="blocks"><div class="brow"><small>A 还是 B ?</small><div><b class="b1 zh">你喝</b><b class="b2 zh">茶</b><i class="zh">还是</i><b class="b2 zh">咖啡</b><b class="b1">?</b></div></div><div class="brow"><small>怎么 + กริยา</small><div><b class="b1 zh">我们</b><i class="zh">怎么</i><b class="b3 zh">去</b><b class="b1">?</b></div></div></div><figcaption>เธอดื่ม ชา หรือ กาแฟ? · พวกเรา ไป อย่างไร?</figcaption></figure>`,
      quiz: [
        { q: '<span class="zh">星期一</span> ตรงกับข้อใด', c: ['<span class="zh">周一</span>', '<span class="zh">周日</span>', '<span class="zh">第一</span>', '<span class="zh">一次</span>'], why: '星期 = 周 ใช้แทนกันได้' },
        { q: '<span class="zh">周三</span> คือวันอะไร', c: ['วันพุธ', 'วันอังคาร', 'วันพฤหัสบดี', 'วันเสาร์'], why: '三 = 3 → วันที่สามของสัปดาห์ คือวันพุธ' },
        { q: 'วันศุกร์ ภาษาจีนคือข้อใด', c: ['<span class="zh">星期五</span>', '<span class="zh">星期四</span>', '<span class="zh">星期六</span>', '<span class="zh">星期天</span>'], why: '五 = 5 → วันศุกร์' },
        { q: '<span class="zh">星期天</span> คือวันอะไร', c: ['วันอาทิตย์', 'วันจันทร์', 'วันเสาร์', 'วันศุกร์'], why: '星期天 หรือ 星期日 / 周日 = วันอาทิตย์' },
        { q: '<span class="zh">下星期</span> แปลว่าอะไร', c: ['สัปดาห์หน้า', 'สัปดาห์ที่แล้ว', 'สัปดาห์นี้', 'ทุกสัปดาห์'], why: '下 = ถัดไป' },
        { q: '<span class="zh">上星期</span> แปลว่าอะไร', c: ['สัปดาห์ที่แล้ว', 'สัปดาห์หน้า', 'สัปดาห์นี้', 'สัปดาห์นั้น'], why: '上 = ที่ผ่านมา' },
        { q: '“สัปดาห์นี้” ภาษาจีนคือข้อใด', c: ['<span class="zh">这星期</span>', '<span class="zh">那星期</span>', '<span class="zh">上星期</span>', '<span class="zh">下星期</span>'], why: '这 zhè = นี้' },
        { q: 'เติมคำ: <span class="zh">你喝茶 ___ 咖啡?</span> (เธอดื่มชาหรือกาแฟ)', c: ['还是', '不过', '很', '怎么'], why: 'A + 还是 + B ใช้ถามให้เลือก' },
        { q: '<span class="zh">还是</span> อ่านว่าอย่างไร', c: ['háishi', 'búguò', 'zěnme', 'xīngqī'], why: '还是 háishi = หรือว่า' },
        { q: '<span class="zh">怎么去</span> แปลว่าอะไร', c: ['ไปอย่างไร', 'ไปที่ไหน', 'ไปเมื่อไร', 'ไปกับใคร'], why: '怎么 = อย่างไร, 去 = ไป' },
        { q: '<span class="zh">怎么读</span> แปลว่าอะไร', c: ['อ่านอย่างไร', 'เขียนอย่างไร', 'ไปอย่างไร', 'กินอย่างไร'], why: '读 dú = อ่าน' },
        { q: '<span class="zh">大皇宫</span> หมายถึงสถานที่ใด', c: ['พระบรมมหาราชวัง', 'ตลาดน้ำ', 'โรงเรียน', 'ร้านอาหารจีน'], why: '大皇宫 Dà huánggōng = พระบรมมหาราชวัง' },
        { q: '<span class="zh">水上市场</span> หมายถึงอะไร', c: ['ตลาดน้ำ', 'พระบรมมหาราชวัง', 'สวนน้ำ', 'ห้างสรรพสินค้า'], why: '水上 = บนน้ำ, 市场 = ตลาด' },
        { q: 'ประโยคคำถามที่ใช้ <span class="zh">还是</span> ต้องเติม <span class="zh">吗</span> ท้ายประโยคหรือไม่', c: ['ไม่ต้องเติม', 'ต้องเติมทุกครั้ง', 'เติมเฉพาะประโยคยาว', 'เติมหน้า 还是'], why: '还是 เป็นคำถามในตัวอยู่แล้ว จึงไม่ใช้ 吗 ซ้ำ' }
      ]
    },
    {
      // งานในเช็กลิสต์ 📖 — เนื้อหาเขียนใหม่และตรวจแล้ว 13 พ.ย. 69 (chinese-vocab, ผลตรวจ: ผู้ตรวจอิสระ fixed)
      title: "ทบทวนคำศัพท์บทที่ 5–6 (ฝึกจำ)",
      html: `
<p>หน้านี้รวมคำศัพท์จาก<b>แนวข้อสอบของโรงเรียน</b>และจาก<b>หัวข้อบทที่ 5–6 ในเว็บนี้</b> (รวมคำที่อยู่ในประโยคตัวอย่างด้วย) มาไว้ฝึกจำในที่เดียว — <b>ไม่ใช่รายการคำศัพท์จากหนังสือ</b> จึงยังต้องทบทวนคำศัพท์ทุกคำในหนังสือ JoinChinese for KIDs หน้า 27–38 และแบบฝึกทักษะฟัง-พูด (เทอม 2) หน้า 4–5 และ 8–9 จากเล่มจริงด้วย</p>
<h4>บทที่ 5 <span class="zh">中国菜很好吃。</span> อาหารจีนอร่อยมาก</h4>
<div class="tw"><table>
<tr><th>คำ · พินอิน</th><th>ความหมาย</th></tr>
<tr><td><span class="zh">中国</span><br>Zhōngguó</td><td>ประเทศจีน</td></tr>
<tr><td><span class="zh">菜</span><br>cài</td><td>อาหาร กับข้าว (แปลว่า ผัก ก็ได้)</td></tr>
<tr><td><span class="zh">中国菜</span><br>Zhōngguó cài</td><td>อาหารจีน</td></tr>
<tr><td><span class="zh">很</span><br>hěn</td><td>มาก</td></tr>
<tr><td><span class="zh">吃</span><br>chī</td><td>กิน</td></tr>
<tr><td><span class="zh">好吃</span><br>hǎochī</td><td>อร่อย</td></tr>
<tr><td><span class="zh">很好吃</span><br>hěn hǎochī</td><td>อร่อยมาก</td></tr>
<tr><td><span class="zh">喜欢</span><br>xǐhuan</td><td>ชอบ</td></tr>
<tr><td><span class="zh">很喜欢</span><br>hěn xǐhuan</td><td>ชอบมาก</td></tr>
<tr><td><span class="zh">饱</span><br>bǎo</td><td>อิ่ม</td></tr>
<tr><td><span class="zh">了</span><br>le</td><td>แล้ว (คำช่วย อ่านเสียงเบา)</td></tr>
<tr><td><span class="zh">吃饱了</span><br>chī bǎo le</td><td>กินอิ่มแล้ว</td></tr>
<tr><td><span class="zh">不过</span><br>búguò</td><td>แต่ แต่ว่า</td></tr>
<tr><td><span class="zh">吗</span><br>ma</td><td>…ไหม (วางท้ายประโยคบอกเล่า ทำให้เป็นคำถาม)</td></tr>
<tr><td><span class="zh">你</span><br>nǐ</td><td>เธอ คุณ</td></tr>
<tr><td><span class="zh">我</span><br>wǒ</td><td>ฉัน ผม</td></tr>
<tr><td><span class="zh">是</span><br>shì</td><td>เป็น คือ <small>(ปกติไม่ใช้หน้าคำคุณศัพท์ ใช้ 很 แทน)</small></td></tr>
<tr><td><span class="zh">第</span><br>dì</td><td>ที่ (วางหน้าตัวเลข บอกลำดับ)</td></tr>
<tr><td><span class="zh">次</span><br>cì</td><td>ครั้ง</td></tr>
<tr><td><span class="zh">第一次</span><br>dì yī cì</td><td>ครั้งที่หนึ่ง (ครั้งแรก)</td></tr>
<tr><td><span class="zh">第二次</span><br>dì èr cì</td><td>ครั้งที่สอง</td></tr>
<tr><td><span class="zh">第三次</span><br>dì sān cì</td><td>ครั้งที่สาม</td></tr>
<tr><td><span class="zh">三次</span><br>sān cì</td><td>สามครั้ง <small>(ไม่มี 第 = บอกว่ากี่ครั้ง ไม่ได้บอกว่าครั้งที่เท่าไร)</small></td></tr>
</table></div>
<h4>บทที่ 6 <span class="zh">我们去大皇宫还是水上市场?</span> พวกเราจะไปพระบรมมหาราชวังหรือตลาดน้ำดี</h4>
<div class="tw"><table>
<tr><th>คำ · พินอิน</th><th>ความหมาย</th></tr>
<tr><td><span class="zh">我们</span><br>wǒmen</td><td>พวกเรา</td></tr>
<tr><td><span class="zh">去</span><br>qù</td><td>ไป</td></tr>
<tr><td><span class="zh">大</span><br>dà</td><td>ใหญ่</td></tr>
<tr><td><span class="zh">皇宫</span><br>huánggōng</td><td>พระราชวัง</td></tr>
<tr><td><span class="zh">大皇宫</span><br>Dà huánggōng</td><td>พระบรมมหาราชวัง (กรุงเทพฯ)</td></tr>
<tr><td><span class="zh">水</span><br>shuǐ</td><td>น้ำ</td></tr>
<tr><td><span class="zh">上</span><br>shàng</td><td>บน</td></tr>
<tr><td><span class="zh">水上</span><br>shuǐshàng</td><td>บนน้ำ</td></tr>
<tr><td><span class="zh">市场</span><br>shìchǎng</td><td>ตลาด</td></tr>
<tr><td><span class="zh">水上市场</span><br>shuǐshàng shìchǎng</td><td>ตลาดน้ำ</td></tr>
<tr><td><span class="zh">还是</span><br>háishi</td><td>หรือว่า (ใช้ถามให้เลือก A หรือ B)</td></tr>
<tr><td><span class="zh">喝</span><br>hē</td><td>ดื่ม</td></tr>
<tr><td><span class="zh">茶</span><br>chá</td><td>ชา</td></tr>
<tr><td><span class="zh">咖啡</span><br>kāfēi</td><td>กาแฟ</td></tr>
<tr><td><span class="zh">怎么</span><br>zěnme</td><td>อย่างไร</td></tr>
<tr><td><span class="zh">读</span><br>dú</td><td>อ่าน อ่านออกเสียง</td></tr>
<tr><td><span class="zh">怎么去</span><br>zěnme qù</td><td>ไปอย่างไร</td></tr>
<tr><td><span class="zh">怎么读</span><br>zěnme dú</td><td>อ่านอย่างไร</td></tr>
<tr><td><span class="zh">动词</span><br>dòngcí</td><td>คำกริยา <small>(ในแนวข้อสอบ: 怎么 + 动词)</small></td></tr>
</table></div>
<p><b>ระวัง:</b> ในแนวข้อสอบ พินอินที่พิมพ์เหนือตัว <span class="zh">去</span> ใน <span class="zh">怎么去</span> เป็น zǒu แต่ <span class="zh">去</span> อ่านว่า qù (ไป) ส่วน zǒu เป็นเสียงของตัว <span class="zh">走</span> (เดิน) — ถ้าสงสัยให้ดูในหนังสือหรือถามครู</p>
<h4>บทที่ 6 (ต่อ) วันและสัปดาห์ <span class="zh">星期 = 周</span></h4>
<p><span class="zh">星期</span> xīngqī = <span class="zh">周</span> zhōu = สัปดาห์ (ใช้แทนกันได้)<br>ตัวเลข: <span class="zh">一</span> yī · <span class="zh">二</span> èr · <span class="zh">三</span> sān · <span class="zh">四</span> sì · <span class="zh">五</span> wǔ · <span class="zh">六</span> liù</p>
<div class="tw"><table>
<tr><th>วัน</th><th><span class="zh">星期</span><br>xīngqī</th><th><span class="zh">周</span><br>zhōu</th></tr>
<tr><td>จันทร์</td><td><span class="zh">星期一</span><br>xīngqī yī</td><td><span class="zh">周一</span><br>zhōu yī</td></tr>
<tr><td>อังคาร</td><td><span class="zh">星期二</span><br>xīngqī èr</td><td><span class="zh">周二</span><br>zhōu èr</td></tr>
<tr><td>พุธ</td><td><span class="zh">星期三</span><br>xīngqī sān</td><td><span class="zh">周三</span><br>zhōu sān</td></tr>
<tr><td>พฤหัสบดี</td><td><span class="zh">星期四</span><br>xīngqī sì</td><td><span class="zh">周四</span><br>zhōu sì</td></tr>
<tr><td>ศุกร์</td><td><span class="zh">星期五</span><br>xīngqī wǔ</td><td><span class="zh">周五</span><br>zhōu wǔ</td></tr>
<tr><td>เสาร์</td><td><span class="zh">星期六</span><br>xīngqī liù</td><td><span class="zh">周六</span><br>zhōu liù</td></tr>
<tr><td>อาทิตย์</td><td><span class="zh">星期天</span><br>xīngqī tiān<br><span class="zh">星期日</span><br>xīngqī rì</td><td><span class="zh">周日</span><br>zhōu rì</td></tr>
</table></div>
<p>วันอาทิตย์<b>ไม่ใช้เลข 7</b> แต่ใช้ <span class="zh">天</span> tiān (วัน, ท้องฟ้า) หรือ <span class="zh">日</span> rì (วัน, ดวงอาทิตย์)</p>
<div class="tw"><table>
<tr><th>คำ · พินอิน</th><th>ความหมาย</th></tr>
<tr><td><span class="zh">上星期</span><br>shàng xīngqī</td><td>สัปดาห์ที่แล้ว <small>(= 上周 shàngzhōu)</small></td></tr>
<tr><td><span class="zh">这星期</span><br>zhè xīngqī</td><td>สัปดาห์นี้</td></tr>
<tr><td><span class="zh">下星期</span><br>xià xīngqī</td><td>สัปดาห์หน้า <small>(= 下周 xiàzhōu)</small></td></tr>
<tr><td><span class="zh">那星期</span><br>nà xīngqī</td><td>สัปดาห์นั้น</td></tr>
</table></div>
<p><b>ลองอ่าน</b> <small>(ประโยคฝึกอ่านที่แต่งขึ้นจากคำในหน้านี้ ไม่ได้มาจากหนังสือ)</small></p>
<div class="ex"><span class="zh">我第一次吃中国菜。</span><br>Wǒ dì yī cì chī Zhōngguó cài. — ฉันกินอาหารจีนเป็นครั้งแรก<br><span class="zh">下星期我们去水上市场。</span><br>Xià xīngqī wǒmen qù shuǐshàng shìchǎng. — สัปดาห์หน้าพวกเราจะไปตลาดน้ำ<br><span class="zh">上星期我们去大皇宫了。</span><br>Shàng xīngqī wǒmen qù Dà huánggōng le. — สัปดาห์ที่แล้วพวกเราไปพระบรมมหาราชวังมา</div>
<div class="key"><b>เคล็ดลับจำ</b><br>① <b>วรรณยุกต์ดูจากรูปเครื่องหมาย</b>: ā เสียง 1 (สูงราบ) · á เสียง 2 (ขึ้น) · ǎ เสียง 3 (ลงแล้วขึ้น) · à เสียง 4 (ตก) · ไม่มีเครื่องหมาย = เสียงเบา เช่น <span class="zh">吗</span> ma, <span class="zh">了</span> le<br>② <span class="zh">不</span> ปกติอ่าน bù แต่ถ้าคำถัดไปเป็นเสียง 4 จะอ่าน bú → <span class="zh">不过</span> búguò (过 guò เสียง 4)<br>③ <b>ดูส่วนประกอบของตัวอักษร</b>: <span class="zh">口</span> (ปาก) อยู่ใน <span class="zh">吃 喝 吗 咖 啡</span> · <span class="zh">艹</span> (หญ้า พืช) อยู่บน <span class="zh">茶 菜</span> · <span class="zh">饣</span> (อาหาร) อยู่ใน <span class="zh">饱</span> · <span class="zh">讠</span> (คำพูด) อยู่ใน <span class="zh">读</span><br>④ <b>ระวังคำคล้ายกัน</b>: <span class="zh">茶</span> chá ชา ≠ <span class="zh">菜</span> cài อาหาร · <span class="zh">吃</span> chī กิน ≠ <span class="zh">次</span> cì ครั้ง<br>⑤ <span class="zh">上</span> shàng (บน) = ที่แล้ว · <span class="zh">下</span> xià (ล่าง) = หน้า/ถัดไป · <span class="zh">这</span> zhè = นี้ · <span class="zh">那</span> nà = นั้น — ทั้ง 4 ตัวเป็นเสียง 4<br>⑥ <b>แยกคำยาวเป็นคำสั้น</b>: <span class="zh">水上市场</span> = น้ำ + บน + ตลาด → ตลาดน้ำ · <span class="zh">中国菜</span> = จีน + อาหาร (ภาษาจีนวางคำขยายไว้หน้า ภาษาไทยวางไว้หลัง)</div>`,
      quiz: [
        { q: "<span class=\"zh\">饱</span> แปลว่าอะไร", c: ["อิ่ม", "หิว", "อร่อย", "ดื่ม"], why: "饱 bǎo = อิ่ม เช่น 吃饱了 = กินอิ่มแล้ว" },
        { q: "ในคำว่า <span class=\"zh\">第一次</span> ตัว <span class=\"zh\">次</span> แปลว่าอะไร", c: ["ครั้ง", "ที่ (บอกลำดับ)", "หนึ่ง", "วัน"], why: "第 = ที่ (บอกลำดับ) · 一 = หนึ่ง · 次 = ครั้ง → ครั้งที่หนึ่ง" },
        { q: "<span class=\"zh\">喝</span> แปลว่าอะไร", c: ["ดื่ม", "กิน", "ไป", "อ่าน"], why: "喝 hē = ดื่ม (กิน = 吃 · ไป = 去 · อ่าน = 读)" },
        { q: "<span class=\"zh\">市场</span> แปลว่าอะไร", c: ["ตลาด", "พระราชวัง", "น้ำ", "ร้านกาแฟ"], why: "市场 shìchǎng = ตลาด → 水上市场 = ตลาดน้ำ" },
        { q: "<span class=\"zh\">周日</span> ตรงกับข้อใด", c: ["<span class=\"zh\">星期天</span>", "<span class=\"zh\">星期一</span>", "<span class=\"zh\">星期六</span>", "<span class=\"zh\">周一</span>"], why: "周 = 星期 ดังนั้น 周日 = 星期天 = 星期日 = วันอาทิตย์" },
        { q: "“อาหารจีน” ภาษาจีนคือข้อใด", c: ["<span class=\"zh\">中国菜</span>", "<span class=\"zh\">菜中国</span>", "<span class=\"zh\">中国茶</span>", "<span class=\"zh\">很好吃</span>"], why: "ภาษาจีนวางคำขยายไว้หน้า: 中国 จีน + 菜 อาหาร (中国茶 = ชาจีน)" },
        { q: "“กาแฟ” ภาษาจีนคือข้อใด", c: ["<span class=\"zh\">咖啡</span>", "<span class=\"zh\">茶</span>", "<span class=\"zh\">菜</span>", "<span class=\"zh\">喝</span>"], why: "咖啡 kāfēi = กาแฟ · 茶 = ชา · 菜 = อาหาร · 喝 = ดื่ม" },
        { q: "“พวกเรา” ภาษาจีนคือข้อใด", c: ["<span class=\"zh\">我们</span>", "<span class=\"zh\">我</span>", "<span class=\"zh\">你</span>", "<span class=\"zh\">你们</span>"], why: "我 ฉัน + 们 (ทำให้เป็นหลายคน) = 我们 พวกเรา" },
        { q: "“สัปดาห์นั้น” ภาษาจีนคือข้อใด", c: ["<span class=\"zh\">那星期</span>", "<span class=\"zh\">这星期</span>", "<span class=\"zh\">下星期</span>", "<span class=\"zh\">上星期</span>"], why: "那 nà = นั้น · 这 = นี้ · 下 = หน้า · 上 = ที่แล้ว" },
        { q: "<span class=\"zh\">茶</span> อ่านว่าอย่างไร", c: ["chá", "cài", "chā", "chī"], why: "茶 chá (เสียง 2) = ชา · cài = 菜 · chī = 吃" },
        { q: "<span class=\"zh\">吃</span> อ่านว่าอย่างไร", c: ["chī", "cì", "qī", "chá"], why: "吃 chī = กิน · cì = 次 · qī = 期 ใน 星期 · chá = 茶" },
        { q: "<span class=\"zh\">怎么</span> อ่านว่าอย่างไร", c: ["zěnme", "zēnme", "zhème", "zǎome"], why: "怎么 zěnme = อย่างไร (怎 เสียง 3 · 么 เสียงเบา)" },
        { q: "เติมคำ: <span class=\"zh\">我吃饱 ___ 。</span> (ฉันกินอิ่มแล้ว)", c: ["了", "吗", "很", "次"], why: "了 le = แล้ว → 吃饱了 กินอิ่มแล้ว" },
        { q: "เติมคำ: <span class=\"zh\">我很 ___ 中国菜。</span> (ฉันชอบอาหารจีนมาก)", c: ["喜欢", "好吃", "喝", "去"], why: "很喜欢 = ชอบมาก ต้องใช้คำกริยา 喜欢 (ชอบ) หน้าคำนาม 中国菜" }
      ]
    }
  ]
};
