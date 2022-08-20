<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Todo list</h1>
      </div>
      <div class="col">
        <div class="col">
          <button
            v-if="!isEdit"
            @click="editingMode"
            type="button"
            class="btn btn-primary"
          >
            Add item
          </button>
          <button
            v-else
            @click="editingMode"
            type="button"
            class="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <form @submit.prevent="addNewTodo" v-show="isEdit">
      <div class="row">
        <div class="col">
          <input type="text" v-model="newTodo" />
          <input class="m-3" type="checkbox" v-model="isPriority" />
        </div>
        <div class="col">
          <button type="submit" class="btn btn-primary">Save Todo</button>
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <li
            v-for="todo in reversedItem"
            @click="resolveTodo(todo)"
            :key="todo.id"
            class="list-group-item fw-bold d-flex justify-content-between"
            :class="{ strikeout: todo.isDone, priority: todo.isPriority }"
          >
            <span>{{ todo.name }} </span>
            <button type="button" class="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "App",
  setup() {
    const isEdit = ref(false);
    const newTodo = ref("");
    const isPriority = ref(false);
    const todoList = ref([
      { id: 1, name: "Wake up", isDone: true, isPriority: true },
      { id: 2, name: "Go to work", isDone: false, isPriority: true },
      { id: 3, name: "Report bugs", isDone: false, isPriority: false },
    ]);

    const reversedItem = computed(() => [...todoList.value].reverse());

    const editingMode = () => {
      isEdit.value = !isEdit.value;
    };

    const resolveTodo = (todo) => {
      todo.isDone = !todo.isDone;
    };

    const addNewTodo = () => {
      todoList.value.push({
        id: todoList.value.length + 1,
        name: newTodo.value,
        isDone: false,
        isPriority: isPriority.value,
      });
      newTodo.value = "";
    };

    return {
      todoList,
      isEdit,
      newTodo,
      isPriority,
      resolveTodo,
      editingMode,
      addNewTodo,
      reversedItem,
    };
  },
};
</script>

<style>
.strikeout {
  text-decoration: line-through;
  color: grey;
}

.priority {
  color: orange;
}

.list-group-item {
  cursor: pointer;
}
</style>