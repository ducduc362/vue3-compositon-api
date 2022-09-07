<template>
  <form @submit.prevent="createPost" class="container">
    <div class="form-group">
      <label for="userId">User ID</label>
      <input
        type="text"
        class="form-control"
        id="userId"
        placeholder="Enter UserId"
        v-model="formData.userId"
      />
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="Title"
        v-model="formData.title"
      />
    </div>
    <div class="form-group">
      <label for="body">Body</label>
      <input
        type="text"
        class="form-control"
        id="body"
        placeholder="Body"
        v-model="formData.body"
      />
    </div>
    <button type="submit" class="btn btn-primary m-3">Create Post</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => {
          console.log(response);
          console.log(this.formData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>