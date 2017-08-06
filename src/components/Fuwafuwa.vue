<template>
  <div id="fuwafuwa">
    <span v-for="i in circleNum" class="circle" :class="getClass(i)" :style="'top:'+getCirclePosition()+'%; left:'+getCirclePosition()+'%;'+'background-color:'+getCircleColor()+';'"></span>
  </div>
</template>

<script>
import Utils from '../Utils'
export default {
  name: 'fuwafuwa',
  data () {
    return {
      circleNum: 20,
      getClass: function (i) {
        return (i % 2 === 0) ? 'vertical' : 'horizontal'
      },
      getCirclePosition: function () {
        return Utils.getRandomInt(98, 2)
      },
      getCircleColor: function () {
        // var max = Utils.COLORS.length
        const keys = Object.keys(Utils.COLORS)
        const key = keys[Utils.getRandomInt(5, 0)]
        return Utils.COLORS[key]
      }
    }
  }
}
</script> 

<style scoped>
#fuwafuwa {
  width: 100%;
  height: 80vh;
  position: absolute;
  background-color: transparent;
}
#fuwafuwa.back {
  z-index: -1;
}
/* random animation */
@keyframes horizontal {
    0% { transform:translateX( -50px); transform:translateY( 0px);}
  100% { transform:translateX(  0px); transform:translateY( -20px);}
}
@keyframes vertical {
    0% { transform:translateX( 0px); transform:translateY(-50px); }
  100% { transform:translateX( -25px); transform:translateY(  0px); }
}
.circle {
  width:10px;
  height:10px;
  display: block;
  border-radius: 5px;
  position: absolute;
  background-color: red;
}
.circle:nth-child(odd) {
  animation: horizontal 8s ease-in-out infinite alternate;
}
.circle:nth-child(even) {
  animation: vertical 8s ease-in-out infinite alternate;
}
.circle.peteern1 { animation-duration: 6s}
.circle.peteern2 { animation-duration: 6.7s}
.circle.peteern3 { animation-duration: 7.3s}
.circle.peteern4 { animation-duration: 8.2s}
</style>