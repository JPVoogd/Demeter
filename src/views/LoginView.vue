<template>
  <div>
    <form @submit.prevent="signInToFirebase">
      <BaseInput v-model="formData.email" label="Email" type="email" class="login-form" />
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
      <BaseInput v-model="formData.password" label="Password" type="password" class="login-form" />
      <span v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
      <br>
      <button>Login</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import BaseInput from '@/components/BaseInput.vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config.js'

const formData = reactive({
  email: "",
  password: "",
})

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  }
})

const v$ = useVuelidate(rules, formData)

async function signInToFirebase() {
  const result = await v$.value.$validate()
  if (result) {
    signInWithEmailAndPassword(
    auth,
    formData.email,
    formData.password,
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
  } else {
    alert("error, form not submitted")
  }

}
</script>

<style lang="scss" scoped></style>