<template>
  <div id="SignUp">
    <h2>Sign Up:</h2>

    <form action="">
      <input type="text" name="username" id="username" placeholder="Username" />
      <input type="email" name="email" id="signupEmail" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="signupPassword"
        placeholder="Password"
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
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

<style scoped>
input,
button {
  padding: 8px;
  margin: 8px auto;
  font-size: large;
  border-radius: 5px;
  border: 1px solid black;
}
input {
  width: 100%;
}
</style>
