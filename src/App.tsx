import React, { useState } from 'react';
import Todos from './components/Todos';
import { Todo } from './types/Todo';

const App = () => {
  const initTodos: Todo[] = [
    { id: '1', userId: 1, title: 'Complete task 1', completed: false },
    { id: '2', userId: 1, title: 'Complete task 2', completed: true },
    { id: '3', userId: 1, title: 'Complete task 3', completed: false },
  ];

  const [todos, setTodos] = useState(initTodos);
  const [userId, setUserId] = useState(1);
  return (
    <div className='App'>
      <Todos todos={todos} setTodos={setTodos} userId={userId} />
    </div>
  );
};

export default App;
