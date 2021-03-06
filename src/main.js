import fastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
