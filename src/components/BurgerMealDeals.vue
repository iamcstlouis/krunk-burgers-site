<template>
  <section class="burger-meal-deals">
    <div class="container">
      <div class="hdr-section">
        <h1>Meal Deals</h1>
        <h3>Meals served with regular fries and a soft drink</h3>
      </div>

      <!-- Beef Burgers  -->
      <div class="cards cards__beef">
        <!-- Menu Tab -->
        <MenuTab>
          <h2>Beef</h2>
        </MenuTab>

        <BurgerCard v-for="(obj, key) in beefBurger" :key="key">
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img v-bind:src="obj.burgerImg" />
            <div class="meal-info">
              <h2>{{ obj.burgerName }}</h2>
              <p class="meal-desc">{{ obj.burgerDesc }}</p>
            </div>
          </a>
        </BurgerCard>
      </div>

      <MealsSeparator />

      <div class="cards cards__chicken">
        <!-- Menu Tab -->
        <MenuTab>
          <h2>Chicken</h2>
        </MenuTab>

        <!-- Card 01 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/chicken-burger-1.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Classic</h2>
              <p class="meal-desc">Cheese, pickles, home-made coleslaw & burger</p>
            </div>
          </a>
        </BurgerCard>

        <!-- Card 02 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/chicken-burger-2.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Flamer</h2>
              <p class="meal-desc">Cheese, jalepeno, home-made coleslaw, chipotle sauce</p>
            </div>
          </a>
        </BurgerCard>

        <!-- Card 03 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/chicken-burger-3.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>BBQ Blaze</h2>
              <p class="meal-desc">Cheese pickles, home-made coleslaw & bbq sauce</p>
            </div>
          </a>
        </BurgerCard>

        <!-- Card 04 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/chicken-burger-4.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Calypso</h2>
              <p class="meal-desc">Cheese, pickles, homemade coleslaw and mango habanero sauce</p>
            </div>
          </a>
        </BurgerCard>

        <!-- Card 05 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/chicken-burger-5.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Buffalo</h2>
              <p class="meal-desc">Cheese, pickles, home-made coleslaw and Frank’s red hot sauce</p>
            </div>
          </a>
        </BurgerCard>
      </div>

      <MealsSeparator />

      <div class="cards cards__vegan">
        <!-- Menu Tab -->
        <MenuTab>
          <h2>Vegan</h2>
        </MenuTab>

        <!-- Card 01 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/vegan-burger-1.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Veganator</h2>
              <p class="meal-desc">
                Oriental vegetables, coriander, lentil crumb, lemon grass, vegan
                cheese, vegan mayo, served in toasted vegan brioche bun
              </p>
            </div>
          </a>
        </BurgerCard>

        <!-- Card 02 -->
        <BurgerCard>
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img src="./../assets/menu/burgers/vegan-burger-2.jpg" alt class="card-img" />
            <div class="meal-info">
              <h2>Spicy Veganator</h2>
              <p class="meal-desc">
                Oriental vegetables, coriander, lentil crumb, lemon grass, vegan
                cheese, vegan mayo & jalapenos served in toasted vegan brioche
                bun
              </p>
            </div>
          </a>
        </BurgerCard>
      </div>
    </div>
  </section>
</template>

<script>
import BurgerCard from "@/components/BurgerCard.vue";
import MenuTab from "@/components/MenuTab.vue";
import MealsSeparator from "@/components/MealsSeparator.vue";

