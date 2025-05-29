# 保護你的程式碼：使用 GitHub 私有倉庫與安全性設定

在軟體開發的過程中，程式碼的安全性至關重要。無論是商業專案的專有演算法、包含敏感資料的應用程式，還是尚未準備好公開的早期原型，妥善保護你的程式碼免於未經授權的存取和潛在威脅，是每位開發者和團隊都應該重視的課題。GitHub 提供了多種工具和設定，幫助你有效地管理和保護你的程式碼，其中私有倉庫 (Private Repositories) 和相關的安全性設定扮演了核心角色。

## 程式碼安全的重要性

程式碼是數位資產的核心，其洩漏或被竄改可能導致：

*   **智慧財產權損失:** 商業機密、專有演算法或獨特功能的曝光。
*   **資料外洩:** 如果程式碼中硬編碼了 API 金鑰、密碼或存取敏感資料的邏輯，可能導致嚴重資料外洩。
*   **安全漏洞被利用:** 攻擊者可能分析原始碼，找出漏洞並加以利用。
*   **名譽損害:** 安全事件可能導致使用者信任度下降和公司名譽受損。
*   **法律與合規風險:** 未能妥善保護使用者資料或敏感資訊可能觸犯法規。

因此，從專案一開始就建立良好的安全實踐至關重要。

## GitHub 私有倉庫 (Private Repositories)

GitHub 私有倉庫是你控制程式碼存取權的第一道防線。

### 如何建立私有倉庫？

