<template>
  <div>
    <div class="container">
      <div class="logo-container">
        <div class="logo">M</div>
        <div class="overlay">Comics</div>
      </div>

      <SubmitForm class="grid-item-two" />
    </div>
  </div>
</template>

<script>
import SubmitForm from "./SubmitForm.vue";
export default {
  name: "Header",

  components: { SubmitForm },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.logo-container {
  display: grid;
  align-items: center;
  padding: 8px;
}
.logo {
  font-weight: bolder;
  font-size: 5rem;
  color: red;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  width: fit-content;
  padding: 8px;
  position: relative;
}
.overlay {
  color: yellow;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  position: absolute;
  font-size: 2rem;
  font-family: cursive;
  font-weight: bold;
  transform: skew(-15deg, -15deg);
}
.grid-item-two {
  margin: auto;
}
</style>
