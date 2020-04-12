<template>
  <section class="hero-img">
    <b-container>
      <div class="featured-meal-deal col-11 col-md-12 col-lg-8 col-xl-6">
        <div class="content-wrapper">
          <div class="content">
            <h1 class="meal-deals-hdr">Meal Deals</h1>
            <span>Meals served with regular fries and a soft drink</span>

            <div class="featured-meal">
              <img
                src="./../assets/homepage/krunk-chicken-flamer-burger.jpg"
                alt="Krunk's Chicken Flamer Burger"
              />
              <div class="featured-meal-info">
                <h2 class="featured-meal-name">Classic Chicken</h2>
                <p class="featured-meal-desc">Cheese, pickles, home-made coleslaw & burger</p>
                <div class="view-more-btn">
                  <router-link to="/krunk-burgers" class="view-more">View More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Deliveroo Widget -->
      <DeliverooWidget />
    </b-container>
  </section>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";

export default {
  name: "HomePageHero",
  components: {
    DeliverooWidget
  }
};
</script>

<style lang="scss" scoped>
.hero-img {
  background-image: url("./../assets/homepage/krunk-sloppy-joe-burger2.jpg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 80vh;
  width: 100%;

  @media (min-width: 1440px) {
    height: 80vh;
  }

  .container {
    position: relative;
    height: inherit;

    .featured-meal-deal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      .content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content {
          background: #f9f871;
          // padding: 2rem;
          padding: 2rem 2rem 5rem 2rem;
          // margin-top: 5rem;
          align-self: center;

          @media (min-width: 768px) {
            text-align: left;
            // margin-top: 9rem;
          }

          h1 {
            color: #731550;
            font-size: 4rem;
            margin: 0;

            @media (min-width: 768px) {
              font-size: 5rem;
            }
          }

          h2 {
            color: #731550;
            font-size: 2.5rem;
            font-weight: 700;
          }

          span,
          p {
            color: #731550;
          }

          .featured-meal {
            margin-top: 2rem;

            @media (min-width: 768px) {
              display: flex;
            }

            .featured-meal-info {
              margin-top: 2rem;

              @media (min-width: 768px) {
                margin-left: 2rem;
                text-align: left;
              }
            }

            .view-more-btn {
              margin-top: 3rem;

              @media (min-width: 768px) {
                margin-top: 4.5rem;
              }

              a {
                background: rgb(224, 53, 53);
                color: #fff;
                padding: 1rem 2rem;
                font-family: "dnk";
                letter-spacing: 1.2px;
                text-decoration: none;

                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }
  }

  .deliveroo-widget {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -26px;
    z-index: 2;
    border-radius: 5px;
  }
}
</style>
