# GitHub Fork、Branch、Pull Request 完整教學

在 GitHub 上進行協作開發，Fork（分叉）、Branch（分支）和 Pull Request（拉取請求，簡稱 PR）是三個最核心且不可或缺的概念。理解並熟練運用它們，將使你能夠更有效地參與開源專案，或與團隊成員順暢合作。本教學將詳細解釋這三個概念，並提供實際操作指引。

## 1. Fork (分叉)：複製專案到自己的帳號

### 什麼是 Fork？

Fork 是 GitHub 上的一個動作，它允許你將其他人的公開儲存庫 (repository) 完整地複製一份到你自己的 GitHub 帳號下。這份複製出來的儲存庫包含原始專案的所有檔案、提交歷史 (commit history) 和分支。

**Fork 與 Clone 的區別：**

*   **Clone (複製):** 是將遠端儲存庫 (無論是你自己的還是別人的) 下載到你的本地電腦。你通常 Clone 是為了在本地進行開發。
*   **Fork (分叉):** 是在 GitHub 伺服器上複製一個儲存庫到你的帳號下。它建立了一個你擁有完全控制權的獨立專案副本。

### 為什麼以及何時使用 Fork？

*   **貢獻開源專案:** 這是 Fork 最主要的用途。當你想為一個不屬於你的開源專案貢獻程式碼時，你不能直接修改原始專案。你需要先 Fork 該專案，然後在你 Fork 出來的副本上進行修改。修改完成後，再透過 Pull Request 將你的變更提交給原始專案的維護者。
*   **自由實驗:** 如果你想對某個專案進行修改或實驗，但不想影響原始專案，可以先 Fork 它。這樣你就可以在自己的副本上隨意修改，不用擔心弄亂原作者的程式碼。
*   **作為新專案的起點:** 如果你發現一個專案與你想要做的東西很相似，你可以 Fork 它，然後在其基礎上開發你的新專案。

### 如何 Fork 一個儲存庫？

