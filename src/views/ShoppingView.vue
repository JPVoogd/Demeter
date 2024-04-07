<template>
  <router-link to="/customer-info">go to constumer info</router-link>

  <!-- Payment section  -->
  <div v-if="useProductStore.card">
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: ${{ useProductStore.price }},-</p>
    <label
      >Enter your card details: <input type="text" v-model="cardNumber"
    /></label>
    <button @click="paymentCard(cardNumber)">Pay now!</button>
  </div>

  <div v-if="useProductStore.cash">
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: ${{ useProductStore.price }},-</p>
    <label
      >Enter cash amount: <input type="text" v-model="inputPayment"
    /></label>
    <button @click="paymentCash(inputPayment)">Pay now!</button>
  </div>
</template>

<script setup>
import router from "@/router";
import { useProductStore } from "@/stores/ProductStore";

async function paymentCard(cardNumber) {
  alert(
    "The following amount: €" +
      useProductStore.price +
      " will be taken from account: " +
      cardNumber +
      " ."
  );
  router.push("customer-info");
}

async function paymentCash(inputPayment) {
  const change = inputPayment - useProductStore.price;
  alert("Your change is: €" + parseFloat(change) + " .");
  router.push("customer-info");
}
</script>

<style lang="scss" scoped></style>
