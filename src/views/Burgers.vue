<template>
  <div class="burgers">
    <MenuBase>
      <div class="menu-hdr">
        <div class="content-wrapper">
          <img src="./../assets/menu/burgers/burgers-splat.png" alt class="menu-hdr-graphic" />
        </div>
      </div>

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
  },
  computed: {
    active() {
      const path = this.$route.path.split("/");
      return path[path.length - 1].toLowerCase() === "burgers";
    }
  }
};
</script>

<style lang="scss">
.menu-hdr {
  position: absolute;
  z-index: 4;
  margin-top: 3rem;

  @media screen and (min-width: 1280px) {
    margin-top: 0.7rem;
  }

  .content-wrapper {
    width: 35.1rem;
    text-align: left;

    img {
      width: 50%;
      margin-left: 1rem;

      @media screen and (min-width: 1024px) {
        width: 80%;
      }

      @media screen and (min-width: 1280px) {
        width: 100%;
      }
    }
  }
}
</style>
