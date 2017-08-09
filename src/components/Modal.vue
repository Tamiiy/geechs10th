<template>
  <transition name="fade">
  <div id="modal">
    <div v-if="modalType == 'top'">
      <span v-if="isSp" class="cancel sp" v-on:click="hideModal"></span>
      <div class="card cf">
        <img src="../assets/news/temp_nws_img.jpg">
        <div class="textBox">
          <span v-if="!isSp" class="cancel" v-on:click="hideModal"></span>
          <h2>タイトルタイトルタイトル</h2>
          <p>文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章</p>
          <a href="https://geechs.com/20160823_9th_anniversary/" target="_blank"><span class="more">more...</span></a>
        </div>
      </div>
      <a href="https://geechs.com/20160823_9th_anniversary/" target="_blank"><span class="btn">以前の10周年のイベントの様子はこちら！</span></a>
    </div>
    <div v-if="modalType == 'download'" class="dl">
      <span class="cancel" v-on:click="hideModal"></span>
      <img v-if="downloadSize == 'ipn7'" src="../assets/download/c_ipn7.jpg">
      <img v-if="downloadSize == 'ipn7p'" src="../assets/download/c_ipn7p.jpg">
      <img v-if="downloadSize == 'android'" class="android" src="../assets/download/c_android.jpg">
      <span class="help" v-if="isSp">※画像を長押しして保存してね！</span>
      <span class="help" v-else>※画像を右クリックして保存してね！</span>
    </div>
  </div>
  </transition>
</template>

<script>
// import Utils from '../Utils'
export default {
  name: 'modal',
  props: ['modalType', 'downloadSize'],
  data () {
    return {
    }
  },
  methods: {
    hideModal () {
      this.$emit('hide-modal')
    }
  }
}
</script> 

<style scoped>
#modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(100,100,100,0.8);
  z-index: 1000;
  top: 0;
}
.card {
  width: 840px;
  height: 345px;
  margin: 20vh auto 0;
  background: #FFF;
  text-align: left;
}
.textBox {
  width: 325px;
  float: right;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
}
h2 {
  font-size: 1.2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: normal;
}
p {
  font-size: 0.85rem;
}
.cancel {
  position: absolute;
  right: 15px;
  top: 20px;
  width: 30px;
  height: 30px;
  background: url(../assets/news/nws_icon_close_gray.png) no-repeat right top;
  cursor: pointer;
}
.dl .cancel {
  background-image: url(../assets/news/nws_icon_close_white.png);
  right: 30px;
  top: 20px;
}
.more {
  position: absolute;
  right: 15px;
  bottom: 10px;
  width: 65px;
  height: 30px;
  padding-top: 5px;
  font-size: 0.85rem;
  background: url(../assets/news/nws_icon_window_gray.png) no-repeat right center;
  background-size: auto 15px;
  color: #6e6e6e;
  cursor: pointer;
}
.btn {
  margin-top: 30px;
  display: inline-block;
  font-size: 0.9rem;
  width: 350px;
  height: 40px;
  border: 2px solid #FFF;
  border-radius: 5px;
  background: url(../assets/news/nws_icon_window_white.png) no-repeat right 13px center;
  background-size: auto 15px;
  background-color: rgba(100,100,100,0.7);
  color: #FFF;
  padding-top: 8px;
  padding-right: 10px;
  cursor: pointer;
}
.dl img {
  margin-top: 5vh;
  height: 80vh;
  width: auto;
  max-width: 80vw;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.4);
}
.help {
  margin-top: 10px;
  display: block;
  font-size: 0.9rem;
  color: #FFF;
  font-weight: bold;
}
/*for SP*/
@media (max-width: 768px) {
  .card {
    width: 80vw;
    margin: 10vh auto 0;
    height: 70vh;
  }
  .textBox {
    width: 100%;
    height: 50%;
  }
  h2 {
    margin-top: 15px;
  }
  img {
    width: 100%;
  }
  .cancel.sp {
    background-image: url(../assets/news/nws_icon_close_white.png);
  }
  .dl .cancel {
    right: 10px;
    top: 10px;
  }
  .dl img.android {
    height: auto;
    max-width: 80vw;
    margin-top: 23vh;
  }
}
</style>