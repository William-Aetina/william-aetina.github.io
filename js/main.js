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
