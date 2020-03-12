<template>
  <div class="burger-card">
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: "BurgerCard"
}
</script>

<style lang="scss" scoped>
    .burger-card {
        max-width: 28rem;

        img {
            width: 100%;
            height: auto;
        }

        .meal-info {
            text-align: left;
            margin-top: 2.4rem;

        h2{
            font-family: "dnk";
            font-size: 24px;
            color: #731550;
        }

        p {
            font-size: 16px;
            color: #731550;
            margin-top: .5rem;
        }
    }
    }
</style>
