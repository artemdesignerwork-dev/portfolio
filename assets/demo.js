// Sorting demos on case pages: rows slide between two orders. Plays once when scrolled into view, then the buttons take over.
(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-demo]').forEach((root) => {
    const stage = root.querySelector('.demo__stage');
    const list = root.querySelector('.demo__list');
    const cut = root.querySelector('.demo__cut');
    const bar = root.querySelector('.demo__bar');
    const verdict = root.querySelector('.demo__verdict');
    const rows = [...list.children];
    const buttons = [...bar.querySelectorAll('[data-sort]')];
    const gap = parseFloat(getComputedStyle(list).getPropertyValue('--demo-gap')) || 0;
    let active = 'b', timer = 0;

    const layout = () => {
      let y = 0;
      [...rows].sort((p, q) => p.dataset[active] - q.dataset[active]).forEach((row, i) => {
        row.style.transform = `translateY(${y}px)`;
        row.classList.toggle('is-top', i < 3);
        const rank = row.querySelector('.odx-rank');
        if (rank) rank.textContent = '0' + (i + 1);
        y += row.offsetHeight + gap;
        if (cut && i === 2) { cut.style.transform = `translateY(${y}px)`; y += cut.offsetHeight + gap; }
      });
      list.style.height = y - gap + 'px';
    };

    const show = (key) => {
      active = key;
      root.dataset.active = key;
      buttons.forEach((b) => {
        const on = b.dataset.sort === key;
        b.setAttribute('aria-pressed', on);
        b.classList.toggle('btn--ghost', !on);
        if (on) verdict.textContent = b.dataset.verdict;
      });
      layout();
    };

    stage.classList.add('is-live');
    list.classList.add('is-live');
    bar.hidden = false;
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-sort]');
      if (b) { clearTimeout(timer); timer = -1; show(b.dataset.sort); }
    });
    show(still ? 'b' : 'a');
    requestAnimationFrame(() => requestAnimationFrame(() => list.classList.add('is-ready')));
    // rows wrap differently at each width and when the font loads
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(layout);
      rows.forEach((r) => ro.observe(r));
    } else addEventListener('resize', layout);

    if (still) return;
    if (!('IntersectionObserver' in window)) return show('b');
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      if (timer !== -1) timer = setTimeout(() => show('b'), 1500);
    }, { threshold: 0.3 });
    io.observe(root);
  });
})();
