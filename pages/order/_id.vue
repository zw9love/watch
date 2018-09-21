<template>
  <div>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="3"/>

      <!--banner-->
      <div class="banner">
        <img :src="require('../../assets/img/booking_banner@2x.png')" alt="" />
      </div>

      <!--main-->
      <main class="main">
        <div class="main-cell">
          <span class="field">手表品牌</span>
          <span class="input">
          <el-input v-model="form.brand" placeholder="请输入内容" clearable></el-input>
        </span>
        </div>
        <div class="main-cell">
          <span class="field">手表故障</span>
          <span class="input">
          <el-select v-model="form.faultType" placeholder="请选择" clearable>
            <el-option
              v-for="item in options"
              :key="item.Id"
              :label="item.BaseName"
              :value="item.Id">
            </el-option>
          </el-select>
        </span>
        </div>
        <div class="main-cell">
          <span class="field">姓名</span>
          <span class="input">
          <el-input v-model="form.name" placeholder="请输入您的姓名" clearable></el-input>
        </span>
        </div>
        <div class="main-cell">
          <span class="field">手机号</span>
          <span class="input">
          <el-input v-model="form.phone" maxlength="11" placeholder="请输入您的真实手机号，便于查询维修进度" clearable></el-input>
        </span>
        </div>
        <div class="main-cell">
          <span class="field">验证码</span>
          <span class="input">
            <el-input v-model="form.verification" placeholder="请输入验证码" maxlength="6" clearable style="width: 502px;"></el-input>
            <!--<span class="verification-btn">获取验证码</span>-->
            <Verification :verification-style="{width: '150px'}" :form="form"/>
          </span>
        </div>
        <div class="main-cell">
          <span class="field">预约时间</span>
          <span class="input">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="请选择预约日期" v-model="form.date1" style="width: 100%;" :picker-options="datePickerOption"></el-date-picker>
            </el-col>
            <span class="split">-</span>
            <el-col :span="11">
              <!--<el-time-picker type="fixed-time" placeholder="请选择预约时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
              <!--<el-time-select-->
                <!--v-model="form.date2"-->
                <!--:picker-options="{-->
                  <!--start: '10:00',-->
                  <!--step: '01:00',-->
                  <!--end: '20:00'-->
                <!--}"-->
                <!--style="width: 100%;"-->
                <!--placeholder="请选择预约时间">-->
              <!--</el-time-select>-->
               <el-select v-model="form.date2" placeholder="请选择预约时间" style="width: 100%;">
                  <el-option :label="item.label" :value="item.label" v-for="(item, key) in reservationTimeList" :key="key"></el-option>
               </el-select>
            </el-col>
          </span>
        </div>
        <div class="main-cell">
          <span class="field"></span>
          <!--<nuxt-link class="commit" to="/successorder" @click.native="submitOrder">提交预约</nuxt-link>-->
          <span class="commit"  @click="submitOrder">提交预约</span>
        </div>
      </main>

      <!--Footer-->
      <Footer/>
    </div>
    <div class="container320">

      <!--header-->
      <HeaderMobile title="预约到店"></HeaderMobile>

      <div class="banner320">
        <img :src="require('../../assets/img/order_banner320.jpg')" alt="" />
      </div>

      <!--main-->
      <main class="main320">
        <div class="main-cell320">
          <span class="field320">手表品牌</span>
          <span class="input320">
              <x-input v-model="form.brand" name="mobile" placeholder="请输入您的手表品牌" keyboard="text" ></x-input>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">手表故障</span>
          <span class="input320">
              <popup-radio title="111" :options="optionsMobile" v-model="form.faultType" placeholder="请选择手表故障类型">
                <p slot="popup-header" class="vux-1px-b demo3-slot">请选择手表故障类型</p>
              </popup-radio>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">姓名</span>
          <span class="input320">
              <x-input v-model="form.name" name="mobile" placeholder="请输入您的姓名" keyboard="text" ></x-input>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">手机号</span>
          <span class="input320">
              <x-input v-model="form.phone" name="mobile" :max="11" placeholder="请输入您的手机号" keyboard="number" is-type="china-mobile"></x-input>
            </span>
        </div>
        <div class="main-cell320">
          <span class="field320">验证码</span>
          <span class="input320">
              <x-input v-model="form.verification" name="mobile" :max="6" style="width:calc(100% - 100px)" placeholder="请输入验证码" keyboard="number"></x-input>
            </span>
          <!--<span class="phone-verification">获取验证码</span>-->
          <VerificationMobile :form="form"/>
        </div>
        <div class="main-cell320">
          <span class="field320">预约时间</span>
          <span class="input320">
              <datetime :min-year="2018" :start-date="startDate" :title="datetime" v-model="form.date" format="YYYY-MM-DD HH" :hour-list="hourList"  @on-change="dateTimeChange" @on-show="dateTimeShow" @on-confirm="dateTimeConfirm"></datetime>
            </span>
        </div>
        <div class="main-cell320" >
          <span class="commit-order-btn" @click="submitOrderMobile">
            提交预约
          <!--<nuxt-link class="commit-order-btn" to="/successorder" @click.native="submitOrder">提交预约</nuxt-link>-->
          </span>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  import HeaderMobile from '../../components/HeaderMobile'
  import Verification from '../../components/Verification'
  import VerificationMobile from '../../components/VerificationMobile'
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
      HeaderMobile,
      Verification,
      VerificationMobile
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
          faultType: '',
          date1:  '',
          date2:  '',
          date: ''
          // brand: '',
          // name: 'zengwei',
          // verification: '2050',
          // phone: '18514075699',
          // faultType: '',
          // date1:  1538064000000,
          // date2:  '13:00 - 14:00',
          // date: ''
        },
        options: [
          {value: '选项1', label: '时计故障'},
          {value: '选项2', label: '零件损坏'},
          {value: '选项3', label: '清洗保养'},
          {value: '选项4', label: '真假鉴定'},
          {value: '选项5', label: '订制表带'},
          {value: '选项6', label: '其他服务'},
        ],
        optionsMobile: ['时计故障', '零件损坏', '清洗保养', '真假鉴定', '订制表带', '其他服务'],
        value: '',
        optionMobile: '',
        reservationTimeList: [
          {label: '10:00 - 11:00', value: '10:00 - 11:00'},
          {label: '11:00 - 12:00', value: '11:00 - 12:00'},
          {label: '12:00 - 13:00', value: '12:00 - 13:00'},
          {label: '13:00 - 14:00', value: '13:00 - 14:00'},
          {label: '14:00 - 15:00', value: '14:00 - 15:00'},
          {label: '15:00 - 16:00', value: '15:00 - 16:00'},
          {label: '16:00 - 17:00', value: '16:00 - 17:00'},
          {label: '17:00 - 18:00', value: '17:00 - 18:00'},
          {label: '18:00 - 19:00', value: '18:00 - 19:00'},
          {label: '19:00 - 20:00', value: '19:00 - 20:00'},
        ],
        datePickerOption: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          },
        },
        startDate: '',
        hourList: [
          '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00',
          '15:00-16:00', '16:00-17:00', '17:00-18:00', '18:00-19:00', '19:00-20:00'
        ]
      };
    },
    async asyncData({app}) {
      // 故障类型列表
      let faultOption = {
        url: '/api/AptList/GetFaultList',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let {data} = await app.$axios(faultOption)
      let arr = []
      let obj = {}
      data.forEach((o, i) => {
        arr.push(o.BaseName)
        obj[o.BaseName] = o.Id
      })

      return { options: data, optionsMobile: arr, faultObject: obj}
    },
    created(){
      let date = new Date()
      this.startDate = date.getFullYear() + '-' + this.getDouble(date.getMonth() + 1) + '-' + date.getDate()
    },
    methods: {
      getDouble(val){
        val = val + ''
        if(val.length > 1){
          return val
        }else{
          return '0' + val
        }
      },
      dateTimeChange(val){
        // // vux官方不提供属性和方法，强行操作dom
        // console.log(val)
        // let list = document.querySelectorAll('.dp-item')
        // let dom = list[list.length - 1]
        // let innerHTML = dom.querySelector('.scroller-item-selected').innerHTML
        // val = val.replace('NaN', innerHTML)
        // this.datetime = val
      },
      dateTimeShow(){
        // vux官方不提供属性和方法，强行操作dom
        let list = document.querySelectorAll('.dp-item')
        let dom = list[list.length - 1]
        // console.log(dom)
        dom.style.flex = 2
      },
      dateTimeConfirm(val){
        // vux官方不提供属性和方法，强行操作dom
        let list = document.querySelectorAll('.dp-item')
        let dom = list[list.length - 1]
        let innerHTML = dom.querySelector('.scroller-item-selected').innerHTML
        val = val.replace('NaN', innerHTML)
        this.datetime = val
        this.form.date = val
      },
      submitOrder(){
        let {date1, date2, brand, name, faultType, phone, verification} = this.form

        if(!brand.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入手表品牌！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if(!faultType){
          this.$store.dispatch({type: 'setModalInfo', val: '请选择手表故障类型！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        if(!name.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入您的姓名！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

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

        let tempDate = ''

        if(!date1){
          this.$store.dispatch({type: 'setModalInfo', val: '请选择预约日期！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }
        else{
          let date = new Date(date1)
          tempDate = date.getFullYear() + '-' + this.getDouble(date.getMonth() + 1) + '-' + this.getDouble(date.getDate())
        }

        if(!date2){
          this.$store.dispatch({type: 'setModalInfo', val: '请选择预约时间！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        // console.log(this.form)

        let storeId = this.$route.params.id
        let url = `/api/AptList/SaveAppointment?SiteId=${this.$store.state.siteId}&StoresId=${storeId}&Remakr=${brand}&TroubleNo=${faultType}&UserName=${name}&Mobile=${phone}&Code=${verification}&AptDate=${tempDate}&AptTime=${date2}`
        this.$axios(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            // this.$store.dispatch({type: 'setModalInfo', val: '预约成功！'})
            // this.$store.dispatch({type: 'setSuccessActive', val: true})
            // this.$store.dispatch({type: 'setModalActive', val: true})
            // console.log(res.data)
            let {code, id, msg} = res.data
            switch (code) {
              case 0:
                this.$store.dispatch({type: 'setModalInfo', val: msg})
                this.$store.dispatch({type: 'setSuccessActive', val: false})
                this.$store.dispatch({type: 'setModalActive', val: true})
                break;
              case 1:
                this.$store.dispatch('login', {username: 'demo', password: 'demo', axios: this.$axios, self: this, jumpPath: '/successorder/' + id})
                break

            }
          })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '预约失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: false})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })

      },
      submitOrderMobile(){
        let {date, brand, name, faultType, phone, verification} = this.form
        if(!brand.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入手表品牌！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }


        let fault = ''
        if(!faultType.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请选择手表故障类型！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }else{
          fault = this.faultObject[faultType]
        }

        if(!name.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入您的姓名！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

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

        if(!date.trim()){
          this.$store.dispatch({type: 'setModalInfo', val: '请选择预约时间！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        // console.log(this.form)


        let dateArr = date.split(' ')
        let date1 = dateArr[0]
        let date2 = dateArr[1]
        let storeId = this.$route.params.id
        let url = `/api/AptList/SaveAppointment?SiteId=${this.$store.state.siteId}&StoresId=${storeId}&Remakr=${brand}&TroubleNo=${fault}&UserName=${name}&Mobile=${phone}&Code=${verification}&AptDate=${date1}&AptTime=${date2}`
        // alert(url)
        this.$axios(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            let {code, id, msg} = res.data
            switch (code) {
              case 0:
                this.$store.dispatch({type: 'setModalInfo', val: msg})
                this.$store.dispatch({type: 'setSuccessActive', val: false})
                this.$store.dispatch({type: 'setModalActive', val: true})
                break;
              case 1:
                this.$store.dispatch('login', {username: 'demo', password: 'demo', axios: this.$axios, self: this, jumpPath: '/successorder/' + id})
                break

            }
          })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '预约失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: false})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })

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

  .main-cell .commit{
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
    cursor: pointer;
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

    .commit-order-btn{
      height: 40px;
      line-height: 40px;
      display: inline-block;
      width: 100%;
      background-color: #c8936b;
      border-radius: 5px;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }

  }

</style>
