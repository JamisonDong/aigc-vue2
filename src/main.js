import Vue from 'vue'
import Antd from 'ant-design-vue'
import MTD from '@ss/mtd-vue'
import App from './App.vue'
import '@ss/mtd-vue/lib/theme2/index.css'
import 'ant-design-vue/dist/antd.css';

Vue.use(MTD)
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
