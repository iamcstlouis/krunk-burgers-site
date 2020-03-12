<template>
    <div class="menu-wings">
        <div class="container">
            <!-- Comic Text -->
            <ComicText />

            <!-- Deliveroo Widget -->
            <DeliverooWidget />

            <h1>Menu</h1>
            <SubMenu />
            <MenuHdr />
            <MealDeals />
        </div>
    </div>
</template>

<script>
import DeliverooWidget from "@/components/DeliverooWidget.vue";
import SubMenu from "@/components/SubMenu.vue";
import MealDeals from "@/components/MealDeals.vue";
import MenuHdr from "@/components/MenuHdr.vue";
import ComicText from "@/components/ComicText.vue";

export default {
    name: "Wings",
    components: {
        DeliverooWidget,
        SubMenu,
        MealDeals,
        MenuHdr,
        ComicText
    }
}
</script>

<style lang="scss" scoped>

</style>

