<template>
  <div class="main-cell">
    <div class="main-cell-title">
      <span class="date">{{item.AptDate}}</span>
      <span class="number">订单编号：{{item.Id}}</span>
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
        <p class="watch-name"><span>{{item.Remark}}</span></p>
        <!--<p>手表型号：<span>5327G - 白金款</span></p>-->
        <p class="watch-service">故障类型：
          <!--<span>拆分机芯并清洗手表服务拆分机芯并清洗手表服务拆分机芯并清洗</span>-->
          <span>{{item.TroubleNoStr}}</span>
        </p>
      </span>
      <span class="price">¥{{item.Price}}</span>
      <span class="discount"><span>¥{{item.AfterPrice - item.Price}}</span><br/><span
        class="discount-info">（在线预约8折优惠）</span></span>
      <span class="realpay">¥{{item.AfterPrice}}</span>

      <nuxt-link class="status complete" v-if="item.Type !== 0" :to="'/orderdetails/' + item.Id">
        <img src="../assets/img/demand_list_button3@2x.png" alt="">
        <span class="status-info">已完成</span>
      </nuxt-link>

      <nuxt-link class="status" v-else :to="'/orderdetails/' + item.Id">
        <img src="../assets/img/demand_list_button1@2x.png" alt="">
        <span class="status-info">维修中</span>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderCell",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .main-cell {
    border: 1px solid #ddd;
    margin-top: 40px;
  }

  .main-cell .main-cell-title {
    height: 50px;
    line-height: 50px;
    background-color: #F5F5F5
  }

  .main-cell-title span {
    display: inline-block;
    text-align: center;
    font-family: "PingFangSC-Medium";
    font-size: 18px;
    font-weight: 600;
  }

  span.date {
    width: 200px;
  }

  span.number {
    /*width: 440px;*/
    width: 440px;
    text-align: left;
  }

  span.price {
    width: 160px;
  }

  span.discount {
    width: 160px;
  }

  span.realpay {
    width: 160px;
  }

  span.status {
    width: 160px;
  }

  .main-cell-content {
    padding: 40px 0;
  }

  .main-cell-content > span {
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    position: relative;
  }

  .main-cell-content p {
    text-align: left;
    font-size: 16px;
    color: #999;
    line-height: 35px;
  }

  .main-cell-content p.watch-name {
    color: #333;
    font-weight: 600;
    font-size: 20px;
    /*margin-bottom: 10px*/
  }

  .main-cell-content p.watch-service {
    margin-top: 20px;
  }

  .discount-info {
    display: inline-block;
    margin-top: 5px;
    font-size: 14px;
    color: #999
  }

  .status-info {
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }

  .complete .status-info {
    color: #666;
    top: 50%;
  }

  .main-cell-content .status {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  .main-cell-content .status img{
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    .main-cell {
      display: none;
    }
  }
</style>
