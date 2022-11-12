import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
