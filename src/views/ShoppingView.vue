<template>
  <router-link to="/customer-info">go to constumer info</router-link>
  <h1>Hello, {{ useAuthStore.fname }}</h1>
  <p>You are buying: {{ useProductStore.name }}</p>
  <p>The price is: ${{ useProductStore.price }},-</p>
  <button>Pay now!</button>
</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { useProductStore } from '@/stores/ProductStore';
</script>

<style lang="scss" scoped></style>
