<template>
  <div class="products linear-border">
    <h2>{{ name }}</h2>
    <p class="product">{{ descripton }}</p>
    <p class="product">Price: €{{ price }}</p>
    <p class="product">Stock: {{ stock }}</p>
    <button @click="$emit('buyProduct', product_id, name, descripton, price, stock)">Buy</button>
    <button v-if="useAuthStore.role === 'admin'" @click="$emit('editProduct', product_id, name, descripton, price, stock)">Edit</button>
    <button v-if="useAuthStore.role === 'admin'" @click="$emit('deleteProduct', product_id)">Delete</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';
defineProps({
  name: String,
  descripton: String,
  price: Number,
  stock: Number,
  product_id: Number
});
</script>

<style scoped>
.products {
  width: 325px;
  min-height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.products > h2 {
  margin: 0.8rem;
  font-size: 2rem;
}

.products > p {
  margin: 0.3rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}
</style>
