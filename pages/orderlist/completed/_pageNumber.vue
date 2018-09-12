<template>
  <div>
    <div class="main-order">
      <OrderCell v-for="(item, key) in list" :key="key" :item="item"/>
    </div>
    <div class="main320-order">
      <OrderCellMobile v-for="(item, key) in list" :key="key" :item="item"/>
    </div>
  </div>
</template>

<script>
  import OrderCell from '../../../components/OrderCell'
  import OrderCellMobile from '../../../components/OrderCellMobile'
  import Mock from 'mockjs'

  export default {
    components: {
      OrderCell,
      OrderCellMobile
    },
    middleware: 'refresh',
    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.pageNumber)
    },
    async asyncData ({ params }) {
      // console.log(params.pageNumber)
      let data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'ids': '@id',
          'price': '@integer(1000, 1000000)',
          'completeActive': '@boolean',
          'date': '@date("yyyy-MM-dd")'
        }]
      }).list
      return {list: data}
    }
  }
</script>

<style scoped lang="stylus">

</style>
