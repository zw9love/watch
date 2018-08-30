<template>
  <div>
    <div class="container">
      <!--nav-->
      <div class="nav">
        <div class="nav-title">
          <span><span class="spe-info">北京名表维修服务中心</span> 08号客服 正在为您服务...</span>
        </div>
        <div class="nav-end">
        <span class="nav-end-icon">
            <img src="../assets/img/customer_service_end.png"/>
        </span>
          <span class="nav-end-info">结束对话</span>
        </div>
      </div>
      <!--banner-->
      <!--<div class="banner">-->
      <!--<img src="../assets/img/customer_service_banner.jpg" />-->
      <!--</div>-->

      <!--main-->
      <main class="main">
        <div class="main-container">
          <!--<div class="main-tip"><span>2018-8-10 09:23:23 请求了对话</span></div>-->
          <div class="main-cell main-service-cell">
            <div class="main-cell-head">
              <img src="../assets/img/customer_service_logo.png"/>
            </div>
            <div class="main-cell-info">
              <p class="title">
                <span class="service-name">在线客服08号-小雅</span>
                <span class="time">2018-08-04  12:33:06</span>
              </p>
              <p class="content">
                您好，欢迎咨询西亨维修客服， 我是客服小雅，请问有什么可以帮助您呢？如果打字不方便可拔打服务热线：400-960-8888
              </p>
            </div>
          </div>
          <div class="main-cell main-customer-cell">
            <div class="main-cell-head">
              <img src="../assets/img/customer_service_logo.png"/>

            </div>
            <div class="main-cell-info">
              <!--<p class="title">-->
              <!--<span class="service-name">在线客服08号-小雅</span>-->
              <!--<span class="time">2018-08-04  12:33:06</span>-->
              <!--</p>-->
              <p class="content">
                手表进水的了，还可以修吗？
              </p>
            </div>
          </div>
          <!--<div class="main-tip"><span>客服已关闭会话，如需继续咨询，<a href="#">请重新连接客服</a></span></div>-->
        </div>
      </main>

      <!--用户输入-->
      <div class="input">
        <div class="input-nav">
          <img src="../assets/img/customer_service_logo.png" alt="" id="btn"/>
          <!--onclick="document.getElementById('upload-txt').click()"-->
          <img src="../assets/img/customer_service_logo.png" alt="" id="upload"/>
          <input type="file" hidden id="upload-txt" accept="image/*">
        </div>
        <div id="editor" class="input-txt" placeholder="请在此输入..." contenteditable="true"></div>
        <button class="send">发送</button>
      </div>
    </div>

    <div class="container320">

      <HeaderMobile title="在线客服"></HeaderMobile>

      <!--<div class="nav320">-->
        <!--<span class="nav320-title">在线客服</span>-->
      <!--</div>-->

      <main class="main320">
        <div class="main-container320">
          <!--<p class="store-info">您正在咨询深圳数码-南山店</p>-->

          <div class="welcome">
            <span>欢迎咨询在线客服，本次由小雅为您服务</span>
          </div>

          <div>
            <p class="store-info">2018-08-04 12:33:06</p>
            <div class="main-cell320 main-service-cell320">
              <img src="../assets/img/customer_service_logo.png" alt="">
              <div class="main-cell-info">
                <!--<p class="name">在线客服08号-小张</p>-->
                <p class="content">
                  您好，欢迎咨询西亨维修客服，请问有什么可以
                  协助您呢？
                </p>
              </div>
            </div>
          </div>

          <div v-for="x in 10" :key="x">
            <p class="store-info">2018-08-04 12:33:06</p>
            <div class="main-cell320 main-customer-cell320">
              <div class="main-cell-info">
                <p class="content">
                  手机进水了，还可以修吗？2
                </p>
              </div>
              <img src="../assets/img/customer_service_logo.png" alt="">
            </div>
          </div>

        </div>
        <!--<p class="chat-end-info"></p>-->
        <!--<p class="chat-end-info">您的聊天会话已结束</p>-->
        <!--<p class="main-tip"><span>客服已关闭会话，如需继续咨询，<a href="#">请重新连接客服</a></span></p>-->
        <!--<div class="connect-btn320">-->
        <!--<span>重新连接</span>-->
        <!--</div>-->
      </main>

      <!--底部输入和按钮-->
      <div class="connect-btn320">
        <span>重新连接</span>
      </div>

      <div class="input320">
        <div class="operation">
          <img src="../assets/img/smile.png" alt="" id="btn320">
          <img src="../assets/img/add.png" alt="" class="add">
          <!--<input id="editor320" class="input-txt320" placeholder="请在此输入111..." type="search" autocomplete="off" autocomplete="off">-->
          <input id="editor320" class="input-txt320" placeholder="请在此输入..." type=input>
          <!--<textarea id="editor320" class="input-txt320" placeholder="请在此输入..."></textarea>-->
          <!--<button class="send320">发送</button>-->
          <!--<button id="openwebsocket">开启</button>-->
          <button class="send320" id="send">发送</button>
        </div>
        <div class="popup">
          <div class="popup-emoji"></div>
          <div class="popup-photo">
            <div class="popup-photo-cell">
                         <span class="popup-photo-img">
                            <img src="../assets/img/write.png" alt="">
                        </span>
              <span class="popup-photo-info">预约到店</span>
            </div>
            <div class="popup-photo-cell">
                        <span class="popup-photo-img" id="photo-wrapper">
                            <img src="../assets/img/photo.png" alt="">
                        </span>
              <span class="popup-photo-info">相册</span>
              <input type="file" accept="image/*" class="upload-txt320" hidden>
            </div>
            <div class="popup-photo-cell">
                        <span class="popup-photo-img" id="camera-wrapper">
                            <img src="../assets/img/camera.png" alt="">
                        </span>
              <span class="popup-photo-info">拍照</span>
              <input type="file" accept="image/*" capture="camera" class="camera-txt" hidden>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
  import HeaderMobile from '../components/HeaderMobile'
  export default {
    name: "customerservice",
    components: {
      HeaderMobile
    },
    data(){
      return {
      }
    },
    mounted(){
      // let windowHeight = window.innerHeight
      // let windowWidth = window.innerWidth
      // let mobileFlag = windowWidth <= 768
      // if(!mobileFlag){
      //   this.mainHeight = windowHeight - 60 - 210 + 'px'
      // }else{
      //   this.mainHeight320 = windowHeight - 50 + 'px'
      // }
      // $('.main').height(mainHeight)
    }
  }
