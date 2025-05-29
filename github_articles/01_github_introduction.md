# GitHub 是什麼？新手入門完整指南

GitHub 是一個基於雲端的平台，主要用於版本控制和協作。它讓開發者可以儲存、管理、追蹤和控制程式碼的變更。GitHub 同時也是一個龐大的開源社群，開發者可以在這裡分享專案、貢獻程式碼，並與他人協作。

## GitHub 與 Git 的關係

要了解 GitHub，首先需要了解 Git。Git 是一個免費且開源的分散式版本控制系統，旨在快速有效地處理從小型到大型專案的所有內容。

想像一下，你正在寫一篇文章或開發一個軟體專案。過程中，你可能會有很多版本：初稿、修改稿、最終稿等等。Git 就是一個可以幫你管理這些不同版本的工具。你可以隨時回到過去的某個版本，比較不同版本之間的差異，或者合併不同人的修改。

GitHub 則是建立在 Git 基礎之上的一個網站服務。它提供了 Git 版本控制的功能，並增加了許多方便協作和專案管理的功能，例如：

*   **遠端倉庫 (Remote Repositories):** 你的 Git 專案可以儲存在 GitHub 上，這樣你和你的團隊成員就可以從任何地方存取。
*   **協作功能 (Collaboration Features):** 例如 Pull Requests（拉取請求）、Code Reviews（程式碼審查）、Issue Tracking（問題追蹤）等，讓團隊合作更有效率。
*   **視覺化介面 (Graphical Interface):** GitHub 提供了一個易於使用的網頁介面，讓不熟悉命令列操作的使用者也能輕鬆上手 Git。
*   **社群功能 (Social Coding):** 你可以關注其他開發者、探索有趣的專案、參與開源專案的貢獻。

簡單來說，**Git 是核心的版本控制工具，而 GitHub 是提供了 Git 功能並擴展了協作與社群功能的平台。**

## GitHub 的常見用途

GitHub 的用途非常廣泛，不僅限於軟體開發。以下是一些常見的應用場景：

*   **版本控制:** 這是 GitHub 最核心的功能。無論是個人專案還是大型團隊專案，都可以使用 GitHub 來管理程式碼或其他文件的版本。
*   **協同工作:** 多個開發者可以同時在同一個專案上工作，透過分支 (Branching)、合併 (Merging) 和 Pull Requests 來整合彼此的程式碼。
*   **開源專案:** GitHub 是全球最大的開源專案託管平台。許多知名的開源軟體，例如 Linux、TensorFlow、VS Code 等，都在 GitHub 上開發和維護。
*   **程式碼審查 (Code Review):** 透過 Pull Requests，團隊成員可以審查彼此的程式碼，確保程式碼品質並分享知識。
*   **問題追蹤 (Issue Tracking):** 專案的 Bug、功能請求或任務可以透過 GitHub Issues 來管理和追蹤。
*   **專案管理:** GitHub Projects 提供了看板等工具，幫助團隊規劃和追蹤專案進度。
*   **文件託管:** 除了程式碼，GitHub 也常用來託管專案文件、說明文檔、Wiki 等。
*   **個人作品集:** 開發者可以將自己的專案放在 GitHub 上，作為個人技能和經驗的展示。
*   **教學與學習:** 許多教學資源和程式碼範例都可以在 GitHub 上找到。

## 如何在 GitHub 上建立新的儲存庫 (Repository)

儲存庫 (Repository，簡稱 Repo) 是 GitHub 上用來存放專案所有檔案、資料夾以及版本歷史的地方。以下是在 GitHub 上建立新儲存庫的步驟：

1.  **登入你的 GitHub 帳號:** 如果你還沒有 GitHub 帳號，請先註冊一個。
2.  **點擊右上角的 "+" 圖示:** 登入後，在頁面的右上角，你會看到一個加號 `+` 圖示。點擊它，然後選擇 "New repository"。
    ![New Repository Button](https://docs.github.com/assets/cb-11290/images/help/repository/repo-create.png)
3.  **填寫儲存庫資訊:**
    *   **Repository name (儲存庫名稱):** 為你的專案取一個簡短且具描述性的名稱。例如："my-first-project" 或 "awesome-website"。
    *   **Description (描述 - 選填):** 簡要描述你的專案是做什麼的。
    *   **Public (公開) 或 Private (私有):**
        *   **Public:** 任何人都可以看到你的儲存庫，但只有你或你授權的人可以修改。開源專案通常是 Public。
        *   **Private:** 只有你或你明確邀請的人才能看到和修改你的儲存庫。
    *   **Initialize this repository with (初始化儲存庫選項):**
        *   **Add a README file (新增 README 檔案):** README 檔案是專案的說明文件，通常包含了專案的介紹、如何安裝、如何使用等資訊。建議勾選此項，GitHub 會自動幫你產生一個空的 README.md 檔案。
        *   **Add .gitignore (新增 .gitignore 檔案):** .gitignore 檔案用來指定哪些檔案或資料夾不需要被 Git追蹤版本。例如，編譯產生的檔案、日誌檔、系統設定檔等。你可以選擇一個適合你專案類型的 .gitignore 範本 (例如 Node、Python、Java 等)。
        *   **Choose a license (選擇授權條款 - 選填):** 如果是開源專案，選擇一個合適的授權條款很重要，它規定了其他人如何使用你的程式碼。
4.  **點擊 "Create repository" (建立儲存庫) 按鈕:** 完成以上設定後，點擊綠色的 "Create repository" 按鈕。

恭喜！你已經成功在 GitHub 上建立了你的第一個儲存庫。現在你可以開始將你的專案檔案上傳到這個儲存庫，並開始使用 Git 和 GitHub 的強大功能了。

接下來，你可以學習如何將本地的 Git 專案連接到 GitHub 遠端儲存庫，或是如何將 GitHub 上的儲存庫複製 (Clone) 到你的電腦上。祝你在 GitHub 的學習旅程愉快！
