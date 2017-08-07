// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let isSp = (function () {
  let ua = navigator.userAgent
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    return true
  } else {
    return false
  }
})()

// すべてのコンポーネントで使える共通バリュー&メソッド
Vue.mixin({
  data () {
    return {
      isSp: isSp,
      is_menu_open: false
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
