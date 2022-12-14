import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/init.css'
import "amfe-flexible"
import "mdui/dist/css/mdui.min.css"
import "mdui/dist/js/mdui.js"
import Vant from 'vant';
import 'vant/lib/index.css';
// import "@/assets/js/index.js"
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
