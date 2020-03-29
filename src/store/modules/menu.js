import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from '../../firebaseConfig';

export default {
  state: {
    pizzas: []
  },
  getters: {
    pizzas: state => state.pizzas
  },
  mutations: vuexfireMutations,
  actions: {
    bindPizzas: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('pizzas', db.collection('pizzas'));
    }),
    addMenuItem: firestoreAction((_, menuItem) => {
      return db.collection('pizzas').add(menuItem);
    })
  },
  namespaced: TextTrackCueList
};

/*
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('menuItem', ref);
  })
  */
