<template>
  <div class="sub-menu">
    <div class="links">
      <router-link to="/krunk-burgers" exact data-aos="fade-down" data-aos-delay="100">Burgers</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="200"
        />
      </span>
      <router-link to="/krunk-wings" exact data-aos="fade-down" data-aos-delay="300">Wings</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="400"
        />
      </span>
      <router-link to="/krunk-shakes" exact data-aos="fade-down" data-aos-delay="500">Shakes</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="600"
        />
      </span>
      <router-link to="/krunk-desserts" exact data-aos="fade-down" data-aos-delay="700">Desserts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenu"
};
</script>

<style lang="scss" scoped>
.sub-menu {
  margin-top: 2.5rem;

  @media screen and (min-width: 1024px) {
    margin-top: 3.5rem;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 95%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 65%;
    }

    @media screen and (min-width: 1280px) {
      width: 50%;
    }

    a {
      color: #731550 !important;
      font-size: 16px;

      @media screen and (min-width: 768px) {
        font-size: 2rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 2.3rem;
      }

      &.router-link-active {
        font-weight: 900;
      }
    }

    span {
      margin: 0 0.5rem;
    }
  }
}
</style>
