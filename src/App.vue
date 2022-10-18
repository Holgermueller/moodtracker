<template>
  <h1>Data will appear here:</h1>
</template>

<script>
export default {
  name: "App",
  components: {},

  created() {
    this.$store
      .dispatch("getWeather")
      .then(() => console.log("weather fetched"));
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
