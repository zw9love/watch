<template>
    <div>
      <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
      computed: {
        cityName: function(){
          return this.$store.state.cityName
        },
        cityIndex: function(){
          return this.$store.state.cityIndex
        }
      },
      asyncData({params, env, error}) {
        console.log(params)
        return {name: params.address}
      }
    }
</script>

<style scoped>

</style>
