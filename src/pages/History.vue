<template>
<div id="history">
  <div class="upper">
  <div class="container cf">
    <img class="title" src="../assets/history/hst_title.png">
  </div>
  </div>
  <div class="content">
  <div class="container">
    <section>
      <h2>10年の感謝を込めて。<br>ギークス株式会社は<br v-if="isSp">創業10周年を迎えました。 </h2>
      <p>2017年8月23日、弊社はおかげさまをもちまして創業10周年を迎えました。これはひとえにお得意先やお取引先の皆様のご支援の賜ものと心より感謝申し上げます。</p>
      <p>2007年、共同創業したウェブドゥジャパンの一事業であった「IT人材」部門を分社化して、ベインキャリージャパン、つまり現在のギークスを設立しました。当時は、ウェブドゥジャパンの子会社でしたが、2009年にMBO（マネジメントバイアウト）をして独立しました。</p>
    </section>

    <section>
      <img src="../assets/history/pic1.jpg" class="left">
      <h4>リーマンショックの苦難を乗り越えて</h4>
      <p>「21世紀で最も感動を与えた会社になる」ことをビジョンに掲げ、ITフリーランスと企業をマッチングすることで、双方を支援する事業を展開してまいりました。</p>
      <p>世界金融危機が起こり、一気に日本経済も不景気になった2009年、ベインキャリージャパンもその煽りを受け、契約の打ち切りなども多発。そして、売り上げは半減、社員数も減り、本当に厳しい時期を迎えました。このリーマンショックを乗り越えるべく、私たちも変化する必要がありました。</p>
    </section>
    <section>
      <p>それまで主なクライアントはSIerや業務系システムなどのBtoB企業様でしたが、当時、著しく成長していたスマホゲームやインターネットサービスを持つBtoC企業様に注目することで、IT人材事業の建て直しを図りました。<br/>さらに、大きな挑戦として、ゲーム業界への新規参入を決意しました。自社でC向けサービスを持ち、新たな収益源を確保したいと考えたためです。「一社専業」ではなく、複数の事業柱を持つ「ポートフォリオ経営」を意識したのはこの頃です。</p>
    </section>

    <section>
      <img src="../assets/history/pic2.jpg" class="right">
      <h4>会社のリブランディングと社名変更</h4>
      <p>営業会社がゲーム開発の技術力をつけていくのは容易いことではありませんでした。2012年、ゲーム事業を始めた当初、IT人材事業で培ったフリーランスネットワークを生かしてゲーム開発をしてきましたが、自社で開発メンバーを募集してもなかなか応募が来ない…、技術力をつけるためにも会社のリブランディングが急務でした。</p>
      <p>2013年、社名を「ギークス株式会社」に変更し、未経験者から育てるエンジニア育成プログラムをスタート。そして、社内のスペースを活用して、エンジニアのための無料イベントスペース「21cafe」の運営をスタートし、エンジニアとの接点を多く持つ仕組みを作りました。</p>
      <p>そうして、有難いことに大手企業様やゲームメーカー様との協業案件を頂くことができ、ゲーム開発会社として実績を積んできました。</p>
    </section>




    <section>
      <img src="../assets/history/pic3.jpg" class="left">
      <h4>全事業を伸ばしていく、ギークスのこれから</h4>
      <p>現在、弊社は大きく4つの事業を展開しています。創業事業であるIT人材事業、大手ゲームメーカーと協業戦略をとるゲーム事業、VRやMRなどの最新技術を活用した動画事業、ゴルフに特化したメディアやフリマアプリを運営するインターネット事業。</p>
      <p>基軸事業であるIT人材事業やゲーム事業を強化するとともに、動画やネットメディアやなどの新しい成長分野にも投資していきます。リスク分散を意識し、複数の事業柱で収益源を多様化したポートフォリオ経営戦略で全事業を伸ばし、ますます会社を拡大していきます。</p>
      <p>弊社の最大の強みは「人」というインフラです。弊社に登録してくださっている12000人のITフリーランスや、一緒に働くギークスの社員に支えられています。今後、世の中がどんな状況になろうとも、その変化に対応できる組織、必ず生き残れる会社にして、インターネット産業に貢献するとともに、「感動」を生み続ける集団でいたいと考えています。</p>
      <p>
10周年の大きな節目に際しまして、皆様のご厚情に重ねて感謝申し上げるとともに、なお一層のご支援とご鞭撻を賜りますよう心よりお願い申し上げます。</p>
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
  font-size: 1.6rem;
  margin: 0 0 30px;
  text-align: center;
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
  background-color: #fdfdfd;
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
    font-size: 1.4rem;
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
    font-size: 0.9rem;
    line-height: 1.9;
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
    padding-top: 0;
    padding-bottom: 0;
  }
  .content .container {
    padding-top: 30px;
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
