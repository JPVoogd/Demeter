<template>
  <div>
    <BaseInput v-model="firstName" label="First Name" type="text" class="login-form" />
    <BaseInput v-model="lastName" label="Last Name" type="text" class="login-form" />
    <BaseInput v-model="lastName" type="submit" value="Submit" class="login-form" @click="handleButtonClick" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import BaseInput from '@/components/BaseInput.vue'
import { useAuthStore } from '@/stores/AuthStore';

const firstName = ref('');
const lastName = ref('');

function handleButtonClick() {
    console.log(firstName.value, lastName.value);
}

</script>

<style lang="scss" scoped></style>