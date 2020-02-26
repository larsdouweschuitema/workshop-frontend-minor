import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  houses: [],
  houseType: ''
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
