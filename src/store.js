import { createStore } from "vuex";

const store = createStore({
  state: {
    imageData: {},
  },

  mutations: {
    SET_IMAGE(state, payload) {
      state.imageData = payload;
    },
  },

  actions: {
    async getImage({ commit }) {
      const API_KEY = process.env.VUE_APP_MARS_WEATHER_KEY;

      await fetch("https://api.nasa.gov/planetary/apod?api_key=" + API_KEY)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("SET_IMAGE", data);
        });
    },
  },

  getters: {
    imageData(state) {
      return state.imageData;
    },
  },
});

export default store;
