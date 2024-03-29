<template>
  <div>
    <BaseInput v-model="firstName" label="First Name" type="text" class="login-form" />
    <BaseInput v-model="lastName" label="Last Name" type="text" class="login-form" />
    <button @click="handleButtonClick">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue'

const firstName = ref('');
const lastName = ref('');

const buttonText = 'Submit';

function handleButtonClick() {
    console.log('Button clicked!');
}
</script>

<style lang="scss" scoped></style>