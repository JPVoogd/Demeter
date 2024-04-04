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
        <router-link  to="/login">Login</router-link>
    </nav>
</template>

<script setup>
import { supabase } from '@/supabase/config';

async function logout() {
    let { error } = await supabase.auth.signOut()
    console.log("Logged Out!")
    
}




</script>

<style lang="scss" scoped></style>
