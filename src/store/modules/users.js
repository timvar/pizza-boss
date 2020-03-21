export default {
  state: {
    currentUser: null
  },
  getters: {
    currentUser: state => state.currentUser
  },
  mutations: {
    userStatus: (state, user) => {
      state.currentUser = user ? user.email : null;
    }
  },
  actions: {
    setUser: ({ commit }, user) => {
      commit('userStatus', user);
    }
  }
};
