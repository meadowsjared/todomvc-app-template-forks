import { defineStore } from "pinia";
import type Todo from "../domain/Todo";

interface State {
	_todos: Todo[];
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_todos: [
			{ checked: true, message: "Eat Food", id: 0 },
			{ checked: true, message: "Look at Noteworthy Trees", id: 1 },
			{ checked: false, message: "Sleep at a REASONABLE Hour", id: 2 },
		],
	}),
	getters: {
		todos: (state: State) => state._todos,
		tasksLeft: (state: State) =>
			state._todos.filter((todo) => !todo.checked).length,
	},
	actions: {
		destroyTodo(index: number) {
			this._todos.splice(index, 1);
		},
		clearCompleted() {
			this._todos = this._todos.filter((todo) => !todo.checked);
		},
	},
});
