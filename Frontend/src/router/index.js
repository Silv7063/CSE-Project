import { createRouter, createWebHistory } from "vue-router";
import Analysis from "../views/Analysis.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/",
    redirect: "/Analysis", // 將首頁重定向到 /Analysis
  },
  {
    path: "/Analysis",
    name: "Analysis",
    component: Analysis,
  },
  {
    path: "/History",
    name: "History",
    component: History,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
