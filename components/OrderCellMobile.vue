<template>
  <div class="main320-order-cell" @click="goDetails">
    <div class="main320-order-title">
      <span class="">北京西单旗舰店 ></span>
    </div>
    <div class="main320-order-main">
      <div class="main320-order-watch">
        <div class="main320-order-watch-img">
          <img style="width: 100px;height: 100px" src="../assets/img/demand_list_images1@2x.png" alt="">
        </div>
        <div class="main320-order-watch-info">
          <div class="main320-order-status">
            <h3>百达斐丽</h3>
            <span v-if="item.completeActive">已完成</span>
            <span v-else>维修中</span>
          </div>
          <div class="main320-order-watch-service">
            <span>手表型号：</span>
            <span>5327G - 白金款式</span>
          </div>
          <div class="main320-order-watch-service">
            <span>手表服务：</span>
            <span>拆分机芯并清洗注油，据实际情况更换磨损，老化的机芯部件</span>
          </div>
        </div>
      </div>
      <div class="main320-order-line"></div>
      <div class="main320-order-price">
        <div class="main320-order-price-cell">
          <span>维修价格</span>
          <span>¥{{item.price}}</span>
        </div>
        <div class="main320-order-price-cell">
          <span><span>维修折扣</span><span class="discount">（在线预约8折优惠）</span></span>
          <span>¥{{parseInt(item.price * 0.2)}}</span>
        </div>
        <div class="main320-order-price-cell">
          <span>实付款</span>
          <span class="price">¥{{parseInt(item.price * 0.8)}}</span>
        </div>
      </div>
      <div class="main320-order-line"></div>
      <div class="main320-order-detail">
        <p>订单编号：{{item.ids}}</p>
        <p>创建时间：{{item.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderCellMobile",
    props: {
      item: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      goDetails(){
        this.$router.push({path: '/orderdetails/' + this.item.ids})
      }
    }
  }
</script>

<style scoped>
  .main320-order-cell {
    display: none;
  }

  @media (max-width: 768px) {
    .main320-order-cell {
      padding-top: 20px;
      display: block;
    }

    .main320-order-title {
      height: 25px;
      background-color: #c8936b;
      line-height: 25px;
      text-indent: 10px;
    }

    .main320-order-title span {
      color: #fff;
      font-size: 14px;
    }

    .main320-order-main {
      padding: 15px 10px;
      background-color: #fff;
    }

    .main320-order-watch {
      display: flex;
      position: relative;
    }

    .main320-order-watch-img {
      margin-right: 10px;
      width: 100px;
      height: 100px;
      position: relative;
    }

    .main320-order-watch img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    .main320-order-watch-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }

    .main320-order-watch-info h3 {
      font-size: 16px;
    }

    .main320-order-watch-service {
      margin-top: 10px;
      display: flex;

    }

    .main320-order-watch-service > span {
      font-size: 12px;
    }

    .main320-order-watch-service > span:first-child {
      color: #999;
    }

    .main320-order-watch-service > span:last-child {
      flex: 1;
      color: #333;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .main320-order-status {
      display: flex;
      justify-content: space-between;
    }

    .main320-order-status span {
      font-size: 16px;
      color: #c8936b;
      font-weight: 600;
    }

    .main320-order-line {
      width: 100%;
      height: 1px;
      background-color: #eee;
      margin: 15px 0;
    }

    .main320-order-price-cell {
      display: flex;
      justify-content: space-between;
      color: #333;
      font-size: 13px;
      margin-top: 10px;
    }

    .main320-order-price-cell .price {
      color: #ff4e00
    }

    .main320-order-price-cell .discount {
      color: #999
    }

    .main320-order-detail p {
      margin-top: 5px;
      color: #999;
      font-size: 12px;
    }
  }
</style>
