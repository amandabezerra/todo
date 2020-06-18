import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { toggleTodo } from '../../store/actions';

import './styles.css';


const Todo = ({...props}) => {
  function handleTodoClick() {
    props.dispatch(
      toggleTodo({
        id: props.id,
        text: props.text,
        completed: props.completed
      })
    )
  }

  return(
    <li>
      <input
        name="completed"
        type="checkbox"
        checked={props.completed}
        onChange={handleTodoClick}
      />
      <span className={props.completed ? 'completed' : ''}>
        {props.text}
      </span>
    </li>
  );
}

const mapStateToProps = (state: RootState) => ({
  props: state.todoReducer
});

export default connect(mapStateToProps)(Todo);