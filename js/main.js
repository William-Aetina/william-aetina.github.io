// main.js
// 筆記檔案清單
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

// DOM 元素
const noteList = document.getElementById('note-list');
const noteContent = document.getElementById('note-content');
const searchInput = document.getElementById('search');

// Render 筆記標題列表
function renderNoteList(filter = '') {
  noteList.innerHTML = '';
  notes.filter(n => n.title.includes(filter)).forEach(note => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${note.id}" class="block px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">${note.title}</a>`;
    noteList.appendChild(li);
  });
}

// 載入並渲染 Markdown
async function loadNote(id) {
  const note = notes.find(n => n.id === id);
  if (!note) return;
  const res = await fetch(note.file);
  const md = await res.text();
  noteContent.innerHTML = marked.parse(md);
  generateToc(noteContent); // This will now call window.generateToc

  // Add navigation buttons
  let navButtonsDiv = noteContent.querySelector('.navigation-buttons');
  if (!navButtonsDiv) {
    navButtonsDiv = document.createElement('div');
    navButtonsDiv.className = 'navigation-buttons mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 flex justify-between';
    noteContent.appendChild(navButtonsDiv);
  }
  navButtonsDiv.innerHTML = ''; // Clear existing buttons

  if (note.prev) {
    const prevLink = document.createElement('a');
    prevLink.href = `#${note.prev}`;
    prevLink.textContent = '← Previous';
    prevLink.className = 'text-blue-500 hover:underline';
    navButtonsDiv.appendChild(prevLink);
  } else {
    // Add an empty span to maintain layout if no prev button
    navButtonsDiv.appendChild(document.createElement('span'));
  }

  if (note.next) {
    const nextLink = document.createElement('a');
    nextLink.href = `#${note.next}`;
    nextLink.textContent = 'Next →';
    nextLink.className = 'text-blue-500 hover:underline';
    navButtonsDiv.appendChild(nextLink);
  } else {
    // Add an empty span to maintain layout if no next button
    navButtonsDiv.appendChild(document.createElement('span'));
  }
}

// 處理 hash 導航
function handleHash() {
  const id = location.hash.replace('#', '') || notes[0].id;
  loadNote(id);
  // 高亮選中
  Array.from(noteList.querySelectorAll('a')).forEach(a => {
    a.classList.toggle('font-bold', a.getAttribute('href') === `#${id}`);
  });
}

// 搜尋功能
searchInput.addEventListener('input', e => {
  renderNoteList(e.target.value);
  handleHash();
});

// 點擊標題載入
noteList.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    location.hash = e.target.getAttribute('href');
    e.preventDefault();
  }
});

// hash 變化時載入
window.addEventListener('hashchange', handleHash);

// 初始化
renderNoteList();
handleHash();
