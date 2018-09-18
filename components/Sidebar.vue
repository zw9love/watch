<template>
  <div class="sidebar">
    <!--<nuxt-link class="sidebar-online" to="customerservice">-->
    <span class="sidebar-online" @click="goService">
      <!--<x-img :src="require('../assets/img/home_suspend_bg@2x.png')" alt="" />-->
      <img :src="require('../assets/img/home_suspend_bg@2x.png')"/>
      <span>在线客服</span>
    </span>
    <!--</nuxt-link>-->

    <span class="sidebar-cell sidebar-cell-advice" @click="goService">
    <!--<nuxt-link class="sidebar-cell sidebar-cell-advice" to="customerservice">-->
      <!--<img src="../assets/img/home_suspend_button_no4@2x.png" alt="" />-->
      <span>立即咨询</span>
    <!--</nuxt-link>-->
    </span>
    <nuxt-link class="sidebar-cell sidebar-cell-order" to="/servicelist">
      <!--<img src="../assets/img/home_suspend_button_no2@2x.png" alt="" />-->
      <span>预约到店</span>
    </nuxt-link>
    <div class="sidebar-cell sidebar-cell-phone">
      <!--<img src="../assets/img/home_suspend_button_no3@2x.png" alt="" />-->
      <span style="color: #BB9875">电话咨询</span>
      <div class="sidebar-cell-popup call-back">
        <input type="text" maxlength="11" class="call-back-txt" placeholder="请输入您的手机号码" v-model="phoneNumber" @keyup.enter="callYouBack">
        <span class="call-back-btn" @click="callYouBack">给您回电</span>
      </div>
    </div>
    <div class="sidebar-cell sidebar-cell-wechat">
      <!--<img src="../assets/img/home_suspend_button_no1@2x.png" alt="" />-->
      <span>微信联系</span>
      <div class="sidebar-cell-popup sidebar-cell-popup-qr">
        <img :src="require('../assets/img/qr_code.png')" alt=""/>
      </div>
    </div>
    <div class="sidebar-back-top" @click="backTop">
      <div class="sidebar-back-top-wrapper">
        <div>
          <x-img :src="require('../assets/img/home_suspend_icon_top@2x.png')" alt=""/>
        </div>
        <div>
          <span>回到顶部</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data(){
      return {
        phoneNumber: ''
      }
    },
    methods: {
      backTop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      },
      goService(){
        window.open('/customerservice')
      },
      async callYouBack(){
        let number = this.phoneNumber.trim()
        let modalInfo = ''
        let successFlag = false
        let checkFlag = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(number)
        if(checkFlag){
          await this.$axios('/api/CallBack?Mobile=' + number, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              console.log(res)
              modalInfo = '您已成功提交！请保持电话畅通'
              successFlag = true
              // if (res.status === 401) {
              //   throw new Error('Bad credentials')
              // } else {
              //   return res.data.username
              // }
            })
            .catch((error)=>{
              modalInfo = '对不起！您的手机号码格式有误'
              console.log(error)
            })
        }else{
          modalInfo = '对不起！您的手机号码格式有误'
        }
        this.$store.dispatch({type: 'setModalInfo', val: modalInfo})
        this.$store.dispatch({type: 'setSuccessActive', val: successFlag})
        this.$store.dispatch({type: 'setModalActive', val: true})
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    right: 0;
    top: calc((100vh - 340px - 130px) / 2);
    /*transform: translateY(-50%);*/
    width: 130px;
    background-color: #fff;
    z-index: 10000;
  }

  .sidebar-online {
    height: 70px;
    text-align: center;
    line-height: 70px;
    background-color: #C8936B;
    cursor: pointer;
    position: relative;
    display: block;
  }

  .sidebar-online img {
    width: 100%;
    height: 100%;
  }

  .sidebar-online span {
    position: absolute;
    font-size: 16px;
    color: #000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    white-space: nowrap;
  }

  .sidebar-cell {
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #C8936B;
    cursor: pointer;
    position: relative;
    display: block;
    background-repeat: no-repeat;
    background-position: 20% 60%;
    transition: all .3s ease;
  }

  .sidebar-cell-advice {
    background-image: url("../assets/img/home_suspend_button_no4@2x.png");
  }

  .sidebar-cell-advice:hover {
    background-image: url("../assets/img/home_suspend_button_yes4@2x.png");
  }

  .sidebar-cell-order {
    background-image: url("../assets/img/home_suspend_button_no2@2x.png");
  }

  .sidebar-cell-order:hover {
    background-image: url("../assets/img/home_suspend_button_yes2@2x.png");
  }

  .sidebar-cell-phone {
    background-image: url("../assets/img/home_suspend_button_no3@2x.png");
  }

  .sidebar-cell-phone:hover {
    background-image: url("../assets/img/home_suspend_button_yes3@2x.png");
  }

  .sidebar-cell-wechat {
    background-image: url("../assets/img/home_suspend_button_no1@2x.png");
  }

  .sidebar-cell-wechat:hover {
    background-image: url("../assets/img/home_suspend_button_yes1@2x.png");
  }

  .sidebar-cell img {
    vertical-align: middle;
  }

  .sidebar-cell span {
    vertical-align: middle;
    display: inline-block;
    margin-left: 30px;
    color: #666;
    font-size: 14px;
  }

  .sidebar-cell-popup {
    position: absolute;
    right: 100%;
    /*left: 100%;*/
    top: 0;
    transition: all .3s ease;
    /*opacity: 0;*/
    display: none;
  }

  .sidebar-cell:hover .sidebar-cell-popup {
    display: block;
  }

  /*.sidebar-cell:hover .call-back{*/
  /*!*display: block;*!*/
  /*left: -300px;*/
  /*opacity: 1;*/
  /*}*/

  /*.sidebar-cell:hover .sidebar-cell-popup-qr{*/
  /*left: -120px;*/
  /*opacity: 1;*/
  /*}*/

  .sidebar-cell-popup-qr {
    width: 120px;
    height: 120px;
  }

  .sidebar-cell-popup-qr img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .sidebar-back-top {
    height: 70px;
    /*line-height: 70px;*/
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    background-color: #C8936B;
    position: relative;
  }

  .sidebar-back-top-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .sidebar-back-top-wrapper > div:last-child {
    margin-top: 5px;
  }

  .call-back {
    height: 50px;
    line-height: 50px;
    /*width: 322px;*/
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    /*border: 1px solid #C8936B;*/
    white-space: nowrap;
  }

  .call-back .call-back-txt {
    display: inline-block;
    width: 200px;
    color: #333;
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid #C8936B;
    height: 100%;
    vertical-align: top;
    background: #fff;
  }

  .call-back .call-back-btn {
    display: inline-block;
    width: 100px;
    background-color: #C8936B;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    height: 100%;
    margin: 0;
    vertical-align: top;
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