export default {
  name: "BurgerMealDeals",
  components: {
    BurgerCard,
    MenuTab,
    MealsSeparator
  },
  data: () => ({
    beefBurger: [
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-1.jpg"),
        alt: "Krunk Burger",
        burgerName: "Krunk Burger",
        burgerDesc:
          "2 x smashed beef patties, 2 x slices of cheese, topped with Krunk burger sauce, pickles, lettuce, tomato & onion"
      },
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-2.jpg"),
        alt: "Plain Jane",
        burgerName: "Plain Jane",
        burgerDesc:
          "2 x smashed beef patties, topped with Krunk burger sauce, pickles, lettuce, tomato & onion"
      },
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-3.jpg"),
        alt: "Juicy Lucy",
        burgerName: "Juicy Lucy",
        burgerDesc: "Melt in the middle cheese, relish & Krunk burger sauce"
      },
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-4.jpg"),
        alt: "Spicy Lucy",
        burgerName: "Spicy Lucy",
        burgerDesc:
          "Melt in the middle cheese, relish, jalepenos, chipotle sauce"
      },
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-5.jpg"),
        alt: "BBQ Bang",
        burgerName: "BBQ Bang",
        burgerDesc:
          "2 x smashed beef patties, 2 x slices of cheese, topped with bbq sauce, pickles, lettuce, tomato & onion"
      },
      {
        burgerImg: require("./../assets/menu/burgers/beef-burger-6.jpg"),
        alt: "Bacon Double Cheeseburger",
        burgerName: "Bacon Double Cheeseburger",
        burgerDesc:
          "2 x Smashed beef patties, 2 x slices of cheese, turkey rashers topped with Krunk burger sauce, pickles, lettuce, tomato & onion. Includes skin on fries and soft drink."
      }
    ]
  })
  // data: () => ({
  //   chickenBurger: [
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-1.jpg"),
  //       alt: "Krunk Burger",
  //       burgerName: "Krunk Burger",
  //       burgerDesc:
  //         "2 x smashed beef patties, 2 x slices of cheese, topped with Krunk burger sauce, pickles, lettuce, tomato & onion"
  //     },
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-2.jpg"),
  //       alt: "Plain Jane",
  //       burgerName: "Plain Jane",
  //       burgerDesc:
  //         "2 x smashed beef patties, topped with Krunk burger sauce, pickles, lettuce, tomato & onion"
  //     },
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-3.jpg"),
  //       alt: "Juicy Lucy",
  //       burgerName: "Juicy Lucy",
  //       burgerDesc: "Melt in the middle cheese, relish & Krunk burger sauce"
  //     },
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-4.jpg"),
  //       alt: "Spicy Lucy",
  //       burgerName: "Spicy Lucy",
  //       burgerDesc:
  //         "Melt in the middle cheese, relish, jalepenos, chipotle sauce"
  //     },
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-5.jpg"),
  //       alt: "BBQ Bang",
  //       burgerName: "BBQ Bang",
  //       burgerDesc:
  //         "2 x smashed beef patties, 2 x slices of cheese, topped with bbq sauce, pickles, lettuce, tomato & onion"
  //     },
  //     {
  //       burgerImg: require("./../assets/menu/burgers/chicken-burger-6.jpg"),
  //       alt: "Bacon Double Cheeseburger",
  //       burgerName: "Bacon Double Cheeseburger",
  //       burgerDesc:
  //         "2 x Smashed beef patties, 2 x slices of cheese, turkey rashers topped with Krunk burger sauce, pickles, lettuce, tomato & onion. Includes skin on fries and soft drink."
  //     }
  //   ]
  // })
};
</script>

<style lang="scss" scoped>
.burger-meal-deals {
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (min-width: 992px) {
        margin-top: 1rem;
      }

      @media (min-width: 1024px) and (max-width: 1200px) {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 1200px) {
        width: 100%;
      }

      &__beef {
        position: relative;

        .menu-tab {
          left: -15.5rem;
          top: 1rem;
        }
      }

      &__chicken {
        position: relative;

        .menu-tab {
          left: -15.5rem;
          top: 1rem;

          .content-wrapper {
            h2 {
              margin-top: 14rem;
            }
          }
        }
      }

      &__vegan {
        position: relative;

        .menu-tab {
          left: -15.5rem;
          top: 1rem;

          .content-wrapper {
            h2 {
              margin-top: 11.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
