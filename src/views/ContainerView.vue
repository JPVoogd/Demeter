<template>
  <div class="product-container linear-border">
    <h2>{{ useProductStore.name }}</h2>
    <p>{{ useProductStore.description }}</p>
    <p>You have payed!</p>
    <button v-if="openMaken" @click="openContainer">Open</button>
    <button v-if="takeOut" @click="takeOutProduct">
      Take {{ useProductStore.name }}
    </button>
    <button v-if="close" @click="closeContainer">Close</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {supabase} from "@/supabase/config";
import {useProductStore} from "@/stores/ProductStore";
import router from "@/router";
import {useAuthStore} from "@/stores/AuthStore";

const openMaken = ref(true);
const takeOut = ref(false);
const close = ref(false);

function openContainer() {
  openMaken.value = false;
  takeOut.value = true;
}

function takeOutProduct() {
  takeOut.value = false;
  close.value = true;
}

async function closeContainer() {
  close.value = false;
  const {data, error} = await supabase
      .from("products")
      .update({product_stock: useProductStore.stock - 1})
      .eq("id", useProductStore.id);
  if (error) {
    console.error("Error updating product stock:", error);
  } else {
    console.log("Product updated successfully!");
  }
  updatePurchaseHistory();
}

async function updatePurchaseHistory() {
  const {data, error} = await supabase
      .from("purchase_history")
      .insert([{user_id: useAuthStore.userId, product_id: useProductStore.id}])
      .select();
  if (error) {
    console.error("Error Creating History:", error);
  } else {
    console.log("History Created");
    router.push('thank-you')
  }
}
</script>

<style scoped>
.product-container {
  width: 300px;
  height: 300px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-container > h2 {
  margin: 0.3rem;
  padding: 0.3rem;
}

.product-container > p {
  margin: 0.3rem;
  padding: 0.3rem;
}
</style>
