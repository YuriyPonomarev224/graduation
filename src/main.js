import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import './assets/scss/general.scss'
import './assets/scss/general_media.scss'

createApp(App).use(router).mount('#app')
