<template>
  <div id="SignUp">
    <h2>Sign Up:</h2>

    <form action="">
      <input type="text" name="username" id="username" />
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <input type="password" name="confirmPassword" id="confirmPassword" />
      <button type="button" @click="submitUserData" id="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",

  data: () => ({}),

  methods: {
    submitUserData() {
      console.log("click");
    },
  },
};
</script>

<style scoped></style>
