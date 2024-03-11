import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import cookies from 'vue-cookies'

createApp(App).use(store).use(router).use(cookies).mount('#app')
