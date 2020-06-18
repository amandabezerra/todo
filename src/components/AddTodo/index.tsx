import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { addTodo } from '../../store/actions';

import './styles.css';

const AddTodo = ({...todos }) => {
  const [todo, setTodo] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setTodo(value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    todos.dispatch(addTodo({ text: todo, completed: false }));

    setTodo('');
  }

  return (
    <form>
      <input
        type="text"
        name="todo"
        value={todo} 
        maxLength={1000}
        onChange={handleInputChange}
        placeholder="Insert todo..."
      />

      <button
        type="submit"
        disabled={todo === ''}
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}

const mapStateToProps = (state: RootState) => ({
  todoReducer: state.todoReducer
});

export default connect(mapStateToProps)(AddTodo);
