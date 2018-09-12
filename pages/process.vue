<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="4"/>

      <!--banner-->
      <div class="banner">
        <img :src="require('../assets/img/demand_banner@2x.png')" alt="" />
      </div>

      <!--process-->
      <main class="main">
        <div class="main-cell">
          <span class="field">手机号</span>
          <span class="input">
            <el-input v-model="form.phone" placeholder="请输入您的真实手机号，便于查询维修进度" ></el-input>
          </span>
        </div>
        <div class="main-cell">
          <span class="field">验证码</span>
          <span class="input">
          <el-input v-model="form.verification" placeholder="请输入验证码"></el-input>
          <span class="verification-btn">获取验证码</span>
        </span>
        </div>
        <span class="search-process-btn" @click="checkProcess">查询进度</span>
      </main>

      <!--Footer-->
      <Footer/>
    </div>

    <div class="container320">
      <HeaderMobile title="维修进度"/>
      <div class="banner320">
        <img :src="require('../assets/img/process.jpg')" alt="" />
      </div>
      <div class="main320">
        <div class="main-cell320">
          <span class="field320">手机号</span>
          <span class="input320">
              <x-input title="" name="mobile" placeholder="请输入您的手机号" keyboard="number" is-type="china-mobile"></x-input>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">验证码</span>
          <span class="input320">
              <x-input title="" name="mobile" placeholder="请输入验证码" keyboard="number"></x-input>
            </span>
          <span class="phone-verification">获取验证码</span>
        </div>
        <div class="main-cell320" @click="checkProcess">
          <!--<nuxt-link to="/orderlist/all/1" class="commit-order-btn">查询进度</nuxt-link>-->
          <span class="commit-order-btn" >查询进度</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import HeaderMobile from '../components/HeaderMobile'
  import Footer from '../components/Footer'

  export default {
    head () {
      return {
        title: '西亨名表维修中心-维修进度查询',
        meta: [
          { name: 'keywords', content: '手表维修服务,手表维修服务点' },
          { name: 'description', content: '西亨名表维修中心,坚持以信致远,以精致臻的宗旨,诚心服务每一位客人,专业提供百达翡丽、江诗丹顿、积家、欧米茄、劳力士、芝柏、宝珀等世界名表在线预约维修进度查询,保证您的维修安全和品质' },
        ]
      }
    },
    name: "process",
    components: {
      Header,
      Footer,
      HeaderMobile
    },
    data() {
      return {
        form: {
          phone: '',
          verification: '',
        }
      }
    },
    methods: {
      checkProcess(){
        this.$store.dispatch('login', {username: 'demo', password: 'demo', axios: this.$axios, self: this})
      }
    }
  }
</script>

<style scoped>
  .container320{
    display: none;
  }

  .banner{
    position: relative;
    padding-top: 26.04%;
  }

  .banner img{
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
    position: absolute;
    left: 0;
    top: 0
  }

  .main {
    max-width: 1280px;
    margin: 100px auto 0 auto;
    text-align: center;
  }

  .main-cell {
    text-align: center;
    margin-top: 30px;
  }

  .main-cell > span {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  .main-cell > span.field {
    width: 85px;
    height: 50px;
    line-height: 50px;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    margin-right: 25px;
    text-align: left;
  }

  .main-cell > span.input {
    width: 600px;
    position: relative;
  }

  .verification-btn{
    position: absolute;
    right: 0;
    top: 0;
    width: 150px;
    height: 50px;
    background-color: #18AC18;
    color: #fff;
    font-family: "PingFangSC-Regular";
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
  }

  .search-process-btn{
    display: inline-block;
    width: 710px;
    margin: 100px auto 0 auto;
    line-height: 50px;
    height: 50px;
    color: #fff;
    background-color: #C8936B;
    text-align: center;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width:768px){
    .container{display: none}
    .container320{
      display: block;
      margin-top: 45px;
    }
    .banner320{
      position: relative;
      padding-top: 37.7333%;
    }

    .banner320 img{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .main320{
      padding: 0 10px;
      margin-bottom: 20px;
      margin-top: 30px;
    }

    .main-cell320{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      position: relative;
    }

    .field320{
      /*width: 80px;*/
      padding: 0;
      text-align: left;
      font-weight: 500;
      margin-right: 10px;
    }

    .input320{
      flex: 1;
      border: 1px solid #dadada;
      border-radius: 5px;
    }

    .phone-verification{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100px;
      line-height: 40px;
      background-color: #1aac19;
      font-size: 14px;
      color: #fff;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      text-align: center;

    }

    .commit-order-btn{
      height: 40px;
      line-height: 40px;
      display: inline-block;
      width: 100%;
      background-color: #c8936b;
      border-radius: 5px;
      color: #fff;
      font-size: 18px;
      text-align: center;
    }

  }

</style>
