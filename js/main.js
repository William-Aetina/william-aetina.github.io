// main.js
// 筆記檔案清單
const notes = [
  { id: 'intro', title: '入門介紹', file: 'notes/intro.md' },
  { id: 'js-array', title: 'JavaScript 陣列', file: 'notes/js-array.md' },
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
  generateToc(noteContent);
}

// Generate Table of Contents
function generateToc(contentElement) {
  // Clear existing TOC
  const existingToc = contentElement.querySelector('#toc-nav');
  if (existingToc) {
    existingToc.remove();
  }

  const headers = contentElement.querySelectorAll('h1, h2, h3');
  if (headers.length === 0) {
    return;
  }

  const ids = [];
  const nav = document.createElement('nav');
  nav.id = 'toc-nav';
  // Added sticky, top, z-index. Kept existing styles.
  nav.className = 'sticky top-4 z-10 mb-4 p-4 border rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700';

  const ul = document.createElement('ul');
  ul.className = 'space-y-2'; // Existing class, transitions will be on links/items

  headers.forEach(header => {
    let text = header.textContent;
    let baseId = text.toLowerCase()
                     .replace(/\s+/g, '-')      // Replace whitespace with hyphens
                     .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric (except hyphens)

    // Refinement: Ensure baseId is not empty or just hyphens, default to "header"
    if (!baseId || /^[-]+$/.test(baseId)) {
      baseId = 'header';
    }
    
    let uniqueId = baseId;
    let counter = 1;
    while (ids.includes(uniqueId)) {
      uniqueId = `${baseId}-${counter}`;
      counter++;
    }
    ids.push(uniqueId);
    header.id = uniqueId;

    const li = document.createElement('li');
    // Apply margin based on header level using TailwindCSS classes
    if (header.tagName === 'H1') {
      li.className = 'ml-0';
    } else if (header.tagName === 'H2') {
      li.className = 'ml-4';
    } else if (header.tagName === 'H3') {
      li.className = 'ml-8';
    }
    
    const a = document.createElement('a');
    a.href = `#${uniqueId}`;
    a.textContent = text;
    // Added transition, and subtle bg hover. Keeping text color hover.
    a.className = 'block p-1 rounded hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out';

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  contentElement.prepend(nav);
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
