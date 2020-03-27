import Vue from 'vue';
import Vuex from 'vuex';

import menu from './modules/menu';
import orders from './modules/orders';
import users from './modules/users';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  mutations: { ...vuexfireMutations },
  modules: {
    menu,
    orders,
    users
  }
});
