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
  import OrderCell from '../components/OrderCell'
  import OrderCellMobile from '../components/OrderCellMobile'
  import Mock from 'mockjs'

  export default {
    components: {
      OrderCell,
      OrderCellMobile
    },
    data(){
      return {
        loadMoreActive: false,
        showLoading: false,
        tip: '上拉加载更多'
      }
    },
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      },
      btnListIndex: {
        type: Number,
        default: 0
      },
      dataFiled: {
        type: String,
        default: 'TotalList'
      }
    },
    mounted(){
      this.loadMoreActive = (document.documentElement.clientWidth <= 768 && this.$store.state.btnList[this.btnListIndex].num > 5)
      this.loadMoreData()
    },
    destroyed(){
      window.removeEventListener('scroll')
    },
    methods: {
      loadMoreData(){
        // 可视窗的宽高
        if(!this.loadMoreActive) return
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
                    this.list = res.data[this.dataFiled]
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
