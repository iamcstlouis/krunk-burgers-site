<template>
  <div class="sub-menu">
    <b-container>
      <div class="links">
        <router-link to="/krunk-burgers" exact>Burgers</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/krunk-wings" exact>Wings</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/krunk-shakes" exact>Shakes</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/krunk-desserts" exact>Desserts</router-link>
      </div>
    </b-container>
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

  .container {
    .links {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 65%;
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
}
</style>
