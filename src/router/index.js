import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Profile from '../views/ProfileView.vue';
import Case from '../views/CaseView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/work/:id', component: Case }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;