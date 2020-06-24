export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoListState {
  todos: ITodo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'DELETE_TODO';

interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface IToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type ITodoActionTypes = IAddTodoAction | IToggleTodoAction;
