<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="4"/>

      <!--banner-->
      <div class="banner">
        <img :src="require('../assets/img/demand_banner@2x.jpg')" alt="" />
      </div>

      <!--process-->
      <main class="main">
        <div class="main-cell">
          <span class="field">手机号</span>
          <span class="input">
            <el-input v-model="form.phone" maxlength="11" placeholder="请输入您的真实手机号，便于查询维修进度" clearable></el-input>
          </span>
        </div>
        <div class="main-cell">
          <span class="field">验证码</span>
          <span class="input" >
            <el-input v-model="form.verification" placeholder="请输入验证码" maxlength="6"  clearable  style="width: 452px;"></el-input>
            <!--<span class="verification-btn">获取验证码</span>-->
            <Verification :verification-style="{width: '150px'}" :form="form"/>
          </span>
        </div>
        <span class="search-process-btn" @click="checkProcess">查询进度</span>
      </main>

      <!--Footer-->
      <Footer/>
    </div>

    <div class="container320">
      <Tabbar />
      <HeaderMobile title="维修进度"/>
      <div class="banner320">
        <img :src="require('../assets/img/process.jpg')" alt="" />
      </div>
      <div class="main320">
        <div class="main-cell320">
          <span class="field320">手机号</span>
          <span class="input320">
              <x-input v-model="form.phone" name="mobile" :max="11" placeholder="请输入您的手机号" keyboard="number" is-type="china-mobile"></x-input>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">验证码</span>
          <span class="input320">
              <x-input v-model="form.verification" name="mobile" :max="6" placeholder="请输入验证码" keyboard="number" style="width:calc(100% - 100px)"></x-input>
            </span>
          <VerificationMobile :form="form"/>
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
  import Tabbar from '../components/Tabbar'
  import Verification from '../components/Verification'
  import VerificationMobile from '../components/VerificationMobile'

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
      HeaderMobile,
      Tabbar,
      Verification,
      VerificationMobile
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
        let {phone, verification} = this.form
        if(!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(phone.trim()))){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入正确的手机号码！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if(!verification.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入正确的验证码！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }


        let url = `/api/AptList?Mobile=${phone}&Code=${verification}`
        this.$axios(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            //console.log(res)
            let {code, msg, data} = res.data
            switch (code) {
              case 0:
                this.$store.dispatch({type: 'setModalInfo', val: msg})
                this.$store.dispatch({type: 'setSuccessActive', val: false})
                this.$store.dispatch({type: 'setModalActive', val: true})
                break;
              case 1:
                if(data.length === 0){
                  this.$store.dispatch({type: 'setModalInfo', val: '暂无维修订单！'})
                  this.$store.dispatch({type: 'setSuccessActive', val: false})
                  return this.$store.dispatch({type: 'setModalActive', val: true})
                }
                this.$store.dispatch('login', {tel: phone, axios: this.$axios, self: this, jumpPath: '/orderlist/all/1?tel=' + phone})
                break

            }
            // this.$store.dispatch('login', {username: 'demo', password: 'demo', axios: this.$axios, self: this})
          })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '查询进度失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: false})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })

      },
      checkProcessMobile(){
        console.log(this.form)
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
      padding-bottom: 14.285714%;
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
      font-size: 14px;
    }

    .input320{
      flex: 1;
      border: 1px solid #dadada;
      border-radius: 5px;
    }

    .commit-order-btn{
      height: 40px;
      line-height: 40px;
      display: inline-block;
      width: 100%;
      background-color: #c8936b;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
      text-align: center;
    }

  }

</style>
