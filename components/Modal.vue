<template>
  <div class="modal" v-show="modalActive" >
    <div class="modal-shadow"></div>
    <div class="modal-main" v-if="successActive">
    <!--<div class="modal-main">-->
      <img src="../assets/img/modal-icon-close@2x.png" alt="" class="close" @click="close">
      <span class="image">
        <img src="../assets/img/modal-icon-yes@2x.png" alt="">
      </span>
      <!--<p class="info">您已成功提交！请保持电话畅通</p>-->
      <p class="info">{{modalInfo}}</p>
      <p class="time">
        <span class="time">{{num}}s</span>
      </p>
    </div>
    <div class="modal-main" v-else>
      <img src="../assets/img/modal-icon-close@2x.png" alt="" class="close" @click="close">
      <span class="image">
        <img src="../assets/img/modal-icon-no@2x.png" alt="">
      </span>
      <!--<p class="info">对不起！您的手机号码格式有误</p>-->
      <p class="info">{{modalInfo}}</p>
      <p class="time">
        <span class="time">{{num}}s</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    // model: {
    //   prop: 'modalActive',
    //   event: 'modalActiveChange'
    // },
    // props: {
    //   modalActive:{
    //     type: Boolean,
    //     default: false
    //   },
    //   successActive:{
    //     type: Boolean,
    //     default: false
    //   }
    // },
    data(){
      return {
        num: 5,
        timer: null
      }
    },
    watch: {
      modalActive:function(newVal){
        if(newVal){
          this.num = 5
          this.timer = setInterval(o => {
            if(this.num === 0){
              clearInterval(this.timer)
              return this.close()
            }
            this.num--
          }, 1000)
        }
      }
    },
    computed: {
      modalActive: function(){
        return this.$store.state.modalActive
      },
      successActive: function(){
        return this.$store.state.successActive
      },
      modalInfo: function(){
        return this.$store.state.modalInfo
      }
    },
    destroyed(){
      clearInterval(this.timer)
    },
    methods: {
      close(){
        clearInterval(this.timer)
        this.$emit('close', false)
      }
    }
  }
</script>

<style scoped lang="stylus">

  @-webkit-keyframes opacity
    0%{opacity: 0;}
    100%{opacity: 1;}


  @-webkit-keyframes translate
    0%{transform: translate(-50%, -70%);opacity: 0}
    100%{transform: translate(-50%, -50%);opacity: 1}


  .modal
    position fixed
    left: 0;
    top: 0
    width: 100%;
    height: 100%;
    z-index 10002
    .modal-shadow
      width: 100%;
      height: 100%;
      background-color rgba(0,0,0,.7)
      /*opacity: 0*/
      animation:opacity .2s ease;
      transition all .3s ease
    .modal-main
      position: absolute
      left: 50%;
      top: 50%
      transform translate(-50%, -50%)
      background-color rgba(255,255,255, 1)
      text-align center
      padding 40px 100px
      border-radius 6px
      animation:translate .3s ease;
      transition all .3s ease
      /*opacity: 0*/
      min-width 500px
      span.image
        width 50px
        height: 50px
        position: relative
        display: inline-block
        img
          position: absolute
          left: 0
          top: 0
          width: 100%;
          height: 100%
      .info
        margin-top:40px
        white-space nowrap
      p:last-child
        margin-top 30px
        .time
          color: #999
      img.close
        position: absolute
        right: 15px;
        top: 15px;
        cursor: pointer

  @media (max-width:768px){
    .modal .modal-main{
      min-width 300px
      padding: 20px 50px
    }

    .modal .modal-main .info{
      margin-top 20px
      font-size 12px
    }

    .modal .modal-main p:last-child{
      margin-top 20px
      font-size 10px
    }
  }


</style>
