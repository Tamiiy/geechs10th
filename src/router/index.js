import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'

// コンポーネント登録
import Header from '@/components/Header'
Vue.component('Header', Header)
import Footer from '@/components/Footer'
Vue.component('Footer', Footer)
import Pics from '@/components/Pics'
Vue.component('Pics', Pics)
import Fuwafuwa from '@/components/Fuwafuwa'
Vue.component('Fuwafuwa', Fuwafuwa)
import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    }
  ]
})

