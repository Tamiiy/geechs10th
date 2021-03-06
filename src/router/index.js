import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import Message from '@/pages/Message'
import History from '@/pages/History'
import Download from '@/pages/Download'
import Loading from '@/pages/Loading'

// コンポーネント登録
import Header from '@/components/Header'
Vue.component('Header', Header)
import Footer from '@/components/Footer'
Vue.component('Footer', Footer)
import Pics from '@/components/Pics'
Vue.component('Pics', Pics)
import Fuwafuwa from '@/components/Fuwafuwa'
Vue.component('Fuwafuwa', Fuwafuwa)
import SPMenu from '@/components/SPMenu'
Vue.component('SPMenu', SPMenu)
import Modal from '@/components/Modal'
Vue.component('Modal', Modal)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/Download',
      name: 'download',
      component: Download
    }
  ]
})

