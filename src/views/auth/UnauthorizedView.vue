<template>
  <div>
    <h1>Unauthorized</h1>
    <section class="linear-border unauthorized">
      <p>You are not allowed here</p>
    <router-link to="/"> Go back to Home </router-link>
    </section>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.unauthorized {
padding: 4rem 2rem;
text-align: center;
width: 50%;
margin: 3rem auto;
}

.unauthorized > p {
  margin-bottom: 3rem;
}
</style>