<template>
  <h1>Welcome, {{ useAuthStore.fname }}</h1>
  <div>
    <img src="https://placehold.co/250x250" alt="" />
    <p>First name: {{ useAuthStore.fname }}</p>
    <p>Last name: {{ useAuthStore.lname }}</p>
    <p>Email: {{ useAuthStore.email }}</p>
    <p>role: {{ useAuthStore.role }}</p>
    <button><router-link to="/user-edit">Edit</router-link></button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";

</script>

<style lang="scss" scoped></style>
