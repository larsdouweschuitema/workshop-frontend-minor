import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/components/App'

import routes from '@/routes'
import store from '@/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({routes})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
