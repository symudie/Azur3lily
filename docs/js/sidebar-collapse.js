document.addEventListener('DOMContentLoaded', function () {
  try {
    const nav = document.querySelector('.md-nav');
    if (!nav) return;

    // Find all nav items that have a sublist
    const items = nav.querySelectorAll('li');
    items.forEach(li => {
      const sub = li.querySelector(':scope > ul, :scope > .md-nav__sublist');
      const link = li.querySelector(':scope > a, :scope > .md-nav__link');
      if (sub && link) {
        // add a toggle element if not present
        if (!link.querySelector('.nav-toggle')) {
          const toggle = document.createElement('span');
          toggle.className = 'nav-toggle';
          // place toggle before link text
          link.insertBefore(toggle, link.firstChild);

          // set initial collapsed state unless contains active
          const isActiveDescendant = li.querySelector('.md-nav__link--active, .md-nav__link--current');
          if (isActiveDescendant) {
            li.classList.add('nav-expanded');
          } else {
            li.classList.add('nav-collapsed');
          }

          toggle.addEventListener('click', function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            if (li.classList.contains('nav-collapsed')) {
              li.classList.remove('nav-collapsed');
              li.classList.add('nav-expanded');
            } else {
              li.classList.remove('nav-expanded');
              li.classList.add('nav-collapsed');
            }
          });

          // allow clicking the link to expand as well
          link.addEventListener('click', function () {
            if (li.classList.contains('nav-collapsed')) {
              li.classList.remove('nav-collapsed');
              li.classList.add('nav-expanded');
            }
          });
        }
      }
    });

    // ensure ancestors of active link are expanded
    const active = nav.querySelector('.md-nav__link--active, .md-nav__link--current');
    if (active) {
      let parent = active.parentElement;
      while (parent && parent !== nav) {
        if (parent.tagName === 'LI') {
          parent.classList.remove('nav-collapsed');
          parent.classList.add('nav-expanded');
        }
        parent = parent.parentElement;
      }
    }
  } catch (e) {
    console.error('sidebar-collapse error', e);
  }
});
