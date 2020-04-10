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
};
</script>

<style lang="scss" scoped>
.burger-card {
  margin-top: 5rem;

  @media (min-width: 768px) {
    max-width: 28rem;
    flex: 0 0 48%;

    &:nth-child(even) {
      margin-right: auto;
    }
  }

  // @media (min-width: 1200px) {
  //   flex: 0 0 30%;
  // }

  // @media (min-width: 992px) {
  //   &:nth-child(6) {
  //     margin-left: 1rem;
  //   }

  //   &:last-child {
  //     margin-right: auto;
  //     margin-left: 1rem;
  //   }
  // }

  // @media (min-width: 1024px) {
  //   &:last-child {
  //     margin-left: 7.1rem;
  //   }
  // }

  // @media (min-width: 1200px) {
  //   &:last-child {
  //     margin-left: 5rem;
  //   }
  // }

  img {
    width: 100%;
    height: auto;
  }

  .meal-info {
    text-align: left;
    margin-top: 2.4rem;

    h2 {
      font-family: "dnk";
      font-size: 24px;
      color: #731550;
    }

    p {
      font-size: 16px;
      color: #731550;
      margin-top: 0.5rem;
    }
  }
}
</style>
