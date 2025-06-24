import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes/routes'
import Camera from "simple-vue-camera";
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .component("camera", Camera)
    .mount('#app')
