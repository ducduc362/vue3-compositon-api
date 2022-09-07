<template>
  <button class="btn btn-primary m-3" @click="isShow = !isShow">
    Show child component
  </button>
  <Child v-if="isShow" />
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "ParentExample",
  components: {
    Child,
  },
  data() {
    return {
      isShow: true,
    };
  },
  beforeCreate() {
    console.log("Parent beforeCreate");
  },
  created() {
    console.log("Parent created");
  },
  beforeMount() {
    console.log("Parent beforeMount");
  },
  mounted() {
    console.log("Parent mounted");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate");
  },
  updated() {
    console.log("Parent updated");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmount");
  },
  unmounted() {
    console.log("Parent unmounted");
  },
};
</script>

<style>
</style>