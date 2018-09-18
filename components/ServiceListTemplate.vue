<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="3"/>

      <main class="main">
        <div class="main-left">
          <div class="city">
            <CityPicker/>
          </div>
          <div class="store-list">
            <div class="store-cell-wrapper" v-for="(item, key) in list" :key="key">
              <div class="store-cell">
                <div class="store-cell-left">
                  <img src="../assets/img/store_images1@2x.png" alt="">
                </div>
                <div class="store-cell-right">
                  <p><strong>{{item.Name}}</strong></p>
                  <div class="store-address">
                    <span><img src="../assets/img/store_icon1@2x.png" alt=""></span>
                    <span class="store-address-info">{{item.BusinessAddr}}</span>
                  </div>
                  <div class="store-phone">
                    <span><img src="../assets/img/store_icon2@2x.png" alt=""></span>
                    <a :href="'tel:' + item.HotLine">{{item.HotLine}}</a>
                  </div>
                  <div class="store-time">
                    <span><img src="../assets/img/store_icon3@2x.png" alt=""></span>
                    <span>{{item.BusinessHours}}</span>
                  </div>
                </div>
                <nuxt-link class="store-btn" :to="'/order/' + item.Id">
                  <img src="../assets/img/store_button1@2x.png" alt="">
                  <span class="store-btn-info">立即预约</span>
                </nuxt-link>
              </div>
              <div class="store-line"></div>
            </div>
            <div class="get-more" v-if="fullList.length > 10">
              <span @click="getMore">查看更多 >></span>
            </div>
          </div>
        </div>
        <Advertisement/>
      </main>

      <!--Footer-->
      <Footer/>
    </div>

    <div class="container320">
      <HeaderMobile title="维修服务中心列表"/>
      <main class="main320">
        <CityPickerMobile/>
        <div class="store-list320">
          <div class="store-cell320" v-for="(item, key) in list" :key="key" @click="storeClick(item)">
            <div class="store-cell320-container">
              <div class="store-cell320-left">
                <img src="../assets/img/store_images1@2x.png" alt="">
              </div>
              <div class="store-cell320-right">
                <p><strong>{{item.Name}}</strong></p>
                <div class="store-cell320-info" @click.stop="goAddress">
                  <img src="../assets/img/store_icon1@2x.png" alt="">
                  <span>{{item.BusinessAddr}}</span>
                </div>
                <div class="store-cell320-info" @click.stop>
                  <img src="../assets/img/store_icon2@2x.png" alt="">
                  <a :href="'tel:' + item.HotLine">{{item.HotLine}}</a>
                </div>
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
                <strong>深圳店</strong>
                <p>深圳市南山区微软科通大厦</p>
              </div>
              <div class="address-info-right">
                <!--<a href="http://api.map.baidu.com/marker?location=116.40387397,39.91488908&title=北京市西城区西单北大街甲133号西亨钟表维修中心&content=111&output=html">-->
                <a :href="href">
                  <!--<a href="https://map.baidu.com/mobile/webapp/search/search/qt=bse&wd=%E5%BE%AE%E8%BD%AF%E7%A7%91%E9%80%9A%E5%A4%A7%E5%8E%A6&from=maponline&tn=m01&ie=utf-8&ptx=12680049.85&pty=2561928.17&wd2=%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%8D%97%E5%B1%B1%E5%8C%BA&name=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&c=340&sc=340&ec=340&isSingle=true&bsetp=1&sn=1%24%24%24%2412680049.85%2C2561928.17%24%24%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE%24%240%24%24%24%24&version=5&exptype=dep/tab=line&routeType=1#drive/list/qt=nav&sn=1%24%24%24%2412680049.800000%2C2561928.100000%24%24%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE%24%24&en=1%24%24c04b17b9d07e7aec1ef74d22%24%2412684648.500000%2C2559031.500000%24%24%E5%BE%AE%E8%BD%AF%E7%A7%91%E9%80%9A%E5%A4%A7%E5%8E%A6%24%24&sc=340&ec=340&c=340&pn=0&rn=5&searchFlag=walk&version=3&wm=1/vt=map&traffic=off&evtson=off">-->
                  <img src="../assets/img/service-address.png" alt="">
                </a>
                <!--<img src="../assets/img/service-address.png" alt="">-->
              </div>
            </div>
          </div>
        </div>
      </popup>
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Advertisement from '../components/Advertisement'
  import HeaderMobile from '../components/HeaderMobile'
  import CityPicker from '../components/CityPicker'
  import CityPickerMobile from '../components/CityPickerMobile'
  import Mock from 'mockjs'

  export default {
    name: "ServiceListTemplate",
    components: {
      Header,
      Footer,
      Advertisement,
      HeaderMobile,
      CityPicker,
      CityPickerMobile
    },
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      },
      fullList: {
        type: Array,
        default(){
          return []
        }
      },
    },
    data(){
      return {
        addressActive: false,
        href: ''
      }
    },
    mounted(){
      // alert(123)
    },
    methods: {
      getMore() {
        this.$emit('getMore')
      },
      goAddress(){
        this.addressActive = true
        this.$nextTick(function () {
          //   // DOM 现在更新了
          if (window.BMap) {
            // alert('BMap加载完成。store-list-map。')
            let map = new BMap.Map("store-list-map");
            // let point = new BMap.Point(116.331398, 39.897445);
            // map.centerAndZoom(point, 12);
            let mapType = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_RIGHT});
            map.addControl(mapType);
            // 创建地址解析器实例
            let myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint("深圳市南山区微软科通大厦", point => {
              if (point) {
                console.log(point)
                this.href = `http://api.map.baidu.com/marker?location=${point.lat},${point.lng}&title=微软科通大厦&content=微软科通大厦&output=html`
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
      },
      storeClick(item){
        this.$router.push({path: '/order/' + item.Id})
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/servicelist.css";
</style>
