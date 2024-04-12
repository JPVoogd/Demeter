<template>
  <table v-if="useAuthStore.role === 'admin'" class="styled-table">
    <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Purchase date</th>
      </tr>
    </thead>
    <tbody v-for="(invoice, index) in invoicesAdmin" :key="index">
      <td>{{ invoice.id }}</td>
      <td>{{ invoice.products.product_name }}</td>
      <td>€{{ invoice.products.product_price }}</td>
      <td>{{ invoice.time.slice(0, 5) }} - {{ invoice.date }}</td>
    </tbody>
  </table>

  <table v-else class="styled-table">
    <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Product name</th>
        <th>Purchase date</th>
      </tr>
    </thead>
    <tbody v-for="(invoice, index) in invoicesUser" :key="index">
      <td>{{ invoice.id }}</td>
      <td>{{ invoice.products.product_name }}</td>
      <td>{{ invoice.products.product_price }}</td>
      <td>{{ invoice.time.slice(0, 5) }} - {{ invoice.date }}</td>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase/config.js";
import { useAuthStore } from "@/stores/AuthStore";

const invoicesUser = ref([]);
const invoicesAdmin = ref([]);

async function getInvoiceUser() {
  let { data, error } = await supabase
    .from("purchase_history")
    .select("id, user_id, date, time, products(product_name, product_price)")
    .eq("user_id", useAuthStore.userId);

  invoicesUser.value = data;
}

async function getInvoiceAdmin() {
  let { data, error } = await supabase
    .from("purchase_history")
    .select("id, user_id, date, time, products(product_name, product_price)");

  invoicesAdmin.value = data;
}

onMounted(() => {
  getInvoiceUser();
  getInvoiceAdmin();
});
</script>

<style lang="scss" scoped>
table {
  text-align: center;
}
th {
  padding: 0 20px;
}
</style>
