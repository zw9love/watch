<template>
  <nuxt-child />
</template>
<script>
  export default {
    fetch ({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect('/process')
      }
    }
  }
</script>
