import { 
  ITodoListState,
  ITodoActionTypes,
  ADD_TODO,
  TOGGLE_TODO 
} from './types';

const initialState: ITodoListState = {
  todos: [],
}

export function todoListReducer(
  state = initialState,
  action: ITodoActionTypes
): ITodoListState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
          .sort((a, b) => {
            if (a.completed && !b.completed) {
              return 1
            } else if (!a.completed && b.completed) {
              return -1;
            }
            return 0
          }
        ),
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos
          .map(todo => 
            todo.id === action.payload ?
            {...todo, completed: !todo.completed } : 
            todo
          )
          .sort((a, b) => {
            if (a.completed && !b.completed) {
              return 1
            } else if (!a.completed && b.completed) {
              return -1;
            }
            return 0
          }
        ),
      };
    default:
      return state;
  }
}
