<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomepageHero />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomepageHero from "@/components/HomePageHero.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    HomepageHero
  }
};
</script>
