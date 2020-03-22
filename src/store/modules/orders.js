import { firestoreAction } from 'vuexfire';
import { db } from '../../firebaseConfig';

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
    /*
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('orders', ref);
    })
    */
    bindOrders: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('orders', db.collection('orders'));
    })
  }
};
