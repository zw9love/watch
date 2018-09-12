<template>
  <div class="container">
    <!--Header-->
    <Header :pageIndex="4"/>
    <HeaderMobile title="查询结果"/>
    <Tabbar />
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
        <nuxt-link v-for="(item, key) in btnList" :key="key" @click.native="btnClick(key)" :to="item.href" class="main-btn-cell" :class="{'main-btn-active': mainBtbIndex === key}">
          {{item.name}} {{item.num}}
        </nuxt-link>
      </div>
      <div class="main320-btn">
        <nuxt-link v-for="(item, key) in btnList" :key="key" @click.native="btnClick(key)" :to="item.href" class="main320-btn-cell" :class="{'main320-btn-active': mainBtbIndex === key}">
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
          :total="100">
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
    async asyncData ({ params }) {
      // return {currentPage: parseInt(params.pageNumber) || 1}
    },
    data() {
      return {
        mainBtbIndex: 0,
        btnList: [
          {name: '全部订单', href: "/orderlist/all/1", num: 100},
          {name: '维修中', href: "/orderlist/repair/1", num: 0},
          {name: '已完成', href: "/orderlist/completed/1", num: 0},
        ]
      }
    },
    created(){
      switch (this.$route.name){
        case 'orderlist-index':
        case 'orderlist-all':
          this.mainBtbIndex = 0
          break;
        case 'orderlist-repair':
          this.mainBtbIndex = 1
          break;
        case 'orderlist-completed':
          this.mainBtbIndex = 2
          break;
      }
    },
    computed: {
      currentPage(){
        return parseInt(this.$route.params.pageNumber) || 1
      }
    },
    methods: {
      btnClick(key){
        this.mainBtbIndex = key
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
