<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="4"/>
    <HeaderMobile title="查询结果"/>
    <Tabbar :tabbarStyle="{background: 'transparent'}"/>
    <!--banner-->
    <div class="banner">
      <img :src="require('../assets/img/demand_banner@2x.png')" alt=""/>
    </div>
    <div class="banner320">
      <img :src="require('../assets/img/process.jpg')" alt=""/>
    </div>

    <!--main-->
    <main class="main">
      <div class="main-btn">
        <nuxt-link v-for="(item, key) in btnList" :key="key" @click.native="btnClick(item, key)" :to="item.href" class="main-btn-cell" :class="{'main-btn-active': mainBtbIndex === key}">
          {{item.name}} {{item.num}}
        </nuxt-link>
      </div>
      <div class="main320-btn">
        <nuxt-link v-for="(item, key) in btnList" :key="key" @click.native="btnClick(item, key)" :to="item.href" class="main320-btn-cell" :class="{'main320-btn-active': mainBtbIndex === key}">
          {{item.name}} {{item.num}}
        </nuxt-link>
      </div>
      <nuxt-child />
    </main>

    <div class="pagination">
      <div class="pagination-container">
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :page-size="5"
          :current-page="currentPage"
          @current-change="currentChange"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <!--Footer-->
    <Footer/>
  </div>

</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import HeaderMobile from '../components/HeaderMobile'
  import Tabbar from '../components/Tabbar'
  export default {
    components: {
      Header,
      Footer,
      HeaderMobile,
      Tabbar
    },
    fetch ({ store, redirect }) {
      if (!store.state.authUser) {
        return redirect(302, '/process')
      }
    },
    async asyncData ({ app, params, route, query, redirect, store }) {

      let tel = query.tel

      if(!tel) return redirect(302, '/process')

      // 订单数量
      let orderNumOption = {
        url: '/api/AptList/GetClassifyDate?mobile=' + tel,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      let {data} = await app.$axios(orderNumOption)
      let btnList = [
        {name: '全部订单', href: "/orderlist/all/1?tel=" + tel, num: data.TotalCount},
        {name: '维修中', href: "/orderlist/repair/1?tel=" + tel, num: data.RepairCount},
        {name: '已完成', href: "/orderlist/completed/1?tel=" + tel, num: data.CompletedCount},
      ]

      store.dispatch({type: 'setBtnList', val: btnList})

      let mainBtbIndex = 0
      let total = 0
      switch (route.name){
        case 'orderlist-index':
        case 'orderlist-all-pageNumber':
          mainBtbIndex = 0
          total = data.TotalCount
          break;
        case 'orderlist-repair-pageNumber':
          mainBtbIndex = 1
          total = data.RepairCount
          break;
        case 'orderlist-completed-pageNumber':
          mainBtbIndex = 2
          total = data.CompletedCount
          break;
      }
      return {mainBtbIndex, btnList, total}
      // return {currentPage: parseInt(params.pageNumber) || 1}
    },
    data() {
      return {
        mainBtbIndex: 0,
        btnList: [],
        total: 0
      }
    },
    // created(){
    //   // console.log(this.$route.name)
    //   switch (this.$route.name){
    //     case 'orderlist-index':
    //     case 'orderlist-all-pageNumber':
    //       this.mainBtbIndex = 0
    //       break;
    //     case 'orderlist-repair-pageNumber':
    //       this.mainBtbIndex = 1
    //       break;
    //     case 'orderlist-completed-pageNumber':
    //       this.mainBtbIndex = 2
    //       break;
    //   }
    // },
    computed: {
      currentPage(){
        return parseInt(this.$route.params.pageNumber) || 1
      }
    },
    methods: {
      btnClick(item, key){
        this.mainBtbIndex = key
        // console.log(item)
        this.total = item.num
      },
      currentChange(num){
        // this.$router.push({query: {pageNumber: num}})
        let path = this.$route.path
        // console.log(path)
        let keyIndex = path.lastIndexOf('/')
        let basePath = path.slice(0, keyIndex)
        this.$router.push({path: basePath + '/' + num})
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../assets/css/orderlist.css"
</style>
