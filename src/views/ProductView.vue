<template>
  <h1>Demeter's Vending Machine</h1>
  <!-- Product list -->
  <div class="product-view">
    <ProductList
        v-for="product in products"
        :name="product.product_name"
        :product_id="product.id"
        :description="product.product_description"
        :price="product.product_price"
        :stock="product.product_stock"
        v-on:buyProduct="buyProduct"
        v-on:editProduct="editProduct"
        v-on:deleteProduct="deleteProduct"
    />
  </div>

  <!-- Modal -->
  <div>
    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>You are buying: {{ useProductStore.name }}</h3>
        </template>
        <template #body>
          <p>{{ useProductStore.description }}</p>
          <p>Price: €{{ useProductStore.price }}</p>
          <div>
            <button
                @click="
                showModal = false;
                goToCheckoutCard();
              "
            >
              Pay Card
            </button>
            <button
                @click="
                showModal = false;
                goToCheckoutCash();
              "
            >
              Pay Cash
            </button>
          </div>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {supabase} from "@/supabase/config.js";
import {useAuthStore} from "@/stores/AuthStore";
import {useProductStore} from "@/stores/ProductStore";
import ProductList from "@/components/ProductList.vue";
import modal from "@/components/Modal.vue";
import router from "@/router";

const products = ref([]);

const showModal = ref(false);

function goToCheckoutCard() {
  useProductStore.card = true;
  router.push("payment");
}

function goToCheckoutCash() {
  useProductStore.cash = true;
  router.push("payment");
}

async function getProducts() {
  const {data} = await supabase
      .from("products")
      .select()
      .order("id", {ascending: true});
  products.value = data;
}

async function buyProduct(product_id, name, descripton, price, stock) {
  if (stock > 0) {
    useProductStore.id = product_id;
    useProductStore.name = name;
    useProductStore.description = descripton;
    useProductStore.price = price;
    useProductStore.stock = stock;
    showModal.value = true;
  } else {
    alert("Product out of stock!");
  }
}

function editProduct(product_id, name, descripton, price, stock) {
  useProductStore.id = product_id;
  useProductStore.name = name;
  useProductStore.description = descripton;
  useProductStore.price = price;
  useProductStore.stock = stock;
  router.push("edit-product");
}

async function deleteProduct(product_id) {
  try {
    const {data, error} = await supabase
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

<style scoped>
.product-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 2rem;
}

.product-view > button {
  height: 150px;
}
</style>
