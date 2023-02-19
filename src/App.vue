<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input
				class="new-todo"
				@keypress.enter="handleAddTodo"
				placeholder="What needs to be done?"
				autofocus
				v-model="newTodo"
			/>
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label
				@click="sortTodos"
				for="sort-todos"
				title="Sort Todos"
				:class="{
					'sort-arrow': true,
					'sort-arrow-right': sortState === SortState.UNSORTED,
					'sort-arrow-up': sortState === SortState.ASCENDING,
					'sort-arrow-down': sortState === SortState.DESCENDING,
				}"
			>
				Sort Todos</label
			>
			<ul v-if="todoStore.todos" class="todo-list">
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
					@update:model-value="todosUpdated(todo)"
					@destroy-todo="destroyTodo(todo)"
				/>
				<EmptyTodos v-if="todoStore.todos.length === 0" />
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
						type="button"
						@click="setFilter"
						:active="'all' === todoStore.filter"
						:label="{ displayText: 'All', value: 'all' }"
					/>
				</li>
				<li>
					<!-- <a @click="showActive" href="#/active">Active</a> -->
					<Button
						type="button"
						@click="setFilter"
						:active="'unchecked' === todoStore.filter"
						:label="{ displayText: 'Unchecked', value: 'unchecked' }"
					/>
				</li>
				<li>
					<!-- <a @click="showCompleted" href="#/completed">Completed</a> -->
					<Button
						type="button"
						@click="setFilter"
						:active="'checked' === todoStore.filter"
						:label="{ displayText: 'Checked', value: 'checked' }"
					/>
				</li>
			</ul>
			<!-- Hidden if no completed items are left ↓ -->
			<button type="button" @click="clearCompleted" class="clear-completed">
				Clear completed
			</button>
		</footer>
	</section>
	<div @click="showChecked">{{ todoStore.todos?.length }}</div>
</template>

<script setup lang="ts">
//import type { Ref } from "vue";
import type Todo from "./domain/Todo";
import { SortState } from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";

const todoStore = useTodoStore();
todoStore.loadData();
todoStore.tasksLeft;
let name = "DayCHU";
let asdf = [1, 2, 3];
const newTodo = ref("");

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
function todosUpdated(todo: Todo) {
	todoStore.updateTodo(todo);
}
function handleAddTodo() {
	console.log("addTodo", newTodo.value);
	todoStore.addTodo(newTodo.value);
	newTodo.value = "";
}

console.log("hello from app.vue", todoStore.todos);
</script>

<style scoped>
label.sort-arrow {
	cursor: pointer;
}
label.sort-arrow-right::before {
	transform: rotate(0deg);
}
label.sort-arrow-down::before {
	transform: rotate(90deg);
}
label.sort-arrow-up::before {
	transform: rotate(270deg);
}
label.sort-arrow::before {
	transition: transform 0.3s ease-in-out;
}
</style>
