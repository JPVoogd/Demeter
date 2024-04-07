import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/AuthStore";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/auth/SignupView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import("../views/ContactView.vue"),
  },
  {
    path: "/contact-form",
    name: "contact-form",
    component: () =>
      import("../views/ContactformView.vue"),
  },
  {
    path: "/container",
    name: "container",
    component: () =>
      import("../views/ContainerView.vue"),
  },
  {
    path: "/invoice",
    name: "invoice",
    component: () =>
      import("../views/InvoiceView.vue"),
      meta: {
        requireAuth: true
      }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/auth/LoginView.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () =>
      import("../views/PaymentView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () =>
      import("../views/ProductView.vue"),
  },
  {
    path: "/thank-you",
    name: "thank-you",
    component: () =>
      import("../views/ThankYouView.vue"),
  },
  {
    path: "/user-edit",
    name: "user-edit",
    component: () =>
      import("../views/UserEditView.vue"),
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () =>
      import("../views/auth/UnauthorizedView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("../views/UserView.vue"),
      meta: {
        requireAuth: true
      }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import("../views/ErrorView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//get User
async function getUser(next) {
	if (useAuthStore.email === "") {
		next('/unauthorized')
	}
	else {
		next()
	}
}

//Auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
      getUser(next)
  } else {
    next()
  }
})

export default router;
