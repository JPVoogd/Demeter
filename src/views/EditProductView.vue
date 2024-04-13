<template>
  <h1>Edit Product</h1>
  <form @submit.prevent="editUser" class="edit-product-form">
    <h2>You are editing: {{ useProductStore.name }}</h2>
    <p>{{ useProductStore.description }}</p>

    <BaseInput v-model="formData.stock" label="Product stock:" type="text"/>
    <span v-for="error in v$.stock.$errors" :key="error.$uid">{{
        error.$message
      }}</span>

    <br/>
    <button>Edit product</button>
  </form>
</template>

<script setup>
import {reactive, computed} from "vue";
import router from "@/router";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import {required, email} from "@vuelidate/validators";
import {useProductStore} from "@/stores/ProductStore";
import {supabase} from "@/supabase/config";

const formData = reactive({
  stock: useProductStore.stock,
});

const rules = computed(() => {
  return {
    stock: {required},
  };
});

const v$ = useVuelidate(rules, formData);

async function editUser() {
  const result = await v$.value.$validate();
  if (result) {
    const {data, error} = await supabase
        .from("products")
        .update({product_stock: formData.stock})
        .eq("id", useProductStore.id);
  } else {
    alert("error, form not submitted");
  }
  router.push("product");
}
</script>

<style lang="scss" scoped>
.edit-product-form {
  text-align: center;
}

.edit-product-form > h2 {
  padding: 1rem 0;
}

.edit-product-form > p {
  padding: 1rem 0;
}

</style>
