import { createStore } from "vuex";

const store = createStore({
  state: {
    mostRecentWeather: [],
  },

  mutations: {
    SET_WEATHER(state, payload) {
      state.mostRecentWeather = payload;
    },
  },

  actions: {
    async getWeather() {
      const API_KEY = process.env.VUE_APP_MARS_WEATHER_KEY;
      const response = await fetch(
        "https://api.nasa.gov/insight_weather/?api_key=" +
          API_KEY +
          "&feedtype=json&ver=1.0"
      );

      // const myJson = await response.json();

      console.log(response);
    },
  },

  getters: {
    mostRecentWeather(state) {
      return state.mostRecentWeather;
    },
  },
});

export default store;
