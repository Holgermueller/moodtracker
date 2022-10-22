<template>
  <div>
    <form ref="form">
      <input type="text" v-model="name" name="" id="" />
      <button @click.prevent="getCharacter" type="submit">Submit</button>
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
