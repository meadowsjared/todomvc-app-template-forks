<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus />
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label @click="sortTodos" for="sort-todos"> Sort Todos</label>
			<ul class="todo-list">
				<!-- These are here just to show the structure of the list items -->
				<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
				<Todo
					v-for="todo of todoStore.todos"
					:key="todo.id"
					v-model="
						todoStore.todos[
							todoStore.todos.findIndex((pTodo) => todo.id === pTodo.id)
						]
					"
					@update:modelValue="updateTodos(todo)"
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
					<!-- <a
						:class="{ selected: todoStore.filter === 'all' }"
						@click="showAll"
						href="#/"
						>All</a
					> -->
					<Button
						@click="setFilter"
						:active="'all' === todoStore.filter"
						:label="{ displayText: 'All', value: 'all' }"
					/>
				</li>
				<li>
					<!-- <a @click="showActive" href="#/active">Active</a> -->
					<Button
						@click="setFilter"
						:active="'unchecked' === todoStore.filter"
						:label="{ displayText: 'Unchecked', value: 'unchecked' }"
					/>
				</li>
				<li>
					<!-- <a @click="showCompleted" href="#/completed">Completed</a> -->
					<Button
						@click="setFilter"
						:active="'checked' === todoStore.filter"
						:label="{ displayText: 'Checked', value: 'checked' }"
					/>
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
import { SortState } from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";

const todoStore = useTodoStore();
todoStore.loadData();
todoStore.tasksLeft;
let name = "DayCHU";
let asdf = [1, 2, 3];

const sortState = ref<SortState>(SortState.UNSORTED);
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

function destroyTodo(todo: Todo) {
	todoStore.destroyTodo(todo);
	console.log("destroyTodo from parent", todo);
}

function clearCompleted() {
	todoStore.clearCompleted();
}

function showAll() {
	console.log("showAll");
	todoStore.setFilter("all");
}
function showActive() {
	console.log("showActive");
	todoStore.setFilter("active");
}
function showCompleted() {
	console.log("showCompleted");
	todoStore.setFilter("completed");
}
function setFilter(filter: string) {
	todoStore.setFilter(filter);
}
function sortTodos() {
	sortState.value = (sortState.value + 1) % 3;
	if (sortState.value === SortState.UNSORTED) {
		console.log("sortTodos", "SortState.UNSORTED");
	}
	if (sortState.value === SortState.ASCENDING) {
		console.log("sortTodos", "SortState.ASCENDING");
	}
	if (sortState.value === SortState.DESCENDING) {
		console.log("sortTodos", "SortState.DESCENDING");
	}
	todoStore.setSort(sortState.value);
}
function updateTodos(todo: Todo) {
	todoStore.updateTodo(todo);
}
console.log("hello from app.vue", todoStore.todos);
</script>
