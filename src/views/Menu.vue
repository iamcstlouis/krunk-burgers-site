<template>
  <div class="menu">
    <div class="container">
      <!-- Deliveroo Widget -->
      <DeliverooWidget />
    </div>
  </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";

export default {
  name: "Menu",
  components: {
    DeliverooWidget
  }
};
</script>

<style lang="scss" scoped>
.menu {
    background-color: #F9B450;
}
</style>
