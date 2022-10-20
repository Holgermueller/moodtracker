import { createStore } from "vuex";
const crypto = require("crypto");

const store = createStore({
  state: {
    data: {},
  },

  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },

  actions: {
    async flameOn({ commit }) {
      const API_KEY = process.env.VUE_APP_MARVEL_KEY;
      const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_KEY;
      const ts = Date.now();
      const hash = crypto
        .createHash("md5")
        .update(ts + PRIVATE_KEY + API_KEY)
        .digest("hex");

      console.log(hash);

      await fetch(
        "http://gateway.marvel.com/v1/public/comics?ts=" +
          ts +
          "&api_key=" +
          API_KEY +
          "&hash=" +
          hash
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          commit("SET_DATA", data);
        });
    },
  },

  getters: {
    data(state) {
      return state.data;
    },
  },
});

export default store;
