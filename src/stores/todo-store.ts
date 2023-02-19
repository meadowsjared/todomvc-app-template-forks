import { onValue, set, ref, remove, DataSnapshot } from "firebase/database";
import { defineStore } from "pinia";
import { todosRef, db } from "../domain/firebase";
import type Todo from "../domain/Todo";
import { newOnboardingTodo, SortState } from "../domain/Todo";

interface State {
	_displayedTodos: Todo[] | null;
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

function loadTodosFromSnapshot(snapshot: DataSnapshot): Todo[] {
	const data: Todo[] | undefined =
		snapshot.val() &&
		Object.entries(snapshot.val() as { [key: number]: Todo }).map(
			([key, todo]) => {
				todo.key = parseInt(key);
				return todo;
			}
		);
	return data?.filter((value) => value !== undefined) ?? [];
}

function getOnboardingTodos(): Todo[] {
	const todos: Todo[] = [
		newOnboardingTodo("Welcome", 0),
		newOnboardingTodo("Sample", 1),
	];
	return todos;
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_displayedTodos: [],
		_filter: "all",
		_sort: SortState.UNSORTED,
		maxId: 0,
	}),
	getters: {
		todos: (state: State) => {
			if (!state._displayedTodos) return;
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
			state._displayedTodos?.filter((todo) => !todo.checked).length ?? 0,
		filter: (state: State) => state._filter,
	},
	actions: {
		destroyTodo(todo: Todo) {
			console.log("destroying todo", todo);
			const todoRef = ref(db, "todos/" + todo.key);
			remove(todoRef)
				.then(() => {
					console.log("data saved successfully");
				})
				.catch((error) => {
					console.warn("error", error);
				});
		},
		clearCompleted() {
			if (this._displayedTodos) {
				this._displayedTodos = this._displayedTodos.filter(
					(todo) => !todo.checked
				);
				this.saveAllTodos();
			}
		},
		loadData() {
			onValue(todosRef, (snapshot) => {
				this._displayedTodos = loadTodosFromSnapshot(snapshot);
				console.log("this._displayedTodos", this._displayedTodos);
				const highestId = this._displayedTodos.reduce((canId, todo) => {
					if (todo.id > canId) return todo.id;
					return canId;
				}, 0);
				console.log({ highestId });
				this.maxId = highestId + 1;
				console.log("this.maxId", this.maxId);
			});
		},
		setFilter(filter: string) {
			this._filter = filter;
		},
		setSort(sortState: SortState) {
			this._sort = sortState;
		},
		updateTodo(newTodo: Todo) {
			if (!this._displayedTodos) return;
			const index = this._displayedTodos.findIndex(
				(pTodo) => newTodo.id === pTodo.id
			);
			this._displayedTodos[index] = newTodo;
			this.saveTodo(newTodo);
		},
		addTodo(newTodo: string) {
			const todo: Todo = {
				checked: false,
				message: newTodo,
				id: this.maxId++,
				key:
					(this._displayedTodos?.reduce((highestKey, todo) => {
						if (todo.key > highestKey) return todo.key;
						return todo.key;
					}, 0) ?? -1) + 1,
			};
			console.log("adding todo from pinia", newTodo);
			this._displayedTodos?.push(todo);
			this.saveTodo(todo);
		},

		saveAllTodos() {
			this._displayedTodos?.forEach((todo, index) => {
				todo.key = index;
			});
			set(todosRef, this._displayedTodos)
				.then(() => {
					console.log("data saved successfully");
				})
				.catch((error) => {
					console.warn("error", error);
				});
		},
		saveTodo(todo: Todo) {
			const todoRef = ref(db, "todos/" + todo.key);
			set(todoRef, todo)
				.then(() => {
					console.log("data saved successfully");
				})
				.catch((error) => {
					console.warn("error", error);
				});
		},
		loadOnboardingTodos() {
			this._displayedTodos = getOnboardingTodos();
			this.saveAllTodos();
		},
	},
});
