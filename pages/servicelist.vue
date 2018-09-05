<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="4"/>

      <main class="main">
        <div class="main-left">
          <div class="city">
            <CityPicker />
            <!--<div class="select-container"><v-distpicker @province="provinceSelect" @city="citySelect" @selected="lastSelect"></v-distpicker></div>-->
            <!--<strong>直接搜索:</strong>-->
            <!--<input type="text" class="search-txt" placeholder="请输入城市中文或拼音">-->
          </div>
          <div class="store-list">
            <div class="store-cell-wrapper" v-for="item in 5" :key="item">
              <div class="store-cell" >
                <div class="store-cell-left">
                  <img src="../assets/img/store_images1@2x.png" alt="">
                </div>
                <div class="store-cell-right">
                  <p><strong>北京（朝阳店）</strong></p>
                  <div class="store-address">
                    <span><img src="../assets/img/store_icon1@2x.png" alt=""></span>
                    <span class="store-address-info">地址：深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号,深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号</span>
                  </div>
                  <div class="store-phone">
                    <span><img src="../assets/img/store_icon2@2x.png" alt=""></span>
                    <span>400-636-8800</span>
                  </div>
                  <div class="store-time">
                    <span><img src="../assets/img/store_icon3@2x.png" alt=""></span>
                    <span>09:00-21:00</span>
                  </div>
                </div>
                <div class="store-btn">
                  <img src="../assets/img/store_button1@2x.png" alt="">
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
      <HeaderMobile v-show="!addressActive" title="维修服务中心列表"/>
      <main class="main320">
        <div class="select-city">
          <strong>请选择城市：</strong>
          <x-address title="title" v-model="value1" :list="addressData" :hide-district="true" @on-shadow-change="addressChange" ref="picker">
            <template slot="title" slot-scope="props">
              <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '北京'}}</span>-->
              <span class="province">{{cityName}}</span>
            </template>
          </x-address>
          <!--<popup-picker :data="list1" v-model="value1" :columns="3" ref="picker">-->
            <!--<template slot="title" slot-scope="props">-->
              <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '省份'}}</span>-->
            <!--</template>-->
          <!--</popup-picker>-->
          <!--<popup-picker :data="list1" v-model="value1" :columns="2" ref="picker">-->
            <!--<template slot="title" slot-scope="props">-->
              <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '城市'}}</span>-->
            <!--</template>-->
          <!--</popup-picker>-->
          <strong>直接搜索：</strong>
          <span class="search-container320">
            <input type="search" class="search-txt320">
          </span>
        </div>
        <div class="store-list320">
          <div class="store-cell320" v-for="item in 10" :key="item">
            <div class="store-cell320-container">
              <div class="store-cell320-left">
                <img src="../assets/img/store_images1@2x.png" alt="">
              </div>
              <div class="store-cell320-right">
                <p><strong>北京（西城店）</strong></p>
                <div class="store-cell320-info" @click="goAddress">
                  <img src="../assets/img/store_icon1@2x.png" alt="">
                  <span>北京市西城区西单北大街甲133号西亨钟表维修中心</span>
                </div>
                <div class="store-cell320-info">
                  <img src="../assets/img/store_icon2@2x.png" alt="">
                  <span>400-636-8800</span>
                </div>
              </div>
            </div>
            <div class="store-cell320-line"></div>
          </div>
        </div>
      </main>

      <div v-transfer-dom>
        <popup v-model="addressActive" position="right" width="100%">
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
                  <img src="../assets/img/service-address.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </popup>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Advertisement from '../components/Advertisement'
  import HeaderMobile from '../components/HeaderMobile'
  import CityPicker from '../components/CityPicker'
  import { ChinaAddressV4Data} from 'vux'

  export default {
    // head: {
    //   script: [
    //     {src: 'http://api.map.baidu.com/api?v=2.0&ak=L2fFIBoizTO5nxe7ypgsV3pHGmYw6tqx'},
    //     // { src: 'https://c.mipcdn.com/static/v1/mip.js'},
    //   ],
    //   link: [
    //     // { rel: 'stylesheet', href: 'https://c.mipcdn.com/static/v1/mip.css'}
    //   ]
    // },
    name: "servicelist",
    components: {
      Header,
      Footer,
      Advertisement,
      HeaderMobile,
      CityPicker
    },
    data() {
      return {
        value1: [],
        list1: [
          {name: '广东', value: 'gd', parent: 0},
          {name: '广西', value: 'gx', parent: 0},
          {name: '广州', value: 'gz', parent: 'gd'},
          {name: '深圳', value: 'sz', parent: 'gd'},
          {name: '南宁', value: 'nn', parent: 'gx'},
          {name: '桂林', value: 'gl', parent: 'gx'}
        ],
        addressActive: false,
        addressData: ChinaAddressV4Data,
        cityName: '',
      }
    },
    // computed: {
    //   getTitle(){
    //     return this.addressActive ? '维修地址' : '维修服务中心列表'
    //   }
    // },
    methods:{
      goAddress(){
        this.addressActive = true
        if (window.BMap) {
          let map = new BMap.Map("store-map");
          let point = new BMap.Point(116.331398, 39.897445);
          map.centerAndZoom(point, 12);
          // 创建地址解析器实例
          let myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          myGeo.getPoint("北京市西城区西单北大街甲133号西亨钟表维修中心", function (point) {
            if (point) {
              map.centerAndZoom(point, 16);
              map.addOverlay(new BMap.Marker(point));
            } else {
              alert("您选择地址没有解析到结果!");
            }
          });
        }
      },
      provinceSelect(province){
        console.log(province.value)
      },
      citySelect(city){
        console.log(city.value)
      },
      lastSelect(val){
        console.log(val.area.value)
      },
      addressChange(ids, name){
        this.cityName = name[0].indexOf('市') !== - 1 ? name[0].slice(0, name[0].length - 1) : name[1].slice(0, name[1].length - 1)
      },
      getMore(){

      },
      backList(){
        this.addressActive = false
      }
    }
  }
