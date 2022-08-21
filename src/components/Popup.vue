<template>
  <div>
    <h2>This is a popup</h2>
    <input class="form-input" v-model="username" />
    <button class="m-3 btn btn-danger" @click="$emit('close', username)">
      Close popup
    </button>
  </div>
</template>

<script>
export default {
  name: "PopupDefault",
  data() {
    return {
      username: "",
    };
  },
  emits: {
    close: (name) => {
      if (!name) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
</style>