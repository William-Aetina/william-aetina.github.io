# GitHub Pages 教學：免費架設靜態網站

GitHub Pages 是 GitHub 提供的一項免費服務，允許你直接從 GitHub 儲存庫 (Repository) 託管靜態網站。無論是個人部落格、專案文件、作品集網站，還是簡單的活動宣傳頁面，GitHub Pages 都能讓你輕鬆快速地將其發布到網路上。本教學將引導你了解 GitHub Pages 的功能、設定方法，以及如何使用 Jekyll 來客製化你的網站。

## 什麼是 GitHub Pages？

GitHub Pages 是一個靜態網站託管服務。它會獲取你儲存庫中的 HTML、CSS 和 JavaScript 檔案，可選地透過 Jekyll 進行建置處理，然後將結果發布到一個公開的網址上。

**主要優點：**

*   **完全免費:** 對於公開儲存庫，GitHub Pages 是免費的。私有儲存庫也可以使用 GitHub Pages，但有一些限制 (例如網站仍然是公開的，除非你使用 GitHub Enterprise Cloud)。
*   **與 Git/GitHub 整合:** 網站內容直接由 Git 版本控制，方便追蹤修改、協作和回溯。
*   **易於部署:** 只需將程式碼推送到特定的分支或資料夾，網站就會自動更新。
*   **支援自訂網域 (Custom Domains):** 你可以將自己的網域名稱指向你的 GitHub Pages 網站。
*   **HTTPS 支援:** 自動為 `*.github.io` 網域和自訂網域提供 HTTPS 加密。
*   **Jekyll 整合:** 內建對 Jekyll (一個簡單易用的靜態網站產生器) 的支援，方便你使用佈景主題、Markdown 和模板。

**限制：**

*   **僅限靜態網站:** GitHub Pages 不支援伺服器端程式碼，例如 PHP、Python (Django/Flask)、Ruby on Rails、Node.js (Express) 等。它只能託管 HTML、CSS、JavaScript 以及圖片、文字檔等靜態資源。資料庫和大部分伺服器端邏輯無法在此運行。
*   **使用限制:** 有一些使用上的限制，例如儲存庫大小 (建議 1GB 以下)、頻寬和每月建置次數。對於大多數個人和專案網站來說，這些限制通常足夠。

## 如何建立 GitHub Pages 網站

GitHub Pages 網站主要有兩種類型：

1.  **使用者/組織網站 (User/Organization Site):**
    *   每個 GitHub 使用者帳號或組織帳號只能建立一個。
    *   儲存庫名稱必須符合特定格式：`<username>.github.io` 或 `<orgname>.github.io`。
    *   網站內容通常從儲存庫的 `main` (或 `master`) 分支的根目錄提供。
    *   發布後的網址為：`https://<username>.github.io` 或 `https://<orgname>.github.io`。

2.  **專案網站 (Project Site):**
    *   可以為儲存庫中的任何專案建立 (除了使用者/組織網站的儲存庫)。
    *   儲存庫名稱可以是任意的。
    *   網站內容可以從 `main` 分支、`gh-pages` 分支，或者 `main` 分支下的 `/docs` 資料夾提供。
    *   發布後的網址為：`https://<username>.github.io/<repository-name>` 或 `https://<orgname>.github.io/<repository-name>`。

### 建立使用者/組織網站的步驟：

1.  **建立新的儲存庫:**
    *   登入 GitHub。
    *   建立一個新的公開儲存庫 (Public Repository)。
    *   **儲存庫名稱必須是：`<your-username>.github.io`** (將 `<your-username>` 替換成你的 GitHub 使用者名稱)。例如，如果你的使用者名稱是 `octocat`，儲存庫名稱就是 `octocat.github.io`。
2.  **將你的網站檔案推送到儲存庫:**
    *   將你的靜態網站檔案 (例如 `index.html`、CSS 檔案、圖片等) 加入到這個儲存庫的 `main` (或 `master`) 分支的根目錄。
    *   你可以直接在 GitHub 網站上傳檔案，或者將儲存庫 Clone 到本地，新增檔案後再 Push 回去。
3.  **等待部署:**
    *   檔案推送後，GitHub Pages 會自動開始建置和部署你的網站。通常需要幾分鐘的時間。
