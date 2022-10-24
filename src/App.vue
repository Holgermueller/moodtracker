<template>
  <main>
    <Header />

    <CharacterNameDisplay :characterName="characterData.name" />

    <img :src="characterData.image" alt="" />

    <Description :description="characterData.description" />

    <a :href="characterData.detail" target="_blank">Link1</a>
    <br />
    <a :href="characterData.comicLink" target="_blank">Link2</a>

    <Footer />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import CharacterNameDisplay from "./components/CharacterNameDisplay.vue";
import Description from "./components/Description.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    CharacterNameDisplay,
    Description,
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
