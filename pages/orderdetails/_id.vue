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
          <Reservation :completeList="completeList"/>
          <div class="reservation-details">
            <div class="reservation-details-wrapper">
              <div class="reservation-details-cell" v-for="(item, key) in processList" :key="key" :class="{'reservation-details-active': item.completed}">
                <span class="date">{{item.CreateTime}}</span>
                <span class="time">16:56</span>
                <span class="image">
                <x-img :src="item.completeSrc" alt="" v-if="item.completed"/>
                <x-img :src="item.noCompleteSrc" alt="" v-else />
              </span>
                <span class="info">{{item.info}}</span>
              </div>
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
          <div class="orderdetails-reservation320-cell" :class="{'orderdetails-reservation320-active': item.completed}" v-for="(item, key) in processList" :key="key">
            <span class="date">{{item.CreateTime}}</span>
            <span class="time">16:56</span>
            <span class="image">
                <x-img :src="item.completeSrc" alt="" v-if="item.completed"/>
                <x-img :src="item.noCompleteSrc" alt="" v-else />
            </span>
            <span class="content">{{item.info}}</span>
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
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    async asyncData ({ app, params }) {
      // let item = Mock.mock({
      //   'ids': params.id,
      //   'price': '@integer(1000, 1000000)',
      //   'completeActive': '@boolean',
      //   'date': '@date("yyyy-MM-dd")'
      // })
      // // console.log(params.pageNumber)
      // return {item: item}

      let id = params.id
      // 单个订单option
      let orderOption = {
        url: '/api/AptList/' + id,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let orderRes = await app.$axios(orderOption)

      let processOption = {
        url: '/api/AptList/GetAptRepairProcess?id=' + id,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let processRes = await app.$axios(processOption)

      return { item: orderRes.data[0], processList: processRes.data}
    },
    data(){
      return {
        processList: [
          // {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no@2x.png'), info: '客户已取表'},
          // {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes1@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no1@2x.png'), info: '等待客户取表'},
          {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes3@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no3@2x.png'), info: '维修完成'},
          {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes4@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no4@2x.png'), info: '维修中'},
          {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes5@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no5@2x.png'), info: '备件等待中'},
          {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes6@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no6@2x.png'), info: '检测中'},
          {completed: true, completeSrc: require('../../assets/img/demand_list_plan_icon_yes7@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no7@2x.png'), info: '已送修'},
          {completed: false, completeSrc: require('../../assets/img/demand_list_plan_icon_yes8@2x.png'), noCompleteSrc: require('../../assets/img/demand_list_plan_icon_no8@2x.png'), info: '已提交维修订单'},
        ],
        completeList: [false, false, false, false, true, false],
      }
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
    text-align: center;
  }

  .reservation-details-wrapper{
    display: inline-block;
  }


  .reservation-details-cell{
    /*text-align: center;*/
    display: table;
    /*width: auto*/
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
      padding: 0 20px 20px 20px;
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
      color: #999
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
      vertical-align: middle;
    }

    .orderdetails-reservation320-cell .content{
      font-size: 13px;
    }

    .orderdetails-reservation320-active span{
      font-size:12px;
      color: #333
    }

    .orderdetails-reservation320-active .content{
      color: #c8936b;
    }
  }
</style>
