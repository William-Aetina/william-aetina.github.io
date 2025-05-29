# 🧩 技術筆記網站功能規劃

### 🔹 功能列表

| 功能項目        | 說明                     |
| ----------- | ---------------------- |
| 筆記首頁        | 顯示所有筆記標題列表             |
| Markdown 載入 | 點擊筆記標題，載入 `.md` 文件     |
| Markdown 轉換 | 使用 JS 將 `.md` 渲染為 HTML |
| 響應式設計       | 適合手機/平板/桌面瀏覽           |
| 主題切換（可選）    | 可加上明亮/暗黑模式             |

---

## 📁 專案結構

```
tech-notes/
├── index.html
├── css/style.css
├── js/main.js
├── js/tailwind-3.4.16.min.js
├── /notes             # 存放 markdown 筆記
│   ├── intro.md
│   └── js-array.md
├── /lib
│   └── marked.min.js  # 用來解析 markdown
└── tailwind.config.js # 如果需要自定義樣式
```

---

## 📝 `notes/intro.md` 範例 Markdown

```markdown
# 入門介紹

這是我的第一篇技術筆記。

## 技術棧

- HTML / CSS / JavaScript
- Tailwind CSS
- Markdown 處理
```

---

## 🛠️ 附加功能（可擴充）

* 🔍 加入搜尋功能（用 JS 過濾筆記標題）
* 🌙 主題切換（Tailwind 支援 `dark:`）
* 🔗 支援 URL hash 導航筆記（如 `#js-array`）
* 🗂 支援目錄分類（以資料夾命名）
* 📂 使用 GitHub Pages 發佈靜態頁
