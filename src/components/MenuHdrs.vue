<template>
  <div class="menu-hdr">
    <div class="content-wrapper">
      <img src="./../assets/burgers-splat.png" alt class="menu-hdr-graphic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuHdrs"
};
</script>

<style lang="scss" scoped>
.menu-hdr {
  position: absolute;
  z-index: 4;
  margin-top: 3rem;

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