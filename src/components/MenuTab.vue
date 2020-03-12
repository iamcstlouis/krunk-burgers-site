<template>
  <div class="menu-tab">
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuTab"
};
</script>

<style lang="scss" scoped>
.menu-tab {
  position: absolute;
  background-color: #e1734e;
  width: 6.8rem;
  height: 24.1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: none;

    @media (min-width: 1280px) {
        display: block;
    }

  .content-wrapper {
    margin-top: 11rem;

    h2 {
      // position: absolute;
      font-family: "dnk";
      font-size: 42px;
      color: #731550;
      transform: rotate(-90deg);
      text-align: center;
    }
  }
}
</style>
