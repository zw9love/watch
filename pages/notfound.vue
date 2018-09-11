<template>
  <div>
    <h1>404</h1>
  </div>
</template>

<script>
  export default {
    name: "notfound",
    asyncData (context) {
      console.log('进入404页面。')
      context.redirect(302, '/')
      // return { project: 'nuxt' }
    }
  }
</script>

<style scoped>

</style>
