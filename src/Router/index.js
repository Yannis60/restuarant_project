import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home_page.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import Restuarantlist from '@/components/Restuarantlist.vue'
import About from '@/components/About.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'

//route array of objects: path,component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/Menu',
    component: Menu
  },  {
    path:'/Order',
    component: Order
  },
  {
    path:'/Restuarantlist',
    component: Restuarantlist
  },
  {
    path:'/About',
    component: About
  },
  {
    path:'/Booking',
    component: Booking
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Feedback',
    component: Feedback
  }
  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router