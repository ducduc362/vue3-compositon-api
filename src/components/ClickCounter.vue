<template >
  <div>
    <button class="btn btn-success" @click="increamentCounter">
      Click - {{ counter }}
    </button>
  </div>
</template>
<script>
import CounterMixin from "../mixins/counter";
export default {
  name: "ClickCounter",
  mixins: [CounterMixin],
  data() {
    return {
      counter: 100,
    };
  },
};
</script>
<style >
</style>