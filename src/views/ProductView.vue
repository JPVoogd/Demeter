<template>
  <router-link to="/shopping">Go to Shopping</router-link>

  <div class="container">
    <ProductList
      v-for="product in products"
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
  <div>
    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Buy: {{ productName }}</h3>
        </template>
        <template #body>
          <p>Price: {{ paymentAmount }}</p>
          <div>
            <button>Pay per card</button>
            <button>Pay cash</button>
          </div>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase/config.js";
import ProductList from "@/components/ProductList.vue";
import modal from "@/components/Modal.vue";

const products = ref([]);
const paymentAmount = ref(null);
const productName = ref("");

const showModal = ref(false);

async function getProducts() {
  const { data } = await supabase
    .from("products")
    .select()
    .order("id", { ascending: true });
  products.value = data;
}

async function buyProduct(product_id, name, price, stock) {
  if (stock > 0) {
    const { data, error } = await supabase
      .from("products")
      .update({ product_stock: stock - 1 })
      .eq("id", product_id);
    if (error) {
      console.error("Error updating product stock:", error);
    } else {
      console.log("Product purchased successfully!");
      paymentAmount.value = price;
      productName.value = name;
      showModal.value = true;
    }
  } else {
    alert("Product out of stock!");
  }
}

function editProduct(product_id) {
  console.log(product_id);
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
    location.reload();
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
