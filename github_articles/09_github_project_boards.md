# 如何在 GitHub 上建立專案板 (Project Board) 做任務管理

在軟體開發或其他類型的專案中，有效的任務管理是成功的關鍵。GitHub 不僅僅是程式碼託管平台，它內建的 GitHub Projects (通常稱為 Project Boards 或專案板) 功能，提供了一個強大且與你的程式碼和協作流程緊密整合的視覺化任務管理工具。本文將引導你了解 GitHub 專案板是什麼、如何建立和使用它們，以及一些有效運用的技巧。

## GitHub Projects (專案板) 是什麼？

GitHub Projects 是一種互動式的看板 (Kanban-style board)，讓你可以組織、追蹤和管理專案中的任務。你可以將 Issues (問題)、Pull Requests (拉取請求) 和獨立的筆記 (Notes) 以卡片 (Cards) 的形式呈現在不同的欄位 (Columns) 中，清晰地反映任務的狀態和進度。

**使用 GitHub 專案板的好處：**

*   **與開發流程整合:** 直接連結 Issues 和 Pull Requests，使任務狀態與程式碼變更保持同步。
*   **視覺化管理:** 看板形式讓團隊成員能一目了然地看到任務的分配、進度和瓶頸。
*   **彈性客製化:** 可以自訂欄位以適應不同的工作流程 (例如：待辦、進行中、待審核、已完成)。
*   **協同合作:** 團隊成員可以在專案板上互動、指派任務、更新狀態，促進透明溝通。
*   **集中管理:** 將任務管理集中在 GitHub 平台，減少在不同工具間切換的麻煩。
*   **免費使用:** GitHub Projects 是 GitHub 的核心功能之一，無需額外付費。

## 專案板的類型

GitHub 提供了幾種類型的專案板，它們的範圍和可見性有所不同：

1.  **使用者擁有的專案板 (User-owned Projects):**
    *   由個人使用者帳號建立和擁有。
    *   可以連結來自任何個人擁有或有權存取的儲存庫的 Issues 和 Pull Requests。
    *   適合管理個人任務、跨多個個人專案的任務，或小型協作。

2.  **組織範圍的專案板 (Organization-wide Projects):**
    *   由 GitHub 組織 (Organization) 擁有。
    *   可以連結該組織下任何儲存庫的 Issues 和 Pull Requests。
    *   非常適合用於跨團隊、跨專案的宏觀規劃和進度追蹤，例如產品藍圖、季度目標等。

3.  **儲存庫特定的專案板 (Repository-specific Projects):**
    *   直接隸屬於某個特定的儲存庫。
    *   主要用於管理該儲存庫內的任務、Issues 和 Pull Requests。
    *   適合針對單一專案的開發衝刺 (Sprint)、功能開發或 Bug 修復追蹤。

## 如何建立新的專案板

以下是建立專案板的基本步驟：

1.  **導覽至建立位置：**
    *   **使用者擁有的專案板:**
        1.  點擊你的 GitHub 頭像，選擇 "Your projects"。
        2.  在 Projects 頁面，點擊綠色的 "New project" 按鈕。
    *   **組織範圍的專案板:**
        1.  進入你的組織頁面。
        2.  點擊組織名稱下方的 "Projects" 標籤。
        3.  點擊 "New project" 按鈕。
    *   **儲存庫特定的專案板:**
        1.  進入你的儲存庫頁面。
        2.  點擊儲存庫名稱下方的 "Projects" 標籤。
        3.  點擊 "New project" 按鈕。

2.  **選擇專案板範本或從頭開始：**
    *   GitHub 提供了幾種預設範本，例如：
        *   **Basic Kanban:** 包含 "To do", "In progress", "Done" 三個基本欄位。
        *   **Automated Kanban:** 類似 Basic Kanban，但預設了一些自動化規則 (例如 Issue 關閉時自動移到 "Done")。
        *   **Automated Kanban with review:** 增加了 "Review in progress" 和 "Approved" 等欄位。
        *   **Bug triage:** 專為 Bug 分類和處理設計。
    *   你也可以選擇 "Create a project" (或類似的空白選項) 從頭開始建立自訂欄位。

