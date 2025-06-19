import { createApp } from 'vue'
import './style.css'
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
app.mount('#app')