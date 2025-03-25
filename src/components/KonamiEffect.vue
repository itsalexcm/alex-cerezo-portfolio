<template>
  <div v-if="showEffect" class="konami-container">
    <div class="emoji" v-for="(emoji, index) in emojis" :key="index" :style="emoji.style">
      {{ emoji.icon }}
    </div>
    <div class="zelda-logo" v-html="zeldaLogo"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useKonami } from '@/composables/useKonami.js';

const showEffect = ref(false);
const emojis = ref([]);
const zeldaLogo = ref('');

const activateEffect = () => {
  showEffect.value = true;

  for (let i = 0; i < 100; i++) {
    emojis.value.push({
      icon: ['💧', '💧', '💧', '💧', '💧'][Math.floor(Math.random() * 5)],
      style: {
        position: 'absolute',
        left: `${Math.random() * 95}vw`,
        top: `${Math.random() * 100}vh`,
        fontSize: `${Math.random() * 30 + 20}px`,
        animation: `fall 5s linear ${Math.random() * 5}s infinite`
      }
    });
  }

  zeldaLogo.value = `
    <svg class="zelda" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="zelda-01" fill-rule="evenodd" clip-rule="evenodd" d="M13 2H15H17H19H21H23H25V4H27V6V8H25V6H23H21H19H17H15H13V8H11V6V4H13V2ZM9 16H11H13V18H11H9V16ZM17 10H15V12H17V10ZM17 20H19H21H23V18H25V16H27H29V18H27V20V22H25V24H23H21V22H19H17V20ZM19 24H17V26H19V24ZM17 28H19H21V26H23H25H27H29V28H27V30H25H23H21H19H17V28ZM23 10H21V12H23V10Z" fill="#3FDC41"/>
      <path class="zelda-02" fill-rule="evenodd" clip-rule="evenodd" d="M7 6H9V8V10H11V12V14H13V12V10H15V12V14H17V12V10H19H21V12V14H23V12V10H25V12V14H27V12V10H29V8V6H31V8V10V12V14H29V16H27H25V18H23V20H21H19H17H15V18H13V16H11H9V14H7V12V10V8V6ZM19 18H21V16H19H17V18H19ZM5 22H7V20H9V22H11V24H9V26V28H7V26V24H5V22ZM5 30H7H9H11H13H15V32H13H11H9H7H5V30ZM15 30V28V26V24V22H17V24V26V28V30H15ZM27 22H25V24H27V26H29V28H31V26H33V24H31V22H29V20H27V22Z" fill="#FFB75F"/>
    </svg>
  `;

  setTimeout(() => {
    showEffect.value = false;
    emojis.value = [];
    zeldaLogo.value = '';
  }, 6000);
};

useKonami(activateEffect);
</script>

<style scoped>
.konami-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1000;
}
.emoji {
  position: absolute;
  animation: fall 5s linear infinite;
}
.zelda-logo {
  position: fixed;
  top: 10px;
  left: 10px;
  width: 36px;
  height: 36px;
}
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
</style>