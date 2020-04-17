<template>
  <div class="about-krunk">
    <b-container>
      <div class="content-wrapper">
        <div class="about-hdr">
          <h1>About</h1>
        </div>

        <div class="about-main" data-aos="example-anim1">
          <div class="content-wrapper">
            <h2>In the Krunk kitchen...</h2>
            <p>Duis metus ex, malesuada at tempus ut, laoreet sit amet orci. Phasellus lobortis nibh et sapien facilisis malesuada. Phasellus euismod eros at elit euismod, eget blandit tortor pretium. Vivamus sit amet mauris eros. Nam eget lacus vitae purus iaculis dictum sit amet eget velit. Sed vel rutrum leo. Sed vel fermentum lacus, at bibendum metus. Cras tristique ac urna ut egestas. Nam mattis sit amet diam vel tempor. Pellentesque at elit pharetra, tempor nulla eget, blandit sem. Morbi sollicitudin mauris massa, ac tincidunt ipsum bibendum nec. Etiam in ipsum non tortor interdum bibendum. Donec dolor arcu, ullamcorper at tincidunt at, auctor sit amet ipsum.</p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Aboutkrunk"
};
</script>

<style lang="scss">
.about-krunk {
  margin-top: 6rem;

  .about-hdr {
    h1 {
      font-size: 5rem;
      color: #b23c52;
      margin-bottom: 0;
      margin-top: 3rem;

      @media (min-width: 768px) {
        margin-top: 1rem;
      }

      @media (min-width: 1024px) {
        font-size: 6.7rem;
        margin-top: 0;
      }
    }
  }

  .about-main {
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

        @media (min-width: 768px) {
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