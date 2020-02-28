import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const MainUser = () => import('@/views/mainUser/mainUser.vue')
const Login = () => import('@/views/login/login.vue')
const Register = () => import('@/views/register/register.vue')
const Home = () => import('@/views/home/home.vue')
const nowADT = () => import('@/views/nows/nowADT/nowADT.vue')
const nowTemp = () => import('@/views/nows/nowTemp/nowTemp.vue')
const nowPH = () => import('@/views/nows/nowPH/nowPH.vue')
//安装插件
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/mainuser'
}, {
    path: '/mainuser',
    name: 'MainUser',
    component: MainUser,
    redirect: '/mainuser/login',
    children: [
        {
            path: 'login',
            name: 'Login',
            component: Login,
            // 不需要登录的页面添加meta属性
            meta: { noAuth: true }
        },
        {
            path: 'register',
            name: 'register',
            component: Register,
            meta: { noAuth: true }
        },
    ]
}, {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/nowph',
    children: [
        {
            path: 'nowadt',
            name: 'nowADT',
            component: nowADT
        },
        {
            path: 'nowtemp',
            name: 'nowTemp',
            component: nowTemp
        },
        {
            path: 'nowph',
            name: 'nowPH',
            component: nowPH
        },
    ]
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})


// 导航守卫

export default router