# JIO 軟體工坊網站（jio-studio）

網址：https://abulaboy.github.io/jio-studio/ 。GitHub Pages 直接發布 `main` 分支，推上去 1～2 分鐘後就會上線。
全程用繁體中文（台灣用語）回覆老闆。

## 開工前

- 這個 repo 是唯一正本。公司電腦、家裡電腦、別的對話都會改它，所以每次開工先 `git fetch` 再從 `origin/main` 開始。
  `C:\AI\JIO公司` 是舊的本機工作資料夾，不是正本，不要從那裡複製 index.html 過來蓋掉。
- 素材都在 Google Drive（電腦上掛在 `H:\我的雲端硬碟`）：
  - `jio company/`：網站相關文件、檢查報告、定裝照
  - `JIO 連載漫畫：棒球員成長故事/`：《時薪三千的唯一魔球》
  - 印度漫畫、Kaz 外傳、《第四落潮》（資料夾名「最偉大的漫畫作品」）放在 `jio company/員工定裝照（影片一律照這個長相）/` 裡面
- 提交身分：`git -c user.name=abulaboy -c user.email=222924039+abulaboy@users.noreply.github.com commit …`

## 網站結構

整個網站是一個 `index.html`（約 1.1 萬行）。每個功能是一個「模組」，各自一段 `<style id="…">` 和 `<script id="…">`，一段接一段貼在檔案裡：

| 模組 id | 做什麼 |
|---|---|
| 檔頭到第 1360 行左右 | 基本版面、首頁、公司簡介、成員、服務、聯絡表單（`MAIL_URL`）、三語切換 |
| `jio-m3-*` | 茶水間（左下杯子）、logo 連點花瓣、油燈提示 |
| `jio-mod4-cases-*` | 示範案例 |
| `jio-m5-duty-*` | 輪值小助手（右下聊天鈕） |
| `jio-mod6-*` | 公司簡介裡的「客戶規格書與架構深潛」 |
| `jio-m7-*` | 聯絡我們頁的補強 |
| `jio-mod8-*` | 成員介紹的照片牆 |
| `jio-mod11-*` | 專案階段旅程圖（點各階段看負責成員、產出與工時） |
| `jio-m10-journal-*` | 工坊日誌分頁 |
| `jio-m12-*` | 首頁數據區（`.stats`） |
| `jio-m13-*` | 服務與流程 |
| `jio-m14-*` | 頁尾、跳到主要內容、Rudy 導覽（`window.__jioStartTour()` 開始） |
| `jio-mod16-*` | 每日報告分頁（資料在 `reports/reports.js`） |
| `jio-m17-*` | 聯絡頁地址（目前是浦那的示範地址） |
| `jio-qa-patch-*`、`jio-r2-patch-*` | 早期的修補樣式（手機面板位置等，用 id 選擇器加 `!important`，優先權很高） |
| `jio-mod18-*` | 作品集：YouTube、連載漫畫書架與閱讀器、接力作品、網頁作品（遊戲、3D、小工具）、員工海報 |
| `jio-slim-*` | 手機瘦身：導覽列單排、浮動鈕合成一顆、首頁「讓 Rudy 帶你逛」按鈕 |

其他檔案：

- `works/comic/list.js`：漫畫清單；`works/comic/<作品>/<話>/<頁>.jpg`：漫畫頁
- `works/posters/`：員工海報；`works/relay/`：接力作品（`*.html` 是轉址到 LJ_go 的空殼）
- `home/`：首頁「辦公室小劇場」四張小圖（`comic_<員工>.jpg`，寬 760）
- `works/taipower/`：台電會館訂房小幫手的介紹頁、技能 zip、書籤
- `robots.txt`、`sitemap.xml`：給搜尋引擎用；新增獨立頁面時在 sitemap 加一行
- `reports/`：每日報告圖片與 `reports.js`
- `apps_script/`：聯絡表單寄信的 Google Apps Script 程式與部署步驟
- `*_sheet.jpg`：四位員工定裝照（茶水間頭像也用它）；`logo.jpg`：logo 和分享預覽圖；`icon-64.png`、`icon-180.png`：分頁小圖示

## 常見工作怎麼做

### 加一集 YouTube 影片
在 `jio-mod18-script` 裡找 `var EPS=[…]`，在最前面加一筆 `{k:'ep4',id:'影片ID'}`（新的在前）。
再到同一段的 `I.zh`、`I.en`、`I.hi` 各加 `ep4:'標題'`、`ep4d:'說明'`。
頻道：JIO COMPANY（youtube.com/@RudyLIU-c3l）。

