import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import About from '@/components/About'
//const Lucy = () => import('@/components/Lucy')
import Lucy from '@/components/Lucy'
Vue.use(Router)



// 创建路由实例并配置路由映射  
// path:'*',redirect:'/home'  重定向到path是/home的映射

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'Lucy',
      //component: resolve => require(['@/components/About'], resolve)
      component: Lucy
    }
  ]
})