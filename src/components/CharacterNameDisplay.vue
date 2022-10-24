<template>
  <h1>
    {{ characterName }}
  </h1>
</template>

<script>
export default {
  name: "CharacterNameDisplay",

  props: {
    characterName: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
