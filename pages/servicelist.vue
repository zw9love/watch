<template>
  <div class="serviceListContainer">
    <nuxt-child />
    <Sidebar />
    <Tabbar />
  </div>
</template>
<script>
  import Sidebar from '../components/Sidebar'
  import Tabbar from '../components/Tabbar'
  export default {
    components: {
      Sidebar,
      Tabbar
    }
  }
</script>
<style scoped>
  @media (max-width: 768px) {
    .serviceListContainer{
      /*padding-bottom: 14.285714%;*/
      padding-bottom: 22.222222%;
    }
  }
</style>

