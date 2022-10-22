<template>
  <main>
    <SubmitForm />

    {{ characterData.name }}

    <img :src="characterData.image" alt="" />

    <div>
      {{ characterData.description }}
    </div>

    <a :href="characterData.detail" target="_blank">Link1</a>
    <br />
    <a :href="characterData.comicLink" target="_blank">Link2</a>

    <Footer />
  </main>
</template>

<script>
import SubmitForm from "./components/SubmitForm.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    SubmitForm,
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
