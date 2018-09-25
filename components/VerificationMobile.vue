<template>
  <span class="phone-verification" :class="{'phone-verification-active': verificationActive}"  @click="verificationClick">{{verificationInfo}}</span>
</template>

<script>
  export default {
    name: "VerificationMobile",
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
          .then((res) => {
            let {code, msg} = res.data
            switch (code){
              case 1:
                break;
              case 2:
                this.$store.dispatch({type: 'setModalInfo', val: '验证码发送次数已达到上限！'})
                this.$store.dispatch({type: 'setSuccessActive', val: false})
                return this.$store.dispatch({type: 'setModalActive', val: true})
            }
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
          })
          .catch(error => {
            this.$store.dispatch({type: 'setModalInfo', val: '验证码发送失败！'})
            this.$store.dispatch({type: 'setSuccessActive', val: true})
            this.$store.dispatch({type: 'setModalActive', val: true})
          })

      },
    }
  }
</script>

<style scoped>
  @media (max-width:768px){
    .phone-verification{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100px;
      line-height: 42px;
      background-color: #333;
      font-size: 12px;
      color: #fff;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      text-align: center;

    }

    .phone-verification-active{
      background-color: #1aac19;
    }
  }

</style>
