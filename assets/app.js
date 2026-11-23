'use strict';
// La navegación y las recetas funcionan también sin JavaScript.
const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  const buttons = [...filterBar.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.recipe-grid .recipe-card')];
  const allowed = buttons.map(button => button.dataset.filter);
  function applyFilter(filter) {
    const selected = allowed.includes(filter) ? filter : 'todas';
    for (const button of buttons) {
      const active = button.dataset.filter === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    let visible = 0;
    for (const card of cards) {
      card.hidden = selected !== 'todas' && card.dataset.category !== selected;
      if (!card.hidden) visible++;
    }
    document.getElementById('filter-status').textContent = visible === 1 ? '1 receta visible' : visible + ' recetas visibles';
  }
  filterBar.hidden = false;
  applyFilter(new URLSearchParams(location.search).get('categoria'));
  for (const button of buttons) button.addEventListener('click', () => {
    applyFilter(button.dataset.filter);
    const url = new URL(location.href);
    if (button.dataset.filter === 'todas') url.searchParams.delete('categoria');
    else url.searchParams.set('categoria', button.dataset.filter);
    history.replaceState(null, '', url);
  });
}
for (const button of document.querySelectorAll('[data-print]')) {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
}
