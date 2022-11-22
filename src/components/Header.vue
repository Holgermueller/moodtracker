<template>
  <div>
    <header>
      <h1>MOOD TRACKER</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1 {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-clip: text;
  color: transparent;
  width: max-content;
  margin: auto;
  font-weight: bolder;
}
</style>
