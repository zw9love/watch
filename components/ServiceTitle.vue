<template>
  <div class="title-container" :class="{'bg-active': bgActive}" :style="containerStyle">
      <p class="title-info" :class="infoClass">{{info.toUpperCase()}}</p>
      <strong class="title-name" :class="nameClass">{{name}}</strong>
      <div class="line-container">
        <span class="line-wrapper"></span>
      </div>
      <p :class="contentClass">
        <slot name="content">
          <span class="title-content">{{content}}</span>
        </slot>
      </p>
  </div>
</template>

<script>
  export default {
    name: "ServiceTitle",
    props: {
      info: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      containerStyle: {
        type: Object,
        default: o => {
          return {}
        }
      },
      infoClass: {
        type: String,
        default: ''
      },
      nameClass: {
        type: String,
        default: ''
      },
      contentClass: {
        type: String,
        default: ''
      },
      bgActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="stylus">

  .title-container{
    text-align: center;
    margin-top: 70px;
  }

  .title-info {
    font-family: "PingFangSC-Medium";
    font-weight: 400;
    font-size: 24px;
    color: rgba(51, 51, 51, .2);
  }

  .title-name {
    font-family: "FZLTZHK--GBK1-0";
    font-size: 30px;
    color: #333333
  }

  .line-container {
    text-align: center;
    margin: 10px 0 20px 0;
  }

  .line-wrapper {
    width: 80px;
    height: 6px;
    background-color: #C8936B;
    display: inline-block;
  }

  .title-content {
    /*font-family: "FZLTZHK--GBK1-0";*/
    font-size: 18px;
    color: #BF9571;
    font-weight: 400;
  }

  .bg-active .title-info{
    color: rgba(255, 255, 255 .2);
  }

  .bg-active .title-name{
    color: #fff;
  }

  @media (max-width:768px){
    .title-info, .line-container{
      display: none;
    }

    .title-content{
      font-size: 10px;
    }

    .title-name{
      font-size: 19px;
    }

    .title-container{
      margin-top: 30px
    }
  }

</style>
