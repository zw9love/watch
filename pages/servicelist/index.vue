<template>
  <ServiceListTemplate :list="list" :fullList="fullList" @getMore="getMore"/>
</template>

<script>
  import ServiceListTemplate from '../../components/ServiceListTemplate'
  export default {
    components: {
      ServiceListTemplate
    },
    async asyncData({app}) {
      let caseOption = {
        url: '/api/StoreManage',
        methods: 'GET'
      }
      let {data} = await app.$axios(caseOption)
      return { list: data.slice(0, 10), fullList: data}
    },
    methods: {
      getMore(){
        this.list = this.fullList
      }
    }
  }
</script>
