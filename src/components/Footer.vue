<template>
  <footer class="cf">
    <p class="fleft">Copyright (C) 2013 geechs Inc. All rights reserved</p>
    <div class="fright">
      <ul class="corporate">
        <li><img src="../assets/common/logo_geechs.png"></li>
        <li>コーポレートサイト →</li>
      </ul>
      <img class="social fb" src="../assets/common/icon_fb.png">
      <img class="social tw" src="../assets/common/icon_tw.png">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  width: 1000px;
  margin: 50px auto 5px;
  color: #6e6e6e;
}
p {
  font-size: 12px;
  margin-top: 7px;
}
ul.corporate {
  border: 1px solid #AAA;
  height: 30px;
  display: table;
  float: left;
}
ul.corporate li {
  margin: 0;
  padding: 3px 7px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
}
ul.corporate li:first-child {
  border-right: 1px solid #AAA;
}
ul.corporate img {
  height: 15px;
  vertical-align: middle;
}
img.social {
  height: 26px;
  vertical-align: middle;
  margin: 2px 0 2px 10px;
}
</style>
