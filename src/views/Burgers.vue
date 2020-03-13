<template>
  <div class="burgers">
    <MenuBase>
          <h1 class="test">{{$store.state.testTitle}}</h1>

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

<style lang="scss" scoped></style>
