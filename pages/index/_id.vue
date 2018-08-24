<template>
  <div class="brand-main-right">
    <ul>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
      <li>
        <img src="../../assets/img/home_banner_bg@2x.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    asyncData({params, env, error}) {
      console.log(params.id)
      return {name: params.id}
    }
  }
</script>

<style scoped lang="stylus">
  .brand-main-right {
    float: left;
    width: 80%;
  }

  .brand-main-right ul{
    overflow: hidden;
  }

  .brand-main-right ul li {
    width: calc((100% - 60px) / 4);
    /*padding-top: 15%;*/
    padding-top: 174px;;
  float: left;
  position: relative;
  margin-right: 20px;
  margin-top: 20px;
  }

  .brand-main-right ul li:nth-child(4n) {
    margin-right: 0px;
  }

  .brand-main-right ul li img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
</style>
