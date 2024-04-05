<template>
    <nav>
        <p>Demeter</p>
        <router-link to="/">Home</router-link> |
        <router-link to="/product">Products</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/invoice">Invoice Customer</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/user">User</router-link> |
        <router-link to="/signup">Sign Up</router-link> |
        <button @click="logout">Logout</button>
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase/config';

// const account = ref()
// getSession()

// async function getSession() {
//   account.value = await supabase.auth.getSession();
// }

async function logout() {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
    } else {
        console.log("Logged out succesfull")
    }
}




</script>

<style lang="scss" scoped></style>
