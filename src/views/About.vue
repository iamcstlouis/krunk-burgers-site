<template>
  <div class="about">
    <b-container>
      <DeliverooWidget />
      <AboutKrunk />
    </b-container>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget";
import AboutKrunk from "@/components/AboutKrunk";

export default {
  name: "About",
  components: {
    DeliverooWidget,
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
  padding: 0 0 10rem 0;

  @media screen and (min-width: 1200px) {
    padding-bottom: 15rem;
  }

  .deliveroo-widget {
    margin-left: auto;
  }
}
</style>
