<template>
  <main>
    <Header />
    <StickyHeader />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import StickyHeader from "./components/StickyHeader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    StickyHeader,
    Footer,
  },

  computed: {
    characterData() {
      return this.$store.getters.data;
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
</style>
