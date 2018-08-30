<template>
  <div class="header-mobile">
    <x-header :left-options="{backText: ''}">{{title}}</x-header>
  </div>
</template>

<script>
  export default {
    name: "HeaderMobile",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .header-mobile {
    display: none;
  }

  @media (max-width:768px){
    .header-mobile {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1000;
      width: 100%;
      display: block;
    }
  }
</style>
