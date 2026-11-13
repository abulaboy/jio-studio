const fs=require('fs');const {chromium}=require('playwright');const R=__dirname+'/../../../';// 在 repo 根目錄執行：node works/comic/news/make.js，輸出 p1.png… 再轉 JPG 放到 <話數>/
const COL={rudy:'#c0392b',kaz:'#2c5fa8',idn:'#2e7d32',tidal:'#c99a06'},NM={rudy:'Rudy',kaz:'Kaz',idn:'Idn',tidal:'Tidal'};
const b64=n=>'data:image/jpeg;base64,'+fs.readFileSync(R+n+'_sheet.jpg').toString('base64');
const IMG={};for(const n in COL)IMG[n]=b64(n);
// 表情：0 大笑 1 微笑 2 平常 3 擔心 4 累
const STRIPS=[
{title:'雙 11 的 AI 家電',news:'時事：雙 11 檔期，主打 AI 功能的家電賣得好，但也有人質疑只是噱頭。',bg:'#f6e3c0',
 p:[[['idn',0,'老闆，你看！雙 11 我搶到 AI 電鍋，它說會「學習我的口味」！']],
    [['tidal',2,'證據呢？它到底學了什麼？']],
    [['idn',3,'……它學會每天晚上十點提醒我：「你又要吃宵夜了。」']],
    [['kaz',1,'嗯。至少它比你誠實。'],['rudy',2,'我們先對齊一下：公司的電鍋不准裝 AI。']]],end:'結論：最聰明的家電，是不會多嘴的那一台。'},
{title:'人形機器人裝上輪子',news:'時事：有人形機器人改裝成輪子版，正在測試高速移動和搬重物。',bg:'#dfeaf2',
 p:[[['rudy',1,'新聞說人形機器人裝上輪子了，跑得快，還能搬重物。']],
    [['idn',0,'太好了！以後叫它幫我們搬伺服器！']],
    [['kaz',2,'它有輪子、不喊累、也不吃咖哩。']],
    [['idn',4,'……那我的優勢只剩會吃咖哩了。'],['tidal',1,'放心，它還不會找錯字。']]],end:'結論：輪子搶不走的工作，就是挑毛病。'},
{title:'老闆換新模型的那一週',news:'時事：AI 新模型接連推出，主打回應速度更快。',bg:'#e8e0f0',
 p:[[['rudy',0,'老闆換了新模型，聽說回話快了三成！']],
    [['kaz',2,'嗯。所以派工也快了三成。']],
    [['tidal',3,'那我們的額度呢？有跟著多三成嗎？']],
    [['rudy',4,'……我的額度，星期三才回來。'],['idn',3,'我先去吃咖哩等它。']]],end:'結論：老闆變快了，員工還是要等額度。'}];
const face=(n,e,cls)=>`<div class="pf ${cls}" style="border-color:${COL[n]}"><div class="img" style="background-image:url(${IMG[n]});background-position:${e*25}% 18%"></div><span class="nm" style="background:${COL[n]}">${NM[n]}</span></div>`;
function page(s,i){const panels=s.p.map((ch,k)=>{const two=ch.length>1;
 return `<div class="panel"><span class="no">${k+1}</span>${ch.map((c,j)=>`<div class="bub ${two?(j?'r2':'l2'):'one'}" style="border-color:${COL[c[0]]}">${c[2]}</div>`).join('')}<div class="row ${two?'two':''}">${ch.map(c=>face(c[0],c[1],two?'sm':'')).join('')}</div></div>`}).join('');
return `<!doctype html><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;width:800px;font-family:"WenQuanYi Zen Hei","Noto Sans TC",sans-serif;background:#3b1d0b}
.pg{width:800px;padding:14px;background:#3b1d0b}
.hd{background:#fff8e8;border:4px solid #d9a02b;border-radius:14px;padding:12px 18px;margin-bottom:12px}
.hd small{color:#b4460e;font-weight:700;font-size:17px;letter-spacing:2px}.hd h1{margin:2px 0 4px;font-size:38px;color:#3b1d0b;line-height:1.2}.hd p{margin:0;font-size:18px;color:#5a2f12}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.panel{position:relative;height:452px;background:${s.bg};border:4px solid #1c120a;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:12px}
.no{position:absolute;left:0;top:0;background:#1c120a;color:#fff;font-weight:700;font-size:18px;padding:2px 10px;border-radius:0 0 10px 0}
.bub{background:#fff;border:4px solid;border-radius:22px;padding:10px 14px;font-size:23px;line-height:1.4;font-weight:700;color:#1c120a;box-shadow:3px 4px 0 #0003}
.bub.one{margin-top:26px}.bub.l2{margin:26px 60px 0 0;font-size:20px}.bub.r2{margin:8px 0 0 60px;font-size:20px}
.row{display:flex;justify-content:center;gap:10px;align-items:flex-end}
.pf{position:relative;width:200px;height:226px;border:5px solid;border-radius:16px;overflow:hidden;background:#2a1a10;flex:none;box-shadow:3px 4px 0 #0004}
.pf.sm{width:158px;height:176px}
.pf .img{position:absolute;inset:0;background-size:500% auto;background-repeat:no-repeat}
.nm{position:absolute;left:0;bottom:0;color:#fff;font-weight:700;font-size:18px;padding:1px 10px;border-radius:0 10px 0 0}
.ft{margin-top:12px;background:#d9a02b;color:#3b1d0b;font-weight:700;font-size:22px;text-align:center;border-radius:12px;padding:10px}
.sig{color:#fbf1dc;font-size:14px;text-align:right;margin-top:6px;opacity:.85}
</style><div class="pg"><div class="hd"><small>JIO 時事四格・2026 年 11 月第 2 週・第 ${i+1} 篇</small><h1>${s.title}</h1><p>${s.news}</p></div><div class="grid">${panels}</div><div class="ft">${s.end}</div><div class="sig">JIO 軟體工坊｜人物用定裝照，對白為虛構</div></div>`}
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:800,height:1200},deviceScaleFactor:1});
for(let i=0;i<STRIPS.length;i++){await p.setContent(page(STRIPS[i],i));await p.waitForTimeout(300);const el=await p.$('.pg');await el.screenshot({path:`p${i+1}.png`});
 console.log(i+1,await p.evaluate(()=>[...document.querySelectorAll('.panel')].map(e=>e.scrollHeight>e.clientHeight+1)))}
await b.close()})();
