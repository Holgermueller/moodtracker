<template>
  <div id="SignIn">
    <h2>Log In:</h2>
    <form action="">
      <input type="email" name="email" id="loginEmail" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="loginPassword"
        placeholder="Password"
      />
      <button type="button" @click="loginUser">Log In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginFrom",

  data: () => ({}),

  methods: {
    loginUser() {
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
