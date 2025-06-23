import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LayoutView from '@/views/LayoutView.vue'
import Photobooth from '@/views/Photobooth.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/layout', component: LayoutView },
  { path: '/photobooth', component: Photobooth },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router