<template>
  <div>
    <h2 v-if="description">
      {{ description }}
    </h2>
    <h2 v-else>Oops! Looks like this character doesn't have a description!</h2>
  </div>
</template>

<script>
export default {
  name: "Description",

  props: {
    description: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
