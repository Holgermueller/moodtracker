import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Main";
import LogReg from "../pages/LogReg";

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/", name: "Logreg", component: LogReg },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
