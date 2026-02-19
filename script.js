// Optional: add a subtle interaction or leave empty for future use
document.querySelectorAll('.link-card').forEach((card) => {
  card.addEventListener('focus', () => card.classList.add('focus-visible'));
  card.addEventListener('blur', () => card.classList.remove('focus-visible'));
});
