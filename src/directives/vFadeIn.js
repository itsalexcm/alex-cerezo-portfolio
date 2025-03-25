export default {
  mounted(el) {
    el.classList.add('fade-in');
    
    setTimeout(() => {
      document.body.classList.add('enable-transitions');
    }, 0);

    if (!document.body.classList.contains('theme-ready')) {
      document.body.classList.add('theme-ready');
    }

    setTimeout(() => {
      el.classList.add('visible');
    }, 200);
  }
};