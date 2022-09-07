<template>
  <h3>Child component</h3>
  <DeepChild />
</template>

<script>
import DeepChild from "./DeepChild.vue";
export default {
  name: "ChildExample",
  components: {
    DeepChild,
  },

  beforeCreate() {
    console.log("Child beforeCreate");
  },
  created() {
    console.log("Child created");
  },
  beforeMount() {
    console.log("Child beforeMount");
  },
  mounted() {
    console.log("Child mounted");
  },
  beforeUpdate() {
    console.log("Child beforeUpdate");
  },
  updated() {
    console.log("Child updated");
  },
  beforeUnmount() {
    console.log("Child beforeUnmount");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
};
</script>

<style>
</style>