<template>
  <router-link to="/shopping">Go to Shopping</router-link>
  <div class="about">
    <h1>This is an product page</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'product',
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get('').then(res => {
        console.log('test')
      })
    }
  }
}
</script>