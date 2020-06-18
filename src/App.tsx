import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO</h1> 
      </header>

      <main>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
