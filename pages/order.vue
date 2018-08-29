<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="3"/>

    <!--banner-->
    <div class="banner">
      <img src="../assets/img/booking_banner@2x.png" alt="">
    </div>

    <!--main-->
    <main class="main">
      <div class="main-cell">
        <span class="field">手表品牌</span>
        <span class="input">
          <el-input v-model="form.name" placeholder="请输入内容"></el-input>
        </span>
      </div>
      <div class="main-cell">
        <span class="field">手表故障</span>
        <span class="input">
          <el-select v-model="form.faultType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
      </div>
      <div class="main-cell">
        <span class="field">姓名</span>
        <span class="input">
          <el-input v-model="form.name" placeholder="请输入您的姓名"></el-input>
        </span>
      </div>
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
      <div class="main-cell">
        <span class="field">预约时间</span>
        <span class="input">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="请选择预约日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <span class="split">-</span>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="请选择预约时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </span>
      </div>
      <div class="main-cell">
        <span class="field"></span>
        <nuxt-link class="commit" to="/successorder" >提交预约</nuxt-link>
      </div>
    </main>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  // import 'element-ui/lib/theme-chalk/index.css';
  export default {
    name: "order",
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        form: {
          brand: '',
          name: '',
          verification: '',
          phone: '',
          time: '',
          faultType: '',
          date1:  '',
          date2:  '',
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    methods: {

    }
  }
</script>

<style scoped>

  .el-select {
    width: 100%;
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
  .main{
    margin-top: 100px;
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
    width: 120px;
    height: 50px;
    line-height: 50px;
    font-family: "PingFangSC-Regular";
    font-size: 26px;
    margin-right: 25px;
    text-align: right;
  }

  .main-cell > span.input {
    width: 650px;
    position: relative;
  }

  .main-cell:last-child{
    margin-top: 60px;
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

  .split{
    display: inline-block;
    width: 8.3333%;
    float: left;
    line-height: 50px;
    text-align: center;
  }

  .commit{
    height: 60px;
    width: 650px;
    background-color: #C8936B;
    line-height: 60px;
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 10px;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
  }
</style>
