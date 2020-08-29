import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userId: '',
    password: ''
  },
  mutations: {
    login(state, param) {
      state.isLogin = true;
      state.userId = param.userId;
      state.password = param.password;
    },
    logout(state) {
      state.isLogin = false;
      state.userId = '';
      state.password = '';
    }
  },
  actions: {
    async login({ commit }, { userId, password }) {
      const param = {
        userId: userId,
        password: password
      }

      try {
        const loginResult = await axios.post('http://localhost:3000/login', param);
        if (loginResult.data === 'OK') {
          // 認証に成功した場合
          console.log(loginResult)
          console.log('認証に成功しました。');
          commit('login', param);
        } else {
          // 認証に失敗した場合
          console.log('認証に失敗しました。');
        }
      } catch{
        alert('処理に失敗しました。')
      }

    },
    logout({ commit }) {
      commit('logout');
    }
  },
  modules: {
  }
})
