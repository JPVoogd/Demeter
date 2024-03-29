<template>
  <div>
    <form @submit.prevent="signInToFirebase">
      <BaseInput v-model="username" label="username" type="text" class="login-form" />
      <BaseInput v-model="password" label="password" type="password" class="login-form" />
      <button>{{ buttonText }}</button>
    </form>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config.js'

const username = ref('')
const password = ref('')

const buttonText = 'Submit';

async function signInToFirebase() {
  signInWithEmailAndPassword(
    auth,
    username.value,
    password.value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}
</script>

<style lang="scss" scoped></style>