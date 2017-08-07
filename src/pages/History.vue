<template>
<div id="history">
  <div class="upper">
  <div class="container cf">
    <img class="title" src="../assets/history/hst_title.png">
    <div class="textBox">
      <h2>10年の感謝をこめて。</h2>
      <h3>ギークス株式会社は<br v-if="isSp">今年で創業10周年を迎えました。</h3>
      <p>10周年の歩みと今後のビジョンを、<br/>
皆さまへの感謝とともに<br v-if="isSp">代表取締役社長曽根原が語ります。</p>
    </div>
  </div>
  </div>
  <div class="content">
  <div class="container">
    <section>
      <h4>おかげさまで10周年を迎えることができました </h4>
      <p>2017年8月23日、弊社はおかげさまをもちまして創業50周年を迎えました。これはひとえにお得意先やお取引先の皆様のご支援の賜ものと心より感謝申し上げます。</p>
      <p>2007年、共同創業したウェブドゥジャパンの一事業であった「IT人材」部門を分社化して、ベインキャリージャパン、つまり現在のギークスを設立しました。当時は、ウェブドゥジャパンの子会社でしたが、2009年にMBO（マネジメントバイアウト）をして独立しました。</p>
    </section>

    <section>
      <img src="../assets/history/pic1.jpg" class="left">
      <h4>会社設立後のリーマンショックの苦難</h4>
      <p>2007年、共同創業したウェブドゥジャパンの一事業であった「IT人材」部門を分社化して、ベインキャリージャパン、つまり現在のギークスを設立しました。当時は、ウェブドゥジャパンの子会社でしたが、2009年にMBO（マネジメントバイアウト）をして独立しました。<br/>
      以来、「21世紀で最も感動を与えた会社になる」ことをビジョンに掲げ、ITフリーランスと企業をマッチングすることで、双方を支援する事業を展開してまいりました。</p>
    </section>

    <section>
      <p>世界金融危機が起こり、一気に日本経済も不景気になった2009年、ベインキャリージャパンもその煽りを受け、契約の打ち切りなども多発。そして、売り上げは半減、社員数も減り、本当に厳しい時期を迎えました。</p>
      <p>このリーマンショックをきっかけに、既存事業の見直し、新たにゲーム業界への参入を決意しました。<br/>
既存のIT人材事業の見直しでは、それまではクライアントとしてSIerや業務系システムなどのBtoB企業が多かったのですが、リーマンショック当時でも成長していたスマホゲームやインターネットサービスを持つBtoC企業へとシフトすることで、事業の建て直しを図りました。<br/>
そして、ゲーム業界への参入は、自社でもサービスを持ち新たな収益源を確保したいと考えたためです。</p>
    </section>

    <section>
      <img src="../assets/history/pic2.jpg" class="right">
      <h4>会社のリブランディングと社名変更</h4>
      <p>2013年、会社のリブランディングを図り、社名もギークスに変更しました。</p>
      <p>まずはエンジニアが集まる会社にするために、21cafeというイベントスペースをエンジニア勉強会に無料で貸し出し、未経験者を育てるエンジニア育成プログラムもスタートしました。ゲーム開発に必要な技術力は、IT人材事業で培ったフリーランスネットワークに助けられ、徐々に技術力をつけてきました。</p>
      <p>創業事業であるIT人材事業はフリーランスに特化して事業を大きくしてきました。そして、ゲーム事業については、女性向けゲーム市場に注目して、大手ゲームメーカーと協業という戦略をとっています。そして、VRやMRなどの最新技術を活用した動画事業、ゴルフに特化したメディアやフリマアプリを運営するインターネット事業を展開しています。</p>
    </section>

    <section>
      <img src="../assets/history/pic3.jpg" class="left">
      <h4>全事業を伸ばしていく、ギークスのこれから</h4>
      <p>いまギークスはこのように4つの事業を展開していますが、基軸となっているIT人材事業とゲーム事業も伸ばして既存事業を強化するとともに、動画やネットメディアやなどの新しい成長分野にも投資していきます。リスク分散を意識し、複数の事業柱で収益源を多様化したポートフォリオ経営戦略をとり、ますます会社を拡大していきます。何かの事業が落ち込んだときに、他の事業でカバーできるよう、全事業を伸ばしていきます。</p>
      <p>ギークスの最大の強みは「人」というインフラです。ギークスに登録してくれている12000人のITフリーランスや、ギークスの社員もそうです。今後、世の中がどんな状況になろうとも、その変化に対応できる組織、必ず生き残れる会社にしていきたいと思っています。</p>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX所存です。この大きな節目に際しまして、皆様のご厚情に重ねて感謝申し上げるとともに、なお一層のご支援とご鞭撻を賜りますよう心よりお願い申し上げます。</p>
    </section>

    <section class="sign">
      代表取締役社長<br/>
      <label>曽根原　稔人</label>
    </section>
  </div>
  </div>
  <div class="footBox"></div>
  <div class="footPic"></div>
</div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upper {
  background-color: #f7f7f7;
  padding: 20px 0;
}
.content {
  padding: 50px 0;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.title {
  margin: 15px 25px 15px 0;
  float: left;
}
/*content*/
.guide {
  width: 400px;
}
.textBox {
  margin-top: 70px;
}
h2 {
  color: #444444;
  font-weight: normal;
  text-align: left;
  font-size: 1.8rem;
  margin: 0;
}
h3 {
  color: #444444;
  font-weight: normal;
  text-align: left;
  font-size: 1.2rem;
  margin-top: 0;
}
h4 {
  color: #666666;
  text-align: left;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 10px;
}
p {
  font-size: 0.9rem;
  display: block;
  text-align: left;
  margin-bottom: 20px;
  line-height: 2.1;
  color: #444444;
  word-break: break-all;
}
section {
  margin-bottom: 40px;
}
section:before,
section:after {
  content: " ";
  display: table;
}
section:after {
  clear: both;
}
section {
  *zoom: 1;
}
img.left {
  float: left;
  margin-right: 30px;
  margin-bottom: 10px;
}
img.right {
  float: right;
  margin-left: 30px;
  margin-bottom: 10px;
}
section.sign {
  text-align: right;
  font-size: 0.8rem;
}
section.sign label {
  font-size: 1.1rem;
}
.footBox {
  background-color: #f7f7f7;
  height: 360px;
  margin-top: -360px;
}
.footPic {
  background: url(../assets/history/pic4.jpg) no-repeat;
  background-size: cover;
  height: 400px;
}
/*for SP*/
@media (max-width: 768px) {
  h2 {
    font-size: 1.7rem;
  }
  .upper {
    padding-bottom: 0;
  }
  .container {
    width: 100%;
    padding: 0;
  }
  .title {
    float: none;
    width: 70%;
    margin: 0;
  }
  .textBox {
    background-color: #FFF;
    margin-top: 20px;
    padding: 30px 15px 15px;
  }
  .textBox > * {
    text-align: center;
  }
  p {
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5;
  }
  section {
    padding: 0 15px;
  }
  img.left {
    width: 100%;
    margin-right: 0;
    margin-bottom: 15px;
    float: none;
  }
  img.right {
    width: 100%;
    margin-left: 0;
    margin-bottom: 15px;
    float: none;
  }
  .content {
    padding-bottom: 0;
  }
  .footBox {
    display: none;
  }
  .footPic {
    width: 100%;
    height: 100px;
  }
}
</style>
