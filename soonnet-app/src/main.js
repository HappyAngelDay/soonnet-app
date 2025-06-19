import { createApp } from 'vue';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import App from './App.vue';

import 'framework7/framework7-bundle.css';

Framework7.use(Framework7Vue);

const app = createApp(App);
registerComponents(app);
app.mount('#app');
