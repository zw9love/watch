/**
 @author zengwei
 @time 2018/6/9
 **/

// 使用vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// window.fetch() 的 Polyfill
// require('whatwg-fetch')

const store = () => new Vuex.Store({
  state: {
    counter: 100,
    token: 'a1234567890',
    cityName: '北京',
    cityIndex: 0,
    authUser: null
  },
  mutations: {
    setCityName: (state, {val}) => {
      state.cityName = val
    },
    setCityIndex: (state, {val}) => {
      state.cityIndex = val
    },
    SET_USER: function (state, user) {
      state.authUser = user
    }
  },
  actions: {
    setCityName: (context, data) => {
      context.commit('setCityName', data)
    },
    setCityIndex: (context, data) => {
      context.commit('setCityIndex', data)
    },
    nuxtServerInit({commit}, {req}) {
      if (req.session && req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    },
    login({commit}, {username, password, axios, self}) {
      return axios('/login', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          username,
          password
        })
      })
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res.data.username
          }
        })
        .then((authUser) => {
          commit('SET_USER', authUser)
        })
        .then(() => {
          self.$router.push({path: '/orderlist/all/1'})
          // self.$router.push({path: '/secret'})
        })
    },
    logout({commit}, {axios, self}) {
      return axios('/logout', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST'
      })
        .then(() => {
          commit('SET_USER', null)
        })
    }
  }
})

export default store
