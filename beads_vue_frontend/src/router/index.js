import { createRouter, createWebHistory } from "vue-router";
import { components } from "vuetify/dist/vuetify-labs.js";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
