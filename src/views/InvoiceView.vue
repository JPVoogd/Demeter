<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th>Invoice ID</th>
        <th>first name</th>
        <th>Product name</th>
        <th>Purchase date</th>
      </tr>
    </thead>
    <tbody v-for="(invoice, index) in invoices" :key="index">
      <td>
        {{ invoice.id }}
      </td>
      <!-- <td>{{ invoice.user.role }}</td> -->
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

const invoices = ref([]);

async function getInvoice() {

  let { data, error } = await supabase
  .from('purchase_history')
  .select('id, user_id, date, time, products(product_name, product_price)').eq('user_id', useAuthStore.userId)

  invoices.value = data;
}

console.log(useAuthStore.userId)

onMounted(() => {
  getInvoice();
});
</script>

<style lang="scss" scoped>

table {
  text-align: center;
}
th {
  padding: 0 20px;
}</style>
