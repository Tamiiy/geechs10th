<template>
  <header class="cf" :class="{'fixed': $route.path === '/message'}">
  <div class="container">
    <router-link to="/top"><img class="logo fleft" src="../assets/logo.png"></router-link>
    <ul v-if="!isSp" class="menu fright">
      <router-link  v-for="m in menu" :to="m.path" exact><li><sub>{{ m.sub }}</sub><p><font :color="m.color">{{ m.font }}</font>{{ m.p }}</p><span :style="'background-color:'+m.color"></span></li></router-link>
    </ul>
  </div>
  </header>
</template>

<script>
import Utils from '../Utils'
export default {
  name: 'Header',
  data () {
    return {
      menu: [
        {sub: 'サンクスメッセージ', font: 'T', p: 'hanksMessage', color: Utils.COLORS.pink, path: 'message'},
        {sub: 'ヒストリー', font: 'H', p: 'istory', color: Utils.COLORS.blue, path: 'history'},
        {sub: 'ダウンロード', font: 'D', p: 'ownload', color: Utils.COLORS.purple, path: 'download'}
      ]
    }
  },
  methods: {
    changePage: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding-top: 30px;
}
header.fixed {
  /* 固定 */
  width: 100%;
  background: #FFF;
  position: fixed;
  z-index: 10;
}
.logo {
  cursor: pointer;
}
.menu {
  font-family: 'Montserrat Alternates', sans-serif;
  margin-top: 15px;
  margin-bottom: -10px;
}
.menu li {
  margin-left: 30px;
  position: relative;
  cursor: pointer;
}
.menu sub {
  font-size: 12px;
  color: #6e6e6e;
}
.menu p {
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
  color: #6e6e6e;
}
.menu span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity .2s ease-out;
}
.menu li:hover span {
  opacity: 1;
}
.menu .router-link-active li span {
  opacity: 1;
}

/*for SP*/
@media (max-width: 768px) {
  header {
    padding: 15px 10px;
  }
  .container {
    padding: 0;
  }
}
</style>
