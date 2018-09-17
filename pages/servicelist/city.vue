<template>
  <ServiceListTemplate :list="list" :fullList="fullList"/>
</template>

<script>
  import ServiceListTemplate from '../../components/ServiceListTemplate'
  export default {
    components: {
      ServiceListTemplate
    },
    async asyncData({params, env, error, query, app}) {
      let queryAddress = ''
      if (query.address) {
        queryAddress = query.address
      } else if (query.province) {
        queryAddress = query.province + query.city + query.area
      }
      let cityOption = {
        url: '/api/StoreManage/GetPaging?Search=' + encodeURI(queryAddress),
        methods: 'GET',
        headers: {
          //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          //'test': 123
        }
      }
      let {data} = await app.$axios(cityOption)
      return { list: data.slice(0, 10), fullList: data}
      //   let list = Mock.mock({
      //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      //   'list|10': [{
      //     // 属性 id 是一个自增数，起始值为 1，每次增 1
      //     'ids': '@id',
      //     'date': '@date("yyyy-MM-dd")'
      //   }]
      // }).list
      // return {name: queryAddress, list: list}
    },
    watch: {
      '$route': async function ({params, query}) {
        // console.log(query)
        let queryAddress = ''
        if (query.address) {
          queryAddress = query.address
        } else if (query.province) {
          queryAddress = query.province + query.city + query.area
        }
        let cityOption = {
          url: '/api/StoreManage/GetPaging?Search=' + encodeURI(queryAddress),
          methods: 'GET',
          headers: {
            //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            //'test': 123
          }
        }
        let {data} = await this.$axios(cityOption)
        // console.log(data)
        this.list = data.slice(0, 10)
        this.fullList = data
      }
    },
  }
</script>
