<template>
  <div class="menu-base">
    <b-container>
      <!-- Comic Text -->
      <ComicText />

      <!-- Deliveroo Widget -->
      <DeliverooWidget />

      <h1>Menu</h1>
      <SubMenu />
      <MenuHdr />
      <slot></slot>
    </b-container>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";
import SubMenu from "@/components/SubMenu.vue";
import MenuHdr from "@/components/MenuHdr.vue";
import ComicText from "@/components/ComicText.vue";

export default {
  name: "MenuBase",
  components: {
    DeliverooWidget,
    SubMenu,
    MenuHdr,
    ComicText
  }
};
</script>

<style lang="scss" scoped>
.menu-base {
  position: relative;
  background-color: #f9b450;
  padding-bottom: 12rem;

  @media (min-width: 1280px) {
    padding-bottom: 20rem;
  }

  .container {
    h1 {
      font-size: 5rem;
      color: #b23c52;
      text-decoration: underline;
      margin-bottom: 0;
      margin-top: 3rem;

      @media (min-width: 768px) {
        margin-top: 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 6.7rem;
        margin-top: 0;
      }
    }

    .comic-text {
      position: absolute;
      left: 0;
      display: none;

      @media (min-width: 576px) {
        display: block;
      }
    }

    .deliveroo-widget {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: 576px) {
        margin-right: 0;
      }
    }
  }
}
</style>
