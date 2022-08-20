<template>
  <h1>Computed Property</h1>
  <h3>{{ fullName }}</h3>
  <button class="btn btn-success" @click="changeFullName">Change Name</button>
  <template v-for="item in expensiveItems" :key="item.id">
    <h3>{{ item.name }} - {{ item.price }}</h3>
  </template>
  <h3>{{ totalPriceItems }}</h3>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Duc",
      lastName: "Nguyen",
      items: [
        {
          id: 1,
          name: "Item-1",
          price: 100,
        },
        {
          id: 2,
          name: "Item-2",
          price: 200,
        },
        {
          id: 3,
          name: "Item-3",
          price: 300,
        },
      ],
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + this.lastName;
      },
      set(value) {
        const names = value.split(" ");
        console.log(names);
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
    totalPriceItems() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
  },
  methods: {
    changeFullName() {
      this.fullName = "Tuyt Mei";
    },
  },
};
</script>

<style>
</style>