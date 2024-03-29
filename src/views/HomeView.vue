<template>
  <div v-if="!isLoggedIn">
    <!-- login -->
    <template v-if="showLogin">
      <login-form/>
      <p>No account yet? <span @click="showLogin=false">Sign up</span> instead.</p>
    </template>
    <!-- or register -->
    <template v-else>
      <!-- listen for event -->
      <signup-form @loggedIn="isLoggedIn = true"/>
      <p>Already registered? <span @click="showLogin=true">Login</span> instead.</p>
    </template>
  </div>
  <!-- is logged in -->
  <div v-else>
    <h2>Welcome {{ displayName }}</h2>
  </div>
</template>

<script setup>
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { auth } from './firebase/init.js'

const isLoggedIn = false
</script>

<style lang="scss" scoped>

</style>