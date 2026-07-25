# 單字寵物 🥚→🐉

學英文單字 × 養寵物的兒童網頁遊戲。給 Kevin 和小孩自己玩。

## 快速試玩（本機）
直接用瀏覽器打開 `index.html` 即可（Chrome / Safari）。
> 註：因為有載入 `data/vocab.js`，用 `file://` 直接開多數瀏覽器可跑；若遇到跨檔載入被擋，開個小型本機伺服器即可：`python -m http.server` 然後開 http://localhost:8000 。

## 玩法
- 輸入名字登入（進度存本機 localStorage，下次打開還在）。
- 4 種練習賺 🍎：**認字 / 拼字 / 聽音 / 配對**。
- 用 🍎 餵寵物 → 升級 → 進化（蛋→小龍寶寶→小龍→進化龍）。
- 每日任務：每天答對 10 題 → 額外 +5🍎。
- ⚙️ 家長後台：勾選單字年級範圍、看答對數/等級/今日進度。

## 換寵物圖
把 Nano Banana 生的圖放進 `assets/pets/`，檔名用 `egg.png / baby.png / teen.png / final.png`，自動換上。詳見 `assets/pets/README.md`。

## 加單字
編輯 `data/vocab.js`，往對應年級陣列加 `{en:"…", zh:"…", theme:"…"}`。

## 部署（平板可玩）
推到 GitHub Pages（可沿用 `Kevin-need11/word-pet` repo）即得公開網址，平板開網址 → 分享 → 加到主畫面，變 App 圖示全螢幕玩。

完整設計見 **WHITEPAPER.md**。
