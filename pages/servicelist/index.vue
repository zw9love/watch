<template>
  <ServiceListTemplate :list="list" :fullList="fullList" @getMore="getMore" @loadMoreData="loadMoreData"/>
</template>

<script>
  import ServiceListTemplate from '../../components/ServiceListTemplate'
  export default {
    components: {
      ServiceListTemplate
    },
    async asyncData({app, store}) {
      let caseOption = {
        // url: '/api/FrmRepair/1?SiteID=' + store.state.siteId,
        url: '/api/FrmRepair/',
        methods: 'GET'
      }
      let {data} = await app.$axios(caseOption)
      console.log(data)
      return { list: data.slice(0, 10), fullList: data}
    },
    methods: {
      getMore(serviceListTemplate){
        this.list = this.fullList
        serviceListTemplate.moreClickActive = true
      },
      loadMoreData(serviceListTemplate){
        this.list = this.fullList
        serviceListTemplate.moreClickActive = true
      }
    }
  }
</script>
