<template>
    <div class="container">
      <!--Header-->
      <Header :pageIndex="2"/>

      <!--banner-->
      <div class="banner">
        <img src="../assets/img/case_banner@2x.png" alt="">
      </div>


      <!--Footer-->
      <Footer />
    </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  export default {
    name: "case",
    components: {
      Header,
      Footer,
    },
  }
</script>

<style scoped>
  .banner{

  }

  .banner img{
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }
</style>
