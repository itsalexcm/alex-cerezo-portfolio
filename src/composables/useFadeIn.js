export function runFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  document.body.classList.add('enable-transitions');
  if (!document.body.classList.contains('theme-ready')) {
    document.body.classList.add('theme-ready');
  }

  elements.forEach(el => el.classList.remove('visible'));

  setTimeout(() => {
    elements.forEach(el => el.classList.add('visible'));
  }, 100);
}