<template>
  <h3>DeepChild component</h3>
</template>

<script>
export default {
  name: "DeepChildExample",

  beforeCreate() {
    console.log("DeepChild beforeCreate");
  },
  created() {
    console.log("DeepChild created");
  },
  beforeMount() {
    console.log("DeepChild beforeMount");
  },
  mounted() {
    console.log("DeepChild mounted");
  },
  beforeUpdate() {
    console.log("DeepChild beforeUpdate");
  },
  updated() {
    console.log("DeepChild updated");
  },
  beforeUnmount() {
    console.log("DeepChild beforeUnmount");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
};
</script>

<style>
</style>