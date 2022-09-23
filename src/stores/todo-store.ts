import { defineStore } from "pinia";
import { SortState } from "../domain/Todo";
import type Todo from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[];
	_filter: string;
	_sort: SortState;
}

function sortTodos(a: Todo, b: Todo, sortState: SortState) {
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
		// _sourceTodos: [
		// 	{ checked: false, message: "Eat Food", id: 0, active: true },
		// 	{
		// 		checked: true,
		// 		message: "Look at Noteworthy Trees",
		// 		id: 1,
		// 		active: true,
		// 	},
		// 	{
		// 		checked: false,
		// 		message: "Sleep at a REASONABLE Hour",
		// 		id: 2,
		// 		active: true,
		// 	},
		// ],
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
				message: "figure out sorting",
				id: 3,
				active: true,
			},
			{
				checked: true,
				message: "sorting from chevron button",
				id: 4,
				active: true,
			},
		],
		_displayedTodos: [],
		_filter: "all",
		_sort: SortState.UNSORTED,
	}),
	getters: {
		todos: (state: State) => {
			//sort the results
			const sortedTodos = state._displayedTodos;
			sortedTodos.sort((a: Todo, b: Todo) => sortTodos(a, b, state._sort));
			//filter the results
			switch (state._filter) {
				case "active":
					return sortedTodos.filter((todo) => todo.active);
				case "completed":
					return sortedTodos.filter((todo) => todo.checked);
				default:
					return sortedTodos;
			}
		},
		tasksLeft: (state: State) =>
			state._displayedTodos.filter((todo) => !todo.checked).length,
		filter: (state: State) => state._filter,
	},
	actions: {
		destroyTodo(todo: Todo) {
			todo.active = false;
			// this._displayedTodos[index].active = false;
			// this._displayedTodos.splice(index, 1);
		},
		clearCompleted() {
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
		},
	},
});
