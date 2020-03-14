import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Burgers from "../views/Burgers.vue";
import Wings from "../views/Wings.vue";
import Shakes from "../views/Shakes.vue";
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
  },
  {
    path: "/menu-wings",
    name: "Wings",
    component: Wings
  },
  {
    path: "/menu-shakes",
    name: "Shakes",
    component: Shakes
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