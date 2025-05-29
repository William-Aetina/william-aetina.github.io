import { notes } from './data.js';

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

// Render 筆記內容和目錄
function renderNoteContentAndToc(htmlContent, note) {
  noteContent.innerHTML = htmlContent;
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

export { noteList, noteContent, searchInput, renderNoteList, renderNoteContentAndToc };
