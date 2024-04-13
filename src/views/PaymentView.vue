<template>
  <h1>Please pay here</h1>

  <!-- Payment section  -->
  <div v-if="useProductStore.card" class="payment">
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: €{{ useProductStore.price }},-</p>
    <label>
      <input
        type="text"
        class="linear-payment payment-form"
        v-model="cardNumber"
        placeholder="Enter your card details"
    /></label>
    <br />
    <button @click="paymentCard(cardNumber)">Pay now!</button>
  </div>

  <div v-if="useProductStore.cash" class="payment">
    <p>You are buying: {{ useProductStore.name }}</p>
    <p>The price is: €{{ useProductStore.price }}</p>
    <label>
      <input
        type="text"
        class="linear-payment payment-form"
        v-model="inputPayment"
        placeholder="Enter cash amount"
    /></label>
    <br />
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
  useProductStore.card = false;
  router.push("container");
}

async function paymentCash(inputPayment) {
  if (inputPayment < useProductStore.price) {
    alert("You don't have enough money to buy this product.");
  } else {
    const change = inputPayment - useProductStore.price;
    alert("Your change is: €" + parseFloat(change).toFixed(2) + " .");
    useProductStore.cash = false;
    router.push("container");
  }
}
</script>

<style scoped>
.payment {
  text-align: center;
}

.payment > p {
  padding: 1rem;
}

.payment-form {
  padding: 0.7rem;
  margin: 0.5rem;
}

.linear-payment {
  background: linear-gradient(to right bottom, #ebe9e9, #bbceee) padding-box,
    linear-gradient(90deg, #085889, #089c6d) border-box;
  border-radius: 10px;
  border: 1px solid transparent;
}
</style>
