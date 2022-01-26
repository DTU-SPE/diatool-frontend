import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from './components/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
