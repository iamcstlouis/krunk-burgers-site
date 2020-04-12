<template>
  <div class="desserts">
    <MenuBase>
      <div class="menu-hdr">
        <div class="content-wrapper">
          <img src="./../assets/menu/dessert/desserts-splat.png" alt class="menu-hdr-graphic" />
        </div>
      </div>

      <DessertsMealDeals />
    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import DessertsMealDeals from "@/components/DessertsMealDeals.vue";

export default {
  name: "Desserts",
  components: {
    MenuBase,
    DessertsMealDeals
  }
};
</script>

<style lang="scss">
</style>