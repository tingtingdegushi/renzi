
import { setToken, getToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  // 2. 页面刷新初始化时, 尝试恢复
  token: getToken()
}

const mutations = {
  setToken(state, data) {
    // 这里只是对 vuex 数据的处理
    // 但是没有持久化
    // 持久化的两个步骤
    // 1. 数据发生变化时, 存放起来
    setToken(data)

    state.token = data
  }
}

const actions = {
  async login({ commit }, data) {
    const res = await login(data)
    // res.data.data 就是 token
    console.log('将登录页的逻辑移动到 vuex 里面')
    commit('setToken', res.data.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

