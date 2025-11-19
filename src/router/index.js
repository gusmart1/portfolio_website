import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
