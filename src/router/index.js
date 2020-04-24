import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Burgers from "../views/Burgers.vue";
import Wings from "../views/Wings.vue";
import Shakes from "../views/Shakes.vue";
import Desserts from "../views/Desserts.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import { closeMenu } from "../router/utils";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/krunk-burgers",
    name: "Burgers",
    component: Burgers
    // meta: {
    //   burgersMenu: true,
    //   wingsMenu: false,
    //   shakesMenu: false
    // }
  },
  {
    path: "/krunk-wings",
    name: "Wings",
    component: Wings
    // meta: {
    //   wingsMenu: true,
    //   burgersMenu: false,
    //   shakesMenu: false
    // }
  },
  {
    path: "/krunk-shakes",
    name: "Shakes",
    component: Shakes
    // meta: {
    //   shakesMenu: true,
    //   wingsMenu: false,
    //   burgersMenu: false
    // }
  },
  {
    path: "/krunk-desserts",
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
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  closeMenu();
});

export default router;
