<template>
  <h1>Welcome, {{ msg }}</h1>
  <div>
    <img src="https://placehold.co/250x250" alt="" />
    <p>First name: {{ account.data.session.user.user_metadata.fname }}</p>
    <p>Last name: {{ account.data.session.user.user_metadata.lname }}</p>
    <p>Email: {{ account.data.session.user.email }}</p>
    <p>role: {{ account.data.session.user.role }}</p>
    <button><router-link to="/user-edit">Edit</router-link></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "@/supabase/config";

const account = ref();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
}
</script>

<style lang="scss" scoped></style>
