# 使用 GitHub Actions 自動化你的開發流程

GitHub Actions 是一個強大的持續整合與持續部署 (CI/CD) 工具，直接整合在你的 GitHub 儲存庫中。它允許你自動化軟體開發生命週期中的各種任務，例如建置 (Build)、測試 (Test) 和部署 (Deploy) 你的應用程式。本篇文章將帶你了解 GitHub Actions 的核心概念、常見用途，並提供實際的 YAML 範例來幫助你入門。

## GitHub Actions 的核心概念

要理解 GitHub Actions，首先需要熟悉以下幾個核心組件：

1.  **Workflows (工作流程):**
    *   工作流程是一個或多個 **Jobs (任務)** 的自動化過程，由 `.yml` 或 `.yaml` 檔案定義，存放在儲存庫的 `.github/workflows` 目錄下。
    *   一個儲存庫可以有多個工作流程，每個工作流程可以響應不同的 **Events (事件)**。
    *   例如，你可以有一個工作流程在每次推送到 `main` 分支時執行測試，另一個工作流程在建立新的 Release 時自動部署到生產環境。

2.  **Events (事件):**
    *   事件是觸發工作流程執行的特定活動。
    *   這些活動可以發生在你的 GitHub 儲存庫中，例如：
        *   `push`: 推送提交到儲存庫。
        *   `pull_request`: 建立或更新 Pull Request。
        *   `schedule`: 定時執行。
        *   `workflow_dispatch`: 手動觸發。
        *   `release`: 建立新的 Release。
    *   還有許多其他類型的事件，你可以根據需求選擇。

3.  **Jobs (任務):**
    *   一個工作流程由一個或多個任務組成。
    *   預設情況下，任務是並行執行的，但你可以將它們設定為循序執行 (依賴於前一個任務的完成)。
    *   每個任務都在一個 **Runner (執行器)** 環境中執行。

4.  **Steps (步驟):**
    *   每個任務包含一系列的步驟。
    *   步驟可以執行命令列指令 (例如 `npm install`、`python script.py`)，或者使用預先建立好的 **Actions (動作)**。
    *   步驟在同一個 Runner 上循序執行，因此它們可以共享檔案系統。

5.  **Runners (執行器):**
    *   Runner 是一個會執行你工作流程中任務的伺服器。
    *   GitHub 提供了多種作業系統的虛擬機器作為 Runner，包括 Linux (Ubuntu)、Windows 和 macOS。這些被稱為 "GitHub-hosted runners"。
    *   你也可以設定自己的 "self-hosted runners"，在你自己的硬體或雲端環境中執行任務，這對於有特殊硬體需求或網路限制的專案很有用。

6.  **Actions (動作):**
    *   動作是工作流程中最小的可攜帶建置區塊，代表一個可重複使用的程式碼片段。
    *   你可以建立自己的動作，或者使用 GitHub Marketplace 中由社群提供的大量現成動作。
    *   例如，`actions/checkout@v3` 是一個常用的動作，用於將你的儲存庫程式碼下載到 Runner 上。`actions/setup-node@v3` 則用於設定 Node.js 環境。

## GitHub Actions 的常見用途

GitHub Actions 的靈活性使其適用於各種自動化場景：

*   **自動化測試 (Automated Testing):**
    *   在每次 `push` 或 `pull_request` 時自動執行單元測試、整合測試或端對端測試。
    *   確保程式碼變更不會破壞現有功能。
*   **建置程式碼 (Building Code):**
    *   編譯程式碼、打包應用程式 (例如產生 Docker 映像檔、JAR 檔案)。
    *   產生靜態網站。
*   **持續整合 (Continuous Integration - CI):**
    *   自動化建置和測試流程，確保每次提交都能順利整合到主分支。
    *   及早發現整合問題。
*   **持續部署 (Continuous Deployment/Delivery - CD):**
    *   自動將通過測試的程式碼部署到預備環境 (Staging) 或生產環境 (Production)。
    *   可以設定在特定事件 (例如合併到 `main` 分支或建立 Release) 後自動部署。
