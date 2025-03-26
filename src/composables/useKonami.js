import { onMounted, onUnmounted } from 'vue';

export function useKonami(callback) {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let currentIndex = 0;

  const handleKeyDown = (event) => {
    if (event.key === konamiCode[currentIndex]) {
      currentIndex++;
      if (currentIndex === konamiCode.length) {
        if (callback) callback();
        currentIndex = 0;
      }
    } else {
      currentIndex = 0;
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
  });

  return {};
}