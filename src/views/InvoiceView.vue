<template>
  <div class="invoice">
    <table v-if="useAuthStore.role === 'admin'">
      <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Purchase date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(invoice, index) in invoicesAdmin" :key="index">
        <td>{{ invoice.id }}</td>
        <td>{{ invoice.products.product_name }}</td>
        <td>€{{ invoice.products.product_price }}</td>
        <td>{{ invoice.time.slice(0, 5) }} - {{ invoice.date }}</td>
      </tr>
      </tbody>
    </table>

    <table v-else>
      <thead>
      <tr>
        <th>Invoice ID</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Purchase date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(invoice, index) in invoicesUser" :key="index">
        <td>{{ invoice.id }}</td>
        <td>{{ invoice.products.product_name }}</td>
        <td>€{{ invoice.products.product_price }}</td>
        <td>{{ invoice.time.slice(0, 5) }} - {{ invoice.date }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {supabase} from "@/supabase/config.js";
import {useAuthStore} from "@/stores/AuthStore";

const invoicesUser = ref([]);
const invoicesAdmin = ref([]);

async function getInvoiceUser() {
  let {data, error} = await supabase
      .from("purchase_history")
      .select("id, user_id, date, time, products(product_name, product_price)")
      .eq("user_id", useAuthStore.userId);

  invoicesUser.value = data;
}

async function getInvoiceAdmin() {
  let {data, error} = await supabase
      .from("purchase_history")
      .select("id, user_id, date, time, products(product_name, product_price)");

  invoicesAdmin.value = data;
}

onMounted(() => {
  getInvoiceUser();
  getInvoiceAdmin();
});
</script>

<style scoped>

.invoice {
display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  margin: 0;
}

.invoice > table {
  border-collapse: collapse;
  text-align: center;
}

.invoice > table > thead > tr > th {
  padding: 0.5rem 0.75rem;
  margin: 0;
  gap: 0;
}

.invoice > table > tbody > tr > td {
  padding: 0.4rem 0.75rem;
  margin: 0;
  gap: 0;
}
</style>
