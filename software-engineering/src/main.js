import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Auth from "../components/Auth"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'auth',
      component: Auth,
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