3.  **填寫專案板資訊：**
    *   **Project board name (專案板名稱):** 給你的專案板取一個描述性的名稱。
    *   **Description (描述 - 選填):** 簡要說明這個專案板的用途。
    *   **Template (範本 - 如果你選擇了範本):** 確認範本。
    *   **Visibility (可見性 - 針對使用者和組織專案板):** 可以選擇 "Public" (公開，任何人可見) 或 "Private" (私有，僅限協作者可見)。儲存庫專案板的可見性通常跟隨儲存庫本身。

4.  **點擊 "Create project" (建立專案)。**

## 了解專案板介面

建立專案板後，你會看到一個看板式的介面：

*   **欄位 (Columns):**
    *   垂直的欄位代表任務的不同階段或狀態。
    *   你可以新增、刪除、重新命名和拖曳排序欄位。
    *   常見的欄位包括：
        *   `To do` (待辦事項) / `Backlog` (積壓工作)
        *   `In progress` (進行中)
        *   `In review` (審核中) / `QA` (測試中)
        *   `Done` (已完成) / `Closed` (已關閉)
*   **卡片 (Cards):**
    *   每張卡片代表一個任務。
    *   卡片可以在欄位之間拖曳，以更新其狀態。
    *   卡片的來源可以是：
        *   GitHub Issues
        *   GitHub Pull Requests
        *   獨立的筆記 (Notes)

## 新增卡片到專案板

### 1. 從 Issues 或 Pull Requests 新增

這是最常見且最能發揮 GitHub Projects 整合優勢的方式。

*   **從專案板介面新增：**
    1.  在任何欄位的頂部，點擊 `+ Add cards` (或類似按鈕)。
    2.  右側會滑出一個搜尋面板。你可以搜尋儲存庫中的 Issues 和 Pull Requests (根據專案板的範圍)。
    3.  找到想加入的 Issue/PR 後，直接將其拖曳到對應的欄位，或者點擊它旁邊的 `+`。
*   **從 Issue 或 Pull Request 頁面新增：**
    1.  開啟一個 Issue 或 Pull Request 頁面。
    2.  在右側的選單欄中，找到 "Projects" 區塊。
    3.  點擊齒輪圖示或 "Link a project board"，然後選擇你要加入的專案板和欄位。

### 2. 建立自訂筆記卡片 (Custom Notes)

對於一些不需要追蹤詳細討論或程式碼變更的簡單任務，或者是一些想法、提醒，你可以建立筆記卡片。

1.  在任何欄位的頂部，點擊 `+` 圖示或 "Add item" 按鈕旁邊的下拉選單，選擇 "Add note"。
2.  輸入筆記內容 (支援 Markdown)。
3.  點擊 "Add"。

筆記卡片也可以後續轉換為 Issue。

## 自動化卡片移動 (Automation)

自動化可以大大提升專案板的效率，減少手動操作。

*   **預設自動化 (如果選擇了自動化範本):**
    *   例如，當一個連結的 Issue 被關閉時，其對應的卡片會自動移動到 "Done" 欄位。
    *   當一個 Pull Request 被合併時，卡片也可能自動移到 "Done"。
    *   當一個 Pull Request 處於審核中 (Review requested)，卡片可能自動移到 "In review"。
*   **設定欄位自動化：**
    1.  將滑鼠懸停在欄位名稱上，點擊出現的 `...` (更多選項) 圖示。
    2.  選擇 "Manage automation" (管理自動化)。
    3.  你可以為該欄位設定觸發條件，例如：
        *   **Preset (預設集):**
            *   **To do:** 新增的 Issue/PR 自動進入此欄。
            *   **In progress:** 開啟的 Issue/PR 或有指派人的 Issue/PR 自動進入此欄。
            *   **Done:** 已關閉/已合併的 Issue/PR 自動進入此欄。
        *   **Custom (自訂):** 更細緻地設定當 Issue/PR 的狀態 (例如 `reopened`, `merged`, `closed`) 或審核狀態 (`review_requested`, `approved`) 改變時，自動將卡片移入此欄。

## 使用篩選和排序管理檢視

當專案板上的卡片越來越多時，篩選和排序功能變得非常重要。

*   **篩選 (Filters):**
    *   在專案板頂部的搜尋框中，你可以輸入關鍵字來篩選卡片標題。
    *   更強大的是使用篩選條件，例如：
        *   `assignee:username` (篩選指派給特定使用者的卡片)
        *   `label:bug` (篩選帶有特定標籤的卡片)
        *   `is:issue` (只顯示 Issue 卡片)
        *   `is:pr` (只顯示 Pull Request 卡片)
        *   `is:open` / `is:closed` / `is:merged`
        *   `no:assignee` (篩選未指派的卡片)
    *   你可以組合多個篩選條件。
