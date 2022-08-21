<template>
  <h3 v-for="name in nameList" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>
<script>
export default {
  name: "NameList",
  data() {
    return {
      nameList: [
        {
          firstName: "Yasuo",
          lastName: "Tran",
        },
        {
          firstName: "Yasuo",
          lastName: "Nguyen",
        },
        {
          firstName: "Yasuo",
          lastName: "Ha",
        },
      ],
    };
  },
};
</script>
<style>
</style>