import Vue from 'vue'
import Vuex from 'vuex'
import data from './../data/goods'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    msg: 'Hello world',
    goods: [],
    total: 0
  },
  getters: {
    getGoods (state) {
      return state.goods
    }
  },
  actions: {
    getGoods ({ commit }) {
      class Good {
        constructor (description = '', price = 0, img = '') {
          this.name = description
          this.price = price
          this.img = img
          this.count = 1
          this.modal = false
          Good.index += 1
        }
      }
      Good.index = 0
      let items = []
      for (const index in data.goods) {
        items[index] = new Good(data.goods[index].name, data.goods[index].price, data.goods[index].img)
        items[index].index = Good.index
      }
      commit('SET_GOODS', items)
    },
    closeModal ({ commit, state }) {
      for (const good of state.goods) {
        if (good.modal === true) {
          commit('CLOSE_MODAL')
        }
      }
    }
  },
  mutations: {
    SET_GOODS (state, goods) {
      state.goods = goods
    },
    CLOSE_MODAL (state) {
      for (const good of state.goods) {
        good.modal = false
      }
    }
  }
})
