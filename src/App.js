// TodoApp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, skyblue, #ffff);
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
`;

const TodoItem = styled(motion.li)`
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &.completed {
    text-decoration: line-through;
    opacity: 0.7;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const TodoInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  width: 70%;
  font-size: 16px;
  outline: none;
`;

const AddButton = styled(motion.button)`
  background-color: #5cb85c;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #4cae4c;
  }
`;

const DeleteButton = styled(motion.button)`
  background-color: #d9534f;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    background-color: #c9302c;
  }
`;

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
    <Container>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            whileHover={{ scale: 1.1 }}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleCompletion(index)}
          >
            {todo.text}
            <DeleteButton whileHover={{ scale: 1.1 }} onClick={() => deleteTodo(index)}>
              X
            </DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
      <InputContainer>
        <TodoInput
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <AddButton whileHover={{ scale: 1.1 }} onClick={addTodo}>
          Add Todo
        </AddButton>
      </InputContainer>
    </Container>
  );
};

export default TodoApp;
