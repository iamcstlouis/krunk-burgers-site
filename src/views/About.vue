<template>
  <div class="about">
    <AboutKrunk />
  </div>
</template>

<script>
import AboutKrunk from "@/components/AboutKrunk";

export default {
  name: "About",
  components: {
    AboutKrunk
  }
};
</script>

<style lang="scss">
.about {
  background: #f9b450;
  background-image: url("../assets/about/about-buildings.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 6rem 0 10rem 0;

  @media screen and (min-width: 1200px) {
    padding-bottom: 15rem;
  }
}
</style>
