import { firebaseAction } from 'vuexfire';
export default {
  state: {
    orders: []
  },
  getters: {
    numberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
  },
  mutations: {
    addOrder: (state, orders) => state.orders.push(orders)
  },
  actions: {
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('orders', ref);
    })
  }
};
