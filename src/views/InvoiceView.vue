<template>
  <div>
    <div v-for="(invoice, index) in invoices" :key="index">
      <h2>{{ invoice.id }}</h2>
      <p>{{ invoice.user_id }}</p>
      <p>Stock: {{ invoice.product_id }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase/config.js";

const invoices = ref([]);

async function getInvoice() {
  const { data } = await supabase.from("purchase_history").select();
  invoices.value = data;
}

console.log(invoices)

onMounted(() => {
  getInvoice();
});
</script>

<style lang="scss" scoped>

</style>