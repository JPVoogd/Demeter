<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <BaseInput
        v-model="formData.email"
        label="Email"
        type="email"
        class="login-form"
      />
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{
        error.$message
      }}</span>
      <BaseInput
        v-model="formData.password"
        label="Password"
        type="password"
        class="login-form"
      />
      <span v-for="error in v$.password.$errors" :key="error.$uid">{{
        error.$message
      }}</span>
      <br />
      <button @click="login">Login</button>
    </form>
  </div>
  <button @click="seeUser">See User</button>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { supabase } from "@/supabase/config";
import { useAuthStore } from "@/stores/AuthStore";
import { useRouter } from "vue-router";
const router = useRouter();

const formData = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});

const v$ = useVuelidate(rules, formData);

const account = ref("");

function seeUser() {
  console.log(useAuthStore);
}

async function login() {
  const result = await v$.value.$validate();
  if (result) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      account.value = await supabase.auth.getSession();

      useAuthStore.fname = account.value.data.session.user.user_metadata.fname;
      useAuthStore.lname = account.value.data.session.user.user_metadata.lname;
      useAuthStore.email = account.value.data.session.user.email;
      useAuthStore.role = account.value.data.session.user.role;
      router.push("user");
    }
  } else {
    alert("error, form not submitted");
  }
}
</script>

<style lang="scss" scoped></style>
