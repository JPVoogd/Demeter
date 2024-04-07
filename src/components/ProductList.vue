<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <p>{{ descripton }}</p>
    <p>Price: €{{ price }}</p>
    <p id="count">Stock: {{ stock }}</p>
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
.container {
  width: 300px;
  height: 300px;
  border: 2px black solid;
  margin: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product > p {
  margin: 0.3rem;
  padding: 0.3rem;
}
</style>
