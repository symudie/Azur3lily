document.addEventListener('DOMContentLoaded', function () {
  try {
    // Collect headings h2/h3/h4 (adjust as needed)
    const content = document.querySelector('.md-content');
    if (!content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (!headings.length) return;

    const toc = document.createElement('nav');
    toc.className = 'page-toc';
    const title = document.createElement('h4');
    title.textContent = '页面目录';
    toc.appendChild(title);

    const ul = document.createElement('ul');
    headings.forEach(h => {
      if (!h.id) {
        // ensure heading has id for linking
        h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = (h.tagName === 'H2' ? '• ' : '— ') + h.textContent.trim();
      li.appendChild(a);
      ul.appendChild(li);
    });

    toc.appendChild(ul);
    document.body.appendChild(toc);
  } catch (e) {
    console.error('page-toc error', e);
  }
});
