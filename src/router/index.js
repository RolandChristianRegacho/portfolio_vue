import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-fade' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { transition: 'slide-fade' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
      meta: { transition: 'slide-fade' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { transition: 'slide-fade' }
    }
  ]
})

export default router
