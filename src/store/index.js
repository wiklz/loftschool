import Vue from 'vue'
import Vuex from 'vuex'
import data from './../data/goods'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    msg: 'Hello world',
    goods: [],
    total: 0,
    checkedItems: []
  },
  getters: {
    getGoods (state) {
      return state.goods
    },
    totalPrice (state) {
      let price = 0
      for (const good of state.goods) {
        price += good.price * good.count
      }
      return price
    },
    taxRate (state) {
      let taxes = 0
      for (const good of state.goods) {
        taxes += good.price * good.count
      }
      taxes = taxes * 0.18
      return taxes.toFixed(0)
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
      Good.index = -1
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
    },
    counterReduce ({ commit }, item) {
      commit('COUNTER_REDUCE', item)
    },
    counterAdd ({ commit }, item) {
      commit('COUNTER_ADD', item)
    },
    saveCount ({ commit }, good) {
      commit('SAVE_COUNT', good)
    },
    check ({ commit }, item) {
      commit('CHECK', item)
    },
    delete ({ commit }) {
      commit('DELETE')
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
    },
    COUNTER_REDUCE (state, item) {
      let value = Number(item.value) - 1
      let good = item.good
      if (document.querySelector('#counter').value > 0) {
        document.querySelector('#counter').value--
      } else {
        document.querySelector('#counter').value = 0
        value = 0
      }
      document.querySelector('#finalPrice').innerText = good.price * value
    },
    COUNTER_ADD (state, item) {
      let value = Number(item.value) + 1
      let good = item.good
      document.querySelector('#counter').value++
      document.querySelector('#finalPrice').innerText = good.price * value
    },
    SAVE_COUNT (state, good) {
      good.count = Number(document.querySelector('#counter').value)
    },
    CHECK (state, box) {
      if (box.target.checked) {
        state.checkedItems.push(box.good.index)
      } else {
        for (const item of state.checkedItems) {
          if (item === box.good.index) {
            state.checkedItems.splice(state.checkedItems.indexOf(item), 1)
          }
        }
      }
      document.querySelector('#checkedItems').innerText = state.checkedItems.length
    },
    DELETE (state) {
      for (let i = 0; i < state.goods.length; i++) {
        for (const item of state.checkedItems) {
          if (state.goods[i].index === item) {
            state.goods.splice(i, 1)
          }
        }
      }
      state.checkedItems = []
      document.querySelector('#checkedItems').innerText = 0
      for (const input of document.querySelectorAll('.checkbox-input')) {
        input.checked = false
      }
    }
  }
})
