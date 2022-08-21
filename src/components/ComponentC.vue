<template>
  <h2>Component C - {{ username }}</h2>
  <ComponentE />
</template>

<script>
import ComponentE from "./ComponentE";
export default {
  name: "ComponentC",
  components: {
    ComponentE,
  },
  inject: ["username"],
};
</script>

<style>
</style>