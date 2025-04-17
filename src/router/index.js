import { createRouter, createWebHistory } from 'vue-router';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/firebase-config';
import Home from '../views/HomeView.vue';
import Profile from '../views/ProfileView.vue';
import Case from '../views/CaseView.vue';

const routes = [
  { path: '/', component: Home, name: 'home', meta: { title: 'Alex Cerezo | Product Designer' } },
  { path: '/profile', component: Profile, name: 'profile', meta: { title: 'Alex Cerezo | Profile' } },
  { path: '/work/:id', component: Case, name: 'case' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  logEvent(analytics, 'page_view', {
    page_path: to.fullPath,
    page_title: to.meta.title || 'Default Title'
  });
});

export default router;