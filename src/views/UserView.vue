<template>
  <h1>Welcome, {{ useAuthStore.fname }}</h1>
  <div class="user">
    <p>First name: {{ useAuthStore.fname }}</p>
    <p>Last name: {{ useAuthStore.lname }}</p>
    <p>Email: {{ useAuthStore.email }}</p>
    <p>role: {{ useAuthStore.role }}</p>
    <button><router-link class="user-edit-btn" to="/user-edit">Edit User</router-link></button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";

</script>

<style lang="scss" scoped>
.user {
  text-align: center;
}

.user > P {
  padding: 0.75rem;
  font-size: 1.3rem;
}

.user-edit-btn {
  text-decoration: none;
  color: white;
}
</style>
