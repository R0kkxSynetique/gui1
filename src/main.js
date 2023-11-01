import "./assets/css/index.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./main.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: () => import("./Homepage.vue"),
		},
		{
			path: "/home",
			component: () => import("./Homepage.vue"),
		},
		{
			path: "/settings",
			component: () => import("./Settings.vue"),
		},
		{
			path: "/planes",
			component: () => import("./Planes.vue"),
		},
		{
			path: "/map",
			component: App,
		},
	],
});

createApp(App).use(router).mount("#app");
