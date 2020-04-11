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
    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import ShakesMealDeals from "@/components/ShakesMealDeals.vue";
export default {
  name: "Shakes",
  components: {
    MenuBase,
    ShakesMealDeals
  }
};
</script>

<style lang="scss">
</style>