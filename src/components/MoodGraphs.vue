<template>
  <div id="moodGraphs">
    <div class="graphs">
      <div class="mood" v-for="mood in moods" :key="mood.mood">
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
  </div>
</template>

<script>
export default {
  name: "MoodGraphs",

  props: {
    moods: {
      type: Array,
    },
  },

  computed: {
    instancesTracked() {
      return this.$store.getters.dummyData[0].userMoods.reduce(
        (a, { timesFelt }) => a + timesFelt,
        0
      );
    },
  },

  data: () => ({}),
};
</script>

<style scoped>
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
