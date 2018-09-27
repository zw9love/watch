<template>
  <div>
    <nuxt/>
    <!--<lg-preview></lg-preview>-->
    <Modal @close="close"/>
  </div>
</template>
<script>
  import Modal from '../components/Modal'
  export default {
    components: {
      Modal
    },
    // fetch(){
    //   console.log('default的fetch。')
    // },
    // async created(){
    //   // 故障类型
    //   let faultOption = {
    //     url: '/api/AptList/GetFaultList',
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    //   let faultRes = await app.$axios(faultOption)
    //   this.$store.state.faultList = faultRes.data
    // },
    methods: {
      close(){
        this.$store.dispatch({type: 'setModalActive', val: false})
      }
    }
  }
</script>
<style>

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/*html, body{*/
  /*overflow-x:hidden;*/
/*}*/


/*@media (min-width: 768px) and (max-width: 1300px){*/
@media (min-width: 769px){
  html{
    min-width: 1300px;
  }
}


</style>

