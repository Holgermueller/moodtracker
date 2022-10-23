<template>
  <div>
    <form ref="form">
      <input type="text" v-model="name" name="name" id="name" class="name" />
      <button @click.prevent="getCharacter" class="submit" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SubmitForm",

  data: () => ({
    name: "",
  }),

  methods: {
    getCharacter() {
      this.$store.dispatch("flameOn", {
        name: this.name,
      });
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.name {
  padding: 8px;
  font-size: 2rem;
  border-radius: 5px;
  margin: 2px;
}
.submit {
  padding: 8px;
  font-size: 2rem;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  margin: 2px;
}
</style>
