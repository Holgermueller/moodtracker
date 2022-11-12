<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Art</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
      </nav>
    </header>
  </div>
</template>

<style scoped>
nav {
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  flex-wrap: wrap;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
a {
  text-decoration: none;
  padding: 4px;
  color: black;
}
</style>
