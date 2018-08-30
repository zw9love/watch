<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="4"/>

    <main class="main">
      <h3 class="main-title">订单详情</h3>
      <OrderCell />
      <h3 class="main-title">维修进度</h3>
      <div class="orderdetails-reservation">
        <Reservation />
        <div class="reservation-details">
          <div class="reservation-details-cell reservation-details-active">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell reservation-details-active">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell reservation-details-active">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell reservation-details-active">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
          <div class="reservation-details-cell">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image"><img src="../assets/img/demand_list_plan_icon_no@2x.png" alt=""></span>
            <span class="info">客户已取表</span>
          </div>
        </div>
      </div>
    </main>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import OrderCell from '../components/OrderCell'
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Reservation from '../components/Reservation'

  export default {
    name: "orderdetails",
    components: {
      OrderCell,
      Header,
      Footer,
      Reservation
    }
  }
</script>

<style scoped>
  .main{
    max-width: 1282px;
    margin: 100px auto 0 auto;
  }

  .main-title{
    margin-top: 60px;
    font-size: 26px;
    font-family: "PingFangSC-Medium";
    color: #000;
    font-weight: 600;
  }

  .orderdetails-reservation{
    border:1px solid rgba(221,221,221,1);
    margin-top: 40px;
    padding: 0 45px 40px 45px;
    border-radius: 2px;
  }

  .reservation-details{
    max-width: 1150px;
    margin: 130px auto 0 auto;
    background-color: #FFFCF9;
    /*height: 300px;*/
    padding: 30px 0;
  }



  .reservation-details-cell{
    text-align: center;
  }

  .reservation-details-cell:not(:first-child){
    margin-top: 40px;
  }

  .reservation-details-cell >span{
    display: inline-block;
    vertical-align: middle;
    font-size: 24px;
    color: #999;
  }
  .reservation-details-active >span{
    color: #BF9571
  }


  .reservation-details-cell span.time{
    margin-left: 20px;
  }

  .reservation-details-cell span.image{
    margin: 0 10px 0 50px;
  }

  .reservation-details-cell >span img{
    vertical-align: middle;
  }
</style>
