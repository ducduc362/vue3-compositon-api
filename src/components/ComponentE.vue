<template>
  <h2>Component E - {{ username }}</h2>
  <ComponentF />
</template>

<script>
import ComponentF from "./ComponentF";
export default {
  name: "ComponentE ",
  components: {
    ComponentF,
  },
  data() {
    return {
      name: "Yasuo Tran",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style>
</style>