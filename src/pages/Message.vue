<template>
<div id="message">
  <div class="upper">
  <div class="container cf">
    <img class="title" src="../assets/message/msg_title.png">
    <div class="machine" v-on:click="showCards()">
      <img class="mechine__btn" src="../assets/message/msg_machine_btn.png">
      <img class="mechine__help" src="../assets/message/msg_icon_pointer01.png">
    </div>
  </div>
  </div>
  <div class="content">
  <div class="container">
    <img class="guide" src="../assets/message/msg_guide.png">
    <h2>ギークス社員から皆様へ感謝のメッセージ。</h2>
    <p>日ごろお世話になっている皆様へ、ひとりひとりから感謝の気持ちを伝えるメッセージ。<br/>ガチャをまわしてお読みください！</p>
    <transition-group name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" class="messageBox" :class="'col-'+cardNumCol">
      <li v-for="i in (currentPage*cardTotalNum >= cardDataNum ? cardDataNum : currentPage*cardTotalNum)" :key="i" :data-index="i">
        <img class="card" :src="require('../assets/cards/' + cardSrc(i))">
      </li>
    </transition-group>
    <div class="paging" v-if="currentPage > 0">
      <img class="guide" src="../assets/message/msg_guide2.png">
      <label>読んだメッセージ数</label>
      <span>{{ currentPage * cardTotalNum }} / {{ cardDataNum + 1 }}</span>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Utils from '../Utils'
export default {
  name: 'message',
  data () {
    return {
      cardNumRow: 3,
      cardNumCol: 3,
      cardTotalNum: 9,
      cardDataNum: 158,
      cardIndex: [],
      currentPage: 0,
      beforeIndex () {
        return (this.currentPage - 1) * this.cardTotalNum
      },
      nextIndex () {
        return this.currentPage * this.cardTotalNum
      },
      totalPage () {
        return Math.floor(this.cardDataNum / this.cardTotalNum) + 1
      },
      cardSrc (i) {
        return 'msg' + this.cardIndex[i] + '.jpg'
      },
      show: false
    }
  },
  created () {
    this.cardIndex = Utils.getRandomIntUnique(this.cardDataNum)
  },
  methods: {
    showCards () {
      // 最初はカード0
      this.show = true
      this.currentPage = this.currentPage + 1
      // currentIndex <= (curerntPage * cardTotalNum) なら描画
      // currentIndex <= cardDataNum なら描画
      // TODO: currentIndexをv-forするたびに +1 する必要がある
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = (el.dataset.index - this.beforeIndex()) * 150
      setTimeout(function () {
        el.className = 'fadeInUp'
      }, delay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upper {
  background-color: #f7f7f7;
  padding: 20px 0;
  margin-top: -11px;

  /*固定*/
  position: fixed;
  width: 100%;
  margin-top: 96px;
  z-index: 9;
}
.content {
  background-color: #f8ccdf;
  padding: 50px 0;
}
.content .container {
  margin-top: 400px;
}
.title {
  /*margin-top: 25px;*/
  float: left;
}
.machine {
  background: url(../assets/message/msg_machine_base.png) no-repeat;
  background-size: 100% 100%;
  width: 168px;
  height: 260px;
  float: right;
  margin-right: 150px;
  position: relative;
}
.mechine__btn {
  position: absolute;
  width: 65px;
  top: 162px;
  left: 52px;
  cursor: pointer;
}
.mechine__help {
  position: absolute;
  width: 95px;
  top: 164px;
  left: 120px;
  /*animation: flash 2s ease 2s infinite;*/
  animation: blink 2s step-end infinite alternate;
}
/* 点滅 */
@keyframes blink{
    21%,40%,61%,80%,100% { transform: rotate(-10deg); }
    0%,20%,41%,60%,81%,99% { transform: rotate(0); }
}

/*content*/
.guide {
  width: 400px;
}
h2 {
  color:#6e6e6e;
  text-shadow: #FFF 2px 2px 0px, #FFF -2px 2px 0px,
             #FFF 2px -2px 0px, #FFF -2px -2px 0px;
}
p {
  font-size: 0.9rem;
}

/*cards*/
.messageBox {
  margin-top: 40px;
}
.col-3 li {
  width: 30%;
}
.card {
  margin-top: 10px;
  width: 100%;
}
.fadeInUp {
  animation: fadeInUp .5s ease-in-out both;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.paging {
  margin-top: 30px;
}
.paging .guide {
  width: 380px;
  display: block;
  margin: 0 auto 10px;
}
.paging label {
  padding: 10px 20px;
  background-color: #ef7faf;
  color: #FFF;
  border-radius: 10px;
  font-weight: bold;
}
.paging span {
  margin-left: 15px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ef7faf;
}
</style>
