// js/toc.js
window.generateToc = function(contentElement) {
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
};
