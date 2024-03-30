<template>
  <div>
    <form @submit.prevent="createUser">
      <BaseInput v-model="formData.username" label="Username" type="text" class="login-form" />
      <span v-for="error in v$.username.$errors" :key="error.$uid">{{ error.$message }}</span>
      <BaseInput v-model="formData.email" label="Email" type="email" class="login-form" />
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
      <BaseInput v-model="formData.password" label="Password" type="password" class="login-form" />
      <span v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
      <BaseInput v-model="formData.confirmPassword" label="Confirm Password" type="password" class="login-form" />
      <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid">{{ error.$message }}</span>
      <br>
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import BaseInput from '@/components/BaseInput.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email, sameAs } from '@vuelidate/validators'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/config.js'

const formData = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
})

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(10) },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAs: sameAs(formData.password) },
  }
})

const v$ = useVuelidate(rules, formData)

async function createUser() {
  const result = await v$.value.$validate()
  if (result) {
    createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
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
    alert("succes, form submitted!")
  } else {
    alert("error, form not submitted!")
  }
}



</script>

<style lang="scss" scoped></style>