<template>
  <div id="moodButtons">
    <p>How are you feeling today?</p>
    <div v-for="mood in moods" :key="mood.mood" class="buttons-array">
      <button
        :style="`
      border: 2px solid ${mood.borderColor};
      color: ${mood.borderColor};
      `"
      >
        {{ mood.mood }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoodButtons",

  props: {
    moods: {
      type: Array,
    },
  },

  data: () => ({}),

  methods: {},
};
</script>

<style scoped>
.button-array {
  display: inline;
  justify-content: center;
  padding: 8px;
}

button {
  margin: auto;
  border-radius: 5px;
  width: 15%;
}
</style>
