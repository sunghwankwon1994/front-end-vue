import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Ch02ComponentRouting from "@/router/Ch02ComponentRouting";
import Ch03DataBinding from "@/router/Ch03DataBinding";
import Ch04EventHandlingWatch from "@/router/Ch04EventHandlingWatch";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  ...Ch02ComponentRouting,
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
