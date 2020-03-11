<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

html {
  font-size: 62.5%;
}

body {
  font-size: 16px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: "dnk";
  src: url(assets/fonts/dnk.ttf);
  font-style: normal;
}

h1 {
  font-family: "dnk";
}

a {
   text-decoration: none;

   &:hover {
     text-decoration: none;
   }
}
</style>
