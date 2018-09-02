<template>
  <div class="reservation">
    <div class="reservation-container320">
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon1@2x.png" alt="">
        <span>到店送修</span>
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_flow_icon0@2x.png" alt="" class="arrow">
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon2@2x.png" alt="">
        <span>预检并报价</span>
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_flow_icon0@2x.png" alt="" class="arrow">
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon3@2x.png" alt="">
        <span>确认服务</span>
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_flow_icon0@2x.png" alt="" class="arrow">
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon4@2x.png" alt="">
        <span>维修保养</span>
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_flow_icon0@2x.png" alt="" class="arrow">
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon5@2x.png" alt="">
        <span>服务完成</span>
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_flow_icon0@2x.png" alt="" class="arrow">
      </div>
      <div class="reservation-cell320">
        <img src="../assets/img/home_reservationprocess_icon6@2x.png" alt="">
        <span>告知客户</span>
      </div>
    </div>
    <div class="reservation-container">
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon1@2x.png" alt="">
          <span>到店送修</span>
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon@2x.png" alt="" class="arrow">
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon2@2x.png" alt="">
          <span>预检并报价</span>
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon@2x.png" alt="" class="arrow">
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon3@2x.png" alt="">
          <span>确认服务</span>
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon@2x.png" alt="" class="arrow">
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon4@2x.png" alt="">
          <span>维修保养</span>
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon@2x.png" alt="" class="arrow">
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon5@2x.png" alt="">
          <span>服务完成</span>
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon@2x.png" alt="" class="arrow">
        </div>
      </div>
      <div class="reservation-cell">
        <div class="reservation-cell-container">
          <img src="../assets/img/home_reservationprocess_icon1@2x.png" alt="">
          <span>告知客户</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Reservation"
  }
</script>

<style scoped>
  /**
    预约流程
   */
  .reservation {
    max-width: 1280px;
    margin: 0 auto
  }

  .reservation-container320 {
    display: none;
  }

  .reservation-container {
    /*overflow: hidden;*/
    margin-right: -40px;
    margin-top: 50px;
  }

  .reservation-container:after {
    content: "";
    display: block;
    clear: both;
  }

  .reservation-cell {
    float: left;
    width: 9.0909%
  }

  .reservation-cell-container {
    margin-right: 40px;
    height: 80px;
    /*background: yellow;*/
    position: relative;
  }

  .reservation-cell-container img {
    width: 100%;
    /*border-radius: 10px;*/
    vertical-align: middle;

  }

  .reservation-cell-container img.arrow {
    position: absolute;
    top: 31px;
    max-width: 70px;
  }

  .reservation-cell-container span {
    position: absolute;
    left: 50%;
    bottom: -35px;
    transform: translateX(-50%);
    font-size: 18px;
    font-family: "PingFangSC-Regular";
    white-space: nowrap;
  }

  @media (max-width: 768px) {

    .reservation-container{
      display: none;
    }
    /**
      预约流程
     */
    .reservation-container320 {
      display: flex;
      padding: 0 10px;
      margin-top: 20px
    }

    .reservation-cell320 {
      position: relative;
      flex: 1;
    }

    .reservation-cell320:nth-child(odd) {
      flex: 3;
      margin: 0 4px;
    }

    .reservation-cell320 img {
      width: 100%;
      /*width: 40px;*/
      /*height: 40px;*/
    }

    .reservation-cell320 img.arrow {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      /*width: 12px;*/
      /*height: 12px;*/
    }

    .reservation-cell320 span {
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
      font-size: 10px;
      white-space: nowrap;
    }
  }
</style>
