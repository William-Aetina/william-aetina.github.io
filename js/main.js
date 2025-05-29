// main.js
import { notes } from './data.js';
import { noteList, noteContent, searchInput, renderNoteList, renderNoteContentAndToc } from './ui.js';

// 載入並渲染 Markdown
async function loadNote(id) {
  const note = notes.find(n => n.id === id);
  if (!note) return;
  const res = await fetch(note.file);
  const md = await res.text();
  const htmlContent = marked.parse(md); // Ensure marked.parse is still accessible
  renderNoteContentAndToc(htmlContent, note);
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
