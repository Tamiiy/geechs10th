<template>
  <ul class="pics">
    <li class="card" v-for="(max,i) in cardNum">
      <img :src="require('../assets/staff/' + (i+1) + '_0' + getRandomCard(max) + '.png')">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pics',
  data () {
    return {
      cardNum: [6, 7, 7, 7, 7, 7],
      getRandomCard: function (max) {
        return Math.floor(Math.random() * (max - 1 + 1)) + 1
      }
    }
  }
}
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pics {
  margin-top: 30px;
}
.card {
  margin:0 -25px 0 -25px;
}
.card img {
  height: 350px;
}

/*animate*/
@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}
</style>
