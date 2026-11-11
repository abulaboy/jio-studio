/* JIO 連載漫畫清單（作品集 → 連載漫畫的書架與翻頁閱讀器讀這份）
 * 加新一話：把圖轉成 JPG 放到 works/comic/<作品代號>/<兩位數話數>/<兩位數頁碼>.jpg，
 *   再做一張 thumb.jpg（第 1 頁縮到寬 260），然後在下面對應作品的 eps 加一行 [話數, 頁數, '標題']。
 *   還在畫的話，加第 4 個值 1（顯示「製作中」）。頁數補齊後把 1 拿掉、更新頁數即可。
 * 標題只寫中文時，英文與印地語畫面會顯示「Ch. N」。
 */
window.JIO_COMICS = [
  {
    id: 'kid',
    title: { zh: 'JIO 員工長篇漫畫《小時候》', en: 'JIO staff comic: "When We Were Kids"', hi: 'JIO स्टाफ कॉमिक: "बचपन"' },
    desc: {
      zh: 'Tidal 在辦公室翻出一張泛黃的舊照片，四位員工一起回想小時候。畫：Kaz（2026-11-09）',
      en: 'Tidal finds a faded old photo and the four look back on their childhood. Art: Kaz (2026-11-09)',
      hi: 'Tidal को एक पुरानी तस्वीर मिलती है और चारों अपना बचपन याद करते हैं। चित्र: Kaz'
    },
    eps: [{ no: 1, t: '小時候', pages: [1, 2, 3, 4, 5, 6].map(function (i) { return 'works/comic/kid_P0' + i + '.jpg'; }), thumb: 'works/comic/kid_thumb.jpg' }]
  },
  {
    id: 'moqiu', dir: 'works/comic/moqiu', chars: true,
    title: { zh: '《時薪三千的唯一魔球》', en: '"The Three-Thousand-an-Hour Magic Pitch"', hi: '"तीन हज़ार प्रति घंटे वाली जादुई गेंद"' },
    desc: {
      zh: '連載漫畫・棒球員成長故事。白天低調領時薪的投手，深夜裂隙出現時才露出真本事。',
      en: 'A baseball growth story. A low-key pitcher clocks in for hourly pay by day and reveals his real power when a rift opens at night.',
      hi: 'बेसबॉल कॉमिक। दिन में शांत गेंदबाज़, रात में दरार खुलने पर असली ताकत।'
    },
    eps: [
      [1, 6, '時薪三千的唯一魔球'],
      [2, 16, '接不住的捕手與不加班主義'],
      [3, 16, '帳單來了'],
      [4, 16, '交流賽'],
      [5, 16, '那球速不對勁'],
      [6, 16, '沉睡的迷宮'],
      [7, 16, '半價便當'],
      [8, 6, '資格戰開始了', 1],
      { no: 'SP', t: '番外：勁敵・白銀聖夜', pages: [1, 2, 3, 4, 5, 6, 7].map(function (i) { return 'works/comic/ch2_P0' + i + '.jpg'; }), thumb: 'works/comic/ch2_thumb.jpg' }
    ]
  },
  {
    id: 'tide', dir: 'works/comic/tide', cover: 'works/comic/tide/cover.jpg',
    title: { zh: '《第四落潮》', en: '"The Fourth Ebb Tide"', hi: '"चौथा भाटा"' },
    desc: {
      zh: '四位員工接力創作的長篇奇幻漫畫，油畫風格。',
      en: 'A long-form fantasy comic created in relay by the four employees, painted in an oil style.',
      hi: 'चारों कर्मचारियों का रिले में बनाया लंबा फ़ैंटेसी कॉमिक।'
    },
    eps: [
      [1, 18, '第 1 話'],
      [2, 18, '第 2 話'],
      [3, 2, '第 3 話', 1]
    ]
  },
  {
    id: 'india', dir: 'works/comic/india',
    title: { zh: 'JIO 印度漫畫', en: 'JIO India Comics', hi: 'JIO भारत कॉमिक्स' },
    desc: {
      zh: '四位員工逛印度：俗語、神話、民間故事，一話講一個。',
      en: 'The four explore India: one saying, myth or folk tale per chapter.',
      hi: 'चारों भारत घूमते हैं: हर अध्याय में एक कहावत, पौराणिक कथा या लोककथा।'
    },
    eps: [
      [1, 18, 'Jugaad 俗語'],
      [2, 15, '象頭神甘尼薩'],
      [3, 15, '阿克巴與比爾巴：烏鴉'],
      [4, 15, '特納利拉曼：空白的畫'],
      [5, 15, '五卷書：獅子與兔子'],
      [6, 15, 'Timepass 俗語'],
      [7, 15, '五卷書：猴子與鱷魚'],
      [8, 15, '阿克巴與比爾巴：遠處的火'],
      [9, 15, '羅摩衍那 第 1 集'],
      [10, 15, '羅摩衍那 第 2 集'],
      [11, 15, 'Kal se pakka 俗語'],
      [12, 6, '胡里節：普拉赫拉德', 1]
    ]
  },
  {
    id: 'kaz', dir: 'works/comic/kaz',
    title: { zh: 'Kaz 外傳', en: 'Kaz Side Stories', hi: 'Kaz की कहानियाँ' },
    desc: {
      zh: 'Kaz 帶大家回哈薩克：草原、金雕、蘋果的故鄉。',
      en: 'Kaz takes everyone home to Kazakhstan: the steppe, golden eagles and the birthplace of the apple.',
      hi: 'Kaz सबको कज़ाख़स्तान ले जाता है: घास के मैदान, सुनहरे बाज़ और सेब का जन्मस्थान।'
    },
    eps: [
      [1, 16, '阿爾達爾・克瑟的破大衣'],
      [2, 16, '金雕獵人'],
      [3, 16, '蘋果之父'],
      [4, 8, '黃金人', 1]
    ]
  }
];