*   **排序 (Sorting - 通常在欄位內):**
    *   GitHub Projects (尤其是新的 Projects Beta) 提供了更進階的排序選項，例如按卡片標題、指派人、建立日期、更新日期等排序。
    *   傳統的專案板可能主要依賴手動拖曳排序。

## 指派任務/卡片給團隊成員

*   **對於連結 Issue/PR 的卡片:**
    *   任務的指派直接在該 Issue 或 Pull Request 上進行。在 Issue/PR 頁面的右側選單 "Assignees" 處指派成員。
    *   專案板上的卡片會自動顯示指派人。
*   **對於筆記卡片:**
    *   筆記卡片本身通常不直接支援指派功能。最好的做法是將重要的筆記轉換為 Issue，然後再進行指派。

## 追蹤進度與團隊協作

*   **視覺化進度:** 專案板本身就是一個進度儀表板。團隊成員可以快速看到哪些任務正在進行、哪些已完成、哪些遇到了瓶頸。
*   **每日站會 (Daily Stand-ups):** 團隊可以圍繞專案板進行每日站會，討論每個人正在處理的任務、遇到的問題和下一步計劃。
*   **評論與討論:**
    *   對於連結 Issue/PR 的卡片，所有相關的討論和更新都發生在 Issue/PR 頁面。
    *   專案板上的卡片通常會顯示最新的評論或活動摘要。
*   **活動摘要 (Activity):** 專案板通常有一個活動日誌，記錄了卡片的移動、新增、刪除等操作，方便追蹤變更歷史。

## 有效使用 GitHub 專案板的技巧

*   **像 Trello 或 Kanban 一樣使用:**
    *   **定義清晰的工作流程:** 確保你的欄位能準確反映專案的實際工作流程階段。
    *   **限制在製品 (WIP - Work In Progress):** 考慮為 "In progress" 欄位設定一個卡片數量的上限，避免團隊同時處理過多任務導致效率低下。雖然 GitHub Projects 本身可能不直接強制 WIP 限制，但團隊可以自行約定。
    *   **持續改進:** 定期回顧你的專案板設置和工作流程，根據團隊的需求進行調整。
*   **保持卡片資訊更新:** 鼓勵團隊成員及時更新 Issue/PR 的狀態，並在專案板上移動卡片。
*   **為卡片設定明確的負責人 (Assignee):** 確保每個任務都有人負責。
*   **善用標籤 (Labels):** 在 Issue/PR 上使用標籤 (例如 `bug`, `enhancement`, `documentation`, `priority:high`)，然後可以在專案板上利用標籤進行篩選和分類。
*   **定期清理 "Done" 欄位:** 避免 "Done" 欄位無限膨脹。可以定期將已完成的卡片存檔 (Archive) 或關閉相關 Issue/PR 後從板上移除 (有些自動化會處理這個)。
*   **利用筆記卡片進行快速記錄:** 對於不需要立即成為 Issue 的想法或小任務，先用筆記卡片記錄下來，稍後再整理。
*   **結合里程碑 (Milestones):** 將專案板與 GitHub Milestones 結合使用，可以更好地追蹤特定目標或版本的進度。你可以篩選專案板上屬於特定里程碑的卡片。
*   **為不同的目的建立不同的專案板:** 不要試圖用一個專案板管理所有事情。例如，可以有一個用於整體產品藍圖的組織級專案板，同時每個儲存庫有自己的開發任務板。
*   **探索 Projects (beta) / New GitHub Projects:** GitHub 持續改進其專案管理功能。新的 "GitHub Projects" (有時稱為 Projects V2 或 Projects Beta) 提供了更強大的功能，例如表格檢視 (Table view)、自訂欄位類型、更進階的篩選和分組、以及更靈活的自動化設定。如果你剛開始使用，建議直接嘗試新版的 Projects。

## 總結

GitHub Projects (專案板) 是一個非常實用且與開發流程無縫整合的任務管理工具。透過視覺化的看板、與 Issues 和 Pull Requests 的緊密連結，以及自動化功能，它可以幫助你的團隊更有效地規劃、追蹤和完成專案任務。無論你是個人開發者還是大型團隊的一員，善用 GitHub 專案板都能讓你的工作流程更加順暢，提升整體生產力。現在就開始在你的 GitHub 專案中嘗試使用它吧！
