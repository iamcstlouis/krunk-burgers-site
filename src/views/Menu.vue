<template>
  <div class="menu">
    <div class="container">
      <!-- Deliveroo Widget -->
      <DeliverooWidget />

      <h1>Menu</h1>
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

    .container {

        h1 {
            font-size: 5rem;
            color: #B23C52;
            text-decoration: underline;
            margin-bottom: 0;
        }

        .deliveroo-widget {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-left: auto;
        }
    }
}
</style>
