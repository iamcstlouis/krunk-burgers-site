<template>
  <div class="sub-menu">
    <div class="links">
      <router-link to="/krunk-burgers" exact data-aos="fade-down" data-aos-delay="400">Burgers</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="600"
        />
      </span>
      <router-link to="/krunk-wings" exact data-aos="fade-down" data-aos-delay="800">Wings</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="1000"
        />
      </span>
      <router-link to="/krunk-shakes" exact data-aos="fade-down" data-aos-delay="1200">Shakes</router-link>
      <span>
        <img
          src="./../assets/menu/icn_sub_menu_bang.svg"
          alt="Sub Menu Separator"
          class="separator"
          data-aos="fade-down"
          data-aos-delay="1400"
        />
      </span>
      <router-link to="/krunk-desserts" exact data-aos="fade-down" data-aos-delay="1600">Desserts</router-link>
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

    a {
      color: #731550 !important;
      font-size: 16px;

      @media screen and (min-width: 768px) {
        font-size: 2rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 2.6rem;
      }
    }

    span {
      margin: 0 0.5rem;
    }
  }
}
</style>
