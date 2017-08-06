<template>
  <header class="cf">
    <img class="logo fleft" src="../assets/logo.png">
    <ul class="menu fright">
      <li v-for="m in menu"><sub>{{ m.sub }}</sub><p><font :color="m.color">{{ m.font }}</font>{{ m.p }}</p><span :style="'background-color:'+m.color"></span></li>
    </ul>
  </header>
</template>

<script>
import Utils from '../Utils'
export default {
  name: 'Header',
  data () {
    return {
      menu: [
        {sub: 'サンクスメッセージ', font: 'T', p: 'hanksMessage', color: Utils.COLORS.pink, path: 'thanks'},
        {sub: 'ヒストリー', font: 'H', p: 'istory', color: Utils.COLORS.blue},
        {sub: 'ダウンロード', font: 'D', p: 'ownload', color: Utils.COLORS.purple}
      ]
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  cursor: pointer;
}
.menu {
  font-family: 'Montserrat Alternates', sans-serif;
  color: #6e6e6e;
  margin-top: 15px;
}
.menu li {
  margin-left: 30px;
  position: relative;
  cursor: pointer;
}
.menu sub {
  font-size: 12px;
}
.menu p {
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
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

</style>
