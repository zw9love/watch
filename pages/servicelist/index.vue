<template>
  <div class="store-list">
    <div class="store-cell-wrapper" v-for="item in 5" :key="item">
      <div class="store-cell" >
        <div class="store-cell-left">
          <img src="../../assets/img/store_images1@2x.png" alt="">
        </div>
        <div class="store-cell-right">
          <p><strong>北京（朝阳店）</strong></p>
          <div class="store-address">
            <span><img src="../../assets/img/store_icon1@2x.png" alt=""></span>
            <span class="store-address-info">地址：深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号,深圳市宝安区宝安大道与金海路交汇处金港华庭首层商铺8182号</span>
          </div>
          <div class="store-phone">
            <span><img src="../../assets/img/store_icon2@2x.png" alt=""></span>
            <span>400-636-8800</span>
          </div>
          <div class="store-time">
            <span><img src="../../assets/img/store_icon3@2x.png" alt=""></span>
            <span>09:00-21:00</span>
          </div>
        </div>
        <div class="store-btn">
          <img src="../../assets/img/store_button1@2x.png" alt="">
          <span class="store-btn-info">立即预约</span>
        </div>
      </div>
      <div class="store-line"></div>
    </div>
    <div class="get-more">
      <span @click="getMore">查看更多 >></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .store-list{
    margin-top: 50px;
  }

  .get-more{
    text-align: center;
  }

  .get-more span{
    font-size: 20px;
    color: #999;
    cursor: pointer;
  }

  .store-cell{
    /*overflow: hidden;*/
    position: relative;
  }
  .store-cell:after{
    content: "";
    display: block;
    clear: both;
  }


  .store-cell-left, .store-cell-right{
    float: left;
  }

  .store-cell-right{
    width: 580px;
    padding-left: 20px;
  }

  .store-cell-right span>img{
    margin-right: 7px;
  }

  .store-address span{
    display: inline-block;
    vertical-align: middle;
  }

  .store-address, .store-phone, .store-time{
    margin-top: 10px;
  }

  .store-address span.store-address-info{
    width: calc(100% - 28px);
    vertical-align: top;
    line-height: 1.6em;
  }
  .store-address span img{
    vertical-align: top;
  }

  .store-cell-right span{
    font-size: 16px;
    color: #666;
    vertical-align: middle;
  }

  .store-cell-right strong{
    color: #333;
    font-size: 20px;
  }

  .store-btn{
    position: absolute;
    right: 0;
    bottom: -22px;
    cursor: pointer;
  }

  .store-btn-info{
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }

  .store-line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    clear: both;
    margin: 70px 0;
  }
</style>
