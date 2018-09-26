<template>
  <div>
    <div class="main-order">
      <OrderCell v-for="(item, key) in list" :key="key" :item="item"/>
    </div>
    <div class="main320-order">
      <OrderCellMobile v-for="(item, key) in list" :key="key" :item="item"/>
    </div>
    <load-more :tip="tip" v-show="loadMoreActive" :showLoading="showLoading"></load-more>
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
    async asyncData ({ params, app, store }) {
      let pageNumber = params.pageNumber
      // let data = Mock.mock({
      //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      //   'list|0': [{
      //     // 属性 id 是一个自增数，起始值为 1，每次增 1
      //     'ids': '@id',
      //     'price': '@integer(1000, 1000000)',
      //     'completeActive': '@boolean',
      //     'date': '@date("yyyy-MM-dd")'
      //   }]
      // }).list

      let option = {
        url: `/api/AptList/GetPaging?StartDateTime=%7BStartDateTime%7D&EndDateTime=%7BEndDateTime%7D&SiteID=${store.state.siteId}&StoresId=%7BStoresId%7D&OrderNum=%7BOrderNum%7D&pagesize=${5}&pagenum=${pageNumber}&type=1`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let {data} = await app.$axios(option)
      // console.log(list)
      // return {list: list}
      return {list: data}
    },
    data(){
      return {
        loadMoreActive: false,
        showLoading: false,
        tip: '上拉加载更多'
      }
    },
    mounted(){
      this.loadMoreActive = (document.documentElement.clientWidth <= 768 && this.$store.state.btnList[2].num > 5)
      this.loadMoreData()
    },
    methods: {
      loadMoreData(){
        // 可视窗的宽高
        let width = document.documentElement.clientWidth
        if(width > 768) return
        let height = document.documentElement.clientHeight
        window.addEventListener('scroll', o => {
          // 滚动轴距离
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          // 文档总高度 尼玛坑
          let allHeight = document.documentElement.scrollHeight || document.body.scrollHeight
          // console.log(scrollTop)
          if((height + scrollTop + 80 >= allHeight) && !this.scrollLock){
            // console.log('进来了,就一次就够了。')
            this.tip = '正在加载'
            this.showLoading = true
            // this.loadMoreActive = true
            this.scrollLock = true
            let tel = this.$route.query.tel
            this.$nextTick(o => {
              this.$axios('/api/AptList/GetClassifyDate?mobile=' + tel, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
                .then((res) => {
                  setTimeout(o => {
                    this.list = res.data.TotalList
                    this.tip = '没有更多了'
                    this.showLoading = false
                  }, 500)
                })
            })
          }
        })
      },
    }
  }
</script>

<style scoped lang="stylus">

</style>
