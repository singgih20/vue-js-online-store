import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Sucess from "../views/Sucess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCart,
  },
  {
    path: "/success",
    name: "Sucess",
    component: Sucess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
