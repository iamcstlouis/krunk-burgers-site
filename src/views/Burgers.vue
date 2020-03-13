<template>
  <div class="burgers">
    <MenuBase>
  
      <BurgerMealDeals />

    </MenuBase>
  </div>
</template>

<script>
import MenuBase from "@/components/MenuBase.vue";
import BurgerMealDeals from "@/components/BurgerMealDeals.vue";

export default {
  name: "Menu",
  components: {
    MenuBase,
    BurgerMealDeals
  }
};
</script>

<style lang="scss" scoped>

</style>
