import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions';

import { ITodo } from '../../store/types';

import './styles.css';

interface IProps {
  todo: ITodo;
  dispatch: Function;
}

const Todo: React.FC<IProps> = ({todo, dispatch}) => {
  function handleTodoClick() {
    dispatch(toggleTodo(todo.id));
  }

  return(
    <li>
      <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoClick}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
    </li>
  );
}

export default connect()(Todo);
