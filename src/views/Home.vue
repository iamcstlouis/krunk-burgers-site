<template>
  <div class="home">
    <HomepageHero />
  </div>
</template>

<script>
// @ is an alias to /src
import HomepageHero from "@/components/HomePageHero.vue";

export default {
  name: "Home",
  components: {
    HomepageHero
  }
};
</script>
