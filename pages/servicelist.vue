<template>
  <div style="padding-bottom: 14.285714%;">
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
