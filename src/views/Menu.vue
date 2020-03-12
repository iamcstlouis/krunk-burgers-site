<template>
  <div class="menu">
    <div class="container">
      <!-- Deliveroo Widget -->
      <DeliverooWidget />

      <h1>Menu</h1>
      <SubMenu />
      <MenuHdr />
      <MealDeals />
    </div>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";
import SubMenu from "@/components/SubMenu.vue";
import MealDeals from "@/components/MealDeals.vue";
import MenuHdr from "@/components/MenuHdr.vue";

export default {
  name: "Menu",
  components: {
    DeliverooWidget,
    SubMenu,
    MealDeals,
    MenuHdr
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #f9b450;
  padding-bottom: 12rem;

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

    .deliveroo-widget {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-left: auto;
      margin-right: auto;

      @media (min-width: 768px) {
        margin-right: 0;
      }
    }
  }
}
</style>
