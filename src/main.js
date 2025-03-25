import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importar estilos globales
import '@/assets/styles/main.scss';

// Importar directivas
import vFadeIn from '@/directives/vFadeIn.js';
import vImageZoom from '@/directives/vImageZoom.js';

// Crear la app
const app = createApp(App);

// Registrar directivas
app.directive('fade-in', vFadeIn);
app.directive('image-zoom', vImageZoom);

app.use(router);
app.mount('#app');