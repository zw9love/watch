<template>
  <!--底部导航-->
  <footer class="bottom-container">
    <div class="bottom-navbar">
      <ul>
        <li v-for="(item, key) in navigationList" :key="key">
          <nuxt-link :to="item.href" @click.native.stop>{{item.name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="bottom-link">
      <div class="bottom-link-container">
        <div class="bottom-link-top">
          <ul>
            <li>友情链接：</li>
            <li v-for="(item, key) in friendList" :key="key">
              <a :href="item.Url" @click.native.stop target="_blank">{{item.Name}}</a>
            </li>
          </ul>
        </div>
        <div class="bottom-link-middle">
          <p>opyright 2016-2018 西亨（www.xiheng.com) All Rights Reserved. 闽公网安备 35020302001030号</p>
        </div>
        <div class="bottom-link-bottom">
          <!--<img v-lazy="require('../assets/img/home_footer_images1@2x.png')" alt="" />-->
          <!--<img v-lazy="require('../assets/img/home_footer_images2@2x.png')" alt="" />-->
          <!--<img v-lazy="require('../assets/img/home_footer_images3@2x.png')" alt="" />-->
          <!--<img v-lazy="require('../assets/img/home_footer_images4@2x.png')" alt="" />-->
          <x-img :src="require('../assets/img/home_footer_images1@2x.png')"/>
          <x-img :src="require('../assets/img/home_footer_images2@2x.png')"/>
          <x-img :src="require('../assets/img/home_footer_images3@2x.png')"/>
          <x-img :src="require('../assets/img/home_footer_images4@2x.png')"/>
        </div>
      </div>
    </div>
    <div class="bottom-talk">
      <ul>
        <li class="bottom-talk-txt">
          <input type="text" maxlength="11" @keyup.enter="commitInfo" placeholder="请输入您的电话号码，提交后服务中心将会回电"
                 v-model="phoneNumber">
        </li>
        <li class="bottom-talk-btn">
          <!--<img src="../assets/img/home_footer_button@2x.png" alt="" />-->
          <span @click.stop.prevent="commitInfo">提交</span>
        </li>
        <li class="bottom-talk-btn">
          <!--<img src="../assets/img/home_footer_button@2x.png" alt="" />-->
          <!--<nuxt-link to="/customerservice" @click.native>在线咨询</nuxt-link>-->
          <span @click="goService">在线咨询</span>
        </li>
        <li>
          <!--<img v-lazy="require('../assets/img/home_footer_icon_contacts@2x.png')" alt="" />-->
          <x-img :src="require('../assets/img/home_footer_icon_contacts@2x.png')"/>
        </li>
        <li class="bottom-talk-call">
          <a href="tel:400-136-8800">服务热线：400-136-8800</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    created(){
      this.$axios('/api/FriendshipLink', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }).then(res => {
        //console.log(res.data)
        this.friendList = res.data
      })
    },
    mounted(){
      // alert(123)
    },
    // props: {
    //   friendList: {
    //     type: Array,
    //     default(){
    //       return []
    //     }
    //   }
    // },
    data() {
      return {
        navigationList: [
          {name: '网站首页', href: '/'},
          {name: '品牌门店', href: '/brand'},
          {name: '维修案例', href: '/case'},
          {name: '预约到店', href: '/servicelist'},
          {name: '维修进度', href: '/process'},
        ],
        modalActive: false,
        successActive: false,
        phoneNumber: '',
        friendList: []
      }
    },
    methods: {
      goService() {
        window.open('/customerservice')
      },
      commitInfo() {
        let checkFlag = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(this.phoneNumber.trim())
        let modalInfo = checkFlag ? '您已成功提交！请保持电话畅通' : '对不起！您的手机号码格式有误'
        this.$store.dispatch({type: 'setModalInfo', val: modalInfo})
        this.$store.dispatch({type: 'setSuccessActive', val: checkFlag})
        this.$store.dispatch({type: 'setModalActive', val: true})
        // this.$store.dispatch({type: 'setModalInfo', val: modalInfo})
        // this.$store.dispatch({type: 'setSuccessActive', val: checkFlag})
        // this.$store.dispatch({type: 'setModalActive', val: true})
        // let src = require('../assets/img/modal-icon-yes@2x.png')
        // this.$alert(`
        //      <div>
        //        <img src="${src}" style="width: 50px;">
        //        <p style="margin-top: 30px">您已成功提交！请保持电话畅通</p>
        //        <p style="margin-top: 20px">5s</p>
        //      </div>
        //   `, '', {
        //   dangerouslyUseHTMLString: true,
        //   showConfirmButton: false,
        //   center: true,
        //   lockScroll: false
        // }).then(() => {
        //   setInterval(o => {
        //     this.n--
        //   }, 1000)
        // });
      },
      // close(){
      //   this.$store.dispatch({type: 'setModalActive', val: false})
      // }
    }
  }
</script>

<style scoped>
  /*底部导航*/
  .bottom-container {
    margin-top: 80px;
  }

  .bottom-navbar {
    background-color: #333;
  }

  .bottom-navbar ul {
    max-width: 1280px;
    text-align: center;
    margin: 0 auto
  }

  .bottom-navbar ul li {

    height: 80px;
    line-height: 80px;
    display: inline-block;
    margin-right: 50px;
    cursor: pointer;
  }

  .bottom-navbar ul li a {
    color: #fff;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
  }

  .bottom-link {
    background-color: #151516;
    padding-bottom: 30px;
  }

  .bottom-link-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .bottom-link-top {

  }

  .bottom-link-top ul {
    text-align: center;
    padding: 30px 0;
  }

  .bottom-link-top ul li {
    margin-right: 30px;
    display: inline-block;
    color: #999999;
    font-family: "PingFangSC-Regular";
    font-size: 18px;
  }

  .bottom-link-top ul li a {
    color: #999999;
    font-family: "PingFangSC-Regular";
    font-size: 18px;
  }

  .bottom-link-top ul li:first-child {
    margin: 0;
  }

  .bottom-link-middle {
    text-align: center;
  }

  .bottom-link-middle p {
    color: #999999;
    font-family: "PingFangSC-Regular";
    font-size: 16px;
  }

  .bottom-link-bottom {
    text-align: center;
    margin-top: 30px;
  }

  .bottom-link-bottom img {
    display: inline-block;
    margin-right: 20px;
    width: auto;
  }

  .bottom-talk {
    background-color: #000;
    padding: 42px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
  }

  .bottom-talk ul {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    white-space: nowrap;
  }

  .bottom-talk ul li {
    display: inline-block;
    margin-right: 20px;
    vertical-align: middle;
  }

  .bottom-talk-txt {
    width: 500px;
    height: 50px;
    padding: 10px;
    background-color: #fff;
  }

  .bottom-talk-txt input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: "PingFangSC-Regular";
    color: #333;
  }

  .bottom-talk-btn {
    position: relative;
    cursor: pointer;
  }

  .bottom-talk-btn span, .bottom-talk-btn a {
    /*position: absolute;*/
    display: inline-block;
    width: 160px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    font-family: "PingFangSC-Regular";
    font-weight: 600;
    border-radius: 10px;
    background-color: #C8936B;
  }

  .bottom-talk-call p, .bottom-talk-call a {
    color: #BF9571;
    font-size: 24px;
    font-family: "PingFangSC-Medium";
  }

  @media (max-width: 768px) {
    .bottom-container {
      display: none;
    }
  }
</style>
