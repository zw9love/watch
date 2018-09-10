<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="4"/>

      <main class="main">
        <h3 class="main-title">订单详情</h3>
        <OrderCell :item="item" />
        <h3 class="main-title">维修进度</h3>
        <div class="orderdetails-reservation">
          <Reservation />
          <div class="reservation-details">
            <div class="reservation-details-cell reservation-details-active" v-for="x in 8" :key="x">
              <span class="date">2018-08-04</span>
              <span class="time">16:56</span>
              <span class="image">
                <x-img :src="require('../../assets/img/demand_list_plan_icon_no@2x.png')" alt="" />
              </span>
              <span class="info">客户已取表</span>
            </div>
          </div>
        </div>
      </main>

      <!--Footer-->
      <Footer/>
    </div>
    <div class="container320">
      <HeaderMobile title="查询结果"/>
      <div class="banner320"><img :src="require('../../assets/img/process.jpg')" alt="" /></div>
      <main class="main320">
        <OrderCellMobile :item="item" />
        <div class="orderdetails-reservation320">
          <div class="orderdetails-reservation320-cell" v-for="x in 8" :key="x">
            <span class="date">2018-08-04</span>
            <span class="time">16:56</span>
            <span class="image">
              <x-img :src="require('../../assets/img/demand_list_plan_icon_yes@2x.png')" alt="" />
            </span>
            <span class="content">备件等待中，备件大概需要2天</span>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import OrderCell from '../../components/OrderCell'
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  import Reservation from '../../components/Reservation'
  import HeaderMobile from '../../components/HeaderMobile'
  import OrderCellMobile from '../../components/OrderCellMobile'
  import Mock from 'mockjs'

  export default {
    name: "orderdetails",
    components: {
      OrderCell,
      Header,
      Footer,
      Reservation,
      HeaderMobile,
      OrderCellMobile
    },
    async asyncData ({ params }) {
      let item = Mock.mock({
        'ids': params.id,
        'price': '@integer(1000, 1000000)',
        'completeActive': '@boolean',
        'date': '@date("yyyy-MM-dd")'
      })
      // console.log(params.pageNumber)
      return {item: item}
    }
  }
</script>

<style scoped>
  .container320{
    display: none;
  }

  .main{
    max-width: 1282px;
    margin: 100px auto 0 auto;
  }

  .main-title{
    margin-top: 60px;
    font-size: 22px;
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
    font-size: 20px;
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

  @media (max-width:768px){
    .container{
      display: none;
    }

    .container320{
      display: block;
      margin-top: 45px;
    }

    .banner320{
      position: relative;
      padding-top: 37.7333%;
    }

    .banner320 img{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }


    .main320{
      padding: 0 10px;
      min-height: 100vh;
      background-color: #eee;
      padding-bottom: 20px;
    }

    .orderdetails-reservation320{
      background-color: #fff;
      padding: 0 20px;
      margin-top: 15px;
    }

    .orderdetails-reservation320-cell{
      padding-top: 20px;
    }

    .orderdetails-reservation320-cell{
      display: flex;
      align-items: center;
    }

    .orderdetails-reservation320-cell span{
      font-size:12px;
    }

    .orderdetails-reservation320-cell .time{
      margin-left: 10px;
    }

    .orderdetails-reservation320-cell .image{
      position: relative;
      margin: 0 15px;
    }

    .orderdetails-reservation320-cell:not(:last-child) .image:after{
      content: "";
      position: absolute;
      /*width: 1px;*/
      height: 24px;
      border: 1px dashed #999;
      left: 50%;
      bottom: -21px;
      transform: translateX(-50%);
      /*background-color: #999;*/
    }

    .orderdetails-reservation320-cell .image img{
      width: 30px;
      height: 30px;
    }

    .orderdetails-reservation320-cell .content{
      font-size: 13px;
      color: #c8936b;
    }
  }
</style>
