import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Burgers from "../views/Burgers.vue";
import Wings from "../views/Wings.vue";
import Shakes from "../views/Shakes.vue";
import Desserts from "../views/Desserts.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu-burgers",
    name: "Burgers",
    component: Burgers
    // meta: {
    //   burgersMenu: true,
    //   wingsMenu: false,
    //   shakesMenu: false
    // }
  },
  {
    path: "/menu-wings",
    name: "Wings",
    component: Wings
    // meta: {
    //   wingsMenu: true,
    //   burgersMenu: false,
    //   shakesMenu: false
    // }
  },
  {
    path: "/menu-shakes",
    name: "Shakes",
    component: Shakes
    // meta: {
    //   shakesMenu: true,
    //   wingsMenu: false,
    //   burgersMenu: false
    // }
  },
  {
    path: "/menu-desserts",
    name: "Desserts",
    component: Desserts
    // meta: {
    //   shakesMenu: true,
    //   wingsMenu: false,
    //   burgersMenu: false
    // }
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;