# 成員打招呼語音

成員介紹頁會自動找這個資料夾裡的音檔，有檔案才會出現「聽 ○○ 打招呼」按鈕。

## 檔名（一定要照這個）

| 成員 | 中文 | 英文 | 印地文 |
|---|---|---|---|
| Rudy | `rudy_zh.mp3` | `rudy_en.mp3` | `rudy_hi.mp3` |
| Kaz | `kaz_zh.mp3` | `kaz_en.mp3` | `kaz_hi.mp3` |
| Idn | `idn_zh.mp3` | `idn_en.mp3` | `idn_hi.mp3` |
| Tidal | `tidal_zh.mp3` | `tidal_en.mp3` | `tidal_hi.mp3` |

目前有中文、英文兩套（印地文見下一段），都是用 Kokoro 語音合成（sherpa-onnx 的 kokoro-multi-lang-v1_0）自動產生的，不是真人錄音。
印地文也有一套，同樣是 Kokoro 產生：模型的印地文男聲只有兩種（33、34），Rudy、Idn 用 33，Kaz、Tidal 用 34，再用語速和音高拉開差別（Kaz 音高 0.94、Idn 1.07、Tidal 1.05）。
印地文的讀音字典是用 espeak-ng 逐字轉音標做的；名字寫成天城文再合成（रूडी、काज़、इडन、टाइडल、जियो）。

聲音編號：Rudy 中 49／英 16、Kaz 中 52／英 17（語速 0.9）、Idn 中 50／英 18（語速 1.1）、Tidal 中 51／英 14。
名字的讀法另外加了字典：Rudy「ɹˈudi」、Kaz「kˈɑz」、Idn「ˈɪdᵊn」、JIO「ʤˈiO」。

## 規格

MP3、單聲道、64～96 kbps、每段 5～10 秒、前後不要留太長空白。

## 台詞（要改台詞請同時改 index.html 的 `jio-m19-voice-script` 裡的 `LINES`）

- **Rudy**（沉穩、愛說「先對齊一下」）：嗨，我是 Rudy，JIO 的小主管。開工之前，我們先對齊一下：今天想看影片、漫畫，還是來玩遊戲？
- **Kaz**（低沉、話少）：嗯。我是 Kaz，高階工程師。話不多，程式會動。
- **Idn**（熱情、開朗）：老闆，你看！我是 Idn，全端工程師。網站是我一邊吃咖哩一邊做的，慢慢逛喔！
- **Tidal**（挑剔、認真）：我是 Tidal，測試員。你說網站沒問題？證據呢？找到錯字記得跟我說。

英文與印地文台詞在 index.html 的 `LINES` 裡。
