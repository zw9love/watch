<template>
  <div></div>
</template>

<script>
  export default {
    name: "index",
    asyncData (context) {
      context.redirect(302, '/')
    }
  }
</script>

<style scoped lang="stylus">

</style>
