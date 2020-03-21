import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui';
import moment from 'moment';
import echarts from "echarts";
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'

Vue.config.productionTip = false
//挂载需要的插件
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

Vue.filter("dateFmt", (input, formatString = "YYYY-MM-DD HH:mm:ss") => {
  return moment(input).format(formatString)
})
Vue.filter("dateArrFmt", (input, formatString = "HH:mm:ss") => {
  return moment(input).format(formatString)
})



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
