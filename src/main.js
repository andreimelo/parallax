import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Create the Vue app instance
const app = createApp(App);

// Use the router with the app
app.use(router);

// Mount the app to the DOM element with id #app
app.mount('#app');
