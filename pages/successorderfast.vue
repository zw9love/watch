<template>
  <div class="container">
    <!--Header-->
    <Tabbar />
    <Header :pageIndex="2"/>
    <HeaderMobile title="预约成功" />

    <!--banner-->
    <div class="banner">
      <img :src="require('../assets/img/booking_banner@2x.png')" alt="" />
    </div>

    <!--成功预约信息-->
    <div class="success-info-container">
      <x-img :src="require('../assets/img/booking_make_icon@2x.png')" alt="" />
      <p class="success-info">尊敬的用户，恭喜您已预约成功！</p>
      <p class="success-info"></p>
      <p class="success-more">请按预约时间准时到达，到店请出示你的预约短信。</p>
    </div>

    <!--预约具体信息-->
    <main class="reservation-main">
      <!--<img src="../assets/img/booking_make_icon1@2x.png" alt="">-->
      <x-img :src="require('../assets/img/booking_make_icon1@2x.png')" alt="" />
      <div class="reservation-main-container">
        <p class="phone">
          您的联系手机：18059236533
          <span class="tip">（用于查询维修进度）</span>
        </p>
        <p class="time">预约到店时间：2018-09-13 10:00-11:00</p>
        <!--<p class="address">维修中心店址：北京市西城区西单北大街甲133号君太百货北门西亨钟表维修中心（西单大悦城旁）</p>-->
      </div>
    </main>

    <!--按钮块-->
    <div class="btn-container">
      <nuxt-link class="process" to="/orderList">订单进度</nuxt-link>
      <nuxt-link class="back" to="/" >返回首页</nuxt-link>
    </div>

    <!--阴影块-->
    <div class="shadow"></div>

    <!--预约流程-->
    <h3 class="reservation-title">预约流程</h3>
    <Reservation :completeList="completeList"/>
    <!--Footer-->
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Reservation from '../components/Reservation'
  import HeaderMobile from '../components/HeaderMobile'
  import Tabbar from '../components/Tabbar'
  export default {
    fetch ({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect(302, '/process')
      }
    },
    components: {
      Header,
      Footer,
      Reservation,
      HeaderMobile,
      Tabbar
    },
    data(){
      return {
        completeList: [true, true, true, true, true, true]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .banner{

  }

  .banner img{
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }

  .success-info-container{
    max-width: 1280px;
    margin: 100px auto 0 auto;
    text-align: center;
  }

  .success-info-container >img{
    vertical-align: middle;
  }

  .success-info-container >p.success-info{
    color: #53A937;
    font-family: "PingFangSC-Medium";
    font-size: 30px;
    margin-top: 30px;
  }

  .success-info-container >p.success-more{
    margin-top: 20px;
    font-family: "PingFangSC-Regular";
    font-size: 24px;
  }

  .reservation-main{
    max-width: 1280px;
    margin: 50px auto 0 auto;
    position: relative;
  }

  .reservation-main >img{
    vertical-align: middle;
  }

  .reservation-main-container{
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
  }

  .reservation-main-container .phone{
    font-family: "PingFang SC";
    font-size: 20px;
  }

  .reservation-main-container .phone .tip{
    color: #999
  }

  .reservation-main-container .address{
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    margin-top: 10px;
  }
  .reservation-main-container .time{
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    margin-top: 10px;
  }


  .btn-container{
    max-width: 1280px;
    margin: 50px auto 0 auto;
    text-align: center;
  }

  .btn-container >a{
    display: inline-block;
    line-height: 50px;
    border-radius:5px;
    text-align: center;
    width: 375px;
    cursor: pointer;
  }

  .btn-container .process{
    color: #fff;
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    background-color: #C8936B;
  }

  .btn-container .back{
    color: #BF9571;
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    margin-left: 60px;
    border: 1px solid #C8936B;
  }

  .shadow{
    max-width: 1280px;
    background-color: #EBEBEB;
    height: 20px;
    margin: 60px auto 50px auto;
  }

  .reservation-title{
    font-family: "PingFangSC-Regular";
    color: #000;
    font-size: 36px;
    max-width: 1280px;
    margin:0 auto 60px auto;
    font-weight: 500;
  }

  @media (max-width:768px){
    .container{
      display: block!important;
      margin-top: 76px;
      padding-bottom: 14.285714%;
    }

    .banner{
      display: none;
    }

    .success-info-container >img{
      width:50px;
      height:50px;
    }

    .success-info-container{
      margin-top: 20px;
    }

    .success-info-container >p.success-info{
      color: #1aac19;
      font-size: 18px;
      font-weight: 500;
      margin-top: 15px
    }

    .success-info-container >p.success-more{
      font-size: 14px;
      margin-top: 10px;
    }

    .reservation-main{
      padding: 0 10px;
      margin-top: 25px;
    }

    .reservation-main-container{
      position: relative;
      left: 0;
      top: 0;
      transform: none;
      border: 1px solid #c8936b;
      border-radius: 5px;
      padding: 20px 15px;
    }

    .reservation-main >img{
      display: none;
    }

    .reservation-main-container .phone,.reservation-main-container .time, .reservation-main-container .address{
      font-size: 14px;
    }

    .btn-container{
      display: flex;
      padding:0 10px;
      margin-top: 30px;
    }

    .btn-container .process, .btn-container .back{
      flex: 1;
      width: auto;
      line-height: 40px;
    }

    .btn-container .back{
      margin-left: 20px;
    }

    .shadow{
      margin-top: 50px;
      margin-bottom: 30px;
      height: 10px;
    }

    .reservation-title{
      font-size: 18px;
      padding:0 10px;
      margin-bottom: 15px;
    }
  }
</style>
