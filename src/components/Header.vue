<template>
  <nav>
    <p>Demeter</p>
    <router-link to="/">Home</router-link> |
    <router-link to="/product">Products</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/invoice">Invoice Customer</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link v-if="!useAuthStore.email" to="/login">Login</router-link>
    <button v-else @click="logout">Logout</button>
  </nav>
</template>

<script setup>
import { supabase } from "@/supabase/config";
import { useAuthStore } from "@/stores/AuthStore";

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("Logged out succesfull");
    useAuthStore.fname = "";
    useAuthStore.lname = "";
    useAuthStore.email = "";
    useAuthStore.role = "";
  }
}
</script>

<style lang="scss" scoped></style>
