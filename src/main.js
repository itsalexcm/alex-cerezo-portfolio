import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importar estilos globales
import '@/assets/styles/main.scss';

// Crear la app
const app = createApp(App);

app.use(router);
app.mount('#app');