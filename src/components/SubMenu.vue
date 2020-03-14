<template>
  <div class="sub-menu">
    <div class="container">
      <div class="links">
        <router-link to="/menu-burgers">Burgers</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/menu-wings">Wings</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/menu-shakes">Shakes</router-link>
        <span>
          <img src="./../assets/menu/icn_sub_menu_bang.svg" alt class="separator" />
        </span>
        <router-link to="/desserts">Desserts</router-link>
      </div>
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

  @media (min-width: 1024px) {
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

        @media (min-width: 768px) {
          font-size: 2rem;
        }

        @media (min-width: 1024px) {
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