1.  **找到你想 Fork 的專案頁面。**
2.  **點擊頁面右上角的 "Fork" 按鈕。**
    ![Fork Button](https://docs.github.com/assets/cb-43834/images/help/repository/fork-button.png)
3.  GitHub 會詢問你 Fork 到哪個帳號下 (如果你屬於多個組織的話)，並顯示 Fork 後的儲存庫名稱。
4.  點擊 "Create fork"。幾秒鐘後，你就擁有了一個該專案的完整副本。這個副本會顯示 "forked from [原始專案名稱]"。

現在，你就可以將這個 Fork 到你帳號下的儲存庫 Clone 到本地進行修改了。

## 2. Branch (分支)：平行開發不互相干擾

### 什麼是 Branch？

Branch (分支) 是 Git 版本控制的核心概念之一。想像專案的開發歷史是一條主幹道 (通常是 `main` 或 `master` 分支)。當你想開發一個新功能、修復一個 Bug，或者進行一些實驗性的修改時，你可以從主幹道上開闢一條新的岔路，這條岔路就是一個分支。

在這個新的分支上所做的任何修改，都不會影響到主幹道或其他分支，直到你明確地將這個分支的修改合併 (Merge) 回主幹道。

### 為什麼以及何時使用 Branch？

*   **開發新功能:** 每個新功能都應該在獨立的分支上開發。這樣可以保持 `main` 分支的穩定和可部署狀態。
*   **修復 Bug:** 當發現 Bug 時，可以建立一個專門的分支來修復它，修復完成並測試通過後再合併回 `main` 分支。
*   **實驗性嘗試:** 如果你想嘗試一些新的想法或重構程式碼，但不確定結果如何，可以在分支上進行，成功了再合併，失敗了直接刪除分支即可。
*   **並行開發:** 多個開發者可以同時在不同的分支上開發不同的功能，互不干擾。
*   **保持主分支乾淨:** `main` 分支應該永遠是穩定、可隨時發布的狀態。所有開發工作都在其他分支進行，完成後再合併。

### Branch 的基本操作 (使用 Git 命令列)

假設你已經將儲存庫 Clone 到本地。

*   **查看所有分支:**
    ```bash
    git branch
    ```
    當前所在的分支會以 `*` 標示。

*   **建立新分支:**
    ```bash
    git branch <new-branch-name>
    ```
    例如：`git branch feature/user-authentication`

*   **切換到分支:**
    ```bash
    git checkout <branch-name>
    ```
    或者，建立並立即切換到新分支：
    ```bash
    git checkout -b <new-branch-name>
    ```
    例如：`git checkout -b bugfix/login-error`

*   **將分支推送到遠端儲存庫 (GitHub):**
    當你在本地建立了新分支並進行了一些提交後，你需要將這個分支推送到 GitHub，這樣其他協作者才能看到它，或者你才能基於這個分支建立 Pull Request。
    ```bash
    git push -u origin <branch-name>
    ```
    `-u` (或 `--set-upstream`) 選項會將本地分支與遠端分支關聯起來，之後推送只需要 `git push`。

*   **刪除本地分支 (如果已經合併):**
    ```bash
    git branch -d <branch-name>
    ```
    如果分支還沒有被合併，但你確定要刪除，可以使用 `-D`：
    ```bash
    git branch -D <branch-name>
    ```

*   **刪除遠端分支:**
    ```bash
    git push origin --delete <branch-name>
    ```

在 GitHub 網站上，你也可以在儲存庫頁面輕鬆地建立、切換和管理分支。

## 3. Pull Request (PR)：請求合併你的貢獻

### 什麼是 Pull Request？

Pull Request (簡稱 PR 或有時也稱 Merge Request) 是一種機制，讓你通知專案的維護者：你已經在你自己的分支 (或 Fork 出來的儲存庫的分支) 上完成了一些修改，並希望他們審查這些修改，然後將其合併到專案的主分支中。

Pull Request 提供了一個集中的地方來：

*   **展示你的修改:** 清晰地列出你所做的所有程式碼變更。
*   **討論修改內容:** 你和專案維護者、其他協作者可以在 PR 中對程式碼進行評論、提問和討論。
*   **程式碼審查 (Code Review):** 維護者可以檢查你的程式碼是否符合專案的標準、是否有潛在問題。
*   **自動化檢查:** 可以整合 CI/CD 工具 (如 GitHub Actions) 在 PR 建立時自動運行測試、檢查程式碼風格等。
*   **追蹤變更歷史:** 記錄了為什麼要做這些修改以及是如何被合併的。

### Pull Request 的典型流程

以下是一個常見的開源貢獻流程，涉及 Fork、Branch 和 Pull Request：

1.  **Fork 原始專案:** 將你想貢獻的專案 Fork 到你自己的 GitHub 帳號。
2.  **Clone 你的 Fork:** 將你 Fork 出來的儲存庫 Clone 到你的本地電腦。
    ```bash
    git clone https://github.com/your-username/forked-repo.git
    ```
3.  **設定遠端追蹤 (Upstream):** （可選但推薦）為了方便同步原始專案的更新，可以將原始專案設定為一個遠端，通常命名為 `upstream`。
    ```bash
    cd forked-repo
    git remote add upstream https://github.com/original-owner/original-repo.git
    ```
4.  **同步原始專案的最新變更 (保持你的 main 分支最新):**
    ```bash
    git checkout main  # 或 master
    git fetch upstream
    git merge upstream/main
    git push origin main # 更新你自己 Fork 裡的 main 分支
    ```
5.  **建立新的特性分支 (Feature Branch):** 從你最新的 `main` 分支建立一個新的分支來進行你的修改。
    ```bash
    git checkout -b my-awesome-feature
    ```
6.  **進行修改並提交 (Commit):** 在 `my-awesome-feature` 分支上撰寫程式碼、修復 Bug，並進行有意義的提交。
    ```bash
    # ... 進行修改 ...
    git add .
    git commit -m "feat: Implement user login functionality"
    ```
7.  **推送分支到你的 Fork:**
    ```bash
    git push -u origin my-awesome-feature
    ```
8.  **建立 Pull Request:**
    *   到你 Fork 出來的 GitHub 儲存庫頁面。
    *   GitHub 通常會檢測到你最近推送了新分支，並顯示一個 "Compare & pull request" 的按鈕。點擊它。
        ![Compare & Pull Request Button](https://docs.github.com/assets/cb-pull-request-button/images/help/pull_requests/compare-and-pull-request-button.png)
    *   如果沒有提示，你可以切換到你的新分支，然後點擊 "Contribute" -> "Open pull request"。
    *   **選擇基礎儲存庫和分支:**
        *   **Base repository (基礎儲存庫):** 確保是原始專案的儲存庫 (例如 `original-owner/original-repo`)。
        *   **Base (基礎分支):** 選擇你希望將修改合併進去的目標分支 (通常是 `main` 或 `develop`)。
        *   **Head repository (頭部儲存庫):** 應該是你 Fork 出來的儲存庫 (例如 `your-username/forked-repo`)。
        *   **Compare (比較分支):** 選擇你剛剛推送的特性分支 (`my-awesome-feature`)。
    *   **撰寫 PR 標題和描述:**
        *   **標題:** 簡明扼要地描述你的修改內容。
        *   **描述:** 詳細說明你做了哪些修改、為什麼要這樣修改、解決了什麼問題。如果相關，可以連結到對應的 Issue (例如 `Closes #123`)。
    *   點擊 "Create pull request"。

9.  **程式碼審查和討論:**
    *   原始專案的維護者會收到通知，並審查你的 PR。
    *   他們可能會在程式碼中留下評論，要求你做一些修改。
    *   你可以在本地分支上進行修改，提交並再次推送到你的 Fork，PR 會自動更新。

10. **合併 Pull Request:**
    *   一旦維護者對你的修改滿意，他們會將你的 PR 合併到目標分支。
    *   合併後，你可以安全地刪除你 Fork 中的特性分支 (GitHub 通常會提供按鈕) 和本地的特性分支。

## 4. 最佳實踐

*   **保持分支短生命週期:** 特性分支應該盡快完成並合併，避免與主分支差異過大導致合併困難。
*   **一個 PR 對應一個具體的功能或修復:** 不要將多個不相關的修改混在一個 PR 中。
*   **清晰的提交訊息和 PR 描述:** 讓其他人容易理解你的修改意圖。
*   **在提交 PR 前，從 `upstream` 拉取最新變更並解決衝突:** 確保你的分支是基於最新程式碼，減少維護者的負擔。
    ```bash
    git checkout my-awesome-feature
    git fetch upstream
    git rebase upstream/main  # 或者 git merge upstream/main，rebase 讓歷史更線性
    # 解決可能出現的衝突
    git push origin my-awesome-feature --force-with-lease # 如果 rebase 了，需要強制推送
    ```
*   **定期從 `upstream` 更新你的 `main` 分支。**
*   **不要直接提交到 `main` 分支 (尤其是在協作專案中):** 始終使用分支和 PR。
*   **及時回應 PR 中的評論和討論。**
*   **刪除已經合併的本地和遠端分支，保持整潔。**

## 總結

Fork、Branch 和 Pull Request 是 GitHub 協作的基石。

*   **Fork** 讓你擁有專案的個人副本，以便自由修改和貢獻。
*   **Branch** 讓你能夠在不影響主線的情況下並行開發和隔離工作。
*   **Pull Request** 提供了一個正式的流程來審查、討論和合併你的貢獻。

掌握這些工具和流程，你就能更自信地參與到廣闊的開源世界中，或與你的團隊更高效地協同工作。祝你編碼愉快！
