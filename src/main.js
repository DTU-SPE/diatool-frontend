import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import DiaToolServices from './services/services.js'

// bootstrap
Vue.use(BootstrapVue)

// fontawesome
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// backend service
Vue.prototype.$backend = new DiaToolServices()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.title = 'DiaTool'
