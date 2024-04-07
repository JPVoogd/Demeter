<template>
  <form @submit.prevent="editUser">
    <BaseInput
      v-model="useAuthStore.fname"
      label="First Name"
      type="text"
      class="login-form"
    />
    <BaseInput
      v-model="useAuthStore.lname"
      label="Last Name"
      type="text"
      class="login-form"
    />
    <BaseInput
      v-model="useAuthStore.email"
      label="Email"
      type="text"
      class="login-form"
    />
    <button>Submit</button>
  </form>
</template>

<script setup>
import router from "@/router";
import BaseInput from "@/components/BaseInput.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { supabase } from "@/supabase/config";

async function editUser() {
  const { data, error } = await supabase.auth.updateUser({
    email: useAuthStore.email,
    data: { fname: useAuthStore.fname, lname: useAuthStore.lname },
  });
  if (error) {
    alert(error);
  } else {
    useAuthStore.fname = useAuthStore.fname;
    useAuthStore.lname = useAuthStore.lname;
    useAuthStore.email = useAuthStore.email;
    router.push("user");
  }
}
</script>

<style lang="scss" scoped></style>
