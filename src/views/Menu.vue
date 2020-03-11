<template>
  <div class="menu">
    <div class="container">
      <!-- Deliveroo Widget -->
      <DeliverooWidget />

      <h1>Menu</h1>
      <SubMenu />
    </div>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";
import SubMenu from "@/components/SubMenu.vue";

export default {
  name: "Menu",
  components: {
    DeliverooWidget,
    SubMenu
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #f9b450;

  .container {
    h1 {
      font-size: 5rem;
      color: #b23c52;
      text-decoration: underline;
      margin-bottom: 0;

      @media (min-width: 1024px) {
        font-size: 6.7rem;
      }
    }

    .deliveroo-widget {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-left: auto;
    }
  }
}
</style>
