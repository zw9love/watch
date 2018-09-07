<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="4"/>

      <main class="main">
        <div class="main-left">
          <div class="city">
            <CityPicker />
          </div>
          <div class="store-list">
            <div class="store-cell-wrapper" v-for="item in 5" :key="item">
              <div class="store-cell">
                <div class="store-cell-left">
                  <img src="../../assets/img/store_images1@2x.png" alt="">
                </div>
                <div class="store-cell-right">
                  <p><strong>北京（朝阳店）</strong></p>
                  <div class="store-address">
                    <span><img src="../../assets/img/store_icon1@2x.png" alt=""></span>
                    <span class="store-address-info">地址：深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号,深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号</span>
                  </div>
                  <div class="store-phone">
                    <span><img src="../../assets/img/store_icon2@2x.png" alt=""></span>
                    <span>400-636-8800</span>
                  </div>
                  <div class="store-time">
                    <span><img src="../../assets/img/store_icon3@2x.png" alt=""></span>
                    <span>09:00-21:00</span>
                  </div>
                </div>
                <div class="store-btn">
                  <img src="../../assets/img/store_button1@2x.png" alt="">
                  <span class="store-btn-info">立即预约</span>
                </div>
              </div>
              <div class="store-line"></div>
            </div>
            <div class="get-more">
              <span @click="getMore">查看更多 >></span>
            </div>
          </div>
        </div>
        <Advertisement />
      </main>

      <!--Footer-->
      <Footer/>
    </div>

    <div class="container320">
      <HeaderMobile title="维修服务中心列表"/>
      <main class="main320">
        <CityPickerMobile />
        <div class="store-list320">
          <div class="store-cell320" v-for="item in 5" :key="item">
            <div class="store-cell320-container">
              <div class="store-cell320-left">
                <img src="../../assets/img/store_images1@2x.png" alt="">
              </div>
              <div class="store-cell320-right">
                <p><strong>北京（西城店）</strong></p>
                <div class="store-cell320-info" @click="goAddress">
                  <img src="../../assets/img/store_icon1@2x.png" alt="">
                  <span>北京市西城区西单北大街甲133号西亨钟表维修中心</span>
                </div>
                <a href="tel:4006368800" class="store-cell320-info">
                  <img src="../../assets/img/store_icon2@2x.png" alt="">
                  <span>400-636-8800</span>
                </a>
              </div>
            </div>
            <div class="store-cell320-line"></div>
          </div>
        </div>
      </main>
    </div>


    <div v-transfer-dom>
      <popup v-model="addressActive" position="right" width="100%" style="z-index: 1000">
        <div style="margin-top: 46px">
          <div class="address-header vux-header">
            <div class="vux-header-left">
              <div class="left-arrow" @click.stop="backList"></div>
            </div>
            <span class="address-header-info">维修地址</span>
          </div>
          <!--<x-header title="维修地址" :left-options="{backText: ''}"></x-header>-->
          <div>
            <div id="store-list-map"></div>
            <div class="address-info">
              <div class="address-info-left">
                <strong>北京店</strong>
                <p>北京市西城区西单北大街甲133号西亨钟表维修中心</p>
              </div>
              <div class="address-info-right">
                <img src="../../assets/img/service-address.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  import Advertisement from '../../components/Advertisement'
  import HeaderMobile from '../../components/HeaderMobile'
  import CityPicker from '../../components/CityPicker'
  import CityPickerMobile from '../../components/CityPickerMobile'

  export default {
    components: {
      Header,
      Footer,
      Advertisement,
      HeaderMobile,
      CityPicker,
      CityPickerMobile
    },
    asyncData(context) {
      // console.log(context)
    },
    data(){
      return {
        addressActive: false,
      }
    },
    mounted(){
      // alert('servicelist-index')
      if (window.BMap) {
        alert('BMap加载完成。store-list-map111。')
        let map = new BMap.Map("store-list-map");
        let point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
      }
    },
    methods: {
      getMore() {

      },
      goAddress(){
        this.addressActive = true
        this.$nextTick(function () {
          //   // DOM 现在更新了
          if (window.BMap) {
            // alert('BMap加载完成。store-list-map111。')
            let map = new BMap.Map("store-list-map");
            // let point = new BMap.Point(116.331398, 39.897445);
            // map.centerAndZoom(point, 12);
            // 创建地址解析器实例
            let myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint("韶关", function (point) {
              if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
              } else {
                alert("您选择地址没有解析到结果!");
              }
            });
          }
        })
      },
      backList(){
        this.addressActive = false
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/servicelist.css";
</style>
