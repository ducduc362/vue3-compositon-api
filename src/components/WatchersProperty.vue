<template>
  <h3>Volume Tracker - {{ volume }}</h3>
  <button class="btn btn-success" @click="volume += 2">Increase</button>
  <button class="btn btn-danger" @click="volume -= 2">Decrease</button>
  <br />
  <input type="text" v-model="movie" />
  <input type="text" v-model="infoMovie.title" />
  <input type="text" v-model="infoMovie.time" />
  <br />
  <button class="btn btn-warning" @click="listMovies.push('Wonder Women')">
    Add new movie
  </button>
  <button
    class="btn btn-warning"
    @click="listMovies = listMovies.concat(['Wonder Women'])"
  >
    Add new movie
  </button>
</template>

<script>
export default {
  data() {
    return {
      volume: 0,
      movie: "Batman",
      infoMovie: {
        title: "Batman",
        time: "120 minutes",
      },
      listMovies: ["Batman", "Superman"],
    };
  },

  watch: {
    volume(newVal, oldVal) {
      if (newVal > oldVal && newVal === 16) {
        alert("This amount of volume can be dangerous your ears");
      }
    },
    movie: {
      handler(newVal) {
        console.log(`Call api to set new value to movie: ${newVal}`);
      },
      immediate: true,
    },
    infoMovie: {
      handler(newVal) {
        console.log(
          `Call api with movie title = ${newVal.title} and actor = ${newVal.time}`
        );
      },
      deep: true,
    },
    listMovies: {
      handler(newVal) {
        console.log(`Update list ${newVal}`);
      },
      //   deep: true,
    },
  },
};
</script>

<style>
</style>