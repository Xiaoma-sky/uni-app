import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import { http } from './api.js'
Vue.config.productionTip = false
//  全局挂载封装好的api方法
Vue.prototype.$http = http
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif