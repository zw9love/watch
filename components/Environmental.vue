<template>
  <!--服务环境-->
  <div class="environmental">
    <img src="../assets/img/home_serviceenvironment_bg@2x.png" alt="">
    <div class="environmental-container">
      <div class="environmental-main">
        <ServiceTitle info="SERVICE ITEMS" name="服务环境" content="提供舒适清爽的一对一服务空间" :bgActive="true"></ServiceTitle>
        <div class="carousel">
          <el-carousel type="card" height="340px" :autoplay="false" arrow="never" indicator-position="none"
                       @change="carouselChange" ref="carousel">
            <el-carousel-item name="0">
              <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="1">
              <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
            </el-carousel-item>
            <el-carousel-item name="2">
              <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
            </el-carousel-item>
          </el-carousel>
          <div class="indicator">
              <span v-for="(item, key) in 3" :key="key" @click="indicatorClick(key)">
                <span class="indicator-active" v-if="key === indicatorKey"></span>
                <img v-else src="../assets/img/home_serviceenvironment_button_no@2x.png" alt="">
              </span>
          </div>
        </div>
      </div>
    </div>
    <div class="environmental-container320">
      <ServiceTitle info="SERVICE ITEMS" name="服务环境" content="提供舒适清爽的一对一服务空间"
                    :containerStyle="{marginTop: '60px'}"></ServiceTitle>
      <div class="carousel">
        <el-carousel type="card" :height="stackHeight + 'px'" :autoplay="false" arrow="never"
                     indicator-position="none"
                     @change="carouselChange">
          <!--<el-carousel-item v-for="item in 3" :key="item">-->
          <!--<h3>{{ item }}</h3>-->
          <!--</el-carousel-item>-->
          <el-carousel-item name="0">
            <img src="../assets/img/home_serviceenvironment_images@2x.png" alt="">
          </el-carousel-item>
          <el-carousel-item name="1">
            <img src="../assets/img/home_serviceenvironment_images1@2x.png" alt="">
          </el-carousel-item>
          <el-carousel-item name="2">
            <img src="../assets/img/home_serviceenvironment_images2@2x.png" alt="">
          </el-carousel-item>
        </el-carousel>
        <Indicators v-model="indicatorKey" :list="[1,1,1]" ></Indicators>
      </div>
    </div>
  </div>
</template>

<script>
  import ServiceTitle from '../components/ServiceTitle'
  import Indicators from '../components/Indicators'
  export default {
    name: "Environmental",
    components: {
      ServiceTitle,
      Indicators
    },
    data(){
      return {
        indicatorKey: 0,
        stackHeight: 0
      }
    },
    mounted() {
      this.stackHeight = parseInt(window.innerWidth * 0.4667)
    },
    methods: {
      carouselChange(nowIndex, useIndex) {
        this.indicatorKey = nowIndex
      },
      indicatorClick(key) {
        this.indicatorKey = key
        this.$refs.carousel.setActiveItem(key)
        // console.log("key = " + key)
        // console.debug(this.$refs.carousel)
      },
    }
  }
</script>

<style scoped>


</style>
