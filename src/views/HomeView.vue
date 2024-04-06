<template>
<div><h1>Home</h1></div>
<div>From A: {{ store.count }}</div>

<button @click="storeCount">
    From B: {{ store.count }}
  </button>
</template>

<script setup>
import { store } from '@/stores/Auth'

function storeCount() {
    store.count++
}
</script>

<style lang="scss" scoped>

</style>