<template>
  <div class="main-cell">
    <div class="main-cell-title">
      <span class="date">2018-08-20</span>
      <span class="number">订单编号：1934345698472354</span>
      <span class="price">维修价格</span>
      <span class="discount">折扣</span>
      <span class="realpay">实付款</span>
      <span class="status">交易状态</span>
    </div>
    <div class="main-cell-content">
          <span class="date">
            <img src="../assets/img/demand_list_images1@2x.png" alt="">
          </span>
          <span class="number">
            <p class="watch-name"><span>百达斐丽</span></p>
            <p>手表型号：<span>5327G - 白金款</span></p>
            <p class="watch-service">手表服务：<span>拆分机芯并清洗手表服务拆分机芯并清洗手表服务拆分机芯并清洗</span></p>
          </span>
          <span class="price">¥5000</span>
          <span class="discount"><span>¥1000</span><br/><span class="discount-info">（在线预约8折优惠）</span></span>
          <span class="realpay">¥4000</span>

          <span class="status complete" v-if="completeActive">
            <img src="../assets/img/demand_list_button3@2x.png" alt="">
            <span class="status-info">已完成</span>
          </span>

          <span class="status" v-else>
            <img src="../assets/img/demand_list_button1@2x.png" alt="">
            <span class="status-info">维修中</span>
          </span>

    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderCell",
        props: {
          completeActive: {
            type: Boolean,
            default: false
          }
        }
    }
</script>

<style scoped>
  .main-cell{
    border: 1px solid #ddd;
    margin-top: 40px;
  }

  .main-cell .main-cell-title{
    height: 50px;
    line-height: 50px;
    background-color: #F5F5F5
  }

  .main-cell-title span{
    display: inline-block;
    text-align: center;
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    font-weight: 600;
  }

  span.date{
    width: 200px;
  }
  span.number{
    width: 440px;
    text-align: left;
  }

  span.price{
    width: 160px;
  }

  span.discount{
    width: 160px;
  }
  span.realpay{
    width: 160px;
  }
  span.status{
    width: 160px;
  }

  .main-cell-content{
    padding: 40px 0;
  }

  .main-cell-content >span{
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    position: relative;
  }

  .main-cell-content p{
    text-align: left;
    font-size: 16px;
    color: #999;
    line-height: 35px;
  }

  .main-cell-content p.watch-name{
    color: #333;
    font-weight: 600;
    font-size: 20px;
    /*margin-bottom: 10px*/
  }

  .main-cell-content p.watch-service{
  }

  .discount-info{
    display: inline-block;
    margin-top: 5px;
    font-size: 14px;
    color: #999
  }

  .status-info{
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }

  .complete .status-info{
    color: #666;
  }

  .main-cell-content .status{
    cursor: pointer;
  }
</style>
