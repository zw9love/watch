<template>
  <div>
    <div class="main-order">
      <OrderCell/>
      <OrderCell :completeActive="true"/>
      <OrderCell/>
      <OrderCell/>
      <OrderCell/>
    </div>
    <div class="main320-order">
      <OrderCellMobile v-for="x in 5" :key="x"/>
    </div>
  </div>
</template>

<script>
  import OrderCell from '../../../components/OrderCell'
  import OrderCellMobile from '../../../components/OrderCellMobile'

  export default {
    components: {
      OrderCell,
      OrderCellMobile
    },
    validate ({ params }) {
      // Must be a number
      // console.log(params)
      return /^\d+$/.test(params.pageNumber)
    },
    async asyncData ({ params }) {
      console.log(params.pageNumber)
    },
  }
</script>

<style scoped lang="stylus">

</style>
