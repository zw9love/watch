<template>
  <div class="main-right">
    <div class="main-right-cell">
      <img src="../assets/img/case_detail_images2@2x.png" alt="">
    </div>
    <div class="main-right-cell">
      <img src="../assets/img/case_detail_images3@2x.png" alt="">
    </div>
    <div class="main-right-cell adver-order">
      <img src="../assets/img/case_detail_images4@2x.jpg" alt="">
    </div>
    <div class="main-right-cell">
      <img src="../assets/img/case_detail_images5@2x.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Advertisement"
  }
</script>

<style scoped>
  .main-right{
    float: right;
    width: 420px;
  }

  .main-right img{
    vertical-align: middle;
  }

  .main-right-cell{
    margin-top: 20px
  }

  .adver-order{
    cursor: pointer;
  }

  @media (max-width:768px){
    .main-right{
      display: none;
    }
  }

</style>
