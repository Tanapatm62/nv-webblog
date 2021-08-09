import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Index'
import CreateUser from '@/components/CreateUser'
import EditUser from '@/components/EditUser'
import ShowUser from '@/components/ShowUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/createuser',
      create: 'createuser',
      component: CreateUser
    },
    {
      path: '/edituser',
      name: 'editeuser',
      component: EditUser
    },
    {
      path: '/user',
      Createname: 'showuser',
      component: ShowUser
    }
  ]
})
