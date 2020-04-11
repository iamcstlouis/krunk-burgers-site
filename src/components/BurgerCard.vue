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
    max-width: 31rem;
    padding: 0 3rem;
    // flex: 0 0 48%;
  }

  @media (min-width: 992px) and (max-width: 1024px) {
    flex: 0 0 48%;
    max-width: 28.5rem;
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    flex: 0 0 33%;
    max-width: 26rem;
    padding: 0 1rem;
  }

  @media (min-width: 1200px) {
    max-width: 31rem;
    padding: 0 1.5rem;
  }

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
