<template>
<div id="Loading">
  <div class="wrapper">
    <Fuwafuwa></Fuwafuwa>
    <img class="logo" src="../assets/common/10th_logo_large.png">
  </div>
</div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  },
  created () {
    let me = this
    setTimeout(function () {
      me.$router.push({path: 'top'})
    }, 4000)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Loading {
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
/*.longFade-leave {
  animation: hide 3s ease-in-out alternate;
}*/
.wrapper {
  background-color: #FFF;
  width: 100vw;
  height: 100vh;
  animation: fadeInOut 4s ease-in-out alternate;
  animation-fill-mode: both;
  z-index: 0;
}
@keyframes fadeInOut {
    0% { opacity: 0; }
    20%{ opacity: 1; }
    70%{ opacity: 1; }
  100% { opacity: 0; }
}


@keyframes vertical {
    0% { transform:translateY(-10px); }
  100% { transform:translateY(  0px); }
}
img.logo {
  z-index: 100;
  margin-top: 30vh;
  animation: vertical 2s ease-in-out infinite alternate;
}
@media (max-width: 768px) {
  img.logo {
    width: 40%;
    margin-top: 38vh;
    animation: vertical 2s ease-in-out infinite alternate;
  }
}
</style>
