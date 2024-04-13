<template>
  <div>
    <label v-if="label"> {{ label }}</label>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="linear-input input-form"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.input-form {
  padding: 0.7rem;
  margin: 0.5rem;
}

.linear-input {
  background: linear-gradient(to right bottom, #ebe9e9, #bbceee) padding-box,
  linear-gradient(90deg, #085889, #089c6d) border-box;
  border-radius: 10px;
  border: 1px solid transparent;
}
</style>
