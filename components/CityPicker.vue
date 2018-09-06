<template>
  <div class="city-container">
    <span class="city-province" :title="provinceName" @click.stop="showProvince">{{provinceName}}
      <img src="../assets/img/store_down@2x.png" alt="" class="arrow">
    </span>
    <span class="city-city" :title="cityName" @click.stop="showCity">{{cityName}}
      <img src="../assets/img/store_down@2x.png" alt="" class="arrow">
    </span>
    <span class="city-area" :title="areaName" @click.stop="showArea">{{areaName}}
      <img src="../assets/img/store_down@2x.png" alt="" class="arrow">
    </span>
    <div class="city-popup" v-show="provincePopupActive">
      <ul class="city-popup-wrapper">
        <li v-for="(item, key) in provinceList" :key="key">
          <a href="javascript:;" :class="{active:  item.val === provinceName}"
             @click.stop="provinceCellClick(item.key, item.val, key)">{{item.val}}</a>
        </li>
      </ul>
    </div>
    <div class="city-popup" v-show="cityPopupActive">
      <ul class="city-popup-wrapper">
        <li v-for="(item, key) in cityList" :key="key">
          <a href="javascript:;" :class="{active: item.val === cityName}"
             @click.stop="cityCellClick(item.key, item.val, key)">{{item.val}}</a>
        </li>
      </ul>
    </div>
    <div class="city-popup" v-show="areaPopupActive">
      <ul class="city-popup-wrapper">
        <li v-for="(item, key) in areaList" :key="key">
          <a href="javascript:;" :class="{active: item.val === areaName}"
             @click.stop="areaCellClick(item.key, item.val, key)">{{item.val}}</a>
        </li>
      </ul>
    </div>
    <span class="city-search-info">直接搜索：</span>
    <input type="text" class="city-search-txt" placeholder="请输入城市中文或拼音" @keydown.enter="searchCity" v-model="txtVal">
    <span class="city-search-btn" @click.stop="searchCity">
      <img src="../assets/img/home_top_search@2x.png" alt="">
    </span>
  </div>
</template>

