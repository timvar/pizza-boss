import { firebaseAction } from 'vuexfire/dist/packages/vuexfire/src';

const state = {
  pizzas: []
};

const getters = {
  pizzas: state => state.pizzas
};

const mutations = {

};

const actions = {
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('menuItem', ref);
  })
};

export default {
  state,
  getters,
  mutations,
  actions
};
