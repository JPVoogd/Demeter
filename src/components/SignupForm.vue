<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    //refs
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      console.log(email.value, password.value)
    }

    return { email, password, handleSubmit }
  },
}
</script>

<style lang="scss" scoped></style>
