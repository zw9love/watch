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
@media (min-width: 768px){
  html{
    min-width: 1300px;
  }
}


</style>