</script>

<style scoped>

  img {
    vertical-align: middle;
  }

  img.emoji_icon {
    width: 30px
  }

  .container320 {
    display: none;
  }

  .nav {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    background-color: #333;
  }

  .nav:after {
    content: "";
    display: inline-block;
    clear: both;
  }

  .nav .nav-title {
    float: left;
    color: #fff;
    font-size: 20px;
  }

  .nav .nav-title span {
    color: #fff;
  }

  span.spe-info{
    color: #BF9571!important;
  }

  .nav .nav-end {
    float: right;
  }

  .nav-end > span {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }

  .nav-end > span.nav-end-icon {
    width: 20px;
  }

  .nav-end > span.nav-end-info {
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
  }

  main {
    padding: 0 20px;
    overflow-x: hidden;
    overflow-y: auto;
    /*max-width: 1200px;*/
    /*margin: 0 auto;*/
    width: 100%;
    height: calc(100vh - 270px);
    background-color: #EBEBEB;
  }

  main .main-tip {
    margin: 35px auto;
    /*max-width: 280px;*/
    text-align: center;
  }

  main .main-tip span {
    display: inline-block;
    background-color: #f1f1f1;
    height: 40px;
    font-family: "PingFangSC-Regular";
    line-height: 40px;
    color: #999;
    font-size: 12px;
    border-radius: 2px;
    padding: 0 20px;
  }

  main .main-tip span a {
    color: #C8936B
  }

  .main-cell {
    /*max-width: 800px;*/
    overflow: hidden;
    margin: 30px 0;
  }

  .main-service-cell, .main-customer-cell {
    position: relative;
  }

  .main-customer-cell .main-cell-head, .main-customer-cell .main-cell-info {
    float: right;
  }

  .main-service-cell .main-cell-head, .main-service-cell .main-cell-info {
    float: left;
  }

  /*.main-customer-cell:before{*/
  /*content: "";*/
  /*position: absolute;*/
  /*right: 90px;*/
  /*top: 45px;*/
  /*border-top: 6px solid transparent;*/
  /*border-bottom: 6px solid transparent;*/
  /*border-left: 10px solid #42a1ec;*/
  /*}*/

  .main-customer-cell:after {
    content: "";
    position: absolute;
    right: 91px;
    top: 30px;
    width: 0;
    height: 0;
    border-width: 5px 0 5px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #C8936B; /*透明 黄 透明 透明 */
  }

  .main-service-cell:before {
    content: "";
    position: absolute;
    left: 90px;
    top: 45px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #ccc;
  }

  .main-service-cell:after {
    content: "";
    position: absolute;
    left: 91px;
    top: 45px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #fff;
  }

  .main-cell-head {
    width: 70px;
    height: 70px;
    /*display: inline-block;*/
    /*vertical-align: top;*/
    margin-top: 15px;
  }

  .main-cell-info {
    max-width: 800px;
    /*height: 300px;*/
    background: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    position: relative;
    margin-left: 30px;
    margin-right: 30px;
  }

  .main-cell-info > p.content {
    margin-top: 20px;
    color: #333;
    font-family: "PingFangSC-Regular";
    line-height: 36px;
    font-size: 18px;
    word-break: break-all;
  }

  .main-cell-info span.service-name, .main-cell-info span.time {
    font-family: "PingFangSC-Regular";
    color: #666;
    font-size: 14px;
    line-height: 1em;
  }

  .main-cell-info span.time {
    margin-left: 10px;
  }

  /*main-customer-cell*/

  .main-customer-cell .main-cell-info {
    background-color: #C8936B
  }

  .main-customer-cell .main-cell-info > p.content {
    margin-top: 0;
    color: #fff;
  }

  .main-customer-cell .main-cell-head {
    margin-top: 0px;
  }

  .input {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .input-nav {
    height: 50px;
    background-color: #f1f1f1;
    position: relative;
    padding: 0 20px;
  }

  .input-nav img {
    width: 22px;
    vertical-align: middle;
    margin-top: 14px;
    margin-right: 20px
  }

  .input-txt {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    height: 160px;
    resize: none;
    font-family: "PingFangSC-Regular";
  }

  .input-txt img {
    width: 30px;
  }

  .send {
    width: 100px;
    border-radius: 3px;
    border: 1px solid #C8936B;
    font-size: 12px;
    padding: 10px 0;
    text-align: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: transparent;
    cursor: pointer;
    color: #C8936B;
    outline: none;
  }

  @media (max-width: 768px) {
    .container {
      display: none;
    }

    .container320 {
      display: block;
      /*overflow-x: hidden;*/
      /*overflow-y: auto;*/
    }

    .nav320{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;
      background-color: rgba(0,0,0, .9);
      z-index: 100;
      text-align: center;
      line-height: 50px;
    }

    .nav320-title{
      color: #fff;
      font-family: 16px;
    }

    .banner320 {
      position: relative;
      padding-top: 46.6667%;
    }

    .banner320 .banner320-swiper-img{
      width: 100%
    }

    .banner320 img {
      width: 100%;
      vertical-align: middle;
      position: absolute;
      left: 0;
      top: 0
    }

    main.main320{
      height: calc(100vh - 50px);
    }

    .welcome{
      text-align: center;
      margin-top: 70px;
    }

    .welcome span{
      display: inline-block;
      padding: 5px 10px;
      border-radius: 100px;
      background-color: #cfcfcf;
      font-size: 12px;
      color: #fff;
    }

    .connect-btn320 {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      height: 40px;
      width: calc(100% - 34px);
      background-color: #C8936B;
      bottom: 30px;
      border-radius: 3px;
      text-align: center;
      /*margin: 30px auto*/
      display: none;
    }

    .connect-btn320 span {
      color: #fff;
      font-size: 14px;
      font-family: "PingFangSC-Regular";
      line-height: 40px;
    }

    .input320 {
      position: fixed;
      width: 100%;
      bottom: -125px;
      left: 0;
      transition: all 300ms ease;
    }

    #editor320 img {
      width: 24px;
      height: 24px
    }

    .operation {
      height: 50px;
      background-color: #f3f3f3;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .operation img:first-child {
      margin-right: 10px;
    }

    .operation > img {
      width: 35px;
      height: 35px;
    }

    .operation > #editor320 {
      height: 30px;
      flex: 1;
      margin: 0 10px;
      background-color: #fff;
      border-radius: 20px;
      outline: none;
      border: none;
      padding: 0 15px;
      line-height: 30px;
      font-size: 12px;
      /*overflow: hidden;*/
    }

    .popup {
      background-color: #f3f3f3;
      height: 125px;
    }

    .popup-emoji {
      display: flex;
      /*justify-content: space-between;*/
      padding: 0 10px;
      flex-wrap: wrap;
      height: 114px;
      overflow-y: auto;
      margin-bottom: 11px;
      background-color: #f3f3f3;
    }

    .popup-emoji > span {
      display: flex;
      width: 11.11%;
      justify-content: center;
      margin-top: 5px;
    }

    .popup-emoji > span img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      /*padding: 0 10px*/
    }

    .popup-photo {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }

    .popup-photo .popup-photo-cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-info {
      margin-top: 10px;
      font-family: PingFangSC-Regular;
      color: #333;
      font-size: 12px;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-img {
      display: flex;
      width: 60px;
      height: 60px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 2px;
    }

    .popup-photo .popup-photo-cell > span.popup-photo-img img {
      width: 20px;
      height: 20px;
    }

    .main320 {
      padding: 0 10px;
    }

    .chat-end-info {
      text-align: center;
      color: #666;
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      margin-top: 50px;
      font-weight: 600;
    }

    .main320 .store-info {
      font-family: "PingFangSC-Regular";
      font-size: 12px;
      color: #666;
      text-align: center;
      margin: 30px 0;
    }

    .main-cell320 {
      display: flex;
      margin: 30px 0;
      position: relative;
    }

    .main-cell320 > img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      margin-top: 10px;
      margin-left: 0;
    }

    .main-cell-info {
      max-width: 250px;
      border: 1px solid #ccc;
      margin: 0;
      padding: 10px;
    }

    .main-cell-info > p.name {
      color: #999;
      font-family: PingFangSC-Regular;
      font-size: 12px;
    }

    .main-cell-info > p.content {
      margin-top: 0px;
      color: #333;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
    }

    .main-cell-info > p.content img:not(.upload-img) {
      width: 24px;
    }

    .main-cell-info > p.content img.upload-img {
      width: 100%;
    }

    .main-customer-cell320 {
      justify-content: flex-end;
      border: none;
    }

    .main-customer-cell320 .main-cell-info {
      margin-right: 10px;
      background-color: #C8936B;
    }

    .main-customer-cell320 .main-cell-info > p.content {
      color: #fff;
      margin-top: 0px;
      font-weight: 400;
    }

    .main-customer-cell320 > img {
      margin: 0;
      margin-left: 10px;
    }

    .main-service-cell320:before {
      content: "";
      position: absolute;
      left: 50px;
      top: 25px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 10px solid #ccc;
    }

    .main-service-cell320:after {
      content: "";
      position: absolute;
      left: 52px;
      top: 25px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 10px solid #fff;
    }

    .main-customer-cell320:after {
      content: "";
      position: absolute;
      right: 51px;
      top: 15px;
      width: 0;
      height: 0;
      border-width: 5px 0 5px 10px;
      border-style: solid;
      border-color: transparent transparent transparent #C8936B; /*透明 黄 透明 透明 */
    }

    .send320 {
      width: 60px;
      height: 30px;
      border: 1px solid #C8936B;
      outline: none;
      background-color: #C8936B;
      border-radius: 3px;
      color: #fff;
    }

  }
</style>
