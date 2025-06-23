import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes/routes'
import Camera from "simple-vue-camera";


createApp(App)
    .use(router)
    .component("camera", Camera)
    .mount('#app')
