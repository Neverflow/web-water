import Vue from 'vue'
import VueRouter from 'vue-router'


//安装插件
Vue.use(VueRouter)

const routes = []
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router