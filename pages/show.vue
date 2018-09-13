<template>
  <div class="showContainer">
    <nuxt-child />
    <Tabbar />
  </div>
</template>
<script>
  import Tabbar from '../components/Tabbar'
  export default {
    components: {
      Tabbar
    }
  }
</script>
<style scoped>
  @media (max-width: 768px) {
    .showContainer{
      padding-bottom: 14.285714%;
    }
  }
</style>
