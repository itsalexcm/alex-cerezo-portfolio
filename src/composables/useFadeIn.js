export function setupFadeInOnLoad() {
  window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    setTimeout(() => {
      document.body.classList.add('enable-transitions');
    }, 0);

    if (!document.body.classList.contains('theme-ready')) {
      document.body.classList.add('theme-ready');
    }

    setTimeout(() => {
      elements.forEach(element => {
        element.classList.add('visible');
      });
    }, 200);
  });
}