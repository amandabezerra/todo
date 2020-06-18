import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ITodo } from '../../store/types';

import Todo from '../Todo';

import './styles.css';

const TodoList = ({...props}) => {
  return (
    <ul>
      {props.todoList && props.todoList[0] ?
        props.todoList.map((todo: ITodo, index: number) => {
          return <Todo
            key={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed} 
          />
        }) : <span>No todos to do!</span>
      }
    </ul>
  );
}

const mapStateToProps = (state: RootState) => ({
  todoList: state.todoReducer.todos
});

export default connect(mapStateToProps)(TodoList);