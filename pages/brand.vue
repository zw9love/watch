<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="1"/>

    <!--banner-->
    <div class="banner">
      <img src="../assets/img/brand_banner@2x.png" alt="">
    </div>

    <!--品牌介绍-->
    <div class="brand">
      <div class="brand-container">
        <strong class="brand-page-title">品牌介绍</strong>
        <div class="brand-main-container">
          <img src="../assets/img/brand_bg@2x.png" alt="" class="bg">
          <div class="brand-info-container">
            <img src="../assets/img/brand_logo@2x.png" alt="">
            <p class="brand-info-txt">
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。 西亨名表维修中心设立于50年代，发际于80年
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。 西亨名表维修中心设立于50年代，发际于80年
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--荣誉资质-->
    <div class="qualification">
      <div class="qualification-container">
        <strong class="brand-page-title">荣誉资质</strong>
        <div class="qualification-img-container">
          <img src="../assets/img/brand_images1@2x.png" alt="" class="bg">
          <img src="../assets/img/brand_images2@2x.png" alt="" class="bg">
          <img src="../assets/img/brand_images3@2x.png" alt="" class="bg">
        </div>
      </div>
    </div>

    <!--服务环境-->
    <div class="environmental">
      <img src="../assets/img/home_serviceenvironment_bg@2x.png" alt="">
      <div class="environmental-container">
        <div class="environmental-main">
          <h1 class="environmental-main-title">服务环境</h1>
          <div class="carousel">
            <el-carousel type="card" height="340px" :autoplay="false" arrow="never" indicator-position="none"
                         @change="carouselChange" ref="carousel">
              <el-carousel-item name="0">
                <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
              </el-carousel-item>
              <el-carousel-item name="1">
                <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
              </el-carousel-item>
              <el-carousel-item name="2">
                <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
              </el-carousel-item>
            </el-carousel>
            <div class="indicator">
              <span v-for="(item, key) in 3" :key="key" @click="indicatorClick(key)">
                <span class="indicator-active" v-if="key === indicatorKey"></span>
                <img v-else src="../assets/img/home_serviceenvironment_button_no@2x.png" alt="">
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="environmental-container320">
        <div class="carousel">
          <el-carousel type="card" :height="stackHeight + 'px'" :autoplay="false" arrow="never"
                       indicator-position="none"
                       @change="carouselChange">
            <!--<el-carousel-item v-for="item in 3" :key="item">-->
            <!--<h3>{{ item }}</h3>-->
            <!--</el-carousel-item>-->
            <el-carousel-item name="0">
              <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="1">
              <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="2">
              <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
            </el-carousel-item>
          </el-carousel>
          <Indicators v-model="indicatorKey" :list="[1,1,1]" ></Indicators>
        </div>
      </div>
    </div>


    <!--维修案例-->
    <div class="case">
      <div class="case-container">
        <strong class="brand-page-title">维修案例</strong>
        <div class="case-main-container">
          <span @mouseenter="leftIconEnter" @mouseleave="leftIconLeave" @click="leftIconClick">
            <img src="../assets/img/home_qualitycommitment__lefter_icon_no@2x.png" alt="" class="left-icon"
                 v-if="!leftActive">
            <img src="../assets/img/home_qualitycommitment__lefter_icon_yes@2x.png" alt="" class="left-icon" v-else>
          </span>
            <span @mouseenter="rightIconEnter" @mouseleave="rightIconLeave" @click="rightIconClick">
            <img src="../assets/img/home_qualitycommitment__right_icon_no@2x.png" alt="" class="right-icon"
                 v-if="!rightActive">
            <img src="../assets/img/home_qualitycommitment__right_icon_yes@2x.png" alt="" class="right-icon" v-else>
          </span>
          <el-carousel indicator-position="none" :autoplay="false" arrow="never" height="638px" ref="caseCarousel">
            <el-carousel-item v-for="(item, key) in caseCarouselList" :key="key">
              <div class="case-main-cell">
                <img src="../assets/img/brand_images8@2x.png" alt="" class="bg">
                <div class="case-info-container">
                  <h3>追光机：百达翡丽手工精饰机芯部件 (Caliber CHR 29-535 PS)</h3>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

        </div>
      </div>
    </div>

    <!--广告-->
    <div class="adver">
      <img src="../assets/img/brand_images9@2x.png" alt="">
    </div>

    <!--Footer-->
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Indicators from '../components/Indicators'
  import 'element-ui/lib/theme-chalk/index.css';
  export default {
    name: "brand",
    components: {
      Header,
      Footer,
      Indicators
    },
    data(){
      return {
        indicatorKey: 0,
        stackHeight: 0,
        leftActive: false,
        rightActive: false,
        caseIndex: 0,
        caseCarouselList: [1,1,1,1,1]
      }
    },
    mounted() {
      this.stackHeight = parseInt(window.innerWidth * 0.4667)
    },
    methods: {
      leftIconEnter() {
        this.leftActive = true
      },
      leftIconLeave() {
        this.leftActive = false
      },
      rightIconEnter() {
        this.rightActive = true
      },
      rightIconLeave() {
        this.rightActive = false
      },
      leftIconClick(){
        if(this.caseIndex > 0) this.$refs.caseCarousel.setActiveItem(--this.caseIndex)
      },
      rightIconClick(){
        if(this.caseIndex < this.caseCarouselList.length - 1) this.$refs.caseCarousel.setActiveItem(++this.caseIndex)
      },
      carouselChange(nowIndex, useIndex) {
        this.indicatorKey = nowIndex
      },
      indicatorClick(key) {
        this.indicatorKey = key
        this.$refs.carousel.setActiveItem(key)
        // console.log("key = " + key)
        // console.debug(this.$refs.carousel)
      },
    }
  }
