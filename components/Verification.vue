<template>
  <div class="verification-container" :class="{'verification-active-container': verificationActive}"
       :style="verificationStyle" @click="verificationClick">
    <span>{{verificationInfo}}</span>
  </div>
</template>

<script>
  export default {
    name: "Verification",
    props: {
      verificationStyle: {
        type:Object,
        default(){
          return {}
        }
      },
      form: {
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        verificationActive: false,
        countDownTimer: null,
        verificationInfo: '获取验证码'
      }
    },
    methods: {
      verificationClick() {
        if(this.verificationActive) return
        let {phone} = this.form
        if(!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(phone.trim()))){
          this.$store.dispatch({type: 'setModalInfo', val: '请输入正确的手机号码！'})
          this.$store.dispatch({type: 'setSuccessActive', val: false})
          this.$store.dispatch({type: 'setModalActive', val: true})
          return;
        }

        let url = `/api/AptList/GetVCodeBook?mobile=${phone}`
        this.$axios(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '验证码发送失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: true})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })

        this.verificationActive = true
        let count = 30
        this.verificationInfo = count-- + 'S'
        this.countDownTimer = setInterval(o => {
          this.verificationInfo = count-- + 'S'
          if(count < 0){
            // this.count = 30
            this.verificationActive = false
            this.verificationInfo = '获取验证码'
            clearInterval(this.countDownTimer)
          }
        }, 1000)

        // if(!this.verificationActive){
        //
        // }
      },
    }
  }
</script>

<style scoped>
  .verification-container {
    position: absolute;
    right: 0;
    top: 0;
    width: 140px;
    height: 50px;
    background-color: #333;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }

  .verification-active-container {
    background-color: #00A629;
    color: #fff
  }

  .verification-container span {
    color: #fff;
    font-size: 18px;
    font-family: "PingFangSC-Regular";
  }

  @media (max-width: 768px) {
    .verification-container {
      display: none;
    }
  }
</style>
