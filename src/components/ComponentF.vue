<template>
  <h2>Component F</h2>
  {{ username }}
</template>

<script>
export default {
  name: "ComponentF",
  inject: ["username"],
};
</script>

<style>
</style>