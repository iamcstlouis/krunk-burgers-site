<template>
  <div class="menu-hdr">
    <div class="content-wrapper">
      <img src="./../assets/menu/burgers/burgers-splat.png" alt class="menu-hdr-graphic" />
      <!-- <img
        src="./../assets/menu/wings/wings-splat.png"
        alt
        class="menu-hdr-graphic"
        v-else-if="$routes.meta.wingsMenu"
      />
      <img
        src="./../assets/menu/shakes-n-smoothies/shakes-splat.png"
        alt
        class="menu-hdr-graphic"
        v-else-if="$routes.meta.shakesMenu"
      />-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuHdr"
};
</script>

<style lang="scss" scoped>
.menu-hdr {
  position: absolute;
  z-index: 4;
  margin-top: 3rem;

  @media (min-width: 1280px) {
    margin-top: 0.7rem;
  }

  .content-wrapper {
    width: 35.1rem;
    text-align: left;

    img {
      width: 50%;
      margin-left: 1rem;

      @media (min-width: 1024px) {
        width: 80%;
      }

      @media (min-width: 1280px) {
        width: 100%;
      }
    }
  }
}
</style>
