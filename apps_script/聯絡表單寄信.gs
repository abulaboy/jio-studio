/**
 * JIO 網站「聯絡我們」表單：收到表單資料後，用你自己的 Gmail 寄信給你。
 * 部署方式見同資料夾的「部署步驟.md」。
 */
const TO = 'abulaboyrudy@gmail.com';   // 收信信箱
const MAX_PER_HOUR = 20;               // 每小時最多寄幾封（防止被灌爆）

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }
  const clip = (s, n) => String(s || '').trim().slice(0, n);
  const name = clip(d.n, 100), email = clip(d.e, 200), type = clip(d.t, 100), msg = clip(d.m, 5000);

  if (d.hp) return out({ ok: true });  // 隱藏欄位被填 = 機器人，假裝成功
  if (!name || !msg || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return out({ ok: false, err: 'missing' });

  const cache = CacheService.getScriptCache();
  const count = Number(cache.get('rate') || 0);
  if (count >= MAX_PER_HOUR) return out({ ok: false, err: 'busy' });
  cache.put('rate', String(count + 1), 3600);

  MailApp.sendEmail({
    to: TO,
    replyTo: email,
    name: 'JIO 網站',
    subject: '[JIO 網站洽詢] ' + (type || '未分類') + '－' + name,
    body: '稱呼：' + name + '\n信箱：' + email + '\n類型：' + type + '\n語言：' + clip(d.lang, 10) +
          '\n時間：' + new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }) + '\n\n' + msg +
          '\n\n（直接按「回覆」就會回信給對方）'
  });
  return out({ ok: true });
}

function doGet() { return out({ ok: true, msg: 'JIO 表單寄信服務運作中' }); }

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/** 部署前可以先在編輯器裡選這個函式按「執行」，會寄一封測試信給自己，順便完成授權。 */
function testSend() {
  doPost({ postData: { contents: JSON.stringify({ n: '測試', e: TO, t: '測試', m: '這是測試信', lang: 'zh' }) } });
}
