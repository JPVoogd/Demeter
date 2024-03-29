<template>
  <router-link to="/customer-info">go to constumer info</router-link>
  <h1 class="about">
    Shopping basket
  </h1>

  <div class="productrow flex margin">
    <div class="flex">
      <img src="https://placehold.co/75x75" alt="">
      <div class="product flex">
        <p>Product naam</p>
        <p>Product beschrijving</p>
      </div>
    </div>

    <div class="amount flex">
      <p>€15</p>
      <p>3</p>
      <p>€45</p>
      <p>Delete</p>
    </div>
  </div>

  <div class="productrow flex margin">
    <div class="flex">
      <img src="https://placehold.co/75x75" alt="">
      <div class="product flex">
        <p>Product naam</p>
        <p>Product beschrijving</p>
      </div>
    </div>

    <div class="amount flex">
      <p>€15</p>
      <p>3</p>
      <p>€45</p>
      <p>Delete</p>
    </div>
  </div>

  <div class="productrow flex margin">
    <div class="flex">
      <img src="https://placehold.co/75x75" alt="">
      <div class="product flex">
        <p>Product naam</p>
        <p>Product beschrijving</p>
      </div>
    </div>

    <div class="amount flex">
      <p>€15</p>
      <p>3</p>
      <p>€45</p>
      <p>Delete</p>
    </div>
  </div>

  <button>Go to payments</button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.productrow {
  justify-content: space-between;
}

.productrow img {
  margin: 0 20px;
}

.product {
  flex-direction: column;
}

.amount {
  margin: 0 20px;
}

.amount p {
  padding: 0 20px;
}

button {
  outline: 0;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

button:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
</style>

