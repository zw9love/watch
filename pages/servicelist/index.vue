<template>
  <div>
    <div class="store-list" v-if="active">
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
    <div class="store-list320" v-else>
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
    <div v-transfer-dom>
      <popup v-model="addressActive" position="right" width="100%" style="z-index: 1000">
        <div style="margin-top: 46px">
          <div class="address-header vux-header">
            <div class="vux-header-left">
              <div class="left-arrow" @click="backList"></div>
            </div>
            <span class="address-header-info">维修地址</span>
          </div>
          <!--<x-header title="维修地址" :left-options="{backText: ''}"></x-header>-->
          <div>
            <div id="store-map"></div>
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
  export default {
    asyncData(context) {
      // console.log(context)
    },
    data(){
      return {
        addressActive: false,
        active: ''
      }
    },
    mounted(){
      this.active = window.innerWidth >= 768
    },
    methods: {
      getMore() {

      },
      goAddress(){
        this.addressActive = true
        this.$nextTick(function () {
        //   // DOM 现在更新了
          if (window.BMap) {
            let map = new BMap.Map("store-map");
            let point = new BMap.Point(116.331398, 39.897445);
            map.centerAndZoom(point, 12);
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
  @import "../../assets/css/store_list.css";
</style>
