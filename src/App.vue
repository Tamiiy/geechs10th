<template>
  <div id="app" :class="{noScroll: is_menu_open}">
    <Header></Header>
    <article>
      <router-view></router-view>
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
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
