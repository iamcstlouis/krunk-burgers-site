<template>
  <div class="hdr-section">
    <h1>{{ MealDealstitle }}</h1>
    <h3>{{ MealDealsExcerpt }}</h3>
  </div>
</template>

<script>
export default {
  name: "MealDealsHdrExcerpt",
  data: () => ({
    MealDealstitle: "Meal Deals",
    MealDealsExcerpt: "Meals served with regular fries and a soft drink"
  })
};
</script>

<style lang="scss" scoped>
.hdr-section {
  h1 {
    color: #b23c52;

    @media (min-width: 768px) {
      font-size: 42px;
    }
  }

  h3 {
    margin: 0;
    color: #b23c52;
    font-size: 16px;
  }
}
</style>