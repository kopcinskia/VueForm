import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StartPage from '@/components/StartPage'
import MyFormBootstrap from '@/components/MyFormBootstrap'
import MyFormWithVuelidate from '@/components/MyFormWithVuelidate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/vue',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bootstrap',
      name: 'BootstrapForm',
      component: MyFormBootstrap
    },
    {
      path: '/vuelidate',
      name: 'VuelidateForm',
      component: MyFormWithVuelidate
    }
  ]
})
