<template>
    <div>
        <form @submit.prevent="createUser">
            <BaseInput v-model="email" label="Email" type="email" class="login-form" />
            <BaseInput v-model="password" label="Password" type="password" class="login-form" />
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config.js'

const email = ref('');
const password = ref('');

async function createUser() {
  createUserWithEmailAndPassword(
    auth,
    email.value,
    password.value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // ..
    })
}


</script>

<style lang="scss" scoped></style>