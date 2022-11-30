<template>
  <div id="main">
    <section class="moods-display">
      <p>Hello, {{ userProfile.username }}</p>

      <p>Instances tracked: {{ instancesTracked }}</p>

      <div class="graphs">
        <div
          class="mood"
          v-for="mood in userProfile.userMoods"
          :key="mood.mood"
        >
          <div
            class="single-mood"
            :class="mood.mood"
            :style="`width: ${
              Math.floor((100 / instancesTracked) * mood.timesFelt) || 0
            }%;
          background: ${mood.color}; border-left: 4px solid ${mood.borderColor};
          `"
          ></div>
          <span> {{ mood.mood }} | Times felt:{{ mood.timesFelt }} </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "moodsDisplay",

  data: () => ({}),

  computed: {
    userProfile() {
      return this.$store.getters.dummyData[0];
    },

    instancesTracked() {
      return this.$store.getters.dummyData[0].userMoods.reduce(
        (a, { timesFelt }) => a + timesFelt,
        0
      );
    },
  },

  methods: {},
};
</script>

<style scoped>
.moods-display {
  width: 45%;
  margin: 8px auto;
}

.graphs {
  width: 75%;
  margin: 0 auto;
}

.mood {
  background: #fafafa;
  margin: 10px auto;
  position: relative;
}

.single-mood {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
}

span {
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}
</style>
