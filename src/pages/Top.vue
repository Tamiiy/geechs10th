<template>
<div id="top">
  <img class="catch" src="../assets/top/top_catch.png">
  <p>皆さまに支えられて、ギークスは10周年を迎えました。<br />これまでも、これからも「感謝」を創造しつづけます。</p>
  <Pics></Pics>
</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
