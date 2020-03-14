import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [
      {
        name: 'Margarita',
        options: [{
          size: 9,
          price: 6.95
        }, {
          size: 12,
          price: 10.95
        }]
      },
      {
        name: 'Pepperoni',
        options: [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 11.95
        }]
      },
    ],
    orders: [],
    currentUser: null
  },
  getters: {
    pizzas: state => state.pizzas,
    numberOfOrders: state => {
      return state.orders.length;
    },
    currentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, orders) => state.orders.push(orders),
    userStatus: (state, user) => {
      state.currentUser = user ? user : null
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit('userStatus', user);
    }
  },
  modules: {
  }
})
