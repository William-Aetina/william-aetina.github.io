const notes = [
  { id: 'intro', title: '入門介紹', file: 'notes/intro.md', prev: null, next: 'js-array' },
  { id: 'js-array', title: 'JavaScript 陣列', file: 'notes/js-array.md', prev: 'intro', next: 'github-article-1' },
  { id: 'github-article-1', title: 'GitHub 新手指南', file: 'github_articles/01_github_introduction.md', prev: 'js-array', next: 'github-article-2' },
  { id: 'github-article-2', title: 'GitHub 首個開源專案', file: 'github_articles/02_first_open_source_project.md', prev: 'github-article-1', next: 'github-article-3' },
  { id: 'github-article-3', title: 'Fork、Branch、PR 教學', file: 'github_articles/03_fork_branch_pull_request.md', prev: 'github-article-2', next: 'github-article-4' },
  { id: 'github-article-4', title: 'GitHub Actions 自動化', file: 'github_articles/04_github_actions_automation.md', prev: 'github-article-3', next: 'github-article-5' },
  { id: 'github-article-5', title: 'GitHub Pages 靜態網站', file: 'github_articles/05_github_pages_static_sites.md', prev: 'github-article-4', next: 'github-article-6' },
  { id: 'github-article-6', title: '撰寫好的 README', file: 'github_articles/06_writing_good_readme.md', prev: 'github-article-5', next: 'github-article-7' },
  { id: 'github-article-7', title: 'GitHub Copilot 心得', file: 'github_articles/07_github_copilot_review.md', prev: 'github-article-6', next: 'github-article-8' },
  { id: 'github-article-8', title: 'GitHub 安全性設定', file: 'github_articles/08_code_security_private_repos.md', prev: 'github-article-7', next: 'github-article-9' },
  { id: 'github-article-9', title: 'GitHub 專案板管理', file: 'github_articles/09_github_project_boards.md', prev: 'github-article-8', next: 'github-article-10' },
  { id: 'github-article-10', title: 'GitHub 貢獻統計', file: 'github_articles/10_github_insights_contributions.md', prev: 'github-article-9', next: null }
];

export { notes };
