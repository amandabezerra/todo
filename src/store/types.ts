export interface ITodo {
  id?: number;
  text: string;
  completed: boolean;
}

export interface TodoListState {
  todos: ITodo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'DELETE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: ITodo;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
