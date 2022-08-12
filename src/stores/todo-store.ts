import { defineStore } from "pinia";
import { SortState } from "../domain/Todo";
import type Todo from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[];
	_filter: string;
	_sort: SortState;
}

function sortTodos(a: Todo, b: Todo) {
	if (a.checked === b.checked) return 0;
	if (a.checked) return -1;
	return 1;
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_sourceTodos: [
			{ checked: true, message: "Eat Food", id: 0, active: true },
			{
				checked: true,
				message: "Look at Noteworthy Trees",
				id: 1,
				active: true,
			},
			{
				checked: false,
				message: "Sleep at a REASONABLE Hour",
				id: 2,
				active: true,
			},
		],
		_displayedTodos: [],
		_filter: "all",
		_sort: SortState.UNSORTED,
	}),
	getters: {
		todos: (state: State) => {
			const sortedTodos = state._displayedTodos.sort(sortTodos);
			switch (state._filter) {
				case "active":
					return state._displayedTodos.filter((todo) => todo.active);
				case "completed":
					return state._displayedTodos.filter((todo) => todo.checked);
				default:
					return state._displayedTodos;
			}
		},
		tasksLeft: (state: State) =>
			state._sourceTodos.filter((todo) => !todo.checked).length,
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
	},
});
