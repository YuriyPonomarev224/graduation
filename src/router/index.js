import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarnivorePage from '../views/Carnivore.vue'
import WaterPage from '../views/Water.vue'
import FlyPage from '../views/Fly.vue'
import HerbPage from '../views/Herb.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Carnivore',
    name: 'carnivore-page',
    component: CarnivorePage
  },
  {
    path: '/Fly',
    name: 'fly-page',
    component: FlyPage
  },
  {
    path: '/Herb',
    name: 'herb-page',
    component: HerbPage
  },
  {
    path: '/Water',
    name: 'water-page',
    component: WaterPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
