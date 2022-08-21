<template>
  <div class="mb-3 p-3">
    <label for="exampleFormControlInput1" class="form-label"
      >Email address</label
    >
    <input
      type="text"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>