export default interface Todo {
	//required
	checked: boolean;
	message: string;
	id: number;
	key: number;
	//optional
	foo?: boolean;
}

export interface Label {
	displayText: string;
	value: string;
}

export enum SortState {
	UNSORTED,
	ASCENDING,
	DESCENDING,
}
export function newOnboardingTodo(message: string, id: number): Todo {
	const todo: Todo = {
		checked: false,
		message,
		id,
		key: id,
	};
	return todo;
}
