<template>
  <div class="menu-shakes">
    <MenuBase>
      <div class="menu-hdr">
        <div class="content-wrapper">
          <img
            src="./../assets/menu/shakes-n-smoothies/shakes-splat.png"
            alt
            class="menu-hdr-graphic"
          />
        </div>
      </div>
      <ShakesMealDeals />

      <div class="menu-hdr">
        <div class="content-wrapper">
          <img
            src="./../assets/menu/shakes-n-smoothies/smoothies-splat.png"
            alt
            class="menu-hdr-graphic"
          />
        </div>
      </div>
      <SmoothiesMealDeals />
    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import ShakesMealDeals from "@/components/ShakesMealDeals.vue";
import SmoothiesMealDeals from "@/components/SmoothiesMealDeals.vue";
export default {
  name: "Shakes",
  components: {
    MenuBase,
    ShakesMealDeals,
    SmoothiesMealDeals
  }
};
</script>

<style lang="scss">
</style>