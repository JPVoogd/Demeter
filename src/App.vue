<template>
  <div class="container">
    <HeaderComponent></HeaderComponent>
  <router-view />
  <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>