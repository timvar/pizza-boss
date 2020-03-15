const state = {
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
  ]
}

const getters = {
  pizzas: state => state.pizzas,
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
