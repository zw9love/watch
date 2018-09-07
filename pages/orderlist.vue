<template>
 <div>
   <div class="container">
     <!--Header-->
     <Header :pageIndex="4"/>

     <!--banner-->
     <div class="banner">
       <img src="../assets/img/demand_banner@2x.png" alt="">
     </div>

     <!--main-->
     <main class="main">
       <div class="main-btn">
        <span class="main-btn-cell" :class="{'main-btn-active': mainBtbIndex === 0}" @click="mainBtbIndex = 0">
          全部订单
        </span>
         <span class="main-btn-cell" :class="{'main-btn-active': mainBtbIndex === 1}" @click="mainBtbIndex = 1">
          维修中<span class="main-btn-num">3</span>
        </span>
         <span class="main-btn-cell" :class="{'main-btn-active': mainBtbIndex === 2}" @click="mainBtbIndex = 2">
          已完成<span class="main-btn-num">1</span>
        </span>
       </div>
       <OrderCell />
       <OrderCell :completeActive="true"/>
       <OrderCell />
       <OrderCell />
       <OrderCell />
     </main>

     <div class="pagination">
       <div class="pagination-container">
         <el-pagination
           background
           layout="total, prev, pager, next, jumper"
           :page-size="5"
           :total="100">
         </el-pagination>
       </div>
     </div>

     <!--Footer-->
     <Footer/>
   </div>

   <div class="container320">
     <HeaderMobile title="查询结果"/>
     <div class="banner320">
       <img src="../assets/img/process.jpg" alt="">
     </div>
     <main class="main320">
       <div class="main320-btn">
         <span class="main320-btn-cell main320-btn-active">全部订单</span>
         <span class="main320-btn-cell">维修中</span>
         <span class="main320-btn-cell">已完成</span>
       </div>
       <div class="main320-order">
         <OrderCellMobile v-for="x in 10" :key="x"/>
       </div>
     </main>
   </div>
 </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import OrderCell from '../components/OrderCell'
  import OrderCellMobile from '../components/OrderCellMobile'
  import HeaderMobile from '../components/HeaderMobile'

  export default {
    name: "orderlist",
    components: {
      Header,
      Footer,
      OrderCell,
      HeaderMobile,
      OrderCellMobile
    },
    data() {
      return {
        mainBtbIndex: 0
      }
    }
  }
</script>

<style scoped>
  .container320{
    display: none;
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
  .main{
    max-width: 1282px;
    margin: 100px auto 0 auto;
  }

  .main-btn-cell{
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 20px;
  }

  .main-btn-num{
    color: #BF9571;
  }

  .main-btn-active{
    color: #fff;
    background-color: #C29770
  }

  .main-btn-active .main-btn-num{
    color: #fff;
  }

  .pagination{
    overflow: hidden;
    max-width: 1280px;
    margin: 40px auto
  }

  .pagination-container{
    float: right;
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
      padding: 10px;
      /*background-color: #ebebeb;*/
      min-height: 100vh;
      background-color: #eee;
    }

    .main320-btn{
      margin: 15px 0 0 0;
    }

    .main320-btn-cell{
      width: 75px;
      height:30px;
      font-size:14px;
      color: #fff;
      background-color: #a0a0a0;
      line-height: 30px;
      display: inline-block;
      text-align: center;
      border-radius: 3px;
      margin-right: 15px;
    }

    .main320-btn-active{
      background-color: #c29770;
    }


  }

</style>
