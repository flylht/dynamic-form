import Vue from 'Vue'
import router from '../../router'
import two from './two.vue'

new Vue({
    el:'#app',// 这里参考cell.html和cell.vue的根节点id，保持三者一致
    router,
    render: h => h(two)
})