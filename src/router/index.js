import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { supabase } from "@/supabase/config";

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
      meta: {
        requireAuth: true
      }
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/SignupView.vue"),
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
    path: "/customer-info",
    name: "customer-info",
    component: () =>
      import("../views/CustomerInfoView.vue"),
  },
  {
    path: "/customer",
    name: "customer",
    component: () =>
      import("../views/CustomerView.vue"),
  },
  {
    path: "/invoice",
    name: "invoice",
    component: () =>
      import("../views/InvoiceView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/LoginView.vue"),
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
    path: "/shopping",
    name: "shopping",
    component: () =>
      import("../views/ShoppingView.vue"),
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
    path: "/user",
    name: "user",
    component: () =>
      import("../views/UserView.vue"),
      meta: { requiresAuth: true },
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


async function getUser(next) {
	localUser = await supabase.auth.getSession();
	if (localUser.data.session == null) {
		next('/unauthorized')
	}
	else {
		next();
	}
}


router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		getUser(next);
	}
	else {
		next();
	}
})

export default router;
