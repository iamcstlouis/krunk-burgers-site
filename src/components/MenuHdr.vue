<template>
  <div class="menu-hdr">
    <div class="content-wrapper">
      <img src="./../assets/menu/burgers/burgers-splat.png" alt class="menu-hdr-graphic" />
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

  @media screen and (min-width: 1280px) {
    margin-top: 0.7rem;
  }

  .content-wrapper {
    width: 35.1rem;
    text-align: left;

    img {
      width: 50%;
      margin-left: 1rem;

      @media screen and (min-width: 1024px) {
        width: 80%;
      }

      @media screen and (min-width: 1280px) {
        width: 100%;
      }
    }
  }
}
</style>
