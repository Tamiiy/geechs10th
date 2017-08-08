<template>
<div id="download">
  <Modal v-if="modalShow" @hide-modal="hideModal" modal-type="download" download-size="downloadSize"></Modal>
  <div class="upper">
  <div class="container cf">
    <img class="title" src="../assets/download/dl_title.png">
  </div>
  </div>
  <div class="content">
  <div class="container cf">
    <div class="right">
    <h3>10周年記念<br v-if="isSp">「カクテル王子」<br/>特別デザインの<br v-if="isSp">壁紙をプレゼント！</h3>
      <p class="big">ご自身の機種に合わせてダウンロードしてご利用ください。</p>
      <p class="caution">※PCでもダウンロードはできますが、<br/>
スマートフォン用サイズのみの配布になっております。</p>
      
      <div v-if="!isSp">
        <h4>カクテル王子（プリンス）キャラクター集合！</h4>
        <div class="btns">
          <span v-on:click="modalShow = true; downloadSize = 'ipn7'">iPhone7</span>
          <span v-on:click="">iPhonePlus</span>
          <span v-on:click="">Android</span>
        </div>

        <div class="share">
          <label>このページをシェア!</label>
          <img src="../assets/download/dl_fb.png">
          <img src="../assets/download/dl_tw.png">
        </div>
      </div>
    </div>
    <img src="../assets/download/dl_wallpaper.jpg" class="left">
    <div class="wall" v-if="isSp">
      <h4>カクテル王子（プリンス）キャラクター集合！</h4>
      <div class="btns">
        <span>iPhone7</span>
        <span>iPhonePlus</span>
        <span>Android</span>
      </div>
      <div class="share">
        <label>このページをシェア!</label>
        <img src="../assets/download/dl_fb.png">
        <img src="../assets/download/dl_tw.png">
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      modalShow: false,
      downloadSize: null
    }
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
.upper {
  background-color: #f7f7f7;
  padding: 20px 0;
}
.content {
  padding: 20px 0;
}
.container {
  width: 900px;
  margin: 0 auto;
}
.content .container {
  background: url(../assets/download/dl_caution.png) no-repeat right top;
  background-size: 180px auto;
}
.title {
  margin: 0;
}
/*content*/
h2 {
  color: #444444;
  font-weight: normal;
  text-align: left;
  font-size: 1.8rem;
  margin: 0;
}
h3 {
  color: #444444;
  font-weight: normal;
  text-align: left;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 5px;
  line-height: 1.4;
}
h4 {
  color: #666666;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 2px 10px;
  border-bottom: 3px solid #b884c6;
}
p {
  font-size: 1rem;
  display: block;
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.5;
}
p.caution {
  font-size: 0.8rem;
}
.left {
  width: 300px;
  float: left;
  margin-right: 20px;
}
.right {
  width: calc(100% - 320px);
  margin-top: 150px;
  float: right;
}
.btns span {
  display: inline-block;
  width: 31%;
  height: 44px;
  line-height: 40px;
  border: 2px solid #b5b5b5;
  border-radius: 6px;
  text-align: center;
  box-sizing: border-box;
  font-size: .9rem;
  margin: 0 2px;
  cursor: pointer;
  background-color: #FFF;
}
.btns span:hover {
  /*background-color: rgba(184, 132, 198, 0.3);*/
  background-color: #b884c6;
  color: #FFF;
  transition: background-color .5s;
}
.share {
  text-align: right;
  margin-top: 50px;
}
.share > * {
  vertical-align: middle;
  margin-left: 5px;
}
.share label {
  color: #666666;
  vertical-align: middle;
  font-size: .8rem;
  font-weight: bold;
}

/*for SP*/
@media (max-width: 768px) {
  h3 {
    font-size: 1.3rem;
  }
  .container {
    width: 100%;
    padding: 0;
  }
  .content .container {
    background-size: 130px auto;
    background-position: right 15px top;
  }
  .title {
    float: none;
    width: 90%;
    margin: 0;
  }
  p {
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  p.big {
    margin-top: 30px;
  }
  p.caution {
    margin-top: 15px;
  }
  img.left {
    width: calc(50% - 20px);
    margin: 30px 0 15px 15px;
    float: left;
    border: 1px solid #DDD;
  }
  .right {
    width: 100%;
    float: none;
    margin-top: 17px;
    padding: 0 15px;
  }
  .content {
    padding-bottom: 0;
  }
  .wall {
    float: left;
    width: calc(50% - 20px);
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .btns span {
    width: 100%;
    margin-bottom: 10px;
  }
  .share {
    margin-top: 0;
  }
  h4 {
    margin-top: 30px;
    font-size: 1.0rem;
  }
}
</style>
