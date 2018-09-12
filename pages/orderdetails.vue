<template>
  <div style="padding-bottom: 14.285714%;">
    <nuxt-child />
    <Tabbar />
  </div>
</template>
<script>
  import Tabbar from '../components/Tabbar'
  export default {
    fetch ({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect(302, '/process')
      }
    },
    components: {
      Tabbar
    }
  }
</script>
