(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('language-toggle');
  const filters = document.querySelector('.publication-filters');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  const status = document.getElementById('filter-status');
  const announceCount = () => {
    const count = publications.filter(item => !item.hidden).length;
    status.textContent = root.lang === 'zh-CN' ? `显示 ${count} 篇论文与稿件` : `${count} papers and manuscripts shown`;
  };
  const setLanguage = (language) => {
    root.lang = language === 'zh-CN' ? 'zh-CN' : 'en';
    toggle.textContent = root.lang === 'en' ? '中文' : 'EN';
    toggle.setAttribute('aria-label', root.lang === 'en' ? '切换到中文' : 'Switch to English');
    document.title = root.lang === 'en' ? 'Jiajun Wang · Control & Scientific Computing' : '王家骏 · 控制与科学计算';
    announceCount();
  };
  toggle.hidden = false;
  filters.hidden = false;
  try { setLanguage(localStorage.getItem('homepage-language') || 'en'); } catch { setLanguage('en'); }
  toggle.addEventListener('click', () => {
    setLanguage(root.lang === 'en' ? 'zh-CN' : 'en');
    try { localStorage.setItem('homepage-language', root.lang); } catch { /* The language switch also works without storage. */ }
  });
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const type = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    publications.forEach(item => { item.hidden = type !== 'all' && item.dataset.type !== type; });
    announceCount();
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
