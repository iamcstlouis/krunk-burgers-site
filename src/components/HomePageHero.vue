<template>
    <section class="hero-img">
        <div class="container">
            <div class="featured-meal-deal col-md-12 col-lg-8 col-xl-6">
                <div class="content-wrapper">
                    <div class="content">
                        <!-- <div class="hdr-n-info"> -->
                            <h1 class="meal-deals-hdr">Meal Deals</h1>
                            <span>Meals served with regular fires and a soft drink</span>
                        <!-- </div> -->
                        <div class="featured-meal">
                            <img src="./../assets/homepage/krunk-chicken-flamer-burger.jpg" alt="Krunk's Chicken Flamer Burger">
                            <div class="featured-meal-info">
                                <h2 class="featured-meal-name">Classic Chicken</h2>
                                <p class="featured-meal-desc">
                                    Cheese, pickles, home-made coleslaw & burger
                                </p>
                                <div class="view-more-btn">
                                    <a href="/menus.html" class="view-more">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "HomePageHero"
};
</script>

<style lang="scss" scoped>

.hero-img {
    background-image: url('./../assets/homepage/krunk-sloppy-joe-burger2.jpg');
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 70vh;
    width: 100%;

    @media (min-width: 1440px) {
        height: 80vh;
    }

    .featured-meal-deal {
        display: flex;
        align-items: center;
        justify-content: center;

        .content-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .content {
                background: #F9F871;
                // padding: 2rem;
                padding: 2rem 2rem 5rem 2rem;
                margin-top: 9rem;
                align-self: center;

                @media (min-width: 768px) {
                    text-align: left;
                }

                h1 {
                    color: #731550;
                    font-size: 5rem;
                    margin: 0;
                }

                h2 {
                    color: #731550;
                    font-size: 2.5rem;
                    font-weight: 700;
                }

                span, p {
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

</style>