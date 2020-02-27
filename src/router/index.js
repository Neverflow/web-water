import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Login = () => import('../views/login/login.vue')

//安装插件
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    component: Login
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})


// 导航守卫

router.beforeEach(function (to, from, next) {
    console.log('路由拦截')
    console.log(to.name)
    console.log(from.name)
    if (to.name == 'login') {
        next();
    } else {
        /**
         * @todo 设置如果用户没有登录无法通过路由进入其他界面
         */
        if (true) {
            next();
        } else {
            next({ path: '/login' });
        }
    }
})
export default router