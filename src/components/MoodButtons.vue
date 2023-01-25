<template>
  <div id="moodButtons">
    <div class="mood-range-card">
      <p>How are you feeling today?</p>
      <div v-for="mood in moods" :key="mood.mood" class="buttons-array">
        <button
          :id="mood.mood"
          class="mood-button"
          :style="`
      border: 2px solid ${mood.borderColor};
      color: ${mood.borderColor};
      `"
          @click.prevent="incrementMood"
        >
          {{ mood.mood }}
        </button>
      </div>
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

  methods: {
    incrementMood(e) {
      console.log(e.currentTarget.id);
    },
  },
};
</script>

<style scoped>
p {
  width: fit-content;
  margin: 4px auto;
  font-size: large;
  font-weight: bold;
}
.buttons-array {
  display: inline;
  justify-content: center;
}

mood-button {
  margin: 4px auto;
  border-radius: 7px;
  width: 100%;
}
</style>
