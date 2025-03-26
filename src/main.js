import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { projects } from '@/data/projects.js';

import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(router);

router.afterEach((to) => {
  if (to.name === 'case') {
    const project = projects.find(p => p.id === to.params.id);
    if (project) {
      document.title = `Alex Cerezo | ${project.title}`;
    } else {
      document.title = 'Alex Cerezo';
    }
  } else if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Alex Cerezo';
  }
});

app.mount('#app');