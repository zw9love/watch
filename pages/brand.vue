<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="1"/>

    <HeaderMobile title="品牌门店" />

    <!--banner-->
    <div class="banner" @click="$router.push({path: '/servicelist'})">
      <img :src="require('../assets/img/brand_banner@2x.png')" alt="" />
    </div>

    <div class="banner320">
      <swiper :aspect-ratio="200/375" v-model="bannerIndex" dots-position="center">
        <swiper-item class="banner320-swiper-img" v-for="(item, key) in envCarouselList" :key="key">
          <img style="width: 100%" :src="item.src" />
        </swiper-item>
      </swiper>
    </div>

    <!--品牌介绍-->
    <div class="brand">
      <div class="brand-container">
        <strong class="brand-page-title">品牌介绍</strong>
        <div class="brand-main-container">
          <x-img :src="require('../assets/img/brand_bg@2x.png')" alt="" class="bg" />
          <div class="brand-info-container">
            <x-img :src="require('../assets/img/brand_logo@2x.png')" alt="" />
            <p class="brand-info-txt">
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。 西亨名表维修中心设立于50年代，发际于80年
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。 西亨名表维修中心设立于50年代，发际于80年
              西亨-修合无人见，存心有天知。 诚信、公道、匠心一直是西亨人至今依然恪守的秉性。
            </p>
          </div>
        </div>
      </div>
      <div class="brand-container320">
        <strong class="brand-page-title320">品牌介绍</strong>
        <div class="brand-main-container320">
          <x-img :src="require('../assets/img/brand_bg320@2x.jpg')" alt="" />
          <div class="brand-info-container320">
            <p class="brand-info-txt320">
              西亨-修合无人见，存心有天知。<br>
              诚信、公道、匠心一直是西亨人至今依然恪守的秉性。<br>
              西亨名表维修中心设立于50年代，发际于80年代，自成立以来经百年技艺的传承与四代钟表手艺人的刻苦经营，已然成为国内名副其实的钟表世家。百年历程的钟表情缘为西亨积累了丰富的钟表维修经验与行业口碑。
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
          <x-img :src="require('../assets/img/brand_images1@2x.png')" alt="" class="bg" />
          <x-img :src="require('../assets/img/brand_images2@2x.png')" alt="" class="bg" />
          <x-img :src="require('../assets/img/brand_images3@2x.png')" alt="" class="bg" />
        </div>
      </div>
      <div class="qualification-container320">
        <strong class="brand-page-title320">荣誉资质</strong>
        <div class="qualification-img-container320">
          <x-img :src="require('../assets/img/brand_images1@2x.png')" alt="" class="bg" />
          <x-img :src="require('../assets/img/brand_images2@2x.png')" alt="" class="bg" />
          <x-img :src="require('../assets/img/brand_images3@2x.png')" alt="" class="bg" />
        </div>
      </div>
    </div>

    <!--服务环境-->
    <div class="environmental">
      <x-img :src="require('../assets/img/home_serviceenvironment_bg@2x.png')" alt="" />
      <div class="environmental-container">
        <div class="environmental-main">
          <!--<h1 class="environmental-main-title">服务环境</h1>-->
          <h1 class="environmental-main-title">服务环境</h1>
          <div class="carousel">
            <el-carousel type="card" height="410px" :autoplay="false" arrow="never" indicator-position="none"
                         @change="carouselChange" ref="carousel">
              <el-carousel-item :name="key + ''" v-for="(item, key) in envCarouselList" :key="key">
                <x-img :src="item.src" alt="" />
              </el-carousel-item>
            </el-carousel>
            <div class="indicator">
              <span v-for="(item, key) in 3" :key="key" @click="indicatorClick(key)">
                <span class="indicator-active" v-if="key === indicatorKey"></span>
                <x-img v-else :src="require('../assets/img/home_serviceenvironment_button_no@2x.png')" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="environmental-container320">
          <strong class="brand-page-title320">维修案例</strong>
          <strong class="brand-page-title320" style="margin-top: 0;font-weight: 500"><span>超过</span> <span style="color: #C8936B"> 32567800 </span><span>个成功维修案例</span></strong>
          <div class="carousel">
            <el-carousel type="card" :height="stackHeight + 'px'" :autoplay="false" arrow="never"
                         indicator-position="none"
                         @change="carouselChange">
              <!--<el-carousel-item v-for="item in 3" :key="item">-->
              <!--<h3>{{ item }}</h3>-->
              <!--</el-carousel-item>-->
              <el-carousel-item :name="key + ''" v-for="(item, key) in caseCarouselList" :key="key">
                <img :src="item.src" alt="" />
              </el-carousel-item>
            </el-carousel>
            <Indicators v-model="indicatorKey" :indicatorsStyle="{bottom: '-30px'}" :list="caseCarouselList" ></Indicators>
          </div>
        </div>
      </div>


    <!--维修案例-->
    <div class="case">
      <div class="case-container">
        <strong class="brand-page-title">维修案例</strong>
        <div class="case-main-container">
          <span @mouseenter="leftIconEnter" @mouseleave="leftIconLeave" @click="leftIconClick">
            <x-img :src="require('../assets/img/home_qualitycommitment__lefter_icon_no@2x.png')" alt="" class="left-icon"
                 v-if="!leftActive" />
            <x-img :src="require('../assets/img/home_qualitycommitment__lefter_icon_yes@2x.png')" alt="" class="left-icon" v-else />
          </span>
            <span @mouseenter="rightIconEnter" @mouseleave="rightIconLeave" @click="rightIconClick">
            <x-img :src="require('../assets/img/home_qualitycommitment__right_icon_no@2x.png')" alt="" class="right-icon"
                 v-if="!rightActive" />
            <x-img :src="require('../assets/img/home_qualitycommitment__right_icon_yes@2x.png')" alt="" class="right-icon" v-else />
          </span>
          <el-carousel indicator-position="none" :autoplay="false" arrow="never" height="638px" ref="caseCarousel">
            <el-carousel-item v-for="(item, key) in caseCarouselList" :key="key">
              <div class="case-main-cell">
                <img :src="item.src" alt="" class="bg" />
                <div class="case-info-container">
                  <h3>追光机：百达翡丽手工精饰机芯部件 (Caliber CHR 29-535 PS)</h3>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <!--到店指引-->
    <div class="store">
      <ServiceTitle info="store guide" name="到店指引" content="400-960-8888">
        <span slot="content" class="store-content">
          <x-img :src="require('../assets/img/home_storeguide_icon@2x.png')" alt="" />
          <span>400-960-8888</span>
        </span>
      </ServiceTitle>
      <div class="store-info">
        <h1>北京名表维修中心</h1>
        <p>营业时间：09:00-19:00（节假日不休）</p>
        <p>店铺地址：北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）</p>
        <p>乘车线路： 乘坐3路、130路、132路、133路、658路、659路、858路到莲坂北</p>
      </div>
      <div id="store-map"></div>
    </div>

    <!--广告-->
    <div class="adver" @click="$router.push({path: '/servicelist'})">
      <x-img :src="require('../assets/img/brand_images9@2x.png')" alt=""  />
    </div>

    <!--Footer-->
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Indicators from '../components/Indicators'
  import ServiceTitle from '../components/ServiceTitle'
  import HeaderMobile from '../components/HeaderMobile'
  export default {
    head () {
      return {
        title: '西亨名表维修中心-品牌门店-手表维修公司',
        meta: [
          { name: 'keywords', content: '名表维修,手表维修公司' },
          { name: 'description', content: '西亨名表维修中心,坚持以信致远,以精致臻的宗旨,诚心服务每一位客人,作为一个知名手表维修公司,专业维修百达翡丽、江诗丹顿、积家、欧米茄、劳力士、芝柏、宝珀等世界名表,提供在线预约维修服务' },
        ]
      }
    },
    name: "brand",
    // head: {
    //   script: [
    //     {src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx'},
    //     // { src: 'https://c.mipcdn.com/static/v1/mip.js'},
    //   ],
    //   link: [
    //     // { rel: 'stylesheet', href: 'https://c.mipcdn.com/static/v1/mip.css'}
    //   ]
    // },
    components: {
      Header,
      Footer,
      Indicators,
      ServiceTitle,
      HeaderMobile
    },
    data(){
      return {
        indicatorKey: 0,
        stackHeight: 0,
        leftActive: false,
        rightActive: false,
        caseIndex: 0,
        caseCarouselList: [
          {src: require("../assets/img/brand_images8@2x.png")},
          {src: require("../assets/img/brand_images8@2x.png")},
          {src: require("../assets/img/brand_images8@2x.png")},
          {src: require("../assets/img/brand_images8@2x.png")},
          {src: require("../assets/img/brand_images8@2x.png")},
        ],
        bannerIndex: 0,
        envCarouselList: [
          {src: require('../assets/img/home_serviceenvironment_images@2x.png')},
          {src: require('../assets/img/home_serviceenvironment_images1@2x.png')},
          {src: require('../assets/img/home_serviceenvironment_images2@2x.png')},
        ]
      }
    },
    mounted() {
      this.stackHeight = parseInt(window.innerWidth * 0.421875)
      // alert('mounted钩子')
      if (window.BMap) {
        console.log('BMap加载完成。')
        let map = new BMap.Map("store-map");
        let point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        let mapType = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
        map.addControl(mapType);
        // 创建地址解析器实例
        let myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("北京市西城区西单北大街甲133号西亨钟表维修中心（西单大悦城旁）", function (point) {
          if (point) {
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMap.Marker(point));
          } else {
            alert("您选择地址没有解析到结果!");
          }
        });
      }
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

  .banner320, .brand-container320, .qualification-container320{
    display: none;
  }

  strong.brand-page-title{
    font-size: 36px;
    font-family: "FZLTZHK--GBK1-0";
    color: #333;
    text-align: center;
    display: block;
    margin-top: 100px;
    margin-bottom: 60px;
  }

  .banner{
    position: relative;
    padding-top: 26.04%;
  }

  .banner img{
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0
  }

  .brand{
  }

  .brand-container, .qualification-container{
    max-width: 1280px;
    margin: 0 auto
  }

  .case-container{
    max-width: 1110px;
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
    text-align: center;
    width: 100%;
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
    text-align: left;
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
    font-size: 36px;
    color: #fff;
    margin-top: 60px;
  }

  .environmental{
    height: 650px;
    min-height: 620px;
    overflow: hidden;
  }

  .case{}

  .case-main-container{
    position: relative;
  }

  .case-main-cell img{
    vertical-align: middle;
    width: 100%;
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

  /*
    到店指引
 */
  .store {
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .store h1 {
    font-family: "PingFangSC-Medium";
    font-size: 32px;
    text-align: center;
    margin: 30px 0;
  }

  .store p {
    font-size: 20px;
    line-height: 46px;
    text-align: center;
    font-family: "PingFangSC-Regular";
    color: #000;
    font-weight: 200;
  }

  .store .store-content img, .store .store-content span {
    display: inline-block;
    vertical-align: middle;
    font-size: 36px;
    color: #BF9571;
  }

  .store .store-content span {
    margin-left: 10px;
    font-weight: 400;
    font-size: 22px;
  }

  #store-map {
    height: 400px;
    margin-top: 60px
  }


  @media (max-width: 768px) {
    .banner, .brand-container, .qualification-container, .environmental >img, .environmental-container, .case-container, .adver{
      display: none;
    }

    .banner320, .brand-container320{
      display: block;
    }

    .container{
      margin-top: 46px;
    }

    .environmental{
      height:  auto;
      min-height: auto;
    }

    .brand-container320{
    }

    .brand-page-title320{
      display: block;
      font-size: 18px;
      color: #000;
      margin-top: 40px;
      margin-bottom: 20px;
      text-align: center;
    }

    .brand-main-container320{
      position: relative;
      padding: 0 10px;
    }

    .brand-main-container320 img{
      width: 100%;
    }


    .brand-info-container320{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      padding: 20px 30px;
    }

    .brand-info-txt320{
      font-size: 12px;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 60px);
      line-height: 1.6em
    }

    .qualification-container320{
      padding: 0 10px;
    }

    .qualification-container320 .qualification-img-container320 img{
      vertical-align: middle;
      display: inline-block;
      width: calc((100% - 20px) / 3);
      margin-right: 10px;
    }

    .qualification-container320 .qualification-img-container320 img:last-child{
      margin-right: 0
    }

    /*
    到店指引
  */

    #store-map{
      height: 200px;
      margin-top: 20px;
    }

    .store-info{
      padding: 0 10px;
    }

    .store p{
      font-size: 12px;
      line-height: 18px;
      margin-top: 5px;
    }

    .store-info p:first-of-type{
      margin-top: 20px;
    }

    .store h1{
      display: none;
    }

    .store .store-content img{
      width: 15px;
      height: 15px;
    }

    .store .store-content span{
      font-size: 18px;
      margin-left: 7px;
    }

    @media (max-width: 370px) {
      .brand-info-txt320{
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 1.4em;
      }
    }
  }

</style>