1.  **登入你的 GitHub 帳號。**
2.  **點擊右上角的 "+" 圖示，然後選擇 "New repository" (新增儲存庫)。**
3.  **填寫儲存庫資訊：**
    *   **Repository name (儲存庫名稱):** 為你的專案取一個名稱。
    *   **Description (描述 - 選填):** 簡要描述你的專案。
    *   **選擇 "Private" (私有):** 這是關鍵步驟！選擇 "Private" 後，只有你和你明確授權的人才能看到和存取這個儲存庫。
        ![Create Private Repository](https://docs.github.com/assets/cb-12206/images/help/repository/create-repository-name.png) （注意：此圖僅為示意，請確保選擇 "Private"）
    *   **(選填) 初始化選項:** 如 `README`、`.gitignore`、`license`。
4.  **點擊 "Create repository" (建立儲存庫)。**

### 私有倉庫與公開倉庫的差異

| 特性         | 公開倉庫 (Public Repository)                                  | 私有倉庫 (Private Repository)                                   |
| :----------- | :------------------------------------------------------------ | :------------------------------------------------------------- |
| **可見性**   | 任何人都可以搜尋、查看和 Fork。                                   | 只有被授權的協作者才能搜尋、查看和 Fork (Fork 也會是私有的)。        |
| **存取權**   | 任何人都可以 Clone 和查看提交歷史。                               | 只有被授權的協作者才能 Clone 和查看提交歷史。                       |
| **協作**     | 通常透過 Fork 和 Pull Request 進行外部協作。                      | 主要透過直接邀請協作者或團隊進行內部協作。                          |
| **使用案例** | 開源專案、公開函式庫、教學範例、個人作品展示。                      | 專有程式碼、商業應用、包含敏感資料的專案、未公開的個人專案、學術研究原型。 |
| **費用**     | GitHub 對公開倉庫提供免費服務。                                 | GitHub 對個人帳號和組織帳號提供一定數量的免費私有倉庫和協作者額度，超出部分可能需要付費 (依方案而定)。 |

### 私有倉庫的使用案例

*   **專有商業程式碼:** 保護公司的核心技術和商業邏輯。
*   **包含敏感資訊的專案:** 例如處理使用者個人資料、財務資訊或包含 API 金鑰設定檔的專案 (雖然金鑰本身更推薦使用 Secret Management 工具)。
*   **尚未準備公開的專案:** 正在開發中、尚未穩定或需要保密的早期專案。
*   **個人私密專案:** 不想公開的個人實驗、筆記或小型工具。
*   **學術研究原型:** 在論文發表前需要保密的研究成果。
*   **客戶委外專案:** 為特定客戶開發的專案，不應對外公開。

## 管理存取控制 (Managing Access Control)

即使是私有倉庫，也需要精細化管理誰可以存取以及他們可以做什麼。

### 儲存庫權限等級

GitHub 為協作者提供了五種不同的權限等級：

1.  **Read (讀取):**
    *   可以查看和 Clone 儲存庫。
    *   可以 Fork 儲存庫 (Fork 出來的仍是私有)。
    *   可以開啟和評論 Issue、Pull Request。
    *   **不能**推送變更到儲存庫。
    *   適用於需要查看程式碼但不能修改的人，例如 QA 人員、產品經理或利益相關者。

2.  **Triage (分類):**
    *   擁有 Read 權限的所有功能。
    *   可以管理 Issue 和 Pull Request (例如設定標籤、指派、關閉)。
    *   **不能**推送變更到儲存庫。
    *   適用於協助管理專案問題追蹤和 PR 流程的非開發人員。

3.  **Write (寫入):**
    *   擁有 Triage 權限的所有功能。
    *   **可以推送變更到儲存庫 (包括合併 Pull Request，除非有分支保護規則限制)。**
    *   可以管理 Releases (發布版本)。
    *   適用於積極參與程式碼開發的團隊成員。

4.  **Maintain (維護):**
    *   擁有 Write 權限的所有功能。
    *   可以管理儲存庫設定 (例如設定主題、管理 Pages、設定 Webhooks)。
    *   可以推送變更到受保護的分支 (即使有分支保護規則，但通常不建議)。
    *   可以管理儲存庫的安全性功能 (例如設定 Dependabot alerts)。
    *   **不能**新增或移除協作者、刪除儲存庫。
    *   適用於專案的主要維護者或技術主管。

5.  **Admin (管理):**
    *   擁有 Maintain 權限的所有功能 (完全控制權)。
    *   **可以新增和移除協作者、管理團隊存取權。**
    *   **可以變更儲存庫的公開/私有狀態。**
    *   **可以刪除儲存庫。**
    *   **可以設定和修改分支保護規則。**
    *   適用於儲存庫的擁有者或組織管理員。

### 新增和管理協作者與團隊

*   **新增協作者 (Collaborators):**
    1.  在你的私有倉庫頁面，點擊 "Settings" (設定)。
    2.  在左側選單選擇 "Collaborators and teams" (協作者與團隊)。
    3.  點擊 "Add people" (新增成員) 按鈕。
    4.  輸入對方的 GitHub 使用者名稱、全名或 Email。
    5.  選擇授予的權限等級。
    6.  點擊 "Add [username] to this repository"。對方會收到邀請，接受後即可存取。
*   **使用團隊 (Teams - 適用於組織帳號):**
    *   如果你的儲存庫屬於一個 GitHub 組織 (Organization)，使用團隊來管理存取權會更有效率。
    *   你可以在組織層級建立團隊 (例如 "Developers", "QA-Team", "Admins")，為團隊整體授予儲存庫的存取權限。
    *   當有新成員加入或離開時，只需在團隊中進行調整，無需逐一修改每個儲存庫的協作者設定。

**最佳實踐：** 授予協作者「最小權限原則」(Principle of Least Privilege)，即只給予他們完成工作所必需的最低權限。

### 分支保護規則 (Branch Protection Rules)

分支保護規則對於保護重要的分支 (例如 `main` 或 `develop`) 免於意外或未經審查的變更至關重要，尤其是在多人協作的環境中。

你可以設定以下規則：

*   **Require a pull request before merging (合併前必須有 Pull Request):**
    *   所有變更都必須透過 Pull Request 提交，不能直接推送到受保護的分支。
    *   **Require approvals (需要審查通過):** 設定需要多少位協作者審查並批准 PR 後才能合併。
    *   **Dismiss stale pull request approvals when new commits are pushed (當有新的提交推送到 PR 時，撤銷舊的批准):** 確保審查者看到的是最新的程式碼。
    *   **Require review from Code Owners (需要程式碼擁有者審查):** 如果你設定了 `CODEOWNERS` 檔案，可以要求特定部分的程式碼必須由指定的擁有者審查。
*   **Require status checks to pass before merging (合併前需要狀態檢查通過):**
    *   整合 CI/CD 工具 (例如 GitHub Actions)，確保所有自動化測試、程式碼風格檢查等都通過後才能合併 PR。
    *   **Require branches to be up to date before merging (合併前需要分支與目標分支同步):** 減少合併衝突，確保 PR 是基於最新的目標分支程式碼。
*   **Require conversation resolution before merging (合併前需要解決所有討論串):** 確保 PR 中的所有評論和問題都已處理。
*   **Require signed commits (需要簽署的提交):** 確保提交來自可驗證的來源。
*   **Restrict who can push to matching branches (限制誰可以推送到匹配的分支):** 通常會鎖定，只允許透過 PR 合併。你也可以指定特定使用者或團隊有直接推送的權限 (但不建議常用)。
*   **Allow force pushes (允許強制推送 - 強烈不建議對共享分支開啟):** 應避免對 `main` 等共享分支使用強制推送。
*   **Allow deletions (允許刪除 - 強烈不建議對共享分支開啟):** 保護重要分支不被意外刪除。

**設定分支保護規則：**

1.  在儲存庫 "Settings" -> "Branches" (分支)。
2.  點擊 "Add branch protection rule" (新增分支保護規則)。
3.  在 "Branch name pattern" (分支名稱模式) 中輸入你要保護的分支名稱 (例如 `main`)。
4.  勾選並設定你需要的保護規則。

## 增強帳戶安全性

保護你的 GitHub 帳戶本身與保護你的程式碼同樣重要。

### 雙重認證 (Two-Factor Authentication - 2FA)

*   **重要性:** 即使你的密碼被洩漏，2FA 也能提供額外一層安全保護。攻擊者除了需要你的密碼外，還需要你的第二個驗證因素 (例如手機驗證碼、身份驗證器應用程式產生的代碼、或實體安全金鑰)。
*   **設定方法:**
    1.  點擊你的 GitHub 頭像 -> "Settings"。
    2.  在左側選單選擇 "Password and authentication" (密碼與驗證)。
    3.  在 "Two-factor authentication" 區域，點擊 "Enable two-factor authentication"。
    4.  GitHub 會引導你選擇一種 2FA 方式：
        *   **Authenticator app (驗證器應用程式 - 推薦):** 使用如 Google Authenticator, Authy, Microsoft Authenticator 等應用程式產生驗證碼。
        *   **SMS/text message (簡訊):** 接收簡訊驗證碼 (相對不那麼安全，但仍優於沒有 2FA)。
    5.  設定完成後，務必儲存你的恢復代碼 (Recovery Codes) 並放在安全的地方。如果遺失了第二個驗證因素，恢復代碼能讓你重新登入帳戶。

**強烈建議所有 GitHub 使用者啟用 2FA。** 對於組織帳號，管理員可以要求所有成員啟用 2FA。

## 使用 Dependabot 保護你的依賴套件安全

現代軟體專案大量依賴外部函式庫和套件。這些依賴套件可能存在已知的安全漏洞，從而間接影響你的專案安全。

### 什麼是 Dependabot？

Dependabot 是 GitHub 內建的一個工具，可以自動檢查你專案的依賴套件是否有已知的安全漏洞，並協助你將它們更新到安全的版本。

### Dependabot 如何提供幫助？

1.  **Dependabot alerts (Dependabot 警報):**
    *   當 Dependabot 在你的依賴套件中偵測到已知的安全漏洞時 (基於 GitHub Advisory Database)，它會在你的儲存庫 "Security" (安全) 標籤頁下發出警報。
    *   警報會包含漏洞的詳細資訊、嚴重性等級 (例如 Critical, High, Moderate, Low)，以及建議的修復版本。
2.  **Dependabot security updates (Dependabot 安全性更新 - 自動 Pull Request):**
    *   對於偵測到的漏洞，Dependabot 可以自動建立 Pull Request，將有漏洞的依賴套件更新到最低的修補版本。
    *   這些 PR 會包含漏洞資訊、版本更新日誌 (Changelog) 和相容性分數，幫助你評估更新的風險。
3.  **Dependabot version updates (Dependabot 版本更新 - 可選):**
    *   除了安全性更新，你還可以設定 Dependabot 定期檢查依賴套件是否有新版本 (即使沒有安全漏洞)，並自動建立 PR 來更新它們。這有助於保持你的專案使用最新的依賴，減少技術債。

### 啟用和設定 Dependabot

1.  **檢查是否已啟用:** 對於新的私有倉庫，Dependabot alerts 通常是預設啟用的。
2.  **設定 Dependabot alerts:**
    *   在儲存庫 "Settings" -> "Code security and analysis" (程式碼安全與分析)。
    *   確保 "Dependabot alerts" 已啟用。
3.  **設定 Dependabot security updates:**
    *   在 "Code security and analysis" 頁面，啟用 "Dependabot security updates"。
4.  **設定 Dependabot version updates (可選):**
    *   在儲存庫的根目錄建立一個 `.github/dependabot.yml` 檔案。
    *   在此 YAML 檔案中，你可以詳細設定 Dependabot 要檢查哪些套件生態系統 (例如 npm, pip, maven, gomod, composer 等)、檢查頻率、要忽略的更新等。
    *   範例 (`.github/dependabot.yml`):
        ```yaml
        version: 2
        updates:
          # 維護 npm 依賴
          - package-ecosystem: "npm" # See documentation for possible values
            directory: "/" # Location of package manifests
            schedule:
              interval: "daily" # 每天檢查
            reviewers:
              - "your-username" # 指定審查 PR 的人
            labels:
              - "dependencies"
              - "npm"

          # 維護 Dockerfile
          - package-ecosystem: "docker"
            directory: "/"
            schedule:
              interval: "weekly" # 每週檢查
        ```

## 其他 GitHub 安全性最佳實踐

*   **檢閱稽核日誌 (Audit Log - 適用於組織帳號):**
    *   組織管理員應定期檢閱稽核日誌，追蹤組織內成員的活動，例如儲存庫的建立與刪除、協作者的變更、部署金鑰的修改等。
    *   有助於發現異常活動或未經授權的操作。
*   **秘密掃描 (Secret Scanning):**
    *   GitHub 會自動掃描私有倉庫 (如果啟用) 和公開倉庫中的提交，尋找意外洩漏的已知格式的秘密 (例如 API 金鑰、存取權杖)。
    *   如果偵測到，GitHub 會通知相關的服務提供商 (例如 AWS, Azure, Google Cloud) 並/或通知倉庫管理員。
    *   啟用方法：在儲存庫 "Settings" -> "Code security and analysis" -> "Secret scanning"。
    *   **重要：** 秘密掃描是最後一道防線，最好的做法是根本不要將秘密硬編碼到程式碼中。使用環境變數、GitHub Actions secrets 或專用的秘密管理工具。
*   **使用 `.gitignore` 檔案:** 確保不必要的檔案 (例如編譯產生的檔案、日誌檔、包含敏感設定的本地設定檔) 不會被提交到儲存庫中。
*   **教育團隊成員:** 確保所有協作者都了解基本的安全實踐，例如不共享帳戶、不提交敏感資訊、謹慎處理來自外部的程式碼。
*   **定期檢閱協作者權限:** 確保只有必要的人員擁有對儲存庫的存取權，並移除不再需要的協作者。
*   **使用部署金鑰 (Deploy Keys) 或 GitHub Apps 進行自動化存取:** 對於需要從外部服務 (例如 CI/CD 伺服器) 存取儲存庫的情況，使用具有特定範圍權限的部署金鑰或 GitHub Apps，而不是共享個人帳戶憑證。

## 總結

保護你的程式碼是一項持續的努力，需要多層次的防禦策略。GitHub 私有倉庫提供了控制程式碼可見性的基礎，而精細的存取控制、分支保護規則、帳戶安全強化 (如 2FA) 以及 Dependabot 等工具則進一步增強了安全性。透過理解並善用這些功能，結合良好的安全實踐，你可以顯著降低程式碼洩漏和安全漏洞的風險，確保你的專案在一個更安全的環境中開發和維護。记住，安全始於每位開發者的意識和責任。