4.  **瀏覽你的網站:**
    *   部署完成後，你就可以透過 `https://<your-username>.github.io` 瀏覽你的網站了。

### 建立專案網站的步驟：

1.  **進入你的專案儲存庫。**
2.  **將你的網站檔案準備好:**
    *   你可以將網站檔案放在專案的根目錄、一個名為 `gh-pages` 的獨立分支，或者 `main` (或 `master`) 分支下的一個名為 `/docs` 的資料夾中。
3.  **設定 GitHub Pages 來源:**
    *   在儲存庫頁面，點擊上方的 "Settings" (設定) 標籤。
    *   在左側選單中，選擇 "Pages"。
    *   在 "Build and deployment" (建置和部署) 區域下的 "Source" (來源) 選項，選擇你的發布來源：
        *   **Deploy from a branch (從分支部署):**
            *   **Branch (分支):** 選擇你要用來發布的分支 (例如 `main`、`gh-pages`) 以及該分支下的資料夾 (通常是 `/root` 或 `/docs`)。
            *   如果選擇 `main` 分支和 `/docs` 資料夾，那麼只有 `/docs` 資料夾內的內容會被發布。
            *   如果選擇 `gh-pages` 分支和 `/root` 資料夾，那麼 `gh-pages` 分支的整個內容都會被發布。
        *   **(可選) GitHub Actions:** 你也可以使用 GitHub Actions 來建置和部署你的網站，這提供了更大的彈性，但設定也相對複雜。
    *   點擊 "Save" (儲存)。
    ![GitHub Pages Source Setting](https://docs.github.com/assets/cb-77426/images/help/pages/published-site-banner.png)
4.  **等待部署並瀏覽:**
    *   儲存設定後，GitHub Pages 會開始部署。完成後，頁面上方會顯示你的網站網址，格式通常是 `https://<username>.github.io/<repository-name>`。

## 發布你的第一個靜態頁面

最簡單的方式是直接建立一個 `index.html` 檔案。

1.  **在你的儲存庫中 (根據你選擇的來源位置)，建立一個名為 `index.html` 的檔案。**
    例如，如果你的使用者網站是 `your-username.github.io`，就在其根目錄建立 `index.html`。
    如果你的專案網站來源是 `main` 分支的 `/docs` 資料夾，就在 `/docs` 資料夾內建立 `index.html`。

2.  **在 `index.html` 中加入一些簡單的 HTML 內容：**
    ```html
    <!DOCTYPE html>
    <html lang="zh-TW">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>我的第一個 GitHub Pages 網站</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>哈囉，GitHub Pages！</h1>
        <p>這是我用 GitHub Pages 架設的第一個靜態頁面。</p>
        <p>現在時間是：<span id="currentTime"></span></p>
        <script src="script.js"></script>
    </body>
    </html>
    ```

3.  **(可選) 建立 `style.css` 檔案來加入樣式：**
    ```css
    body {
        font-family: sans-serif;
        line-height: 1.6;
        margin: 20px;
        background-color: #f4f4f4;
        color: #333;
    }
    h1 {
        color: #007bff;
    }
    ```

4.  **(可選) 建立 `script.js` 檔案來加入簡單的 JavaScript：**
    ```javascript
    document.addEventListener('DOMContentLoaded', function() {
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = new Date().toLocaleTimeString('zh-TW');
        }
    });
    ```

5.  **將這些檔案提交 (Commit) 並推送 (Push) 到你的 GitHub 儲存庫。**

幾分鐘後，你的網站應該就能上線了！

## Jekyll 簡介：GitHub Pages 的好夥伴

Jekyll 是一個簡單、支援部落格的靜態網站產生器。它是用 Ruby 編寫的，並且是 GitHub Pages 內建支援的引擎。

**Jekyll 的主要功能：**

*   **Markdown 支援:** 你可以使用 Markdown (一種輕量級標記語言) 來撰寫內容，Jekyll 會自動將其轉換為 HTML。
*   **佈景主題 (Themes):** Jekyll 擁有豐富的佈景主題生態系統，你可以輕鬆地為你的網站套用專業設計的佈景主題。
*   **模板 (Templating):** 使用 Liquid 模板語言，你可以建立可重複使用的版面配置 (Layouts)、包含片段 (Includes)，以及處理資料。
*   **部落格功能:** 內建對文章 (Posts)、分類 (Categories) 和標籤 (Tags) 的支援。
*   **設定檔 (`_config.yml`):** 透過一個簡單的 YAML 設定檔，你可以配置網站的各種設定，例如網站標題、描述、佈景主題等。

當你將檔案推送到設定為使用 Jekyll 的 GitHub Pages 儲存庫時，GitHub Pages 會在背景執行 Jekyll 建置程序，將你的 Markdown 檔案、模板和佈景主題轉換成最終的靜態 HTML 網站。

**你並非必須使用 Jekyll。** 如果你只想發布純 HTML/CSS/JS 檔案，GitHub Pages 也完全支援。但如果你想利用 Markdown 的便利性、佈景主題或部落格功能，Jekyll 是個絕佳的選擇。

## 基本 Jekyll 用法：佈景主題與客製化

即使你不打算深入學習 Jekyll 開發，也可以輕鬆利用它來美化你的 GitHub Pages 網站。

### 1. 選擇一個 Jekyll 佈景主題

GitHub Pages 支援一系列官方和社群提供的 Jekyll 佈景主題。

*   **在儲存庫設定中選擇主題:**
    1.  到你的儲存庫 "Settings" -> "Pages"。
    2.  在 "Build and deployment" 下方，如果你的來源是分支部署，你可能會看到一個 "Theme Chooser" (佈景主題選擇器) 或類似的選項 (這個介面可能會隨 GitHub 更新而改變)。
    3.  透過這個介面，你可以預覽並選擇一個 GitHub 官方支援的佈景主題。
        ![Jekyll Theme Chooser](https://docs.github.com/assets/cb-73564/images/help/pages/jekyll-theme-highlight.png)
*   **手動設定佈景主題 (透過 `_config.yml`):**
    這是更常見且更靈活的方式。
    1.  在你的儲存庫根目錄 (或者你的 Pages 來源資料夾，例如 `/docs`) 建立一個名為 `_config.yml` 的檔案。
    2.  在 `_config.yml` 中指定佈景主題。例如，要使用受歡迎的 `jekyll-theme-minimal` 佈景主題：
        ```yaml
        # _config.yml
        title: 我的 Jekyll 網站
        description: 一個使用 Jekyll 和 GitHub Pages 架設的網站
        theme: jekyll-theme-minimal # 指定佈景主題的名稱

        # (可選) 其他 Jekyll 設定
        # author: Your Name
        # email: your-email@example.com
        # github_username: your-github-username
        # twitter_username: your-twitter-username

        # (可選) Markdown 處理器，預設是 kramdown
        # markdown: kramdown

        # (可選) 外掛程式 (GitHub Pages 支援部分 Jekyll 外掛)
        # plugins:
        #   - jekyll-feed
        #   - jekyll-seo-tag
        ```
    3.  提交並推送 `_config.yml` 檔案。GitHub Pages 會自動偵測並套用該佈景主題。

    你可以在 [GitHub Pages 官方文件](https://pages.github.com/themes/) 或 [Jekyll 佈景主題網站](https://jekyllthemes.org/) 上找到更多可用的佈景主題。

### 2. 修改 `_config.yml`

`_config.yml` 是 Jekyll 網站的中央設定檔。你可以透過修改它來客製化網站的許多方面：

*   `title`: 網站標題，通常會顯示在瀏覽器標籤頁和網站頁首。
*   `description`: 網站的簡短描述，有助於 SEO。
*   `author`, `email`, `github_username`, `twitter_username`: 許多佈景主題會使用這些資訊來顯示作者連結。
*   特定佈景主題的設定：許多佈景主題有其專屬的設定選項，例如顏色配置、社群媒體連結、導覽列項目等。你需要查閱該佈景主題的文件來了解有哪些可用設定。

### 3. 使用 Markdown 撰寫內容

有了 Jekyll 和佈景主題後，你就可以專注於使用 Markdown 撰寫內容了。

*   **頁面 (Pages):** 在儲存庫根目錄 (或 Pages 來源資料夾) 建立 `.md` 或 `.markdown` 檔案，Jekyll 會將它們轉換成 HTML 頁面。
    例如，建立一個 `about.md` 檔案：
    ```markdown
    ---
    layout: default # 指定使用佈景主題的預設版面配置
    title: 關於我
    ---

    # 關於我

    這是一個關於我的頁面。我喜歡使用 GitHub Pages！
    ```
    `---` 之間的內容稱為 "Front Matter"，是 YAML 格式的資料，用來設定該頁面的變數，例如 `layout` (指定使用哪個版面配置檔案) 和 `title`。

*   **文章 (Posts - 適用於部落格):**
    如果你的佈景主題支援部落格功能，你可以在一個名為 `_posts` 的資料夾中建立文章。
    文章的檔案名稱必須符合格式：`YYYY-MM-DD-your-post-title.md`。
    例如：`_posts/2024-07-25-my-first-post.md`
    ```markdown
    ---
    layout: post # 通常部落格文章會使用 'post' 版面配置
    title: 我的第一篇文章
    date: 2024-07-25 10:00:00 +0800
    categories: [教學, Jekyll]
    tags: [GitHub Pages, 網頁開發]
    ---

    這是我的第一篇部落格文章！
    ```

### 4. (進階) 客製化版面配置和包含片段

如果你想更深入地客製化網站外觀，可以：

*   **覆寫佈景主題的版面配置 (Layouts):** 在你的儲存庫中建立一個 `_layouts` 資料夾，並放入與佈景主題中同名的版面配置檔案 (例如 `default.html`, `post.html`)。Jekyll 會優先使用你提供的版本。
*   **建立自己的包含片段 (Includes):** 在 `_includes` 資料夾中建立可重複使用的 HTML 片段 (例如頁首 `header.html`、頁尾 `footer.html`)，然後在版面配置或其他頁面中使用 `{% include footer.html %}` 來引入它們。

這部分需要對 HTML、CSS 和 Liquid 模板語言有進一步的了解。

## 建立個人網站或專案文件的技巧

*   **選擇合適的佈景主題:**
    *   **個人網站/部落格:** 尋找簡潔、易於閱讀、能突顯內容的佈景主題。例如 `jekyll-theme-minimal`, `jekyll-theme-cayman`, `jekyll-theme-hacker`。
    *   **專案文件:** 尋找具有良好導覽結構、程式碼高亮和搜尋功能的佈景主題。例如 `just-the-docs`, `minimal-mistakes` (功能非常強大，但也較複雜)。
*   **清晰的導覽:** 確保使用者可以輕鬆找到他們需要的資訊。使用 `_config.yml` 或佈景主題的設定來配置導覽列。
*   **良好的 README.md (針對專案網站):** 即使你使用 GitHub Pages 作為專案文件網站，儲存庫本身的 `README.md` 仍然很重要，應提供專案的概覽和如何找到完整文件的連結。
*   **使用自訂網域:** 讓你的網站看起來更專業。你可以在你的網域註冊商那裡設定 CNAME 或 A 記錄指向 GitHub Pages。在儲存庫的 "Settings" -> "Pages" -> "Custom domain" 中輸入你的網域名稱。
*   **定期更新內容:** 對於部落格或文件網站，保持內容的時效性很重要。
*   **利用 Issues 進行回饋:** 如果是專案文件，可以鼓勵使用者透過 GitHub Issues 來回報文件錯誤或提出改進建議。
*   **本地預覽 (推薦):** 為了避免頻繁推送小修改來查看效果，建議在本地安裝 Jekyll 環境。這樣你可以在本地建置和預覽網站，確認無誤後再推送到 GitHub。
    ```bash
    # 安裝 Ruby 和 Jekyll (具體步驟依作業系統而定)
    # gem install bundler jekyll
    # cd your-repo-directory
    # bundle exec jekyll serve
    ```
    然後在瀏覽器中開啟 `http://localhost:4000`。

## 總結

GitHub Pages 是一個非常實用且強大的免費工具，讓靜態網站的架設變得前所未有的簡單。無論你是想建立一個簡單的個人名片頁面、一個內容豐富的部落格，還是一套完整的專案文件，GitHub Pages 都能滿足你的基本需求。結合 Jekyll 的彈性，你可以輕鬆打造出美觀且功能完善的靜態網站。現在就動手試試看吧！
