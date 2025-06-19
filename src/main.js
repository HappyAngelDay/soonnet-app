import { createApp } from 'vue'
import App from './App.vue'

// Framework7 主檔案（完整版）
import Framework7 from 'framework7'

// Vue plugin
import Framework7Vue, { registerComponents } from '../node_modules/framework7-vue/framework7-vue-bundle'

// CSS（直接引入 bundle）
import '../node_modules/framework7/framework7-bundle.css'

Framework7.use(Framework7Vue)

const app = createApp(App)
registerComponents(app)

async function initializeApp() {
  try {
    const result = await someAsyncFunction(); // 確保 Promise 被正確處理
    console.log(result); // 顯示結果而非 [object Promise]
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();

app.mount('#app')