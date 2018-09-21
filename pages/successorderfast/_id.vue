<template>
  <!--预约具体信息-->
  <main class="reservation-main">
    <!--<img src="../assets/img/booking_make_icon1@2x.png" alt="">-->
    <x-img :src="require('../../assets/img/booking_make_icon1@2x.png')" alt="" />
    <div class="reservation-main-container">
      <p class="phone">
        您的联系手机：{{orderObject.Mobile}}
        <span class="tip">（用于查询维修进度）</span>
      </p>
      <p class="time">预约到店时间：{{orderObject.AptDate}} {{orderObject.AptTime}}</p>
    </div>
  </main>
</template>

<script>
  export default {
    async asyncData({app, params}) {
      // 品牌封面
      let option = {
        url: '/api/AptList/' + params.id,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let {data} = await app.$axios(option)
      data[0].AptDate = data[0].AptDate.slice(0, data[0].AptDate.search('T'))
      //console.log(data)
      return {orderObject: data[0]}
    }
  }
</script>

<style scoped>

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

  @media (max-width:768px){

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
  }
</style>

