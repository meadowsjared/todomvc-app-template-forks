export default interface Todo {
	//required
	checked: boolean;
	message: string;
	id: number;
	active: boolean;
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
