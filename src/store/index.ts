import { todoListReducer } from './reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  todoReducer: todoListReducer
});

export type RootState = ReturnType<typeof rootReducer>;