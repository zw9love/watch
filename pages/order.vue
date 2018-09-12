<template>
  <div style="padding-bottom: 14.285714%;">
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

</style>
