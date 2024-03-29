<template>
  <HeaderComponent></HeaderComponent>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script setup>
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
</script>

<style lang="scss" scoped></style>