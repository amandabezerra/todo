import { ITodoActionTypes, ADD_TODO, TOGGLE_TODO } from './types';

let nextTodoId = 0;

export function addTodo(text: string): ITodoActionTypes {
  return {
    type: ADD_TODO,
    payload: { id: nextTodoId++, text: text, completed: false }
  }
}

export function toggleTodo(id: number): ITodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}
