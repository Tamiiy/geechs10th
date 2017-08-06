<template>
<div id="top">
  <Fuwafuwa :class="{back : is_finish}"></Fuwafuwa>
  <div class="wrapper">
    <img class="catch" src="../assets/top/top_catch.png">
    <p>皆さまに支えられて、ギークスは10周年を迎えました。<br />これまでも、これからも「感謝」を創造しつづけます。</p>
    <Pics></Pics>
  </div>
</div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      is_finish: false,
      is_none: false
    }
  },
  created () {
    const me = this
    setTimeout(function () {
      me.is_finish = true
      setTimeout(function () {
        me.is_none = true
      }, 2000)
    }, 3000)
  },
  methods: {
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
  z-index: 10;
}
</style>