</script>

<style scoped>
  @import "../assets/css/environmental.css";



  strong.brand-page-title{
    font-size: 48px;
    font-family: "FZLTZHK--GBK1-0";
    color: #333;
    text-align: center;
    display: block;
    margin-top: 100px;
    margin-bottom: 60px;
  }

  .banner{

  }

  .banner img{
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }

  .brand{
  }

  .brand-container, .qualification-container, .case-container{
    max-width: 1280px;
    margin: 0 auto
  }

  .brand-main-container{
    position: relative;
  }

  .brand-main-container img.bg{
    width: 100%;
    vertical-align: middle;
  }

  .brand-main-container .brand-info-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  .brand-info-container >img{
    display: inline-block;
    vertical-align: middle;
  }

  .brand-info-container .brand-info-txt{
    display: inline-block;
    width: 800px;
    vertical-align: middle;
    margin-left: 70px;
    color: #fff;
    font-size: 22px;
    white-space: normal;
    word-break: break-all;
    line-height: 40px;
  }

  .qualification-container .qualification-img-container{
  }

  .qualification-container .qualification-img-container img{
    vertical-align: middle;
    display: inline-block;
    width: calc((100% - 60px) / 3);
    margin-right: 30px;
  }

  .qualification-container .qualification-img-container img:last-child{
    margin-right: 0
  }

  .environmental-main-title {
    font-family: "FZLTZHK--GBK1-0";
    font-size: 40px;
    color: #fff;
    margin-top: 60px;
  }

  .environmental{
    height: 620px;
    min-height: 620px;
    overflow: hidden;
  }

  .case{}

  .case-main-container{
    position: relative;
  }

  .case-main-cell img{
    vertical-align: middle;
  }

  .case-info-container{
    height: 100px;
    line-height: 100px;
    background: #1F1F1F;
    padding: 0 20px;
  }

  .case-info-container h3{
    color: #BF9571;
    font-family: "PingFang SC";
    font-size: 26px;
  }

  .left-icon {
    position: absolute;
    top: 50%;
    left: -85px;
    transform: translateY(-50%);
    cursor: pointer;
    width: auto;
  }

  .right-icon {
    position: absolute;
    top: 50%;
    right: -85px;
    transform: translateY(-50%);
    cursor: pointer;
    width: auto;
  }


  .adver{
    margin-top: 100px;
  }

  .adver >img{
    width: 100%;
    cursor: pointer;
  }

</style>
