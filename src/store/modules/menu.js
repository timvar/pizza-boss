import { firestoreAction } from 'vuexfire';
import { db } from '../../firebaseConfig';

const state = {
  pizzas: []
};

const getters = {
  pizzas: state => state.pizzas
};

const mutations = {

};

const actions = {
  /*
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('menuItem', ref);
  })
  */
  bindPizzas: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('pizzas', db.collection('pizzas'));
  }),
  addMenuItem: firestoreAction((_, menuItem) => {
    console.log(menuItem);
    // return db.collection('menu').add(menuItem);
  })

};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: TextTrackCueList
};
