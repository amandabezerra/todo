import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ITodo } from '../../store/types';

import Todo from '../Todo';

import './styles.css';

interface IProps {
  todos: ITodo[];
}

const TodoList: React.FC<IProps> = ({todos}) => {
  return (
    <ul>
      {todos && todos[0] ?
        todos.map((todo: ITodo) => {
          return <Todo
            key={todo.id}
            todo={todo}
          />
        }) : <span>No todos to do!</span>
      }
    </ul>
  );
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todoReducer.todos
});

export default connect(mapStateToProps)(TodoList);