</script>

<style scoped>

  .container320{
    display: none;
  }

  img{
    vertical-align: middle;
  }

  .main{
    max-width: 1280px;
    margin: 60px auto 0 auto;
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

  .city{
    margin-top: 20px;
    height: 42px;
    /*overflow: hidden;*/
    line-height: 42px;
    /*background-color: #ccc;*/
  }

  .city .select-container{
    float: left;
  }

  .city strong{
    margin: 0 20px;
  }

  .city .search-txt{
    display: inline-block;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 4px;
    width: 160px;
    height: 38px;
    padding: 5px 10px;
  }

  .store-list{
     margin-top: 50px;
   }

  .get-more{
    text-align: center;
  }

  .get-more span{
    font-size: 20px;
    color: #999;
    cursor: pointer;
  }

  .store-cell{
    /*overflow: hidden;*/
    position: relative;
  }
  .store-cell:after{
    content: "";
    display: block;
    clear: both;
  }


  .store-cell-left, .store-cell-right{
    float: left;
  }

  .store-cell-right{
    width: 580px;
    padding-left: 20px;
  }

  .store-cell-right span>img{
    margin-right: 7px;
  }

  .store-address span{
    display: inline-block;
    vertical-align: middle;
  }

  .store-address, .store-phone, .store-time{
    margin-top: 10px;
  }

  .store-address span.store-address-info{
    width: calc(100% - 28px);
    vertical-align: top;
    line-height: 1.6em;
  }
  .store-address span img{
    vertical-align: top;
  }

  .store-cell-right span{
    font-size: 16px;
    color: #666;
    vertical-align: middle;
  }

  .store-cell-right strong{
    color: #333;
    font-size: 20px;
  }

  .store-btn{
    position: absolute;
    right: 0;
    bottom: -22px;
    cursor: pointer;
  }

  .store-btn-info{
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }

  .store-line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    clear: both;
    margin: 70px 0;
  }

  @media (max-width:768px){
    .container{
      display: none;
    }

    .container320{
      display: block;
      margin-top: 46px;
    }

    .store-cell320{
    }

    .store-cell320-container{
      padding:0 10px;
      overflow: hidden;
      display: flex;
    }

    .store-cell320-left{
      width: 150px;
      height: 90px;
      position: relative;
    }

    .store-cell320-left img{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .store-cell320-right{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 5px;
    }

    .store-cell320-info{
      display: flex;
      align-items: center;
    }

    .store-cell320-info:first-of-type{
      align-items: flex-start;
    }

    .store-cell320-info img{
      width: 10px;
      margin-right: 5px;
      margin-top: 2px;
    }

    .store-cell320-info >span:last-child{
      color: #666;
      font-size: 12px;
      flex: 1;
    }

    .store-cell320-line{
      margin: 15px 0;
      height:1px;
      background-color: #ddd;
    }

    .select-city{
      padding:20px 10px;
      display: flex;
      align-items: center;
    }
    .select-city strong{
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }


    .select-city .province{
      /*width: 60px;*/
      height: 30px;
      line-height: 30px;
      border:1px solid #ccc;
      border-radius: 3px;
      display: inline-block;
      font-size: 12px;
      padding: 0 5px;
      margin-right: 10px;
      white-space: nowrap;
      overflow: hidden;
      min-width: 60px;
    }

    .search-container320{
      flex: 1;
    }

    .select-city .search-container320 .search-txt320{
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 3px;
      display: inline-block;
      font-size: 12px;
      padding: 0 10px;
      min-width: 0px;
      width: 100%;
      max-width: 300px;
    }

    #store-map{
      /*height: calc(100vh - 136px);*/
      height: 100vh;
    }

    .address-info{
      height: 90px;
      padding:0 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      box-shadow: 20px 20px 20px 20px rgba(0,0,0,.3);
      position: fixed;
      bottom: 0;
      left: 0;
    }

    .address-info-left{
      display: flex;
      flex: 1;
      flex-direction: column;
      padding-right: 10px;
    }

    .address-info-left strong{
      font-size: 16px;
    }

    .address-info-left p{
      color: #999;
      font-size: 12px;
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .address-info-right img{
      width: 50px;
      height: 50px;
    }

    .address-header{
      position: fixed;
      left: 0;
      top: 0;
      background: linear-gradient(to bottom, #000, #666 100%);
      width: 100%;
      height: 46px;
      text-align: center;
    }

    .address-header-info{
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }
  }

</style>
