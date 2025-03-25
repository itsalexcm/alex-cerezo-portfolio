import { ref, onMounted, onUnmounted } from 'vue';

export function useTyping() {
  const phrases = ['Hi there,', 'Hola,', 'こんにちは,'];
  let currentPhrase = 0;

  const text = ref('');
  const cursorVisible = ref(true);

  let typingTimeout = null;
  let deletingTimeout = null;

  const typePhrase = () => {
    text.value = '';
    cursorVisible.value = true;
    let phrase = phrases[currentPhrase];
    let i = 0;

    const typeNextCharacter = () => {
      if (i < phrase.length) {
        text.value += phrase[i];
        i++;
        typingTimeout = setTimeout(typeNextCharacter, 100);
      } else {
        typingTimeout = setTimeout(deletePhrase, 3000);
      }
    };

    const deletePhrase = () => {
      let i = text.value.length;
      const deleteNextCharacter = () => {
        if (i > 0) {
          text.value = text.value.slice(0, --i);
          deletingTimeout = setTimeout(deleteNextCharacter, 50);
        } else {
          currentPhrase = (currentPhrase + 1) % phrases.length;
          cursorVisible.value = true;
          deletingTimeout = setTimeout(typePhrase, 500);
        }
      };
      deleteNextCharacter();
    };

    typeNextCharacter();
  };

  onMounted(typePhrase);

  onUnmounted(() => {
    clearTimeout(typingTimeout);
    clearTimeout(deletingTimeout);
  });

  return { text, cursorVisible };
}