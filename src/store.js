import { createStore } from "vuex";

const store = createStore({
  state: {
    data: {},
    dummyData: [
      {
        username: "Namey Name",
        userMoods: [
          {
            mood: "Bored",
            timesFelt: 1,
            borderColor: "green",
            color: "rgba(69, 196, 150, 0.2)",
          },
          {
            mood: "Happy",
            timesFelt: 2,
            borderColor: "#ffd700",
            color: "rgba(255, 215, 0, 0.2)",
          },
          {
            mood: "Sad",
            timesFelt: 3,
            borderColor: "blue",
            color: "rgba(0, 0, 255, 0.2)",
          },
          {
            mood: "Tired",
            timesFelt: 4,
            borderColor: "#9932cc",
            color: "rgba(153, 50, 204, 0.2)",
          },
          {
            mood: "Anxious",
            timesFelt: 5,
            borderColor: "#ffa500",
            color: "rgba(255, 165, 0, 0.2)",
          },
          {
            mood: "Angry",
            timesFelt: 6,
            borderColor: "red",
            color: "rgba(217, 27, 66, 0.2)",
          },
          {
            mood: "Uncomfortable",
            timesFelt: 7,
            borderColor: "#40E0D0",
            color: "rgba(64, 224, 208, 0.2)",
          },
          {
            mood: "Calm",
            timesFelt: 8,
            borderColor: "#00005f",
            color: "rgba(0, 0, 95, 0.2)",
          },
          {
            mood: "Weird",
            timesFelt: 9,
            borderColor: "#ff00ff",
            color: "rgba(255, 0, 255, 0.2)",
          },
        ],
      },
    ],
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
