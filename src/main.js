// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// const app = createApp(App);
// app.use(router); // Vue 인스턴스에 Vue Router를 등록합니다.
// app.mount('#app');

createApp(App).use(router).mount('#app')
