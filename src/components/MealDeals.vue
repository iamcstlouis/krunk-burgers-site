<template>
  <section class="meal-deals">
    <div class="container">
      
      <div class="hdr-section">
        <h1>Meal Deals</h1>
        <h3>Meals served with regular fries and a soft drink</h3>
      </div>

      <div class="cards">
        <BurgerCard>
          <img src="./../assets/menu/burgers/beef-burger-1.jpg" alt="" class="card-img">
          <div class="meal-info">
              <h2>Krunk Burger</h2>
              <p class="meal-desc">
                2 x smashed beef patties, 2 x slices of cheese, topped with Krunk burger sauce, pickles, lettuce, tomato & onion
              </p>
          </div>
        </BurgerCard>
      </div>
      
    </div>
  </section>
</template>

<script>
import BurgerCard from '@/components/BurgerCard.vue';

export default {
  name: "MealDeals",
  components: {
    BurgerCard
  }
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

    .cards {
      margin-top: 9.3rem;
    }
  }
}
</style>