<script>
  import cityData from '../assets/json/address'

  export default {
    name: "CityPicker",
    asyncData({ env }) {
      return { users: 'daxiong' }
    },
    data() {
      return {
        cityData: cityData,
        cityKey: '86',
        cityKeyName: 'province',
        list: [],
        provinceList: [],
        cityList: [],
        areaList: [],
        provincePopupActive: false,
        cityPopupActive: false,
        areaPopupActive: false,
        provinceName: '省份',
        cityName: '城市',
        areaName: '区',
        provinceIndex: -1,
        cityIndex: -1,
        areaIndex: -1,
        txtVal: ''
      }
    },
    watch: {
      '$route': function(newVal){
        if(!newVal.query.province){
          this.provinceName = '省份'
          this.cityName = '城市'
          this.areaName = '区'
        }else{
          this.provinceName = newVal.query.province
          this.cityName = newVal.query.city
          this.areaName = newVal.query.area
        }

        if(!newVal.query.address){
          this.txtVal = ''
        }
      }
    },
    created() {
      // console.log(this.users)
      let {query} = this.$route
      if(query.province){
        let provinceName = query.province
        let cityName = query.city
        let areaName = query.area
        this.provinceName = provinceName
        this.cityName = cityName
        this.areaName = areaName
      }else{
        this.provinceName = '省份'
        this.cityName = '城市'
        this.areaName = '区'
      }
      if(query.address){
        this.txtVal = query.address
      }
    },
    mounted() {
      window.addEventListener('click', () => {
        this.provincePopupActive = false
        this.cityPopupActive = false
        this.areaPopupActive = false
      })
    },
    destroyed() {
      window.removeEventListener('click', function () {
      })
    },
    methods: {
      allClose() {
        this.provincePopupActive = false
        this.cityPopupActive = false
        this.areaPopupActive = false
        let provinceName = this.provinceName === '省份' ? '' : this.provinceName
        let cityName = this.cityName === '城市' ? '' : this.cityName
        let areaName = this.areaName === '区' ? '' : this.areaName
        let addressName = provinceName + cityName + areaName
        // address: addressName
        this.$router.push({path: '/servicelist/city', query: {province: provinceName, city: cityName, area: areaName}})
      },
      isEmpty(obj) {
        let hasAttr = false
        for (let i in obj) {
          hasAttr = true
          break
        }
        return hasAttr
      },
      getList() {
        let temp = this.cityData[this.cityKey]
        let hasAttr = this.isEmpty(temp)
        let list = []
        if (hasAttr) {
          for (let i in temp) {
            list.push({key: i, val: temp[i]})
          }
        }
        return list
      },
      showProvince() {
        this.provincePopupActive = true
        this.cityPopupActive = false
        this.areaPopupActive = false
        this.cityKey = '86'
        this.provinceList = this.getList()
      },
      showCity() {
        if (this.provinceIndex >= 0) {
          this.provincePopupActive = false
          this.cityPopupActive = true
          this.areaPopupActive = false
        } else {
          this.showProvince()
        }
      },
      showArea() {
        let provinceCheck = this.provinceIndex >= 0
        let cityCheck = this.cityIndex >= 0
        if (provinceCheck && cityCheck) {
          this.provincePopupActive = false
          this.cityPopupActive = false
          this.areaPopupActive = true
        }
        else if (provinceCheck && !cityCheck) {
          this.showCity()
        }
        else {
          this.showProvince()
        }
      },
      provinceCellClick(key, val, index) {
        this.cityKey = key
        this.provinceIndex = index
        this.cityList = this.getList()
        this.provinceName = val
        this.cityIndex = -1
        this.areaIndex = -1
        this.cityName = '城市'
        this.areaName = '区'
        this.showCity()
      },
      cityCellClick(key, val, index) {
        this.cityKey = key
        this.cityIndex = index
        this.areaList = this.getList()
        this.cityName = val
        this.areaName = '区'
        this.areaIndex = -1
        if (this.areaList.length > 0) {
          this.showArea()
        } else {
          this.allClose()
        }
      },
      areaCellClick(key, val, index) {
        this.areaName = val
        this.areaIndex = index
        this.allClose()
      },
      searchCity(){
        if(this.txtVal.trim()) this.$router.push({path: '/servicelist/city', query: {address: this.txtVal}})
      }
    }
  }
</script>

<style scoped>
  .city-container {
    position: relative;
  }

  .city-container > span {
    width: 120px;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: inline-block;
    line-height: 40px;
    padding: 0 10px;
    cursor: pointer;
    z-index: 2;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .city-container > span .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  /*span.city-province{*/
  /*width: 120px;*/
  /*}*/

  span.city-search-info {
    border: none;
    width: 100px;
    font-weight: 600;
    z-index: 0;
  }

  .city-search-txt {
    height: 40px;
    border: 1px solid #ddd;
    width: 220px;
    padding: 5px 10px;
    border-radius: 5px;
    line-height: 40px;
    display: inline-block;
    vertical-align: top;
  }

  span.city-search-btn {
    width: 60px;
    background-color: #BF9571;
    text-align: center;
    line-height: 40px;
    position: relative;
    z-index: 0;
  }

  .city-search-btn > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
  }

  .city-container > span:not(:first-child) {
    margin-left: 15px;
  }

  .city-container .city-province {

  }

  .city-container .city-popup {
    position: absolute;
    left: -20px;
    top: -20px;
    /*display: none;*/
    width: 1200px;
    /*height: 600px;*/
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    z-index: 1;
    padding: 80px 20px 20px 20px;
    min-width: 430px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, .4);
  }

  .city-popup-wrapper {
    overflow: hidden;
  }

  .city-popup-wrapper li {
    float: left;
    /*width: 20%;*/
    padding-right: 30px;
    width: 20%;
    /*text-align: center;*/
    /*overflow: hidden;*/
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
  }

  .city-popup-wrapper li a {
    color: #000;
  }

  .city-popup-wrapper li a.active {
    color: #C8936B;
  }

  /*.city-popup-wrapper li a:active{*/
  /*color: #C8936B;*/
  /*}*/


</style>
