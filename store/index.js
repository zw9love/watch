/**
 @author zengwei
 @time 2018/6/9
 **/

 // 使用vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    counter: 100,
    token: 'a1234567890',
    cityName: '北京',
    cityIndex: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store