*   **發布套件 (Publishing Packages):**
    *   自動將你的函式庫或套件發布到 npm、PyPI、RubyGems、Docker Hub 等套件管理平台。
*   **通知 (Notifications):**
    *   當工作流程成功或失敗時，自動發送通知到 Slack、Email 或其他通訊工具。
*   **自動化儲存庫管理:**
    *   自動為 Issue 或 Pull Request 加上標籤。
    *   自動回應 Issue。
    *   自動合併 Pull Request (例如 Dependabot 的更新)。

## 如何建立基本的工作流程檔案 (YAML 語法)

工作流程檔案使用 YAML 語法編寫，並存放在儲存庫的 `.github/workflows` 目錄下。檔案名稱可以是任意的，但通常會使用描述性的名稱，例如 `ci.yml` 或 `deploy.yml`。

一個基本的工作流程檔案結構如下：

```yaml
# .github/workflows/learn-github-actions.yml

# 1. 工作流程的名稱 (可選，但建議填寫，會顯示在 GitHub Actions 頁面)
name: Learn GitHub Actions

# 2. 觸發工作流程的事件
on: [push] # 當有 push 事件時觸發

# 3. 定義工作流程中的任務
jobs:
  # 任務 ID (可以自訂，但必須是唯一的)
  check-bats-version:
    # 4. 指定執行任務的 Runner 環境
    runs-on: ubuntu-latest # 使用最新版的 Ubuntu Runner

    # 5. 定義任務中的步驟
    steps:
      # 步驟 1: 執行一個簡單的指令
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."

      # 步驟 2: 使用一個社群提供的 Action (例如 actions/checkout)
      - name: Check out repository code # 步驟名稱 (可選)
        uses: actions/checkout@v4 # 使用 actions/checkout 的第 4 版

      # 步驟 3: 執行另一個指令
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."

      # 步驟 4: 列出 Runner 上的檔案
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}

      # 步驟 5: 執行一個會失敗的指令 (用於演示)
      - run: exit 1 # 故意讓此步驟失敗

      # 步驟 6: 只有在前一個步驟失敗時才執行 (使用 if 條件)
      - name: Run if previous step failed
        if: ${{ failure() }} # 或者 if: failure()
        run: echo "Job failed in previous step"
```

**主要元素解釋:**

*   `name`: 工作流程的名稱，會顯示在 GitHub 的 Actions 標籤頁。
*   `on`: 定義觸發工作流程的事件。可以是單一事件 (例如 `on: push`)，也可以是事件陣列 (例如 `on: [push, pull_request]`)，或者更複雜的事件設定 (例如指定分支、標籤等)。
    ```yaml
    on:
      push: # 當有 push 事件時
        branches: # 只有推送到以下分支才會觸發
          - main
          - 'feature/**' # 匹配 feature/ 開頭的分支
        tags: # 只有推送到以下標籤才會觸發
          - 'v*' # 匹配 v 開頭的標籤 (例如 v1.0, v2.0.1)
      pull_request: # 當有 pull_request 事件時
        branches:
          - main # 只有目標是 main 分支的 PR 才會觸發
    ```
*   `jobs`: 包含工作流程中所有要執行的任務。
*   `<job_id>`: 每個任務都有一個唯一的 ID。
*   `runs-on`: 指定執行該任務的 Runner 類型。常見的有 `ubuntu-latest`、`windows-latest`、`macos-latest`。
*   `steps`: 每個任務由一系列步驟組成。
    *   `name`: (可選) 步驟的名稱，方便在日誌中識別。
    *   `uses: <action-name>@<version>`: 使用一個現有的 Action。例如 `actions/checkout@v4` 用於拉取程式碼，`actions/setup-node@v4 --with-node-version '20'` 用於設定 Node.js 環境。
    *   `run: <command>`: 在 Runner 上執行指定的命令列指令。可以使用 `|` 來執行多行指令。
    *   `env`: (可選) 為步驟設定環境變數。
    *   `if: <condition>`: (可選) 設定步驟執行的條件。例如 `if: success()` (前一步成功時執行)、`if: failure()` (前一步失敗時執行)、`if: always()` (無論如何都執行)。

