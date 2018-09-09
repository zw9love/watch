<template>
  <div class="main-right">
    <div class="main-right-cell">
      <x-img :src="require('../assets/img/case_detail_images2@2x.png')" alt="" />
    </div>
    <div class="main-right-cell">
      <x-img :src="require('../assets/img/case_detail_images3@2x.png')" alt="" />
    </div>
    <div class="main-right-cell">
      <x-img :src="require('../assets/img/case_detail_images4@2x.png')" alt="" />
      <div class="adver-order">
        <div class="adver-order-cell">
          <span class="name">姓名</span>
          <span class="brand">品牌</span>
          <span class="phone">手机号码</span>
        </div>
        <div class="adver-order-cell" v-for="(item, key) in orderList" :key="key">
          <span class="name">{{item.name}}</span>
          <span class="brand">{{item.brand}}</span>
          <span class="phone">{{item.phone}}</span>
        </div>
        <div class="adver-order-btn">
          <nuxt-link class="adver-order-btn-cell" to="/servicelist">
            <x-img :src="require('../assets/img/store_button1@2x.png')" alt="" />
            <span>预约到店</span>
          </nuxt-link>
          <nuxt-link class="adver-order-btn-cell" to="/customerservice">
            <x-img :src="require('../assets/img/store_button1@2x.png')" alt="" />
            <span>我要咨询</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="main-right-cell">
      <x-img :src="require('../assets/img/case_detail_images5@2x.png')" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Advertisement",
    data(){
      return {
        orderList: [
          {name: '钟女士', brand: '百达翡丽', phone: '153*****882'},
          {name: '文先生', brand: '劳力士', phone: '137*****888'},
          {name: '梁女士', brand: '浪琴', phone: '158*****200'},
          {name: '阳先生', brand: '欧米茄', phone: '187*****999'},
          // {name: '王女士', brand: '宝玑', phone: '131*****296'},
          // {name: '黄先生', brand: '劳力士', phone: '187*****758'},
          // {name: '李先生', brand: '卡地亚', phone: '181*****876'},
          // {name: '林先生', brand: '积家', phone: '188*****199'},
          // {name: '刘先生', brand: '真力时', phone: '139*****620'},
          // {name: '郝先生', brand: '万国', phone: '138*****513'},
        ]
      }
    }
  }
</script>

<style scoped>
  .main-right{
    float: right;
    width: 420px;
  }

  .main-right img{
    vertical-align: middle;
  }

  .main-right-cell{
    margin-top: 20px;
    position: relative;
  }

  .adver-order{
    position: absolute;
    height: 350px;
    width: 100%;
    bottom: 0;
    padding: 0 20px;
  }

  /*.adver-order-cell:not(:first-child){*/
  .adver-order-cell{
    margin-top: 20px;
  }

  .adver-order-cell span{
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }

  .adver-order-cell .name{
    width: 25%;
  }

  .adver-order-cell .brand{
    width: 25%;
  }

  .adver-order-cell .phone{
    width: 50%;
  }

  .adver-order-btn{
    text-align: center;
    margin-top: 30px;
  }
  .adver-order-btn .adver-order-btn-cell{
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .adver-order-btn .adver-order-btn-cell:not(:first-child){
    margin-left: 20px;
  }

  .adver-order-btn .adver-order-btn-cell span{
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 17px;
    font-weight: 600;
  }


  @media (max-width:768px){
    .main-right{
      display: none;
    }
  }

</style>
