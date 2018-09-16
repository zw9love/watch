<template>
  <!--tabbar-->
  <div class="tabbar-container">
    <img :src="require('../assets/img/bottom_fix.png')" alt="" />
    <div class="tabbar-wrapper">
      <div class="tabbar-cell">
        <nuxt-link to="/customerservice">
          <x-img :src="require('../assets/img/online_service.png')" alt="" />
          <span>在线客服</span>
        </nuxt-link>
        <!--<img src="../assets/img/service_info.png" alt="" />-->
      </div>
      <div class="tabbar-cell">
        <nuxt-link to="/servicelist">
          <x-img :src="require('../assets/img/order_store.png')" alt="" />
          <span>预约到店</span>
        </nuxt-link>
        <!--<img src="../assets/img/service_info.png" alt="" />-->
      </div>
    </div>
    <span class="tabbar-vip" @click="phoneCall"></span>
    <div v-transfer-dom>
      <popup v-model="phoneShadowActive" is-transparent position="bottom" width="100%">
        <div class="phone-shadow">
          <div class="phone-shadow-info">
            <p class="content">维修服务中心咨询电话</p>
            <p class="phone">400-136-8800</p>
            <div class="phone-shadow-button">
              <span class="phone-shadow-button-cancel" @click="cancelShadow">取消</span>
              <a href="tel:400-136-8800" class="phone-shadow-button-confirm">呼叫</a>
              <!--<span class="phone-shadow-button-confirm" @click="confirmShadow">呼叫</span>-->
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data(){
      return {
        phoneShadowActive: false
      }
    },
    methods: {
      phoneCall(){
        this.phoneShadowActive = true
      },
      cancelShadow(){
        this.phoneShadowActive = false
      },
    }
  }
</script>

<style scoped>
  .tabbar-container {
    display: none;
  }

  @media (max-width:768px){
    .tabbar-container{
      display: block;
      position: fixed;
      left:0;
      bottom: 0;
      width: 100%;
      z-index: 101;
      /*background-color: #333;*/
    }

    .tabbar-container img{
      width: 100%;
      vertical-align: middle;
    }

    .tabbar-wrapper{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      padding: 0 10px;
      display: flex;
      z-index: 10000;
    }

    .tabbar-wrapper .tabbar-cell{
      display: flex;
      flex:1;
      align-items: center;
      /*justify-content: center;*/
    }

    .tabbar-wrapper .tabbar-cell:first-child{
      margin-left: 40px;
    }

    .tabbar-wrapper .tabbar-cell:last-child{
      justify-content: flex-end;
      margin-right: 40px;
    }

    .tabbar-wrapper .tabbar-cell >a{
      display: flex;
      align-items: center;
    }

    .tabbar-wrapper .tabbar-cell span{
      color: #C8936B;
      font-size: 18px;
    }


    .tabbar-cell  img{
      width: 50px;
      height: auto;
      margin-right: 15px;

    }

    .tabbar-vip{
      position: absolute;
      height: 100px;
      width: 26.6666%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      opacity: 0;
      z-index: 10001;
    }

    .phone-shadow{
      width: 100%;
      height: 166px;
      background-color: rgba(0, 0, 0, .8);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .phone-shadow-info{
      text-align: center;
    }
    .phone-shadow-info .content{
      color: #fff;
      font-size: 14px;
    }

    .phone-shadow-info .phone{
      margin-top: 10px;
      color: #C8936B!important;
      font-size: 24px;
    }

    .phone-shadow-info .phone-shadow-button{
      margin-top: 20px;
    }
    .phone-shadow-button >span, .phone-shadow-button >a{
      margin-left: 10px;
      height: 30px;
      border-radius: 8px;
      display: inline-block;
      line-height: 30px;
      color: #fff;
      font-size: 14px;
      width: 100px;
    }


    .phone-shadow-button .phone-shadow-button-confirm{
      background-color: #C8936B;
    }
    .phone-shadow-button .phone-shadow-button-cancel{
      border: 1px solid #C8936B;
    }

    .tabbar-container .weui-tabbar{
      background-color: #333;
    }

    .tabbar-container .weui-tabbar .weui-tabbar__label span{
      color: #fff;
      text-decoration: none;
    }

    .tabbar-container .weui-tabbar .weui-bar__item_on span{
      color: #C8936B
    }

    .weui-tabbar__item{
      padding: 10px 0 5px 0;
    }
  }

  @media (max-width:480px){
    .tabbar-wrapper .tabbar-cell  img{
      width: 25px;
      height: auto;
      margin-right: 5px;
    }

    .tabbar-wrapper .tabbar-cell span{
      color: #C8936B;
      font-size: 14px;
    }

    .tabbar-wrapper .tabbar-cell:first-child{
      margin-left: 20px;
    }

    .tabbar-wrapper .tabbar-cell:last-child{
      margin-right: 20px;
    }
  }


  @media (max-width:360px){

    .tabbar-wrapper .tabbar-cell  img{
      width: 20px;
      margin-right: 5px;
    }

    .tabbar-wrapper .tabbar-cell span{
      font-size: 12px;
    }

    .tabbar-wrapper .tabbar-cell:first-child{
      margin-left: 15px;
    }

    .tabbar-wrapper .tabbar-cell:last-child{
      margin-right: 15px;
    }
  }

</style>
