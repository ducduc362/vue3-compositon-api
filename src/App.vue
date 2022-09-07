<template>
  <!-- <ClickCounter />
  <HoverCounter /> -->
  <!-- <PostList />
  <CreatePost /> -->
  <Parent />
</template>

<script>
// import ClickCounter from "./components/ClickCounter.vue";
// import HoverCounter from "./components/HoverCounter.vue";
// import PostList from "./components/PostList.vue";
// import CreatePost from "./components/CreatePost.vue";
import Parent from "./components/Parent.vue";

export default {
  name: "App",
  components: {
    // ClickCounter,
    // HoverCounter,
    // PostList,
    // CreatePost,
    Parent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
