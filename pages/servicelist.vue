<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="4"/>

    <!--banner-->
    <div class="banner">
      <img src="../assets/img/demand_banner@2x.png" alt="">
    </div>

    <!--main-->
    <main class="main">
      <div class="main-cell">
        <div class="main-cell-title">

        </div>
      </div>
    </main>

    <!--Footer-->
    <Footer/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    name: "servicelist",
    components: {
      Header,
      Footer,
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .banner {

  }

  .banner img {
    width: 100%;
    cursor: pointer;
    vertical-align: middle;
  }

  .main{
    max-width: 1280px;
    margin: 100px auto 0 auto;
  }

  .main-cell .main-cell-title{
    height: 50px;
    line-height: 50px;
    background-color: #FFF6ED;
  }

</style>
