import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  width: '80%',
};

const itemStyle = {
  backgroundColor: '#fff',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
};

const completedStyle = {
  textDecoration: 'line-through',
  opacity: '0.7',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '70%',
  fontSize: '16px',
  marginRight: '10px',
};

const buttonStyle = {
  backgroundColor: '#5cb85c',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div style={containerStyle}>
      <ul style={listStyle}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ ...itemStyle, ...(todo.completed ? completedStyle : {}) }}
          >
            <span onClick={() => toggleCompletion(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTodo} style={buttonStyle}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
