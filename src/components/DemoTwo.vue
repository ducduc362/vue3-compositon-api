<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  // toRefs
  name: "DemoOne",
  setup() {
    const state = reactive({
      firstName: "Yasuo",
      lastName: "Tran",
    });
    setTimeout(() => {
      state.firstName = "A";
      state.lastName = "B";
      console.log(state);
    }, 2000);
    // return {
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    // };
    return toRefs(state);
  },
};
</script>

<style scoped>
</style>