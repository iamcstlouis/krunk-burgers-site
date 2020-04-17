<template>
  <div class="hdr-section">
    <h1 data-aos="fade-right" data-aos-delay="1800">{{ MealDealstitle }}</h1>
    <h3 data-aos="fade-left" data-aos-delay="2000">{{ MealDealsExcerpt }}</h3>
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

    @media screen and (min-width: 768px) {
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