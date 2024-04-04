<template>
  <router-link to="/shopping">Go to Shopping</router-link>

  <div class="products">
    <div v-for="(product, index) in products" :key="index" class="product">
      <h2>{{ product.product_name }}</h2>
      <img :src="product.product_image" alt="Product Image">
      <p>{{ product.product_description }}</p>
      <p>Price: ${{ product.product_price }}</p>
      <p>Stock: {{ product.product_stock }}</p>
      <button>Buy</button>
      <button @click="editProduct">Edit</button>
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase/config.js'
import router from '@/router';

const products = ref([])

async function getProducts() {
  const { data } = await supabase.from('products').select()
  products.value = data
}

function editProduct() {
  router.push({ path: '/' })
}

async function deleteProduct(ID) {
    try {
        const { data, error } = await supabase
            .from('products')
            .delete()
            .eq('id', ID);
        if (error) {
            throw error;
        }
        console.log('Row deleted successfully:', data);
    } catch (error) {
        console.error('Error deleting row:', error.message);
    }
}

onMounted(() => {
  getProducts()
})
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  background: aquamarine;
}

.product>p {
  margin: 0.5rem 1rem;
}
</style>