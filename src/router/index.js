import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import Welcome from '@/components/Welcome'
import AuthGuard from './authentication-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      beforeEnter: AuthGuard
    }
  ]
})
