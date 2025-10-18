document.addEventListener('DOMContentLoaded', function () {
  try {
    // Collect headings h2/h3/h4 (adjust as needed)
    const main = document.querySelector('.md-main');
    const content = document.querySelector('.md-content');
    if (!main || !content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (!headings.length) return;

    // create right column container
    let column = document.querySelector('.page-toc-column');
    if (!column) {
      column = document.createElement('aside');
      column.className = 'page-toc-column';
      // insert after .md-content inside .md-main
      main.appendChild(column);
    }

    const toc = document.createElement('nav');
    toc.className = 'page-toc';
    const title = document.createElement('h4');
    title.textContent = 'Table of contents';
    toc.appendChild(title);

    const ul = document.createElement('ul');
    headings.forEach(h => {
      if (!h.id) {
        h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = (h.tagName === 'H2' ? '' : '  ') + h.textContent.trim();
      li.appendChild(a);
      ul.appendChild(li);
    });

    toc.appendChild(ul);
    // clear old and append
    column.innerHTML = '';
    column.appendChild(toc);
  } catch (e) {
    console.error('page-toc error', e);
  }
});
