import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';

import './styles.css';

interface IProps {
  dispatch: Function;
}

const AddTodo: React.FC<IProps> = ({dispatch}) => {
  const [todo, setTodo] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setTodo(value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    dispatch(addTodo(todo));

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

export default connect()(AddTodo);
