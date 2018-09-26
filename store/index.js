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
    authUser: null,
    phone: '',
    username: '',
    modalActive: false,
    successActive: false,
    modalInfo: '',
    siteId: 1,
    btnList: [],
    tel: '',
    faultList: []
  },
  mutations: {
    setCityName: (state, {val}) => {
      state.cityName = val
    },
    setCityIndex: (state, {val}) => {
      state.cityIndex = val
    },
    setModalActive: (state, {val}) => {
      state.modalActive = val
    },
    setSuccessActive: (state, {val}) => {
      state.successActive = val
    },
    setModalInfo: (state, {val}) => {
      state.modalInfo = val
    },
    setBtnList: (state, {val}) => {
      state.btnList = val
    },
    setTelNumber: (state, {val}) => {
      state.tel = val
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
    setModalActive: (context, data) => {
      context.commit('setModalActive', data)
    },
    setSuccessActive:  (context, data) => {
      context.commit('setSuccessActive', data)
    },
    setModalInfo:  (context, data) => {
      context.commit('setModalInfo', data)
    },
    setBtnList:  (context, data) => {
      context.commit('setBtnList', data)
    },
    setTelNumber:  (context, data) => {
      context.commit('setTelNumber', data)
    },
    nuxtServerInit({commit}, {req}) {
      // console.log(req.session.views)
      // if (req.session && req.session.authUser) {
      //   // console.log('已经查找过。')
      //   req.session.views++
      //   commit('SET_USER', req.session.authUser)
      // }else{
      //   req.session.views = 1
      // }
      if (req.session && req.session.tel) {
        // console.log('已经查找过。')
        req.session.views++
        commit('setTelNumber', {val: req.session.tel})
      }else{
        req.session.views = 1
      }
    },
    login({commit}, {username, password, tel, axios, self, jumpPath}) {
      return axios('/login', {
        // 发送客户端 cookies 到服务端
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          // username,
          // password,
          tel
        })
      })
        // .then((res) => {
        //   if (res.status === 401) {
        //     throw new Error('Bad credentials')
        //   } else {
        //     return res.data.username
        //   }
        // })
        // .then((authUser) => {
        //   commit('SET_USER', authUser)
        // })
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            return res.data.tel
          }
        })
        .then( tel => {
          commit('setTelNumber', {val: tel})
        })
        .then(() => {
          //console.log('跳转。')
          let path = jumpPath ? jumpPath : '/orderlist/all/1?tel=' + tel
          self.$router.push({path})
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
          commit('setTelNumber', null)
        })
    }
  }
})

export default store
