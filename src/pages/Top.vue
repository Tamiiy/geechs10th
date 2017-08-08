<template>
<div id="top">
  <Fuwafuwa :class="{back : is_finish}"></Fuwafuwa>
  <Modal v-if="modalShow" @hide-modal="hideModal" modal-type="top"></Modal>
  <div class="wrapper">
    <img class="catch" src="../assets/top/top_catch.png">
    <p>皆さまに支えられて、ギークスは10周年を迎えました。<br />これまでも、これからも「感動」を創造し続けます。</p>
    <Pics></Pics>
    <div class="news" v-on:click="modalShow = true">
      <img class="pic" src="../assets/news/temp_nws_img.jpg">
      <img class="new" src="../assets/news/nws_icon_new.png">
      <img class="arrow" src="../assets/news/nws_icon_arrow.png">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      is_finish: false,
      modalShow: false
    }
  },
  created () {
    // const me = this
  },
  methods: {
    hideModal: function () {
      this.modalShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
  padding-top: 70px;
}
p {
  margin-top: 20px;
  font-size: 18px;
}
.wrapper {
  z-index: 5;
  width: 1000px;
  margin: 0 auto;
  position: relative;
}
.news {
  width: 210px;
  height: 180px;
  position: absolute;
  right: -30px;
  cursor: pointer;
  animation: fadeInUp .8s ease 4s;
  animation-fill-mode: both;
}
@keyframes fadeInUp {
  from { opacity: 0; bottom: -30px; }
  to { opacity: 1; bottom: 0; }
}
.pic {
  width: 200px;
  transform: rotate(-4deg);
  position: absolute;
  top: 30px;
  left: 0;
  border: 4px solid #FFF;
  box-shadow: 1px 1px 3px #AAA;
}
.new {
  position: absolute;
  left: calc(48% - 35px);
  width: 70px;
}
.arrow {
  position: absolute;
  right: 10px;
  bottom: 22px;
  width: 30px;
}

/*for SP*/
@media (max-width: 768px) {
  #top {
    padding-top: 40px;
  }
  .wrapper {
    width: 100%;
    z-index: 0;
  }
  .catch {
    width: 90%;
  }
  p {
    font-size: 0.9rem;
  }
  .news {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 10px auto;
  }
}
</style>
