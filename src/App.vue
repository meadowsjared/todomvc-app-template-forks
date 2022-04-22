<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <Todo
          v-for="(todo, index) of todoArray"
          :key="todo.id"
          v-model="todoArray[index]"
          @destroy-todo="destroyTodo(index)"
        />
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{ tasksLeft }}</strong> item left</span
      >
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button @click="clearCompleted" class="clear-completed">
        Clear completed
      </button>
    </footer>
  </section>
  <div @click="showChecked">{{ todoArray.length }}</div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type Todo from "./domain/Todo";

const todoArray: Ref<Todo[]> = ref([
  { checked: true, message: "Eat Food", id: 0 },
  { checked: true, message: "Look at Noteworthy Trees", id: 1 },
  { checked: false, message: "Sleep at a REASONABLE Hour", id: 2 },
]);
let name = "DayCHU";
let asdf = [1, 2, 3];

const tasksLeft = computed(
  () => todoArray.value.filter((todo) => !todo.checked).length
);

watch(
  () => tasksLeft.value,
  () => {
    console.log("tasksLeft changed");
  }
);

function showChecked() {
  console.log("showChecked");
}

function destroyTodo(index: number) {
  todoArray.value.splice(index, 1);
  console.log("destroyTodo from parent", index);
}

function clearCompleted() {
  todoArray.value = todoArray.value.filter((todo) => !todo.checked);
}

console.log("hello from app.vue", todoArray);
</script>
