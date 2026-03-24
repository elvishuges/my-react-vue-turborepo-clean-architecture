import { createRouter, createWebHistory } from "vue-router";
import { makeLogin } from "./../factories/pages/login-factory";

const login = makeLogin();

const routes = [
  {
    path: "/login",
    component: login.component,
    props: login.props,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});