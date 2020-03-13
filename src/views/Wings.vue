<template>
  <div class="menu-wings">
    <MenuBase>
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

<style lang="scss" scoped></style>
