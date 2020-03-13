<template>
  <div class="wing-meal-deals">
    <div class="container">
      <div class="hdr-section">
        <h1>Meal Deals</h1>
        <h3>Meals served with regular fries and a soft drink</h3>
      </div>

      <div class="main-content">
        <div class="img-hdr-wrapper">
          <div class="img-wrapper">
            <img src="./../assets/menu/wings/wings.jpg" alt="Krunks Wings" class="featured-img" />
          </div>

          <div class="wings-hdr-wrapper">
            <div class="wings-flavours-hdr">
              <div class="hdr-wrapper">
                <h2>Flavours</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="wing-flavours-list">
          <ul id="flavours">
            <li v-for="item in flavours" :key="item.flavour">
              <a
                href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
              >{{ item.flavour }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WingMealDeals",
  data() {
    return {
      flavours: [
        {
          flavour: "Original"
        },
        {
          flavour: "Smokey BBQ"
        },
        {
          flavour: "Atomic Hot"
        },
        {
          flavour: "Lemon Pepper"
        },
        {
          flavour: "Garlic Parmesan"
        },
        {
          flavour: "Mango Habanero"
        },
        {
          flavour: "Sweet chilli"
        },
        {
          flavour: "Honey Mustard"
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.wing-meal-deals {
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

    .main-content {
      .img-hdr-wrapper {
        position: relative;

        .img-wrapper {
          margin-top: 5rem;

          @media (min-width: 992px) {
            margin-top: 6rem;
          }

          .featured-img {
            width: 100%;
          }
        }

        .wings-hdr-wrapper {
          position: absolute;
          bottom: -1.9rem;
          left: 50%;
          transform: translateX(-50%);

          @media (min-width: 768px) {
            left: 2rem;
            transform: none;
          }

          @media (min-width: 992px) {
            bottom: -3.5rem;
          }

          .wings-flavours-hdr {
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

                @media (min-width: 992px) {
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

                @media (min-width: 992px) {
                  width: 23rem;
                  height: 6.25rem;
                }
              }
            }
          }
        }
      }

      .wing-flavours-list {
        margin-top: 5rem;

        @media (min-width: 768px) {
          padding-left: 4rem;
        }

        @media (min-width: 992px) {
          padding-left: 3.5rem;
          margin-top: 10rem;
        }

        #flavours {
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

          @media (min-width: 768px) {
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