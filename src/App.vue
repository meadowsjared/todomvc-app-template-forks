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
					v-for="(todo, index) of todoStore.todos"
					:key="todo.id"
					v-model="todoStore.todos[index]"
					@destroy-todo="destroyTodo(index)"
				/>
			</ul>
		</section>
		<!-- This footer should be hidden by default and shown when there are todos -->
		<footer class="footer">
			<!-- This should be `0 items left` by default -->
			<span class="todo-count"
				><strong>{{ todoStore.tasksLeft }}</strong> item{{
					todoStore.tasksLeft === 1 ? "" : "s"
				}}
				left</span
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
	<div @click="showChecked">{{ todoStore.todos.length }}</div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type Todo from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";

const todoStore = useTodoStore();
todoStore.tasksLeft;
let name = "DayCHU";
let asdf = [1, 2, 3];

// const tasksLeft = computed(
// 	() => todoArray.value.filter((todo) => !todo.checked).length ?? 0
// );

// watch(
// 	() => tasksLeft.value,
// 	() => {
// 		console.log("tasksLeft changed");
// 	}
// );

function showChecked() {
	console.log("showChecked");
}

function destroyTodo(index: number) {
	todoStore.destroyTodo(index);
	console.log("destroyTodo from parent", index);
}

function clearCompleted() {
	todoStore.clearCompleted();
}

console.log("hello from app.vue", todoStore.todos);
</script>
