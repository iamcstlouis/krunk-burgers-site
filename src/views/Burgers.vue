<template>
  <div class="burgers">
    <MenuBase>
  
      <MealDeals />

    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import MealDeals from "@/components/MealDeals.vue";

export default {
  name: "Menu",
  components: {
    MenuBase,
    MealDeals
  }
};
</script>

<style lang="scss" scoped>

</style>
