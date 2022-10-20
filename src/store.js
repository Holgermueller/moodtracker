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
    async flameOn({ commit }, payload) {
      const API_KEY = process.env.VUE_APP_MARVEL_KEY;
      const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_KEY;
      const ts = Date.now();
      const hash = crypto
        .createHash("md5")
        .update(ts + PRIVATE_KEY + API_KEY)
        .digest("hex");

      const name = payload.name;

      await fetch(
        "http://gateway.marvel.com/v1/public/characters?name=" +
          name +
          "&ts=" +
          ts +
          "&apikey=" +
          API_KEY +
          "&hash=" +
          hash
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.results[0]);
          let characterData = {
            name: data.data.results[0].name,
            image:
              data.data.results[0].thumbnail.path +
              "." +
              data.data.results[0].thumbnail.extension,
            detail: data.data.results[0].urls[0].url,
            comicLink: data.data.results[0].urls[1].url,
            description: data.data.results[0].description,
          };
          commit("SET_DATA", characterData);
        })
        .catch((err) => {
          console.log("Error is: " + err);
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
