<template>
  <nav class="nav">
    <div class="container">
        <router-link to="/" class="logo">Demeter</router-link>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/product">Products</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/invoice">Invoice Customer</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/user">User</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li>
          <router-link v-if="!useAuthStore.email" to="/login"
          >Login
          </router-link
          >
        </li>
        <li>
          <button v-if="useAuthStore.email" @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {supabase} from "@/supabase/config";
import {useAuthStore} from "@/stores/AuthStore";
import {useRouter} from "vue-router";

const router = useRouter();

async function logout() {
  const {error} = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("Logged out successful");
    router.push("/");
    useAuthStore.fname = "";
    useAuthStore.lname = "";
    useAuthStore.email = "";
    useAuthStore.role = "";
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: linear-gradient(90deg, #085889, #089c6d);
  top: 0;
  left: 0;
  right: 0;
  font-size: 1.3rem;
  z-index: 10;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav a {
  padding: 0 15px;
}

.logo {
  padding: 0 2rem;
  font-size: 1.8rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}
</style>
