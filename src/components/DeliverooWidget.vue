<template>
  <div class="deliveroo-widget">
    <a
      href="https://deliveroo.co.uk/menu/london/croydon/krunk?day=today&postcode=SE256NX&time=ASAP"
      target="_blank"
    >
      <div class="content-wrapper">
        <img src="./../assets/deliveroo-widget.png" alt="Deliveroo Widget" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DeliverooWidget"
};
</script>

<style lang="scss" scoped>
.deliveroo-widget {
  background-color: #35b8b2;
  width: 24.8rem;
  height: 5.2rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    background-color: rgb(39, 145, 139);
  }
}
</style>
