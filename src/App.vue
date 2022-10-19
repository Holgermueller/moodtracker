<template>
  <main
    :style="{
      background: 'url(' + imageData.photos[0].img_src + ') ',
    }"
  >
    <h1>Today's Image</h1>

    <h2>Courtesy of: {{ imageData.photos[0].rover.name }}</h2>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},

  created() {
    this.$store.dispatch("getImage").then(() => console.log("image fetched"));
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
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 100vh;
}
h1,
h2 {
  margin: 0 auto;
  padding: 8px;
  background-color: hsla(0, 83%, 50%);
  color: #080808;
  width: max-content;
}
</style>
