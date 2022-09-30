import { defineStore } from "pinia";
import type Todo from "../domain/Todo";
import { SortState } from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[];
	_filter: string;
	_sort: SortState;
	maxId: number;
}

function sortTodos(a: Todo, b: Todo, sortState: SortState) {
	// used "guard clauses" instead of if-else statements
	switch (sortState) {
		case SortState.ASCENDING:
			if (a.checked === b.checked) return 0;
			if (a.checked) return 1;
			return -1;
		case SortState.DESCENDING:
			if (a.checked === b.checked) return 0;
			if (a.checked) return -1;
			return 1;
		case SortState.UNSORTED:
			if (a.id === b.id) return 0;
			if (a.id > b.id) return 1;
			return -1;
	}
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_sourceTodos: [
			{ checked: false, message: "adding todos!", id: 0, active: true },
			{
				checked: false,
				message: "add saving and persisting data",
				id: 1,
				active: true,
			},
			{
				checked: false,
				message: "do fancy chevron-ing (CSS)",
				id: 2,
				active: true,
			},
			{
				checked: true,
				message: "fix funky active junk",
				id: 3,
				active: true,
			},
			{
				checked: true,
				message: "figure out sorting",
				id: 4,
				active: true,
			},
			{
				checked: true,
				message: "sorting from chevron button",
				id: 5,
				active: true,
			},
		],

		_displayedTodos: [],
		_filter: "all",
		_sort: SortState.UNSORTED,
		maxId: 50, //fix this
	}),
	getters: {
		todos: (state: State) => {
			// sort it based on the current sort setting
			const sortedTodos = state._displayedTodos;
			sortedTodos.sort((a: Todo, b: Todo) => sortTodos(a, b, state._sort));

			// filter the results
			switch (state._filter) {
				case "unchecked":
					return sortedTodos.filter((todo) => !todo.checked); // Active
				case "checked":
					return sortedTodos.filter((todo) => todo.checked); // completed
				default: // all
					return sortedTodos; // All
			}
		},
		tasksLeft: (state: State) =>
			state._displayedTodos.filter((todo) => !todo.checked).length ?? 0,
		filter: (state: State) => state._filter,
	},
	actions: {
		destroyTodo(todo: Todo) {
			todo.active = false;
		},
		clearCompleted() {
			// filter the todo list to only show the unchecked todos
			// this._displayedTodos = this._sourceTodos.filter((todo) => !todo.checked);

			this._displayedTodos
				.filter((todo) => todo.checked)
				.forEach((todo) => {
					todo.active = false;
				});
		},
		loadData() {
			this._displayedTodos = this._sourceTodos;
		},
		setFilter(filter: string) {
			this._filter = filter;
		},
		setSort(sortState: SortState) {
			this._sort = sortState;
		},
		updateTodo(newTodo: Todo) {
			const index = this._displayedTodos.findIndex(
				(pTodo) => newTodo.id === pTodo.id
			);
			this._displayedTodos[index] = newTodo;
			// update persisted data
		},
		addTodo(newTodo: string) {
			console.log("adding todo from pinia", newTodo);
			this._displayedTodos.push({
				checked: false,
				message: newTodo,
				id: this.maxId++,
				active: true,
			});
		},
	},
});
