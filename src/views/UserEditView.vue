<template>
  <form @submit.prevent="editUser">
    <BaseInput
      v-model="formData.fname"
      label="First Name"
      type="text"
    />
    <span v-for="error in v$.fname.$errors" :key="error.$uid">{{
      error.$message
    }}</span>

    <BaseInput
      v-model="formData.lname"
      label="Last Name"
      type="text"
    />
    <span v-for="error in v$.lname.$errors" :key="error.$uid">{{
      error.$message
    }}</span>

    <BaseInput
      v-model="formData.email"
      label="Email"
      type="text"
    />
    <span v-for="error in v$.email.$errors" :key="error.$uid">{{
      error.$message
    }}</span>

    <br />
    <button>Submit</button>
  </form>
</template>

<script setup>
import { reactive, computed } from "vue";
import router from "@/router";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useAuthStore } from "@/stores/AuthStore";
import { supabase } from "@/supabase/config";

const formData = reactive({
  fname: useAuthStore.fname,
  lname: useAuthStore.lname,
  email: useAuthStore.email,
});

const rules = computed(() => {
  return {
    fname: { required },
    lname: { required },
    email: { required, email },
  };
});

const v$ = useVuelidate(rules, formData);

async function editUser() {
  const result = await v$.value.$validate();
  if (result) {
    const { data, error } = await supabase.auth.updateUser({
      email: formData.email,
      data: { fname: formData.fname, lname: formData.lname },
    });
    if (error) {
      alert(error);
    } else {
      useAuthStore.fname = formData.fname;
      useAuthStore.lname = formData.lname;
      useAuthStore.email = formData.email;
      router.push("user");
    }
  } else {
    alert("error, form not submitted");
  }
}
</script>

<style lang="scss" scoped></style>
