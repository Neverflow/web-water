import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const MainUser = () => import('@/views/mainUser/mainUser.vue')
const Login = () => import('@/views/login/login.vue')
const Home = () => import('@/views/home/home.vue')
const nowTDS = () => import('@/views/nows/nowTDS/nowTDS.vue')
const nowTemp = () => import('@/views/nows/nowTemp/nowTemp.vue')
const nowPH = () => import('@/views/nows/nowPH/nowPH.vue')
const notFound = () => import('@/views/404/error.vue')
//安装插件
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/mainuser'
    },
    {
        path: '/mainuser',
        name: 'MainUser',
        component: MainUser,
        redirect: '/mainuser/login',
        children: [{
            path: 'login',
            name: 'Login',
            component: Login,
            // 不需要登录的页面添加meta属性
            meta: {
                noAuth: true
            }
        }]
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/home/nowph',
        children: [{
                path: 'nowtds',
                name: 'nowTDS',
                component: nowTDS
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
    },
    {
        path: '*',
        name: 'error',
        component: notFound,
        meta: {
            noAuth: true
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


// 导航守卫
router.beforeEach((to, from, next) => {
    if (!to.meta.noAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem('loginstatus')) { // 判断本地是否存在access_token
            next()
        } else {
            // 未登录,跳转到登陆页面，并且带上 将要去的地址方便登陆后跳转。
            next({
                path: '/',
                query: {
                    referrer: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})

export default router