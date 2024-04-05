<template>
  <router-link to="/shopping">Go to Shopping</router-link>

  <div class="container">
    <ProductList
      v-for="(product) in products"
      :name="product.product_name"
      :product_id="product.id"
      :descripton="product.product_description"
      :price="product.product_price"
      :stock="product.product_stock"
      v-on:buyProduct="buyProduct"
      v-on:editProduct="editProduct"
      v-on:deleteProduct="deleteProduct"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { supabase } from "@/supabase/config.js";

import ProductList from "@/components/ProductList.vue";

const products = ref([]);

async function getProducts() {
  const { data } = await supabase.from("products").select();
  products.value = data;
}

console.log(products)

function buyProduct(product_id) {
  // router.push({ path: "/" });
  console.log(product_id)
}

function editProduct(product_id) {
  console.log(product_id)
}

async function deleteProduct(product_id) {
  try {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", product_id);
    if (error) {
      throw error;
    }
    console.log("Row deleted successfully:", data);
    router.push({ path: "/product" });
  } catch (error) {
    console.error("Error deleting row:", error.message);
  }
}

onMounted(() => {
  getProducts();
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0.5rem;
}
</style>
