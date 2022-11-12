import { createStore } from "vuex";

const store = createStore({
  state: {
    data: {},
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },

  actions: {},

  getters: {
    data(state) {
      return state.data;
    },
  },
});

export default store;
