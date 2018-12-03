import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/element/components/Home'
import Hello from '@/pages/element/components/Hello'
//import About from '@/components/About'
//使用import设置webpackchunkname
//安装插件 babel-plugin-syntax-dynamic-import
//.babelrc中修改：
//"plugins": [
//  "syntax-dynamic-import"
//]
//const Lucy = () => import(/* webpackChunkName: 'lucy' */'@/components/Lucy')

Vue.use(Router)



// 创建路由实例并配置路由映射  
// path:'*',redirect:'/home'  重定向到path是/home的映射

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lucy',
      name: 'Lucy',
      //component: resolve => require(['@/components/About'], resolve)
      //component: () => import(/* webpackChunkName: 'lucy' */'@/components/Lucy')
      component: r => {
        require.ensure([], () => r(require('@/pages/element/components/Lucy')), 'lucy')
      }
    }
  ]
})