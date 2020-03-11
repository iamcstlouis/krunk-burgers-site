<template>
  <div class="sub-menu">
    <div class="container">
          <div class="links">
            <router-link to="/burgers">Burgers</router-link>
            <span
              ><img
                src="./../assets/icn_footer_menu_bang.svg"
                alt=""
                class="separator"
            /></span>
            <router-link to="/wings">Wings</router-link>
            <span
              ><img
                src="./../assets/icn_footer_menu_bang.svg"
                alt=""
                class="separator"
            /></span>
            <router-link to="/shakes">Shakes</router-link>
            <span
              ><img
                src="./../assets/icn_footer_menu_bang.svg"
                alt=""
                class="separator"
            /></span>
            <router-link to="/desserts">Desserts</router-link>
          </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SubMenu"
}
</script>

<style lang="scss" scoped>
.sub-menu {
    .container {

        .links {
             a {
            color: #b23c52 !important;
            font-size: 18px;
            }
        }
       
    }
}

</style>
