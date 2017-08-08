<template>
  <footer class="cf" :class="{'none': $route.path === '/'}">
    <div class="fright">
      <a href="https://www.facebook.com/geechs.inc/?ref=ts&fref=ts" target="_blank">
        <img class="social fb" src="../assets/common/icon_fb.png">
      </a>
      <a href="https://twitter.com/geechs_pr" target="_blank">
        <img class="social tw" src="../assets/common/icon_tw.png">
      </a>
      <a href="https://geechs.com" target="_blank">
        <ul class="corporate">
          <li><img src="../assets/common/logo_geechs.png"></li>
          <li>コーポレートサイト →</li>
        </ul>
      </a>
    </div>
    <p class="fleft">Copyright (C) 2013 geechs Inc. All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  },
  methods: {
    fbShare () {
      window.open(encodeURI(decodeURI(this.href)), 'FBwindow', 'width=554, height=470, menubar=no, toolbar=no, scrollbars=yes')
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  width: 1000px;
  margin: 50px auto 30px;
  color: #6e6e6e;
}
footer.none {
  diplay: none;
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
  opacity: 1;
}
ul.corporate:hover {
  opacity: 0.7;
  transition: opacity .3s;
}
ul.corporate li {
  margin: 0;
  padding: 3px 7px;
  font-size: 12px;
  display: table-cell;
  vertical-align: middle;
  color: #6e6e6e;
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
  opacity: 1;
}
img.social:hover {
  opacity: 0.7;
  transition: opacity .3s;
}

/*for SP*/
@media (max-width: 768px) {
  footer {
    width: 100%;
  }
  .fright {
    float :none;
  }
  img.social {
    height: 36px;
    vertical-align: middle;
    margin: 2px 10px 2px;
  }
  ul.corporate {
    float :none;
    margin: 30px auto;
    background-color: #FFF;
  }
  .fleft {
    float :none;
  }
  p {
    color: #FFF;
  }
}
</style>
