<template>
  <div id="app" :class="{noScroll: is_menu_open}">
    <Header></Header>
    <article>
      <transition name="fade" appear>
        <router-view></router-view>
      </transition>
    </article>
    <Footer v-if="!isSp"></Footer>
    <SPMenu v-if="isSp"></SPMenu>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Noto Sans CJK JP', 游ゴシック体, 'Yu Gothic', YuGothic, Meiryo, 'メイリオ';
  color: #424141;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  margin: 0;
}
/*float*/
.fright {
  float: right;
}
.fleft {
  float: left;
}
/*clearfix*/
.cf:before,
.cf:after {
  content: " ";
  display: table;
}
.cf:after {
  clear: both;
}
.cf {
  *zoom: 1;
}
@keyframes hide {
    0% { opacity: 1; }
  100% { opacity: 0; display: none;}
}
@keyframes show {
  100% { opacity: 1; }
  0% { opacity: 0; }
}
a:-webkit-any-link {
  text-decoration: none;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
/*for 画面遷移*/
.fade-before-leave {
  opacity: 0;
}
/*.fade-enter, .fade-leave {
  opacity: 0;
}*/
.fade-enter-active {
  opacity: 1;
  transition: opacity .3s;
}
.fade-enter {
  opacity: 0;
}

/*for SP*/
@media (max-width: 768px) {
  #app {
    margin-bottom: 44px;
  }
  .container {
    width: 100%;
    padding: 15px;
  }
}
</style>
