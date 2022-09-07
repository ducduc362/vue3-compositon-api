<template>
  <h3>Parent component {{ name }}</h3>
  <h3>Parent component {{ count }}</h3>
  <h3>Parent component {{ firstName }} {{ lastName }}</h3>
  <h3>Parent component {{ fullName }}</h3>
  <button @click="incrementCount">Increment count</button>
  <ChildA />
</template>

<script>
import { provide, ref, reactive, toRefs, computed } from "vue";
import ChildA from "./ChildA.vue";
export default {
  components: { ChildA },
  name: "ProvideInject",
  setup() {
    const count = ref(0);
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });
    function incrementCount() {
      count.value++;
    }
    const fullName = computed(() => {
      return `Hello ${state.firstName}  ${state.lastName}`;
    });
    provide("c_userName", "Codevolution");
    provide("c_count", count);
    provide("c_hero", state);
    provide("incrementCount", incrementCount);
    provide("c_fullname", fullName);
    return {
      count,
      incrementCount,
      ...toRefs(state),
      fullName,
    };
  },
  data() {
    return {
      name: "Vishwas",
    };
  },
  provide() {
    return {
      userName: this.name,
    };
  },
};
</script>

<style scoped>
</style>