<template>
    <div class="wing-meal-deals">
        <div class="container">
            <div class="hdr-section">
                <h1>Meal Deals</h1>
                <h3>Meals served with regular fries and a soft drink</h3>
            </div>

            <div class="main-content">

                <div class="img-wrapper">
                    <img src="./../assets/menu/wings/wings.jpg" alt="Krunks Wings" class="featured-img">
                </div>

                <div class="wings-flavours-hdr">
                    <div class="hdr-wrapper">
                        <h2>Flavours</h2>
                    </div>
                </div>

                <div class="wing-flavours-list">
                    <ul id="flavours">
                        <li>Original</li>
                        <li>Smokey BBQ</li>
                        <li>Atomic Hot</li>
                        <li>Lemon Pepper</li>
                        <li>Garlic Parmesan</li>
                        <li>Mango Habanero</li>
                        <li>Sweet chilli</li>
                        <li>Honey Mustard</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "WingMealDeals"
}
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
        .img-wrapper {
            margin-top: 5rem;

            @media (min-width: 992px) {
                margin-top: 6rem;
            }
            
            .featured-img {
                width: 100%;
            }
        }
    }
  }
}
</style>