<template>
  <div class="pics">
    <transition-group 
      class="picGroup" 
      name="demo" 
      tag="ul" 
      appear 
      v-on:before-enter="beforeEnter" 
      v-on:enter="enter" 
      v-on:leave="leave" 
      v-for="(max,i) in cardNum" 
    >
      <li v-for="j in 50" :key="(i+1)+'_'+j" :data-index="(i+1)+'_'+j" class="card">
        <img :src="require('../assets/staff/' + (i+1) + '_0' + getRandomCard(max) + '.png')">
      </li>
    </transition-group>
  </div>
</template>

<script>
import Utils from '../Utils'
export default {
  name: 'Pics',
  data () {
    return {
      cardNum: [6, 7, 7, 7, 7, 7],
      cardSet: [],
      getRandomCard: function (max) {
        return Math.floor(Math.random() * (max - 1 + 1)) + 1
      }
    }
  },
  created () {
  },
  methods: {
    beforeEnter (el) {
      // el.style.opacity = 0
    },
    enter (el, done) {
      let ij = el.dataset.index.split('_')
      let delay = ((ij[1] - 1) * 4000) + (250 * (Utils.getRandomInt(20) * 0.5))
      setTimeout(function () {
        el.className = 'card flipInX'
        if (el.previousSibling) { // TODO: 本当はleave使いたいんだ。。
          el.previousSibling.remove()
        }
      }, delay)
    },
    leave (el, done) {
    }
  }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pics {
  margin-top: 30px;
}
.picGroup {
  width: 180px;
  height: 350px;
  display: inline-block;
  position: relative;
  margin:0 -25px 0 -25px;
}
.card {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 350px;
}
.card img {
  width: 100%;
  /*animation: flipInX .3s ease-in-out both;*/
}
.flipInX {
  animation: flipInX .7s ease-in-out both;
}
/*animate*/
@keyframes flipInX {
  from {
    transform: perspective(300px) rotate3d(1, 0, 0, 70deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(300px) rotate3d(1, 0, 0, -4deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(300px) rotate3d(1, 0, 0, 2deg);
    opacity: 1;
  }
  80% {
    transform: perspective(300px) rotate3d(1, 0, 0, -1deg);
  }
  to {
    transform: perspective(300px);
    opacity: 1;
  }
}

/*for SP*/
@media (max-width: 768px) {
  .picGroup {
    width: 20%;
    display: inline-block;
    margin:0 -10px 0 -10px;
    /*margin:0;*/
    height: 150px;
  }
  .card {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: perspective(100px)
  }
  .card img {
    width: 100%;
    /*animation: flipInX .3s ease-in-out both;*/
  }
}
</style>
