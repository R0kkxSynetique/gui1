import "./assets/css/index.css";
import { createApp, ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./main.vue";
import rcModels from "../storage/app/RcModel/data.json";

const allPlanesSorted = [...rcModels].sort((a, b) =>
	a.name.localeCompare(b.name)
);

const reduced = [...rcModels];
while (reduced.length > 4) {
	reduced.pop();
}

const homePlanes = reduced;

// ! unable to get dynamically the rcModel from the route params
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: () => import("./Homepage.vue"),
			props: { rcModels: homePlanes },
		},
		{
			path: "/home",
			component: () => import("./Homepage.vue"),
			props: { rcModels: homePlanes },
		},
		{
			path: "/settings",
			component: () => import("./Settings.vue"),
		},
		{
			path: "/planes",
			component: () => import("./Planes.vue"),
			props: {
				rcModels: allPlanesSorted,
			},
		},
		{
			path: "/map",
			component: () => import("./Planes.vue"),
		},
		{
			path: "/planes/:id",
			component: () => import("./Plane.vue"),
			props: (route) => ({
				rcModel: rcModels.find((e) => e.id == route.params.id),
			}),
		},
		{
			path: "/planes/:id/edit",
			component: () => import("./PlaneEdit.vue"),
			props: (route) => ({
				rcModel: rcModels.find((e) => e.id == route.params.id),
			}),
		},
	],
});

createApp(App).use(router).mount("#app");
