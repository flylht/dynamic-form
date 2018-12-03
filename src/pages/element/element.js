// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(ElementUI)
//阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 防止new对象没有赋值给一个对象的时候，eslint会报错
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
