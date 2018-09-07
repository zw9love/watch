<template>
  <div class="select-city">
    <!--<strong>请选择城市：</strong>-->
    <x-address title="title" v-model="value" :list="addressData" :hide-district="true">
      <template slot="title" slot-scope="props">
        <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '北京'}}</span>-->
        <span class="province">{{cityName}}</span>
      </template>
    </x-address>
    <!--<popup-picker :data="list1" v-model="value1" :columns="3" ref="picker">-->
    <!--<template slot="title" slot-scope="props">-->
    <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '省份'}}</span>-->
    <!--</template>-->
    <!--</popup-picker>-->
    <!--<popup-picker :data="list1" v-model="value1" :columns="2" ref="picker">-->
    <!--<template slot="title" slot-scope="props">-->
    <!--<span class="province">{{ ($refs.picker && $refs.picker.getNameValues().split(' ')[1]) || '城市'}}</span>-->
    <!--</template>-->
    <!--</popup-picker>-->
    <strong>直接搜索：</strong>
    <form class="search-container320" action="" @submit.prevent>
      <input type="search" class="search-txt320" v-model="txtVal" @keydown.enter.prevent="searchCity" placeholder="请输入城市中文或拼音 ">
    </form>
  </div>
</template>

<script>

  import { ChinaAddressV4Data} from 'vux'
  import address from '../assets/json/address'
  export default {
    name: "CityPickerMobile",
    data(){
      return {
        value: [],
        txtVal: '',
        cityName: '',
        addressData: ChinaAddressV4Data,
      }
    },
    created(){
      if(this.$route.query.city === '市辖区'){
        this.cityName = this.$route.query.province
      }else if(this.$route.query.city){
        this.cityName = this.$route.query.city
      }else {
        this.cityName = '请选择城市'
      }
      this.txtVal = this.$route.query.address ? this.$route.query.address : ''
    },
    watch: {
      value: function(newVal){
        let provinceName = address['86'][newVal[0]]
        let cityName = address[newVal[0]][newVal[1]]
        this.$router.push({path: '/servicelist/city', query: {province: provinceName, city: cityName, area: ''}})
      },
      '$route': function(newVal){
        if(newVal.query.city=== '市辖区'){
          this.cityName = newVal.query.province
        }else if(this.$route.query.city){
          this.cityName = newVal.query.city
        }else {
          this.cityName = '请选择城市'
        }
        this.txtVal = this.$route.query.address ? this.$route.query.address : ''
      }
    },
    methods: {
      addressChange(ids, name){
        // console.log(this.value)
        // this.cityName = name[0].indexOf('市') !== - 1 ? name[0].slice(0, name[0].length - 1) : name[1].slice(0, name[1].length - 1)
      },
      searchCity(e){
        let val = this.txtVal.trim()
        console.log(val)
        if(val){
          this.$router.push({path: '/servicelist/city', query: {address: val}})
        }
      }
    }
  }
</script>

<style scoped>
    @media (max-width:768px){

      .select-city{
        padding:20px 10px;
        display: flex;
        align-items: center;
      }
      .select-city strong{
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
      }

      .select-city .province{
        /*width: 60px;*/
        height: 30px;
        line-height: 30px;
        border:1px solid #ccc;
        border-radius: 3px;
        display: inline-block;
        font-size: 12px;
        padding: 0 5px;
        margin-right: 10px;
        white-space: nowrap;
        overflow: hidden;
        min-width: 60px;
      }

      .search-container320{
        flex: 1;
      }

      .select-city .search-container320 .search-txt320{
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 3px;
        display: inline-block;
        font-size: 12px;
        padding: 0 10px;
        min-width: 0px;
        width: 100%;
        max-width: 300px;
      }

      /*.weui-cell{*/
        /*padding: 0!important;*/
      /*}*/

    }
</style>
