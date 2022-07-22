export interface Todo {
	// Required
	checked: boolean;
	message: string;
	id: number;
	// Optional
	foo?: boolean;
	active: boolean;
}
export enum SortState {
	UNSORTED,
	ASCENDING,
	DESCENDING,
}
