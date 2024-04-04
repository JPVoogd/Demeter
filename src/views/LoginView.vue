<template>
  <div>
    <form @submit.prevent="login">
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
import { supabase } from '@/supabase/config';

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

// async function login() {
//   const result = await v$.value.$validate()
//   if (result) {
//     let { data, error } = await supabase.auth.signInWithPassword({
//       email: formData.email,
//       password: formData.password
//     })
//     console.log('Logged in!')
//   } else {
//     alert("error, form not submitted")
//   }

// async function login() {
//   const result = await v$.value.$validate()
//   if (result) {
//     try {
//       let { data, error } = await supabase.auth.signInWithPassword({
//         email: formData.email,
//         password: formData.password
//       })
//       if (error) throw error
//       alert('Check your email for the login link!')
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message)
//       }
//     }
//   } else {
//     alert("error, form not submitted")
//   }
// }

async function login() {
  const result = await v$.value.$validate()
  if (result) {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      console.log('Logged in!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  } else {
    alert("error, form not submitted")
  }
}

</script>

<style lang="scss" scoped></style>