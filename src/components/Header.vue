<template>
    <nav>
        <p>Demeter</p>
        <router-link to="/">Home</router-link> |
        <router-link to="/product">Products</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/invoice">Invoice Customer</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/account">Sign Up</router-link> |
        <router-link to="/login">Login</router-link>
    </nav>
</template>

<style lang="scss">
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>