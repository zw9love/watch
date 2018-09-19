<template>
  <div>
    <div class="main-cell main-service-cell" v-if="entry.type !== 'customer'">
      <div class="main-cell-head">
        <img src="../assets/img/customer_service_logo.png"/>
        <!--<img src="../assets/img/customer_service_logo.png" />-->
      </div>
      <div class="main-cell-info">
        <p class="title">
          <span class="service-name">{{entry.name || '在线客服08号-小雅'}}</span>
          <span class="time">{{entry.time}}</span>
        </p>
        <p class="content" v-if="entry.infoType === 'image'">
          <img :src="entry.src" preview-nav-enable="false" v-preview="entry.src" class="upload-img"/>
        </p>
        <p class="content" v-else v-html="entry.content">
        </p>
      </div>
    </div>
    <div class="main-cell main-customer-cell" v-else>
      <div class="main-cell-head">
        <img src="../assets/img/customer_service_logo.png"/>
      </div>
      <div class="main-cell-info">
        <p class="title">
          <span class="time" style="margin:0; color: #eee">{{entry.time}}</span>
        </p>
        <p class="content" v-if="entry.infoType === 'image'">
          <img :src="entry.src" preview-nav-enable="false" v-preview="entry.src" class="upload-img"/>
        </p>
        <p class="content" v-else v-html="entry.content">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChatCell",
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
  .main-cell {
    /*max-width: 800px;*/
    overflow: hidden;
    margin: 30px 0;
  }

  .main-service-cell, .main-customer-cell {
    position: relative;
  }

  .main-customer-cell .main-cell-head, .main-customer-cell .main-cell-info {
    float: right;
  }

  .main-service-cell .main-cell-head, .main-service-cell .main-cell-info {
    float: left;
  }

  /*.main-customer-cell:before{*/
  /*content: "";*/
  /*position: absolute;*/
  /*right: 90px;*/
  /*top: 45px;*/
  /*border-top: 6px solid transparent;*/
  /*border-bottom: 6px solid transparent;*/
  /*border-left: 10px solid #42a1ec;*/
  /*}*/

  .main-customer-cell:after {
    content: "";
    position: absolute;
    right: 91px;
    top: 30px;
    width: 0;
    height: 0;
    border-width: 5px 0 5px 10px;
    border-style: solid;
    border-color: transparent transparent transparent #C8936B; /*透明 黄 透明 透明 */
  }

  .main-service-cell:before {
    content: "";
    position: absolute;
    left: 90px;
    top: 45px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #ccc;
  }

  .main-service-cell:after {
    content: "";
    position: absolute;
    left: 91px;
    top: 45px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid #fff;
  }

  .main-cell-head {
    width: 70px;
    height: 70px;
    /*display: inline-block;*/
    /*vertical-align: top;*/
    margin-top: 15px;
  }

  .main-cell-info {
    max-width: 800px;
    /*height: 300px;*/
    background: #fff;
    display: inline-block;
    vertical-align: middle;
    padding: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    position: relative;
    margin-left: 30px;
    margin-right: 30px;
    /*box-shadow: 0px 8px 7px 1px rgba(51, 51, 51, .1)*/
  }

  .main-cell-info > p.content {
    margin-top: 20px;
    color: #333;
    font-family: "PingFangSC-Regular";
    line-height: 36px;
    font-size: 18px;
    word-break: break-all;
  }

  .main-cell-info > p.content  .upload-img{
    width: 100%
  }

  .main-cell-info span.service-name, .main-cell-info span.time {
    font-family: "PingFangSC-Regular";
    color: #666;
    font-size: 14px;
    line-height: 1em;
  }

  .main-cell-info span.time {
    margin-left: 10px;
  }

  /*main-customer-cell*/

  .main-customer-cell .main-cell-info {
    background-color: #C8936B
  }

  .main-customer-cell .main-cell-info > p.content {
    /*margin-top: 0;*/
    color: #fff;
  }

  .main-customer-cell .main-cell-head {
    margin-top: 0px;
  }
</style>
