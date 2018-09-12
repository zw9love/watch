<template>
  <div></div>
</template>
<script>
  export default {
    fetch ({ store, redirect }) {
      return redirect(302, '/orderlist')
    }
  }
</script>
