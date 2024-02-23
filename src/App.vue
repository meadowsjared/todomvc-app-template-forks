<template>
	<section class="todoapp">
		<h1>todos</h1>
		<header class="header">
			<input class="new-todo" placeholder="What needs to be done?" autofocus />
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label @click="sortTodos" for="sort-todos">sort todos</label>
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
					<Button
						@click="setFilter"
						label="ALL STUFF"
						active-value="all"
						:filter="todoStore.filter"
					/>
				</li>
				<li>
					<Button
						@click="setFilter"
						label="Doing"
						active-value="active"
						:filter="todoStore.filter"
					/>
				</li>
				<li>
					<Button
						@click="setFilter"
						label="Done"
						active-value="completed"
						:filter="todoStore.filter"
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
import type { Todo } from "./domain/Todo";
import { SortState } from "./domain/Todo";
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

const sortState = ref<SortState>(SortState.UNSORTED);

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
function sortTodos() {
	sortState.value = (sortState.value + 1) % 3;
	console.log("sortTodos", sortState.value);
	todoStore.setSort(sortState.value);
}
</script>
