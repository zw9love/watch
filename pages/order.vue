<template>
  <div>
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
              <!--<el-time-picker type="fixed-time" placeholder="请选择预约时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
              <el-time-select
                v-model="form.date2"
                :picker-options="{
                  start: '08:30',
                  step: '00:30',
                  end: '18:30'
                }"
                style="width: 100%;"
                placeholder="请选择预约时间">
              </el-time-select>
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
    <div class="container320">

      <!--header-->
      <HeaderMobile title="预约到店"></HeaderMobile>

      <div class="banner320">
        <img src="../assets/img/order_banner320.jpg" alt="">
      </div>

      <!--main-->
      <main class="main320">
          <div class="main-cell320">
            <span class="field320">手表品牌</span>
            <span class="input320">
              <x-input title="" name="mobile" placeholder="请输入您的手表品牌" keyboard="text" ></x-input>
            </span>
          </div>
          <div class="main-cell320">
            <span class="field320">手表故障</span>
            <span class="input320">
              <popup-radio title="111" :options="options1" v-model="option1" placeholder="请选择手表故障类型">
                <p slot="popup-header" class="vux-1px-b demo3-slot">Please select</p>
              </popup-radio>
            </span>
          </div>
          <div class="main-cell320">
            <span class="field320">姓名</span>
            <span class="input320">
              <x-input title="" name="mobile" placeholder="请输入您的姓名" keyboard="text" ></x-input>
            </span>
          </div>
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
          <div class="main-cell320">
            <span class="field320">预约时间</span>
            <span class="input320">
              <datetime :title="datetime" v-model="date" format="YYYY-MM-DD HH:mm" :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']" :minute-list="['00', '30']" @on-change="datetimeChange"></datetime>
            </span>
          </div>
          <div class="main-cell320" >
            <!--<span >-->
              <nuxt-link class="commit-order-btn" to="/successorder" >提交预约</nuxt-link>
            <!--</span>-->
          </div>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import HeaderMobile from '../components/HeaderMobile'
  // import 'element-ui/lib/theme-chalk/index.css';
  export default {
    head () {
      return {
        title: '西亨名表维修中心-手表维修预约服务',
        meta: [
          { name: 'keywords', content: '手表维修服务,手表维修服务点' },
          { name: 'description', content: '西亨名表维修中心,坚持以信致远,以精致臻的宗旨,诚心服务每一位客人,专业提供百达翡丽、江诗丹顿、积家、欧米茄、劳力士、芝柏、宝珀等世界名表在线预约维修服务\n' },
        ]
      }
    },
    name: "order",
    components: {
      Header,
      Footer,
      HeaderMobile
    },
    data() {
      return {
        date: '',
        datetime: '请选择预约时间',
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
        value: '',
        option1: '',
        options1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      };
    },
    methods: {
      datetimeChange(val){
        this.datetime = val
      }
    }
  }
</script>

<style scoped>

  .el-select {
    width: 100%;
  }

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
    font-size: 20px;
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

  @media (max-width:768px){
    .container{
      display: none;
    }
    .container320{
      display: block;
      margin-top: 46px;
    }

    .banner320{
      padding-top: 37.3333%;
      position: relative;
    }

    .banner320 img{
      position: absolute;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      left: 0;
      top: 0;
    }

    .main320{
      padding: 0 10px;
      margin-bottom: 20px;
    }

    .main-cell320{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;
      position: relative;
    }

    .field320{
      width: 70px;
      padding: 0 10px 0 0;
      text-align: right;
      font-weight: 500;
      font-size: 14px;
    }

    .input320{
      flex: 1;
      border: 1px solid #dadada;
      border-radius: 5px;
    }

    .demo3-slot {
      text-align: center;
      padding: 8px 0;
      color: #888;
    }

    .phone-verification{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100px;
      line-height: 44px;
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
      text-align: center;
      color: #fff;
      font-size: 16px;
    }

  }

</style>
