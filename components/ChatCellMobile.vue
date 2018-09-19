<template>
  <div>
    <div v-if="entry.type !== 'customer'">
      <p class="store-info">{{entry.time}}</p>
      <div class="main-cell320 main-service-cell320">
        <img src="../assets/img/customer_service_logo.png" alt="">
        <div class="main-cell-info">
          <!--<p class="name">在线客服08号-小张</p>-->
          <p class="content" v-if="entry.infoType === 'image'">
            <img :src="entry.src" preview-nav-enable="false" v-preview="entry.src" class="upload-img"/>
          </p>
          <p class="content" v-else v-html="entry.content">
            <!--{{entry.content}}-->
          </p>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="store-info">{{entry.time}}</p>
      <div class="main-cell320 main-customer-cell320">
        <div class="main-cell-info">
          <p class="content" v-if="entry.infoType === 'image'">
            <img :src="entry.src" preview-nav-enable="false" v-preview="entry.src" class="upload-img"/>
          </p>
          <p class="content" v-else v-html="entry.content">
            <!--{{entry.content}}-->
          </p>
        </div>
        <img src="../assets/img/customer_service_logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatCellMobile",
    props: {
      entry: {
        type: Object,
        default: o => {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .main320 .store-info {
    font-family: "PingFangSC-Regular";
    font-size: 12px;
    color: #666;
    text-align: center;
    margin: 30px 0;
  }

  .main-cell320 {
    display: flex;
    margin: 30px 0;
    position: relative;
  }

  .main-cell320 > img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    margin-top: 10px;
    margin-left: 0;
  }

  .main-cell-info {
    max-width: 250px;
    border: 1px solid #ccc;
    margin: 0;
    padding: 10px;
    box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, .1);
    border-radius: 6px;
  }

  .main-cell-info > p.name {
    color: #999;
    font-family: PingFangSC-Regular;
    font-size: 12px;
  }

  .main-cell-info > p.content {
    margin-top: 0px;
    color: #333;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
  }

  .main-cell-info > p.content img:not(.upload-img) {
    width: 24px;
    vertical-align: middle
  }

  .main-cell-info > p.content img.upload-img {
    width: 100%;
    vertical-align: middle
  }

  .main-customer-cell320 {
    justify-content: flex-end;
    border: none;
  }

  .main-customer-cell320 .main-cell-info {
    margin-right: 10px;
    background-color: #C8936B;
  }

  .main-customer-cell320 .main-cell-info > p.content {
    color: #fff;
    margin-top: 0px;
    font-weight: 400;
    word-break: break-all
  }

  .main-customer-cell320 > img {
    margin: 0;
    margin-left: 10px;
  }

  .main-service-cell320 .main-cell-info{
    background-color: #fff
  }

  .main-service-cell320 .main-cell-info > p.content{
    display: inline-block
  }

  .main-service-cell320:before {
    content: "";
    position: absolute;
    left: 50px;
    top: 25px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #ccc;
  }

  .main-service-cell320:after {
    content: "";
    position: absolute;
    left: 52px;
    top: 25px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #fff;
  }

  .main-customer-cell320:after {
    content: "";
    position: absolute;
    right: 51px;
    top: 15px;
    width: 0;
    height: 0;
    border-width: 5px 0 5px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #C8936B; /*透明 黄 透明 透明 */
  }
</style>
