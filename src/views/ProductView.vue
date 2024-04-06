<template>
  <router-link to="/shopping">Go to Shopping</router-link>

  <!-- Payment section  -->
  <div v-if="payCard">
    <h1>Hello, {{ useAuthStore.fname }}</h1>
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: ${{ useProductStore.price }},-</p>
    <label
      >Enter your card details: <input type="text" v-model="cardNumber"
    /></label>
    <button @click="paymentCard(cardNumber)">Pay now!</button>
  </div>

  <div v-if="payCash">
    <h1>Hello, {{ useAuthStore.fname }}</h1>
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: ${{ useProductStore.price }},-</p>
    <label>Enter cash amount: <input type="text" v-model="inputPayment" /></label>
    <button @click="paymentCash(inputPayment)">Pay now!</button>
  </div>

  <!-- Product list -->
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

  <!-- Modal -->
  <div>
    <Teleport to="body">
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Buy: {{ useProductStore.name }}</h3>
        </template>
        <template #body>
          <p>{{ useProductStore.description }}</p>
          <p>Price: {{ useProductStore.price }}</p>
          <div>
            <button
              @click="
                payCard = true;
                showModal = false;
              "
            >
              Pay Card
            </button>
            <button
              @click="
                payCash = true;
                showModal = false;
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
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase/config.js";
import { useAuthStore } from "@/stores/AuthStore";
import { useProductStore } from "@/stores/ProductStore";
import ProductList from "@/components/ProductList.vue";
import modal from "@/components/Modal.vue";

const products = ref([]);

const showModal = ref(false);
const payCard = ref(false);
const payCash = ref(false);

async function paymentCard(cardNumber) {
  alert(
    "The following amount: " +
      useProductStore.price +
      " will be taken from account: " +
      cardNumber
  );
  const { data, error } = await supabase
    .from("products")
    .update({ product_stock: useProductStore.stock - 1 })
    .eq("id", useProductStore.id);
  if (error) {
    console.error("Error updating product stock:", error);
  } else {
    window.location.reload();
    console.log("Product purchased successfully!");
  }
}

async function paymentCash(inputPayment) {
  const change = inputPayment - useProductStore.price;
  alert("Your change is: $" + parseFloat(change) + ",-");
  const { data, error } = await supabase
    .from("products")
    .update({ product_stock: useProductStore.stock - 1 })
    .eq("id", useProductStore.id);
  if (error) {
    console.error("Error updating product stock:", error);
  } else {
    window.location.reload();
    console.log("Product purchased successfully!");
  }
}

async function getProducts() {
  const { data } = await supabase
    .from("products")
    .select()
    .order("id", { ascending: true });
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
