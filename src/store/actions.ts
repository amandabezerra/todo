import { ITodo, TodoActionTypes, ADD_TODO, TOGGLE_TODO } from './types';

let nextTodoId = 0;

export function addTodo(newTodo: ITodo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: { ...newTodo, id: nextTodoId++ }
  }
}

export function toggleTodo(todo: ITodo): TodoActionTypes {
  return {
    type: TOGGLE_TODO,
    payload: todo
  }
}
