<template>
  <div>
    <h1>404 Page Not Found</h1>
    <section class="linear-border error">
      <p>This page could not be found.</p>
    <router-link to="/"> Go back to Home </router-link>
    </section>

  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.error {
padding: 4rem 2rem;
text-align: center;
width: 50%;
margin: 3rem auto;
}

.error > p {
  margin-bottom: 3rem;
}
</style>
