import { firestoreAction, vuexfireMutations } from 'vuexfire';
import { db } from '../../firebaseConfig';

export default {
  state: {
    orders: []
  },
  getters: {
    numberOfOrders: state => state.orders.length,
    getOrders: state => state.orders
  },
  mutations: vuexfireMutations,
  actions: {
    /*
    setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('orders', ref);
    })
    */
    bindOrders: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('orders', db.collection('orders'));
    }),
    addOrder: firestoreAction((_, basket) => {
      return db.collection('orders').add(basket);
    }),
    removeOrderItem: firestoreAction((_, orderId) => {
      db.collection('orders').doc(orderId).delete();
    })
  },
  namespaced: TextTrackCueList
};
