<template>
  <section class="burger-meal-deals">
    <b-container>
      <MealDealsHdrExcerpt />

      <!-- Beef Burger Cards  -->
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
            <img v-bind:src="obj.burgerImg" v-bind:alt="obj.alt" />
            <div class="meal-info">
              <h2>{{ obj.burgerName }}</h2>
              <p class="meal-desc">{{ obj.burgerDesc }}</p>
            </div>
          </a>
        </BurgerCard>
      </div>

      <!-- Meals Separator  -->
      <MealsSeparator />

      <!-- Chicken Burger Cards -->
      <div class="cards cards__chicken">
        <!-- Menu Tab -->
        <MenuTab>
          <h2>Chicken</h2>
        </MenuTab>

        <BurgerCard v-for="(obj, key) in chickenBurger" :key="key">
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img v-bind:src="obj.burgerImg" v-bind:alt="obj.alt" />
            <div class="meal-info">
              <h2>{{ obj.burgerName }}</h2>
              <p class="meal-desc">{{ obj.burgerDesc }}</p>
            </div>
          </a>
        </BurgerCard>
      </div>

      <MealsSeparator />

      <!-- Vegan Burger Cards -->
      <div class="cards cards__vegan">
        <!-- Menu Tab -->
        <MenuTab>
          <h2>Vegan</h2>
        </MenuTab>

        <!-- Card 01 -->
        <BurgerCard v-for="(obj, key) in veganBurger" :key="key">
          <a
            href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
            target="_blank"
          >
            <img v-bind:src="obj.burgerImg" v-bind:alt="obj.alt" />
            <div class="meal-info">
              <h2>{{ obj.burgerName }}</h2>
              <p class="meal-desc">{{ obj.burgerDesc }}</p>
            </div>
          </a>
        </BurgerCard>
      </div>
    </b-container>
  </section>
</template>

<script>
import MealDealsHdrExcerpt from "@/components/MealDealsHdrExcerpt.vue";
import BurgerCard from "@/components/BurgerCard.vue";
import MenuTab from "@/components/MenuTab.vue";
import MealsSeparator from "@/components/MealsSeparator.vue";

export default {
  name: "BurgerMealDeals",
  components: {
    MealDealsHdrExcerpt,
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
    ],
    chickenBurger: [
      {
        burgerImg: require("./../assets/menu/burgers/chicken-burger-1.jpg"),
        alt: "The Krunk Classic Burger",
        burgerName: "Classic",
        burgerDesc: "Cheese, pickles, home-made coleslaw & burger"
      },
      {
        burgerImg: require("./../assets/menu/burgers/chicken-burger-2.jpg"),
        alt: "The Krunk Flamer Burger",
        burgerName: "Flamer",
        burgerDesc: "Cheese, jalepeno, home-made coleslaw, chipotle sauce"
      },
      {
        burgerImg: require("./../assets/menu/burgers/chicken-burger-3.jpg"),
        alt: "The Krunk BBQ Blaze Burger",
        burgerName: "BBQ Blaze",
        burgerDesc: "Cheese pickles, home-made coleslaw & bbq sauce"
      },
      {
        burgerImg: require("./../assets/menu/burgers/chicken-burger-4.jpg"),
        alt: "The Krunk Calypso Burger",
        burgerName: "Calypso",
        burgerDesc:
          "Cheese, pickles, homemade coleslaw and mango habanero sauce"
      },
      {
        burgerImg: require("./../assets/menu/burgers/chicken-burger-5.jpg"),
        alt: "The Krunk Buffalo Burger",
        burgerName: "Buffalo",
        burgerDesc:
          "Cheese, pickles, home-made coleslaw and Frank’s red hot sauce"
      }
    ],
    veganBurger: [
      {
        burgerImg: require("./../assets/menu/burgers/vegan-burger-1.jpg"),
        alt: "The Veganator Burger",
        burgerName: "Veganator",
        burgerDesc:
          "Oriental vegetables, coriander, lentil crumb, lemon grass, vegan cheese, vegan mayo, served in toasted vegan brioche bun"
      },
      {
        burgerImg: require("./../assets/menu/burgers/vegan-burger-2.jpg"),
        alt: "The Spicy Veganator Burger",
        burgerName: "Spicy Veganator",
        burgerDesc:
          "Oriental vegetables, coriander, lentil crumb, lemon grass, vegan cheese, vegan mayo & jalapenos served in toasted vegan brioche bun"
      }
    ]
  })
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
