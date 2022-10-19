<template>
  <main>
    <img :src="imageData.url" alt="Today's picture" />
    {{ imageData.copyright }}
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},

  created() {
    this.$store.dispatch("getImage").then(() => console.log("weather fetched"));
  },

  computed: {
    imageData() {
      console.log("gt data");
      return this.$store.getters.imageData;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
