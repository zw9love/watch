<template>
  <header>
    <!--navbar-->
    <div class="navbar-container">
      <div class="navbar-left">
        <ul>
          <li>
            <img src="../assets/img/home_top_logo@2x.png" alt="">
          </li>
          <li>
            <div class="line"></div>
          </li>
          <li>
            <p class="ch-name">北京名表维修中心</p>
            <p class="en-name">Beijing watch respaire center</p>
          </li>
          <li>
            <div class="line"></div>
          </li>
          <li>
            <span class="city-name">{{cityName}}</span>
            <img src="../assets/img/home_top_icon@2x.png" alt="" style="margin-left: 10px">
            <div class="city-popup">
              <h3>服务城市</h3>
              <div class="city-popup-line"></div>
              <ul class="city-popup-wrapper">
                <li v-for="(item, key) in cityList" :key="key">
                  <a href="#" @click="cityClick(item, key)" :class="{active: cityIndex === key}">{{item}}</a>
                </li>
              </ul>
              <div class="more-city">
                <span @click="$router.push({path: '/servicelist'})">更多城市 >></span>
              </div>
            </div>
          </li>
          <!--<li>-->
            <!--<img src="../assets/img/home_top_icon@2x.png" alt="">-->
          <!--</li>-->
        </ul>
      </div>
      <div class="navbar-right">
        <div>
          <img src="../assets/img/home_top_icon_contacts@2x.png" alt="">
        </div>
        <div>
          <p class="navbar-right-top">服务热线：</p>
          <p class="navbar-right-bottom">400-960-8888</p>
        </div>
      </div>
    </div>
    <!--navigation-->
    <div class="navigation-container">
      <div class="navigation-wrapper">
        <ul>
          <li class="navigation-cell" v-for="(item, key) in navigationList" :key="key">
            <nuxt-link :to="item.href" :class="{active: key === pageIndex}">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <div class="navigation-search-wrapper">
          <input type="text" class="search-txt" placeholder="搜索">
          <div class="search-btn">
            <img src="../assets/img/home_top_search@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    props: {
      pageIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        navigationList: [
          {name: '网站首页', href: '/'},
          {name: '品牌门店', href: '/brand'},
          {name: '维修案例', href: '/case'},
          {name: '预约到店', href: '/order'},
          {name: '维修进度', href: '/process'},
        ],
        cityList: ['北京', '天津','青岛', '常州', '潍坊', '济南', '昆明'],
        // cityName: '北京',
        // cityIndex: 0
      }
    },
    computed: {
      cityName: function(){
        return this.$store.state.cityName
      },
      cityIndex: function(){
        return this.$store.state.cityIndex
      }
    },
    methods: {
      cityClick(city, key){
        this.$store.state.cityName = city
        this.$store.state.cityIndex = key
      }
    }
  }
</script>

<style scoped>
  .navbar-container {
    max-width: 1280px;
    margin: 60px auto 0 auto;
  }

  .navbar-container:after{
    content: "";
    display: block;
    clear: both;
  }

  .navbar-left {
    float: left;
  }

  .navbar-left >ul {

  }

  .navbar-left >ul >li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 18px;
    position: relative;
    padding-bottom: 20px;
  }

  .navbar-left >ul >li img {
    cursor: pointer;
  }

  .navbar-left >ul >li p.ch-name {
    color: #333;
    font-size: 30px;
    font-family: "PingFangSC-Semibold";
  }

  .navbar-left >ul >li p.en-name {
    color: #999;
    font-family: "PingFangSC-Semibold";
    font-size: 18px;
  }

  .navbar-left >ul >li span.city-name {
    font-size: 26px;
    color: #BF9571;
    font-family: "PingFangSC-Regular";
    cursor: pointer;
  }

  .navbar-left >ul >li .line {
    width: 1px;
    height: 50px;
    background-color: #E5E5E5;
  }

  .navbar-right {
    float: right;
  }

  .navbar-right div {
    display: inline-block;
    vertical-align: middle;
  }

  .navbar-right div:first-child {
    margin-right: 10px;
  }

  .navbar-right .navbar-right-top {
    color: #BF9571;
    font-family: "PingFangSC-Semibold";
    font-size: 20px;
  }

  .navbar-right .navbar-right-bottom {
    color: #BF9571;
    font-family: "MicrosoftYaHei";
    font-size: 30px;
    font-weight: bold;
  }

  /*导航*/
  .navigation-container {
    height: 60px;
    background-color: #333333;
    margin-top: 20px;
  }


  .navigation-wrapper {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    /*background-color: yellow;*/
  }

  .navigation-wrapper ul {
    height: 100%;
    float: left;
    overflow: hidden;
  }

  .navigation-wrapper ul li.navigation-cell{
    width: 140px;
    height: 100%;
    float: left;
    line-height: 60px;
    cursor: pointer;
    text-align: center;
  }

  .navigation-wrapper ul li.navigation-cell a{
    color: #fff;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: inline-block;
    font-family: "PingFang SC";
    font-size: 18px;
    font-weight: 400;
    transition: background-color .3s ease;
  }

  .navigation-wrapper ul li.navigation-cell a:hover{
    /*font-weight: 700;*/
    background-color: #BB9875;
    /*border-left: 1px solid #333;*/
    /*border-right: 1px solid #333;*/
  }

  .navigation-wrapper ul li.navigation-cell a.active{
    font-weight: 700;
    background-color: #BB9875;
  }

  .navigation-search-wrapper {
    position: relative;
  }

  .navigation-search-wrapper {
    width: 460px;
    height: 40px;
    float: right;
    background-color: green;
    margin-top: 10px;
    border-radius: 5px;
  }

  .navigation-search-wrapper .search-txt {
    width: 410px;
    height: 40px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    outline: none;
    border: none;
    font-size: 18px;
    padding: 0 10px;
  }

  .navigation-search-wrapper .search-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 40px;
    background-color: #C8936B;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
  }

  .navigation-search-wrapper .search-btn img {
    position: absolute;
    top: 7px;
    left: 12px;
    width: auto
  }

  .navbar-left >ul >li:last-child:hover .city-popup{
    display: block;
  }

  .city-popup{
    width: 300px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border:1px solid #ddd;
    z-index: 3;
    border-radius: 5px;
    padding: 10px 20px;
    display: none;
  }

  .city-popup h3{
    font-size: 16px;
  }
  .city-popup .city-popup-line{
    width: 100%;
    height: 1px;
    background-color: #eee;
    margin: 20px 0;
  }

  .city-popup-wrapper{
    overflow: hidden;
  }

  .city-popup-wrapper li{
    float: left;
    width: 25%;
    text-align: center;
    padding: 10px 0;
    margin: 0;
  }

  .city-popup-wrapper li a{
    color: #666;
    font-size: 14px;
  }


  .more-city{
    text-align: right;
    margin:  10px 0;
  }

  .more-city span{
    color: #666;
    font-size: 14px;
    cursor: pointer;
  }

  .city-popup-wrapper li a.active, .city-popup-wrapper li a:hover, .more-city span:hover{
    color: #C8936B;
  }


  @media (max-width:768px){
    .navbar-container, .navigation-container{
      display: none;
    }
  }
</style>
