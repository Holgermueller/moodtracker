<template>
  <div id="main">
    <section class="moods-display">
      <p>Hello, {{ userProfile.username }}</p>

      <MoodButtons :moods="userProfile.userMoods" />

      <p>Instances tracked: {{ instancesTracked }}</p>

      <MoodGraphs :moods="userProfile.userMoods" />
    </section>
  </div>
</template>

<script>
import MoodButtons from "../components/MoodButtons.vue";
import MoodGraphs from "../components/MoodGraphs.vue";

export default {
  name: "moodsDisplay",

  components: {
    MoodGraphs,
    MoodButtons,
  },

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
</style>
