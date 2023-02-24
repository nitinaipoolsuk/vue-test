import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: () => import("../layouts/Default.vue"),
      children: [
        {
          path: "/profile",
          name: "profile",
          component: () => import("../views/ProfileView.vue"),
        },
        {
          path: "/gallery",
          name: "gallery",
          component: () => import("../views/GalleryView.vue"),
        },
      ]
    }
  ],
});

export default router;
