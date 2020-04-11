<template>
  <div class="menu-wings">
    <MenuBase>
      <div class="menu-hdr">
        <div class="content-wrapper">
          <img src="./../assets/menu/wings/wings-splat.png" alt class="menu-hdr-graphic" />
        </div>
      </div>

      <WingMealDeals />
    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import WingMealDeals from "@/components/WingMealDeals.vue";

export default {
  name: "Wings",
  components: {
    MenuBase,
    WingMealDeals
  }
};
</script>

<style lang="scss"></style>
