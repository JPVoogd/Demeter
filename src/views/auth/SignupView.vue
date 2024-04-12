<template>
  <div>
    <h1>Make an Account</h1>
    <form @submit.prevent="createUser" class="signup-form">
      <BaseInput
        v-model="formData.fname"
        type="text"
        placeholder="First name"
      />
      <span v-for="error in v$.fname.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

      <BaseInput
        v-model="formData.lname"
        type="text"
        placeholder="Last name"
      />
      <span v-for="error in v$.lname.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

      <BaseInput
        v-model="formData.email"
        type="email"
        placeholder="Email"
      />
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

      <BaseInput
        v-model="formData.password"
        type="password"
        placeholder="Password"
      />
      <span v-for="error in v$.password.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

      <BaseInput
        v-model="formData.confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

      <br />
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";
import { supabase } from "@/supabase/config";
import { useRouter } from "vue-router";
const router = useRouter();

const formData = reactive({
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "user",
});

const rules = computed(() => {
  return {
    fname: { required },
    lname: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPassword: { required, sameAs: sameAs(formData.password) },
  };
});

const v$ = useVuelidate(rules, formData);

async function createUser() {
  const result = await v$.value.$validate();
  if (result) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          fname: formData.fname,
          lname: formData.lname,
          role: formData.role,
        },
      },
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      router.push("login");
    }
    alert("succes, form submitted!");
  } else {
    alert("error, form not submitted!");
  }
}
</script>

<style lang="scss" scoped>
.signup-form {
  text-align: center;
}
</style>
