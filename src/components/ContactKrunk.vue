<template>
  <div class="contact-krunk">
    <b-container>
      <div class="content-wrapper">
        <div class="contact-hdr">
          <h1>Contact</h1>
        </div>

        <div class="contact-main" data-aos="example-anim1">
          <div class="content-wrapper">
            <h2>We'd love to hear from you!</h2>
            <p>Pop in for something to eat or have your meal delvered straight to your door!</p>
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
    background: #fff;
    padding: 7rem 0;
    margin-top: 6rem;
    -webkit-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.25);

    .content-wrapper {
      width: 90%;
      margin: 0 auto;

      @media screen and (min-width: 768px) {
        width: 70%;
      }

      h2 {
        font-family: "dnk";
        color: #b23c52;

        @media screen and (min-width: 768px) {
          font-size: 42px;
        }
      }

      p {
        margin-top: 4rem;
        margin-bottom: 0;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        color: #290540;
      }
    }
  }

  [data-aos="example-anim1"] {
    transform: skewX(45deg);
    opacity: 0;
    transition-property: transform, opacity;
    &.aos-animate {
      transform: skewX(0);
      opacity: 1;
    }
  }
}
</style>