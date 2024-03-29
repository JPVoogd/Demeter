<template>
    <nav>
        <p>Demeter</p>
        <router-link to="/">Home</router-link> |
        <router-link to="/product">Products</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/invoice">Invoice Customer</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/signup">Sign Up</router-link> |
        <button v-if="user?.email" @click="signOutFirebase">Logout</button>
        <router-link v-else to="/login">Login</router-link>
    </nav>
</template>

<script setup>
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from 'firebase/auth';

const user = useCurrentUser()
console.log(user)

const auth = useFirebaseAuth();

async function signOutFirebase() {
    signOut(auth)
.then(() => {
    // Sign-out succesful.
    console.log("Logged Out!")
}).catch((error) => {
    // An error happend.
    console.log(error)
})
}



</script>

<style lang="scss" scoped></style>
