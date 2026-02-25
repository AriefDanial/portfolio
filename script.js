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
    if (theme === 'light') body.setAttribute('data-theme', 'light');
    else body.removeAttribute('data-theme');
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
    const current = body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  setTheme(getPreferredTheme());

  if (btn) btn.addEventListener('click', toggleTheme);

  // Optional: listen for system theme changes when no preference is set
  if (window.matchMedia) {
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    var updateFromSystem = function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? 'dark' : 'light');
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateFromSystem);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updateFromSystem);
    }
  }
})();

// Total hits counter (stored in localStorage, display with leading zeros)
(function () {
  var el = document.getElementById('total-hits');
  if (!el) return;
  var key = 'portfolio-hits';
  var hits = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, String(hits));
  el.textContent = String(hits).padStart(4, '0');
})();

// Link cards focus style
document.querySelectorAll('.link-card').forEach(function (card) {
  card.addEventListener('focus', function () { card.classList.add('focus-visible'); });
  card.addEventListener('blur', function () { card.classList.remove('focus-visible'); });
});