## 實用 YAML 範例：簡單的 CI 管線 (Node.js 專案)

假設你有一個 Node.js 專案，並且有測試指令 `npm test`。以下是一個簡單的 CI 工作流程，會在每次推送到 `main` 分支或有 Pull Request 指向 `main` 分支時，自動執行測試：

```yaml
# .github/workflows/ci.yml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test: # 任務 ID
    runs-on: ubuntu-latest # 使用 Ubuntu Runner

    strategy: # (可選) 定義建置矩陣，可以同時在多個 Node.js 版本上測試
      matrix:
        node-version: [18.x, 20.x, 22.x] # 指定要測試的 Node.js 版本

    steps:
      # 步驟 1: Checkout 程式碼
      - name: Checkout repository
        uses: actions/checkout@v4

      # 步驟 2: 設定 Node.js 環境
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm' # (可選) 快取 npm 依賴，加速後續建置

      # 步驟 3: 安裝專案依賴
      - name: Install dependencies
        run: npm ci # 建議使用 npm ci 而不是 npm install，以確保使用 package-lock.json 中的精確版本

      # 步驟 4: 執行測試
      - name: Run tests
        run: npm test
```

**範例解釋:**

*   `on`: 設定在推送到 `main` 分支或有 PR 指向 `main` 分支時觸發。
*   `jobs.build-and-test`: 定義一個名為 `build-and-test` 的任務。
*   `strategy.matrix.node-version`: 這是一個強大的功能，它會為 `node-version` 陣列中的每個值 (18.x, 20.x, 22.x) 建立一個獨立的任務實例。這意味著你的測試會在三個不同的 Node.js 版本上並行執行。
*   `steps`:
    *   `actions/checkout@v4`: 將儲存庫的程式碼下載到 Runner。
    *   `actions/setup-node@v4`: 設定指定的 Node.js 版本 (`${{ matrix.node-version }}` 會動態替換為當前矩陣的值)，並設定快取 npm 依賴。
    *   `npm ci`: 安裝依賴。`npm ci` 通常比 `npm install` 更快且更可靠，因為它會完全按照 `package-lock.json` (或 `npm-shrinkwrap.json`) 來安裝。
    *   `npm test`: 執行你在 `package.json` 中定義的測試腳本。

## 使用 GitHub Actions 的好處

*   **深度整合 GitHub:** 與 GitHub 的 Pull Requests、Issues、Releases 等功能無縫整合。
*   **易於上手:** YAML 語法相對簡單，且有大量文件和社群範例。
*   **自動化:** 減少手動操作，提高效率，降低人為錯誤。
*   **快速回饋:** 在早期階段 (例如提交 PR 時) 就能發現問題，加速開發週期。
*   **多平台支援:** 支援 Linux, macOS, Windows Runner。
*   **豐富的社群 Actions:** GitHub Marketplace 提供了大量預先建置好的 Action，可以快速整合各種工具和服務。
*   **可自訂性高:** 可以根據專案需求建立複雜的工作流程。
*   **免費額度 (針對公開儲存庫):** 對於公開儲存庫，GitHub Actions 提供了非常慷慨的免費使用額度。私有儲存庫也有一定的免費額度。
*   **支援自建 Runner:** 對於有特殊需求的專案，可以彈性地使用自己的執行環境。

## 總結

GitHub Actions 是一個功能強大且易於使用的自動化工具，能夠顯著提升你的開發效率和軟體品質。透過定義工作流程，你可以將重複性的任務交給機器人處理，讓團隊更專注於核心的開發工作。從簡單的測試到複雜的 CI/CD 管線，GitHub Actions 都能夠勝任。現在就開始探索並在你的專案中實踐它吧！
