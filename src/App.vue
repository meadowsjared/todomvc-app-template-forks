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
					@destroy-todo="destroyTodo(todo)"
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
todoStore.loadData();

//updates the tasks left from being checked
// const tasksLeft = computed(
// 	() => todoArray.value.filter((todo) => !todo.checked).length
// );

//watches as tasks become checked
// watch(
// 	() => tasksLeft.value,
// 	() => {
// 		console.log("tasksLeft changed");
// 	}
// );

function showChecked() {
	console.log("showChecked");
}

function destroyTodo(todo: Todo) {
	todoStore.destroyTodo(todo);
}

function clearCompleted() {
	todoStore.clearCompleted();
}

function showAll() {
	todoStore.setFilter("all");
}

function showActive() {
	todoStore.setFilter("active");
}

function showCompleted() {
	todoStore.setFilter("completed");
}

function setFilter(filter: string) {
	todoStore.setFilter(filter);
}
</script>

function useTodoStore() { throw new Error("Function not implemented."); }
