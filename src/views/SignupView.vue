<template>
    <div>
        <form @submit.prevent="handleButtonClick">
            <BaseInput v-model="username" label="Username" type="text" class="login-form" />
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

const username = ref('');
const email = ref('');
const password = ref('');

function handleButtonClick() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
                })
        .catch((error) => {
            console.log(error.message)
        })
}


</script>

<style lang="scss" scoped></style>