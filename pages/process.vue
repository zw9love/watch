<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="4"/>

    <!--banner-->
    <div class="banner">
      <img src="../assets/img/demand_banner@2x.png" alt="">
    </div>

    <!--process-->
    <main class="main">
      <div class="main-cell">
        <span class="field">手机号</span>
        <span class="input">
          <el-input v-model="form.phone" placeholder="请输入您的真实手机号，便于查询维修进度"></el-input>
        </span>
      </div>
      <div class="main-cell">
        <span class="field">验证码</span>
        <span class="input">
          <el-input v-model="form.verification" placeholder="请输入验证码"></el-input>
          <span class="verification-btn">获取验证码</span>
        </span>
      </div>
      <nuxt-link to="/searchprocess" class="search-process-btn">查询进度</nuxt-link>
    </main>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    name: "process",
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        form: {
          phone: '',
          verification: '',
        }
      }
    }
  }
</script>

<style scoped>
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
    font-size: 26px;
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
    width: 194px;
    height: 50px;
    background-color: #18AC18;
    color: #fff;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
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
    font-size: 24px;
    border-radius: 5px;
  }

</style>
