import { createStore } from "vuex";

const store = createStore({
  state: {
    data: {},
    dummyData: [],
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
    dummyData(state) {
      return state.dummyData;
    },
  },
});

export default store;
