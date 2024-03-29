<template>
  <div>
    <form @submit.prevent="Login">
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

const username = ref('');
const password = ref('');

const buttonText = 'Submit';

function Login() {
  signInWithEmailAndPassword(auth, username.value, password.value)
    .then(() => {

      console.log("logged In!")
    })
    .catch((error) => {
            console.log(error.message)
        })
}
</script>

<style lang="scss" scoped></style>