### 加一話漫畫
1. 圖一律先轉成 JPG（寬 800、品質約 80）。Drive 上很多是 PNG，不要直接推 PNG。
2. 放到 `works/comic/<作品代號>/<兩位數話數>/<兩位數頁碼>.jpg`，例如 `works/comic/moqiu/09/01.jpg`。
3. 把第 1 頁縮到寬 260 存成同資料夾的 `thumb.jpg`（書架封面）。
4. 在 `works/comic/list.js` 對應作品的 `eps` 加一行 `[話數, 頁數, '標題']`；還沒畫完就加第 4 個值 `1`，卡片會顯示「製作中」。
5. 新作品就在 `JIO_COMICS` 加一個物件（`id`、`dir`、三語 `title`、`desc`、`eps`）。

同一頁有好幾個版本時，挑的順序是：`_修正`／`_文字修正` → `_中文版` → `_v3` → `_v2` → 最新的那張；0 位元組的檔案跳過。
魔球第 2 話 P01～06 沒有「中文版」字樣的原檔對話框是空白的，只能用中文版。

閱讀器的行為：手機左右滑或點兩側翻頁、電腦 ← →、Esc 關閉、最後一頁接下一話、看到哪一頁存在瀏覽器（`localStorage` 的 `jio-comic-pos`）。

### 加一份每日報告
在 `reports/reports.js` 的 `window.JIO_REPORTS` 最前面加一筆（`date`、`quota` 圖、`daily` 圖、三語 `note`），圖片放 `reports/`。
報告圖的產生方式：本機 `C:\AI\JIO公司\report\data.json` 改好後跑 `node report/render.js`，再用無頭 Edge 截圖。

### 加一個網頁作品（遊戲、3D、小工具）
在 `jio-mod18-script` 的 `var APPS=[…]` 加一行 `[{zh,en,hi} 名稱, {zh,en,hi} 說明, 網址]`。
claude.ai 的 artifact 網址要登入才能開，能放 GitHub Pages 就放 GitHub Pages。

### 改文字（三語）
大部分頁面文字在檔頭的 i18n 字典（`data-i18n` 屬性對應的鍵）；各模組自己的文字在模組裡的 `I` 或 `I18N` 物件（`zh`、`en`、`hi` 三份都要改）。
切換語言是改 `<html data-lang>`，模組用 MutationObserver 聽這個屬性重畫文字。

## 規則與地雷

- 新功能做成新模組，貼在檔案最後的 `</body>` 前面；不要整份重新產生 index.html。
  （`C:\AI\JIO公司\build.js` 是很早期用來拼檔的，現在的 index.html 有它沒有的修補，不要再跑它。）
- 全站有一個點擊監聽會攔截帶 `data-k`、`data-m`、`data-t`、`data-go` 屬性的元素，新模組不要用這幾個屬性名。
- 不要用 3D CSS（`preserve-3d`、`perspective`），之前讓預覽卡死過。
- index.html 混用 CRLF 和 LF 換行；用腳本改檔時兩種都要能對到。
- 手機版的面板位置被 `jio-qa-patch`／`jio-r2-patch` 用 id 加 `!important` 鎖住，要改位置得用更高的優先權，或改用別的方式（例如藏按鈕）。
- 圖片推上 GitHub 就永遠留在歷史紀錄裡：只推定稿，先轉 JPG 再推。
- 真實設施名稱可以寫，真實球隊名不要寫。
- 公開版本要遮掉小孩的全名。
- 影片和漫畫裡的四位員工一律照定裝照長相（`*_sheet.jpg`、Drive 的「員工定裝照」資料夾）。

## 測試

本機開一個靜態伺服器指向這個資料夾（例如 `npx http-server -p 8777`，或任何會送出 `.js` 正確類型的伺服器），然後：

- 電腦寬度和手機 375×812 各看一次
- 切繁中／EN／हिंदी 看文字有沒有跟著換
- 主控台沒有錯誤；手機畫面不會左右跑版

推上去之後用 `curl` 或瀏覽器確認正式網站真的更新了（Pages 建置中會短暫回 503）。

## 還沒決定的事（要老闆說了才做）

- 聯絡頁：還寫著「示範占位」、電話是（02）0000-0000；公司簡介說「以台灣為據點」，聯絡地址卻是印度浦那。印度地址加地圖已排進待辦，等老闆說開始。
- 網站定位：以作品集為主，還是以接案為主（「示範案例」分頁是虛構的）。
