<template>
  <header v-if="!isCaseView">
    <div class="alex">
      <h1>Alex Cerezo 👋</h1>
      <router-link to="/">
        <figure id="logo" class="logo">
          <svg id="original-logo" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.999 24C25.7943 23.9996 25.5946 23.9364 25.427 23.819C18.884 19.239 13.261 11.453 10.03 6.37997C11.729 16.908 11.027 22.838 10.992 23.124C10.953 23.3817 10.815 23.6141 10.6072 23.7715C10.3994 23.929 10.1384 23.9991 9.87968 23.9669C9.62099 23.9347 9.3851 23.8027 9.22228 23.5991C9.05945 23.3955 8.98256 23.1364 9.00799 22.877C9.01699 22.798 9.94399 14.844 7.02199 1.20897C6.97166 0.97326 7.00814 0.727301 7.12474 0.516357C7.24134 0.305413 7.43021 0.143679 7.65658 0.0609198C7.88295 -0.0218394 8.13159 -0.0200547 8.35675 0.0659453C8.58191 0.151945 8.76843 0.316374 8.88199 0.52897C8.96099 0.67697 16.889 15.402 26.573 22.181C26.7472 22.303 26.8779 22.4774 26.9462 22.6788C27.0145 22.8802 27.0168 23.0981 26.9528 23.3009C26.8888 23.5037 26.7619 23.6808 26.5903 23.8065C26.4188 23.9323 26.2117 24 25.999 24Z"/>
            <path d="M26.547 8.81796C23.071 9.77796 21.496 11.364 15.798 9.48496C11.078 7.92796 8.761 5.27796 9.453 3.17996C10.145 1.08196 12.633 0.0169578 17.353 1.57396C22.102 3.14096 21.476 5.03996 26.547 8.81796Z"/>
            <path d="M26 36C30.4183 36 34 32.4183 34 28C34 23.5817 30.4183 20 26 20C21.5817 20 18 23.5817 18 28C18 32.4183 21.5817 36 26 36Z"/>
            <path d="M11 36C15.4183 36 19 32.4183 19 28C19 23.5817 15.4183 20 11 20C6.58172 20 3 23.5817 3 28C3 32.4183 6.58172 36 11 36Z"/>
            </svg>
        </figure>
      </router-link>
    </div>
    <menu>
      <li>
        <router-link to="/profile" class="text large menu-link">Profile</router-link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </menu>
  </header>
  <template v-if="isCaseView">
    <div class="case-header">
      <section class="fade-in">
        <div class="case-header-container">
          <header>
            <div class="alex">
              <h1>Alex Cerezo 👋</h1>
              <router-link to="/">
                <figure id="logo" class="logo">
                  <svg id="original-logo" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.999 24C25.7943 23.9996 25.5946 23.9364 25.427 23.819C18.884 19.239 13.261 11.453 10.03 6.37997C11.729 16.908 11.027 22.838 10.992 23.124C10.953 23.3817 10.815 23.6141 10.6072 23.7715C10.3994 23.929 10.1384 23.9991 9.87968 23.9669C9.62099 23.9347 9.3851 23.8027 9.22228 23.5991C9.05945 23.3955 8.98256 23.1364 9.00799 22.877C9.01699 22.798 9.94399 14.844 7.02199 1.20897C6.97166 0.97326 7.00814 0.727301 7.12474 0.516357C7.24134 0.305413 7.43021 0.143679 7.65658 0.0609198C7.88295 -0.0218394 8.13159 -0.0200547 8.35675 0.0659453C8.58191 0.151945 8.76843 0.316374 8.88199 0.52897C8.96099 0.67697 16.889 15.402 26.573 22.181C26.7472 22.303 26.8779 22.4774 26.9462 22.6788C27.0145 22.8802 27.0168 23.0981 26.9528 23.3009C26.8888 23.5037 26.7619 23.6808 26.5903 23.8065C26.4188 23.9323 26.2117 24 25.999 24Z"/>
                    <path d="M26.547 8.81796C23.071 9.77796 21.496 11.364 15.798 9.48496C11.078 7.92796 8.761 5.27796 9.453 3.17996C10.145 1.08196 12.633 0.0169578 17.353 1.57396C22.102 3.14096 21.476 5.03996 26.547 8.81796Z"/>
                    <path d="M26 36C30.4183 36 34 32.4183 34 28C34 23.5817 30.4183 20 26 20C21.5817 20 18 23.5817 18 28C18 32.4183 21.5817 36 26 36Z"/>
                    <path d="M11 36C15.4183 36 19 32.4183 19 28C19 23.5817 15.4183 20 11 20C6.58172 20 3 23.5817 3 28C3 32.4183 6.58172 36 11 36Z"/>
                  </svg>
                </figure>
              </router-link>
            </div>
            <menu>
              <li>
                <router-link to="/profile" class="text large menu-link">Profile</router-link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </menu>
          </header>
          <div class="case-title">
            <h1>{{ title }}</h1>
            <p class="text large">{{ subtitle }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';

const route = useRoute();
const isCaseView = computed(() => route.name === 'case');

defineProps({
  isCaseView: Boolean,
  title: String,
  subtitle: String
})
</script>

<style lang="scss">
.case-header {
  width: 100%;
  height: auto;
  .case-header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--header-color);
    transition: background-color 0.3s ease;
    .case-title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      max-width: var(--width-page);
      margin-bottom: var(--spacing-20x);
      box-sizing: border-box;
      width: 100%;
      padding: calc(var(--spacing-20x) + var(--spacing-20x)) var(--spacing-8x) 0 var(--spacing-8x);
      h1 {
        margin-bottom: var(--spacing-2x);
      }
    }
  }
}
header {
  width: 100%;
  max-width: var(--width-page);
  padding: var(--spacing-20x) var(--spacing-8x) 0 var(--spacing-8x);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  figure.logo {
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0;
    svg {
      &.zelda {
        .zelda-01 {
          fill: var(--zelda-color-01);
        }
        .zelda-02 {
          fill: var(--zelda-color-02);
        }
        .zelda-03 {
          fill: var(--zelda-color-03);
        }
        circle,
        rect,
        path {
          fill: red;
        }
      }
      circle,
      rect,
      path {
        fill: var(--text-color);
      }
    }
  }
  menu {
    list-style: none;
    display: flex;
    align-items: center;
    gap: var(--spacing-4x);
    margin: 0;
    padding: 0;
    .menu-link {
      color: var(--text-color);
      border-bottom: 1px solid var(--text-color);
      padding-bottom: 2px;
    }
  }
}
@media (max-width: 720px) {
  header {
    padding-bottom: var(--spacing-6x);
  }
}
</style>