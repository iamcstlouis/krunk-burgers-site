<template>
  <div class="desserts-meal-deals">
    <b-container>
      <MealDealsHdrExcerpt />

      <div class="main-content">
        <div class="img-hdr-wrapper">
          <div class="img-wrapper">
            <img
              src="./../assets/menu/dessert/dessert-1.jpg"
              alt="Krunks Desserts"
              class="featured-img"
              data-aos="fade-up"
              data-aos-delay="1400"
            />
          </div>

          <div class="desserts-hdr-wrapper">
            <div class="desserts-flavours-hdr">
              <div class="hdr-wrapper">
                <h2>Flavours</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="desserts-flavours-list">
          <ul
            id="desserts-flavours"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <li v-for="item in dessertFlavours" :key="item.flavour">
              <a
                href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
                target="_blank"
              >{{ item.flavour }}</a>
            </li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import MealDealsHdrExcerpt from "@/components/MealDealsHdrExcerpt.vue";

export default {
  name: "DessertsMealDeals",
  components: {
    MealDealsHdrExcerpt
  },
  data: () => ({
    dessertFlavours: [
      {
        flavour: "Chocolate and Hazelnut Tiramisu"
      }
    ]
  })
};
</script>

<style lang="scss">
.desserts-meal-deals {
  position: relative;
  background-color: #fff;
  margin-top: 10.5rem;
  padding: 9.2rem 2rem;

  @media screen and (min-width: 1024px) {
    padding: 9.2rem 7.2rem;
    margin-top: 14.5rem;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 17.5rem;
  }

  .container {
    .main-content {
      .img-hdr-wrapper {
        position: relative;

        .img-wrapper {
          margin-top: 5rem;

          @media screen and (min-width: 992px) {
            margin-top: 6rem;
          }

          .featured-img {
            width: 100%;
          }
        }

        .desserts-hdr-wrapper {
          position: absolute;
          bottom: -1.9rem;
          left: 50%;
          transform: translateX(-50%);

          @media screen and (min-width: 768px) {
            left: 2rem;
            transform: none;
          }

          @media screen and (min-width: 992px) {
            bottom: -3.5rem;
          }

          .desserts-flavours-hdr {
            position: relative;

            .hdr-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;

              h2 {
                font-family: "dnk";
                font-size: 20px;
                background-color: #f9f871;
                color: #731550;
                z-index: 300;
                padding-top: 1rem;
                padding: 0.5rem 2rem;

                @media screen and (min-width: 992px) {
                  font-size: 42px;
                }
              }

              &:after {
                position: absolute;
                content: "";
                background-color: #290540;
                width: 13.1rem;
                height: 3.5rem;
                left: 0.5rem;
                top: 0.5rem;

                @media screen and (min-width: 992px) {
                  width: 23rem;
                  height: 6.25rem;
                }
              }
            }
          }
        }
      }

      .desserts-flavours-list {
        margin-top: 5rem;

        @media screen and (min-width: 768px) {
          padding-left: 4rem;
        }

        @media screen and (min-width: 992px) {
          padding-left: 3.5rem;
          margin-top: 10rem;
        }

        #desserts-flavours {
          list-style: none;
          padding: 0;

          li {
            flex: 0 0 48%;
            padding: 0.5rem 0;

            a {
              font-family: "dnk";
              font-size: 18px;
              color: #731550;
            }
          }

          @media screen and (min-width: 768px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            text-align: left;

            li {
              a {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
}
</style>