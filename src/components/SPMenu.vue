<template>
  <div id="SPMenu" :class="{open: is_menu_open}" v-on:scroll.stop v-on:scroll.prevent>
    <div class="head" v-if="!is_menu_open" v-on:click="is_menu_open = true">
      <span>MENU</span>
    </div>
    <div class="content">
      <ul class="menu">
        <router-link  v-for="m in menu" :to="m.path" exact>
          <li><p>{{ m.text }}</p></li>
        </router-link>
      </ul>
      <Footer></Footer>
      <span v-on:click="is_menu_open = false">CLOSE</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPMenu',
  data () {
    return {
      menu: [
        {text: 'ThanksMessage', path: 'message'},
        {text: 'History', path: 'history'},
        {text: 'Download', path: 'download'}
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#SPMenu {
  background-color: #bcbcbc;
  height: calc(100vh - 90px);
  top: calc(100vh - 44px);
  position: fixed;
  color: #FFF;
  transition: top .3s ease-out;
  width: 100%;
}
#SPMenu.open {
  top: 90px;
}
.head {
  background: url(../assets/common/icon_menu_normal.png) no-repeat center 5px;
  background-size: auto 18px;
  height: 44px;
}
.head span {
  display: inline-block;
  margin-top: 25px;
  font-size: 0.9rem;
  font-family: 'Montserrat Alternates', sans-serif;
}
.content span {
  background: url(../assets/common/icon_menu_close.png) no-repeat center 5px;
  background-size: auto 18px;
  height: 44px;
  display: block;
  padding-top: 25px;
  font-size: 0.9rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  font-family: 'Montserrat Alternates', sans-serif;
}
.menu {
  margin-top: 15vh;
  font-family: 'Montserrat Alternates', sans-serif;
}
.menu li {
  margin-top: 20px;
  position: relative;
  cursor: pointer;
  display: block;
}
.menu p {
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: #FFF;
}
ul.corporate {
  padding: 6px 12px;
  font-size: 0.8rem;
}

/*for SP*/
@media (min-width: 768px) {

}
</style>
