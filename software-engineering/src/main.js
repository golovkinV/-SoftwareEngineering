import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Auth from "../components/Auth/Auth"
import Registration from "../components/Auth/Registration"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'auth',
      component: Auth
    },
    {
      path: '/sign_up',
      name: 'registration',
      component: Registration
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
