<template>
  <div>
    <h1>Test</h1>
    <SignupForm />
    <LoginForm />
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: { SignupForm, LoginForm }
}

</script>

<style lang="scss" scoped>

</style>