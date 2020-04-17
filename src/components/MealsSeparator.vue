<template>
  <div class="meals-separator">
    <div class="content-wrapper">
      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealsSeparator"
};
</script>

<style lang="scss" scoped>
.meals-separator {
  .content-wrapper {
    padding: 3.6rem 0 0rem 0;

    @media screen and (min-width: 768px) {
      padding: 9.6rem 0 4.6rem 0;
    }

    .separator {
      width: 100%;
      height: 0.35rem;
      background-color: #f9b450;
    }
  }
}
</style>
