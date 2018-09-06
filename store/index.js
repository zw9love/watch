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
    cityName: '北京市市辖区',
    cityIndex: 0
  },
  mutations: {
    setCityName: (state, {val}) => {
      state.cityName = val
    },
    setCityIndex: (state, {val}) => {
      state.cityIndex = val
    }
  },
  actions: {
    setCityName: (context, data) => {
      context.commit('setCityName', data)
    },
    setCityIndex: (context, data) => {
      context.commit('setCityIndex', data)
    }
  }
})

export default store
