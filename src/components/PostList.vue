<template>
  <!-- <button class="btn btn-success m-3" @click="getPosts">Load posts</button> -->
  <div class="container" v-for="post in posts" :key="post.id">
    <h3>{{ post.id }}. {{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <hr />
  </div>
  <h3 v-if="errorMsg">{{ errorMsg }}</h3>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      errorMsg: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error retrieving data";
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style>
</style>