<template>
  <section class="meal-deals">
    <div class="container">
      <div class="hdr-section">
        <h1>Meal Deals</h1>
        <h3>Meals served with regular fries and a soft drink</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MealDeals"
};
</script>

<style lang="scss" scoped>
.meal-deals {
  position: relative;
  background-color: #fff;
  margin-top: 10.5rem;
  padding: 9.2rem 2rem;

  @media (min-width: 1024px) {
    padding: 9.2rem 7.2rem;
    margin-top: 14.5rem;
  }

  @media (min-width: 1280px) {
    margin-top: 17.5rem;
  }

  .container {
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
  }
}
</style>
