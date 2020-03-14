import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Delivery from '../components/Delivery.vue'
import OrderingGuide from '../components/OrderingGuide.vue'
import History from '../components/History.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeLink',
    components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      delivery: Delivery,
      history: History
    }
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/about',
    name: 'aboutLink',
    components: About,
    children: [
      {
        path: '/contact',
        name: 'contactLink',
        components: Contact
      },
      {
        path: '/history',
        name: 'historyLink',
        components: History
      },
      {
        path: '/delivery',
        name: 'deliveryLink',
        components: Delivery
      },
      {
        path: '/ordering-guide',
        name: 'orderingGuideLink',
        components: OrderingGuide
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
