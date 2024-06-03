import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import router from './app/router/router.js';
import App from './app/App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');
