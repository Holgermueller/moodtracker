<template>
  <div>
    <div class="sign-in-sign-up-tabs">
      <button @click="hideSignUp">Log In</button
      ><button @click="hideLogIn">Sign Up</button>
    </div>

    <div class="forms-holder">
      <Login id="logInForm" class="log-in-form" />
      <Signup id="signUpForm" class="sign-up-form" />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  components: {
    Login,
    Signup,
  },

  methods: {
    hideSignUp() {
      document.getElementById("logInForm").style.display = "block";
      document.getElementById("signUpForm").style.display = "none";
    },

    hideLogIn() {
      document.getElementById("logInForm").style.display = "none";
      document.getElementById("signUpForm").style.display = "block";
    },
  },
};
</script>

<style scoped>
.sign-in-sign-up-tabs {
  width: 55%;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  border-top: 1px solid #080808;
  border-bottom: 1px solid #080808;
}
button {
  font-size: 1.5rem;
  border: none;
  background: none;
  padding: 0.5rem;
}

button:hover {
  cursor: pointer;
}

.forms-holder {
  width: 45%;
  margin: auto;
}

.sign-up-form {
  display: none;
}
</style>
