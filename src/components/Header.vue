<template>
  <div>
    <h1>Holger Mueller</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
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
