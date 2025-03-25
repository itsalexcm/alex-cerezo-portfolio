import { onMounted } from 'vue';

export function setupFadeInOnLoad() {
  onMounted(() => {
    setTimeout(() => {
      document.body.classList.add('enable-transitions');
    }, 0);

    if (!document.body.classList.contains('theme-ready')) {
      document.body.classList.add('theme-ready');
    }
  });
}