<template>
  <div>
    <div class="container" v-if="active">
      <!--Header-->
      <Header :pageIndex="4"/>

      <main class="main">
        <div class="main-left">
          <div class="city">
            <CityPicker />
          </div>
          <nuxt-child />
        </div>
        <Advertisement />
      </main>

      <!--Footer-->
      <Footer/>
    </div>

    <div class="container320" v-else>
        <HeaderMobile title="维修服务中心列表"/>
        <main class="main320">
          <CityPickerMobile />
          <nuxt-child />
        </main>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Advertisement from '../components/Advertisement'
  import HeaderMobile from '../components/HeaderMobile'
  import CityPicker from '../components/CityPicker'
  import CityPickerMobile from '../components/CityPickerMobile'

  export default {
    name: "servicelist",
    components: {
      Header,
      Footer,
      Advertisement,
      HeaderMobile,
      CityPicker,
      CityPickerMobile
    },
    data() {
      return {
        active: false
      }
    },
    mounted(){
      this.active = window.innerWidth >= 768
    }
  }
</script>

<style scoped>

  .container320{
    display: none;
  }

  img{
    vertical-align: middle;
  }

  .main{
    max-width: 1280px;
    margin: 60px auto 0 auto;
  }

  .main:after{
    content: "";
    display: block;
    clear: both;
  }

  .main-left{
    float: left;
    width: 800px;
  }

  .city{
    margin-top: 20px;
    height: 42px;
    /*overflow: hidden;*/
    line-height: 42px;
    /*background-color: #ccc;*/
  }

  .city .select-container{
    float: left;
  }

  .city strong{
    margin: 0 20px;
  }

  .city .search-txt{
    display: inline-block;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 4px;
    width: 160px;
    height: 38px;
    padding: 5px 10px;
  }

  /*.store-list{*/
     /*margin-top: 50px;*/
   /*}*/

  /*.get-more{*/
    /*text-align: center;*/
  /*}*/

  /*.get-more span{*/
    /*font-size: 20px;*/
    /*color: #999;*/
    /*cursor: pointer;*/
  /*}*/

  /*.store-cell{*/
    /*!*overflow: hidden;*!*/
    /*position: relative;*/
  /*}*/
  /*.store-cell:after{*/
    /*content: "";*/
    /*display: block;*/
    /*clear: both;*/
  /*}*/


  /*.store-cell-left, .store-cell-right{*/
    /*float: left;*/
  /*}*/

  /*.store-cell-right{*/
    /*width: 580px;*/
    /*padding-left: 20px;*/
  /*}*/

  /*.store-cell-right span>img{*/
    /*margin-right: 7px;*/
  /*}*/

  /*.store-address span{*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
  /*}*/

  /*.store-address, .store-phone, .store-time{*/
    /*margin-top: 10px;*/
  /*}*/

  /*.store-address span.store-address-info{*/
    /*width: calc(100% - 28px);*/
    /*vertical-align: top;*/
    /*line-height: 1.6em;*/
  /*}*/
  /*.store-address span img{*/
    /*vertical-align: top;*/
  /*}*/

  /*.store-cell-right span{*/
    /*font-size: 16px;*/
    /*color: #666;*/
    /*vertical-align: middle;*/
  /*}*/

  /*.store-cell-right strong{*/
    /*color: #333;*/
    /*font-size: 20px;*/
  /*}*/

  /*.store-btn{*/
    /*position: absolute;*/
    /*right: 0;*/
    /*bottom: -22px;*/
    /*cursor: pointer;*/
  /*}*/

  /*.store-btn-info{*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 40%;*/
    /*transform: translate(-50%, -50%);*/
    /*color: #000;*/
    /*font-size: 15px;*/
    /*font-weight: 600;*/
  /*}*/

  /*.store-line{*/
    /*width: 100%;*/
    /*height: 1px;*/
    /*background-color: #ccc;*/
    /*clear: both;*/
    /*margin: 70px 0;*/
  /*}*/

  @media (max-width:768px){
    .container{
      display: none;
    }

    .container320{
      display: block;
      margin-top: 46px;
    }

    .select-city{
      padding:20px 10px;
      display: flex;
      align-items: center;
    }
    .select-city strong{
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
    }


    .select-city .province{
      /*width: 60px;*/
      height: 30px;
      line-height: 30px;
      border:1px solid #ccc;
      border-radius: 3px;
      display: inline-block;
      font-size: 12px;
      padding: 0 5px;
      margin-right: 10px;
      white-space: nowrap;
      overflow: hidden;
      min-width: 60px;
    }

    .search-container320{
      flex: 1;
    }

    .select-city .search-container320 .search-txt320{
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 3px;
      display: inline-block;
      font-size: 12px;
      padding: 0 10px;
      min-width: 0px;
      width: 100%;
      max-width: 300px;
    }

  }

</style>
