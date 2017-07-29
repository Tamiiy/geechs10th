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
      cardNum: [2, 2, 2, 2, 2, 2],
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
</style>
