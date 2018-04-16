import 'es6-promise/auto'
import Vue from 'vue'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'
import Router from 'vue-router'
import Index from '@/components/Pages/Index'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      index: 'home',
      icon: 'home'
    }
  ]
})
