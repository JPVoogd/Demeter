<template>
  <div>
    <h1>Contact us</h1>
    <form @submit.prevent="login" class="contact-form">
      <BaseInput v-model="formData.name" type="text" placeholder="Your name"/>
      <span v-for="error in v$.name.$errors" :key="error.$uid">{{
          error.$message
        }}</span>

      <BaseInput v-model="formData.email" type="email" placeholder="Your email"/>
      <span v-for="error in v$.email.$errors" :key="error.$uid">{{
          error.$message
        }}</span>

      <BaseInput
          v-model="formData.phoneNumber"
          type="phone"
          placeholder="Your phone number"
      />
      <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid">{{
          error.$message
        }}</span>

      <BaseInput
          v-model="formData.message"
          type="textarea"
          placeholder="Your message (optional)"
      />
      <span v-for="error in v$.message.$errors" :key="error.$uid">{{
          error.$message
        }}</span>

      <br/>
      <button>Submit form</button>
    </form>
  </div>
</template>

<script setup>
import {reactive, computed} from "vue";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import {required, email} from "@vuelidate/validators";

const formData = reactive({
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
});

const rules = computed(() => {
  return {
    name: {required},
    email: {required, email},
    phoneNumber: {required},
    message: {},
  };
});

const v$ = useVuelidate(rules, formData);

async function login() {
  const result = await v$.value.$validate();
  if (result) {
    alert("Your form has been submitted!");
  } else {
    alert("error, form not submitted");
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  text-align: center;
}
</style>
