// Theme toggle (bright / dark mode)
(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const body = document.body;
  const btn = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function setTheme(theme) {
    body.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
    localStorage.setItem(STORAGE_KEY, theme);
    if (btn && icon) {
      if (theme === 'dark') {
        icon.textContent = '☀️';
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
      } else {
        icon.textContent = '🌙';
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  function toggleTheme() {
    const current = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  setTheme(getPreferredTheme());

  if (btn) btn.addEventListener('click', toggleTheme);

  // Optional: listen for system theme changes when no preference is set
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? 'dark' : 'light');
    });
  }
})();

// Link cards focus style
document.querySelectorAll('.link-card').forEach(function (card) {
  card.addEventListener('focus', function () { card.classList.add('focus-visible'); });
  card.addEventListener('blur', function () { card.classList.remove('focus-visible'); });
});
