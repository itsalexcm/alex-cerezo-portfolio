export function runFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  // Garantiza clases en body
  document.body.classList.add('enable-transitions');
  if (!document.body.classList.contains('theme-ready')) {
    document.body.classList.add('theme-ready');
  }

  // Reinicia y aplica la animación
  elements.forEach(el => el.classList.remove('visible'));

  setTimeout(() => {
    elements.forEach(el => el.classList.add('visible'));
  }, 100); // un poco más reactivo que 200ms
}