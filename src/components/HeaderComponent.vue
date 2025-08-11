<template>
  <header>
    <div class="header-container">
      <div class="alex">
        <h1>Alex Cerezo 👋</h1>
        <router-link to="/">
          <LogoComponent />
        </router-link>
      </div>
      <menu>
        <ul>
          <li>
            <router-link
              to="/"
              class="text regular menu-link"
              :class="{ selected: route.path === '/' || route.path.startsWith('/work/') }"
            >
              Work
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="text regular menu-link"
              :class="{ selected: route.path === '/about' }"
            >
              About
            </router-link>
          </li>
        </ul>
        <div class="menu-toggle">
          <ThemeToggle />
        </div>
      </menu>
    </div>
  </header>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import LogoComponent from '@/components/LogoComponent.vue';
  import ThemeToggle from '@/components/ThemeToggle.vue';

  const route = useRoute();
</script>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    padding: var(--spacing-10x) 0;
    transition: background-color .3s ease;
    .header-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      max-width: var(--width-xl);
      padding: 0 var(--spacing-10x);
      menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-6x);
        padding: 0;
        margin: 0;
        cursor: default;
        ul {
          display: flex;
          align-items: center;
          gap: var(--spacing-6x);
          margin: 3px 0 0 0;
          padding: 0;
          .menu-link {
            color: var(--text-primary);
            border-bottom: 1px solid transparent;
            padding-bottom: var(--spacing-1x);
            &.selected {
              border-bottom-color: var(--text-primary);
            }
          }
        }
        .menu-toggle {
          width: 40px;
          height: 40px;
          background-color: var(--bg-secondary);
          border-radius: 40px;
          transition: background-color .3s ease;
        }
      }
    }
    .alex {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: var(--spacing-4x);
      h1 {
        color: transparent;
        line-height: 1;
        &::selection {
          color: #1A1A1A;
        }
      }
    }
  }
  @media (max-width: 720px) {
    .alex {
      h1 {
        font-size: var(--font-size-lg);
        line-height: var(--line-height-md);
      }
    }
  }
</style>