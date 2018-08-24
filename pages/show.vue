<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="2"/>

    <!--navbar-->
    <div class="navbar">
      <div class="navbar-container">
        <span>
          <nuxt-link to="/">首页</nuxt-link> > <nuxt-link to="/case">维修案例</nuxt-link> > 追光者，股东百达斐丽3445翻新记
        </span>
      </div>
    </div>

    <!--main-->
    <main class="main">
      <div class="main-left">
        <h1 class="title">追光者，股东百达翡丽3445翻新记</h1>
        <p class="article-info">
          <span>作者：小辛</span>
          <span>来源：西亨名表维修</span>
          <span>发布时间：2018-08-03</span>
        </p>
        <article id="article" v-html="html">
          <!--从玩车到腕表，从这个坑走入那个坑，填坑的过程很痛苦，也走过很多弯路，付过很多冤枉钱，但，我并不后悔，毕竟只有走过，遇到过，才是最真实的存在过。-->
          <!--很多人会质疑以香港公价换算成人民币几乎翻倍的价格入手一款所谓的爆款腕表值得吗？我的答案是：不要在花甲之年才去完成而立之年的梦想，会被别人当做笑话。很多人会接着说：你这是任性。然而我的价值观是，钱本身没有意义，只有通过你的汗水或者智慧换取到钞票后，再将这些报酬变成自己心仪的物品，从而满足内心那么一点的满足感或者虚荣感才有价值。另外，千金难买心头好，喜欢的东西，暂时没有能力，创造条件也得上，这也是工作的一种动能吧。见到心仪之物，在自己的能力范围内选最贵的，准没错，不后悔。-->
          <!--一只表能反映出一个人的内心，我曾经有过一个飞行员的梦，所以入手了两块万国（IW326501、IW389002），但这个梦想遥不可及了，后来喜欢上潜水，就入了一块黑鬼。再后来喜欢上了赛车，这个梦想一直在延续，并努力去学习，练习以及完成，迪通拿与赛车的联系由来已久了，经过一段时间的内心挣扎后，决定入手一块。-->
          <!--其实生活就那么简单，喜欢就去争取，奖赏也好，犒劳也罢，确认过眼神后，就踩下地板油，毕竟人生梦一场，革命至苍老。-->
          <!--很多人会质疑以香港公价换算成人民币几乎翻倍的价格入手一款所谓的爆款腕表值得吗？我的答案是：不要在花甲之年才去完成而立之年的梦想，会被别人当做笑话。很多人会接着说：你这是任性。然而我的价值观是，钱本身没有意义，只有通过你的汗水或者智慧换取到钞票后，再将这些报酬变成自己心仪的物品，从而满足内心那么一点的满足感或者虚荣感才有价值。另外，千金难买心头好，喜欢的东西，暂时没有能力，创造条件也得上，这也是工作的一种动能吧。见到心仪之物，在自己的能力范围内选最贵的块万国（IW326501、IW389002），但这个梦想遥不可及了，后来喜欢上潜水，就入了一块黑鬼。再后来喜欢上了赛车，这-->

        </article>
      </div>
      <Advertisement />
    </main>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Advertisement from '../components/Advertisement'

  export default {
    name: "show",
    components: {
      Header,
      Footer,
      Advertisement,
    },
    data(){
      return {
        html: '从玩车到腕表，从这个坑走入那个坑，填坑的过程很痛苦，也走过很多弯路，付过很多冤枉钱，但，我并不后悔，毕竟只有走过，遇到过，才是最真实的存在过。<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535116654791&di=4291caaeb7eda1d8bf3336f39ff8b30b&imgtype=0&src=http%3A%2F%2Fa1.hoopchina.com.cn%2Fattachment%2FDay_090602%2F49_709415_948e4af50e5ed27.jpg") width="800px"/>'+
          '很多人会质疑以香港公价换算成人民币几乎翻倍的价格入手一款所谓的爆款腕表值得吗？我的答案是：不要在花甲之年才去完成而立之年的梦想，会被别人当做笑话。很多人会接着说：你这是任性。然而我的价值观是，钱本身没有意义，只有通过你的汗水或者智慧换取到钞票后，再将这些报酬变成自己心仪的物品，从而满足内心那么一点的满足感或者虚荣感才有价值。另外，千金难买心头好，喜欢的东西，暂时没有能力，创造条件也得上，这也是工作的一种动能吧。见到心仪之物，在自己的能力范围内选最贵的，准没错，不后悔。' +
          '一只表能反映出一个人的内心，我曾经有过一个飞行员的梦，所以入手了两块万国（IW326501、IW389002），但这个梦想遥不可及了，后来喜欢上潜水，就入了一块黑鬼。再后来喜欢上了赛车，这个梦想一直在延续，并努力去学习，练习以及完成，迪通拿与赛车的联系由来已久了，经过一段时间的内心挣扎后，决定入手一块。' +
          '其实生活就那么简单，喜欢就去争取，奖赏也好，犒劳也罢，确认过眼神后，就踩下地板油，毕竟人生梦一场，革命至苍老。\n' +
          '很多人会质疑以香港公价换算成人民币几乎翻倍的价格入手一款所谓的爆款腕表值得吗？我的答案是：不要在花甲之年才去完成而立之年的梦想，会被别人当做笑话。很多人会接着说：你这是任性。然而我的价值观是，钱本身没有意义，只有通过你的汗水或者智慧换取到钞票后，再将这些报酬变成自己心仪的物品，从而满足内心那么一点的满足感或者虚荣感才有价值。另外，千金难买心头好，喜欢的东西，暂时没有能力，创造条件也得上，这也是工作的一种动能吧。见到心仪之物，在自己的能力范围内选最贵的块万国（IW326501、IW389002），但这个梦想遥不可及了，后来喜欢上潜水，就入了一块黑鬼。再后来喜欢上了赛车，这'
      }
    }
  }
</script>

<style scoped>

  .navbar{
    border: 1px solid #ddd;
  }

  .navbar .navbar-container{
    max-width: 1280px;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
  }

  .navbar-container >span{
    font-family: "PingFangSC-Regular";
    color: #999;
    font-size: 20px;
  }

  .navbar-container >span a{
    font-family: "PingFangSC-Regular";
    color: #999;
    font-size: 20px;
    transition: all .3s ease;
  }
  .navbar-container >span a:hover{
    color: #333;
  }

  .main{
    max-width: 1280px;
    margin: 0 auto;
  }

  .main:after{
    content: "";
    display: block;
    clear: both;
  }

  .main-left{
    float: left;
    width: 800px;
  }

  .main-left .title{
    font-family: "PingFangSC-Regular";
    color:#000;
    font-size: 36px;
    margin-top: 20px;
    font-weight: 400;
  }

  .main-left .article-info{
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    margin-top: 25px;
  }

  .main-left .article-info span{
    color: #999
  }

  .main-left .article-info span:not(:first-child){
    margin-left: 25px;
  }

  #article{
    margin-top: 40px;
    font-family: "PingFang SC";
    font-size: 24px;
    line-height: 2em;
  }

  #article img{
    width: 100%;
  }

</style>
