<template>
  <div class="comic-text">
    <div class="content-wrapper">
      <h3>Meanwhile in the kitchen...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicText"
};
</script>

<style lang="scss">
.comic-text {
  position: relative;

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-family: "dnk";
      font-size: 16px;
      background-color: #fff;
      color: #731550;
      width: 26.4rem;
      height: 3.8rem;
      z-index: 300;
      padding-top: 1rem;
    }
  }

  &:after {
    position: absolute;
    content: "";
    background-color: #290540;
    width: 26.4rem;
    height: 3.8rem;
    left: 0.5rem;
    top: 0.5rem;
  }
}
</style>
