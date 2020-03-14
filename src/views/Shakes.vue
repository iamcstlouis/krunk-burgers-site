<template>
  <div class="menu-shakes">
    <MenuBase>
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

<style lang="scss" scoped>
</style>