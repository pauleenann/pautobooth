import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LayoutView from '@/views/LayoutView.vue'
import Photobooth from '@/views/Photobooth.vue'
import SelectionView from '@/views/SelectionView.vue'
import DesignView from '@/views/DesignView.vue'
import DownloadView from '@/views/DownloadView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/layout', component: LayoutView },
  { path: '/photobooth', component: Photobooth },
  { path: '/selection', component: SelectionView },
  { path: '/design', component: DesignView },
  { path: '/download', component: DownloadView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router