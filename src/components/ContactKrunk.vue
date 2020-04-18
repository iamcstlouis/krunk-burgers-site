<template>
  <div class="contact-krunk">
    <b-container>
      <div class="content-wrapper">
        <div class="contact-hdr-wrapper">
          <div class="contact-hdr">
            <h1 data-aos="fade-down" data-aos-delay="50">Contact</h1>
          </div>
        </div>

        <div class="contact-main">
          <div class="content-wrapper">
            <div class="img-wrapper">
              <img
                src="./../assets/contact/contact-krunk.jpg"
                alt="Krunk on Site"
                data-aos="fade-up"
                data-aos-delay="200"
              />
            </div>

            <div class="main-copy">
              <div class="hdr-wrapper" data-aos="fade-up" data-aos-delay="500">
                <h2>We'd love to hear from you!</h2>
              </div>

              <p class="contact-excerpt" data-aos="fade-left" data-aos-delay="700">
                Pop in for something to eat, or
                <a
                  href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
                  target="_blank"
                >order</a> and have your meal delivered straight to your door!
              </p>

              <div class="contact-details">
                <p class="contact-no" data-aos="fade-left" data-aos-delay="800">020 8684 1587</p>
                <p class="address">
                  <span data-aos="fade-left" data-aos-delay="900">79 Whitehorse,</span>
                  <br />
                  <span data-aos="fade-left" data-aos-delay="1000">London,</span>
                  <br />
                  <span data-aos="fade-left" data-aos-delay="1200">CR02JJ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ContactKrunk"
};
</script>

<style lang="scss">
.contact-krunk {
  margin-top: 6rem;

  .contact-hdr {
    h1 {
      font-size: 5rem;
      color: #b23c52;
      margin-bottom: 0;
      margin-top: 3rem;

      @media screen and (min-width: 768px) {
        margin-top: 1rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 6.7rem;
        margin-top: 0;
      }
    }
  }

  .contact-main {
    margin-top: 2rem;

    .content-wrapper {
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      margin-top: 2rem;

      @media screen and (min-width: 768px) {
        margin-top: 3rem;
      }

      @media screen and (min-width: 1024px) {
        margin-top: 5rem;
      }

      .img-wrapper {
        @media screen and (min-width: 1024px) {
          flex: 0 0 48%;
        }

        img {
          width: 100%;
        }
      }

      .main-copy {
        @media screen and (min-width: 1024px) {
          flex: 0 0 48%;
        }

        .hdr-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          @media screen and (min-width: 1024px) {
            margin-left: -1rem;
          }

          @media screen and (min-width: 1200px) {
            margin-left: -10rem;
          }

          h2 {
            font-family: "dnk";
            font-size: 18px;
            background-color: #f9f871;
            color: #731550;
            z-index: 300;
            padding: 0.5rem 2rem;

            @media screen and (min-width: 768px) {
              font-size: 32px;
            }

            @media screen and (min-width: 1024px) {
              font-size: 28px;
            }
          }

          &:after {
            position: absolute;
            content: "";
            background-color: #290540;
            width: 100%;
            height: 88%;
            left: 0.5rem;
            top: 0.5rem;

            //   @media screen and (min-width: 992px) {
            //     width: 23rem;
            //     height: 6.25rem;
            //   }
          }
        }

        p {
          margin-top: 2rem;
          margin-bottom: 0;
          font-size: 16px;
          font-family: "Open Sans", sans-serif;
          color: #290540;
          text-align: center;

          a {
            color: #290540;
            font-weight: 900;
            cursor: pointer;
          }

          @media screen and (min-width: 1024px) {
            text-align: left;
            margin-left: 2rem;
          }

          &.contact-excerpt {
            padding: 0 3rem;

            @media screen and (min-width: 768px) {
              padding: 0 10rem;
            }

            @media screen and (min-width: 1024px) {
              padding: 0;
            }

            @media screen and (min-width: 1200px) {
              width: 80%;
            }
          }

          &.contact-no {
            font-size: 20px;
            font-weight: 900;
            color: #731550;

            @media screen and (min-width: 768px) {
              font-size: 24px;
            }
          }

          &.address {
            @media screen and (min-width: 1024px) {
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>