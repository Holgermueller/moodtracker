<template>
  <div>
    <div class="container">
      <div class="logo">M</div>
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
.logo {
  font-weight: bolder;
  font-size: 3rem;
  background-color: red;
  color: white;
  width: fit-content;
  padding: 8px;
}
.grid-item-two {
  margin: auto;
}
</style>
