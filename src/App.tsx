import { useState } from 'react';
import Todos from './components/Todos';
import { Todo } from './types/Todo';
import { CompletedStates } from './types/CompletedStates';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';

const App = () => {
  const [userId, setUserId] = useState<number>(1);
  const initTodos: Todo[] = [
    {
      id: uuidv4(),
      userId: userId,
      title: 'Brew morning coffee',
      completed: false,
    },
    { id: uuidv4(), userId: userId, title: 'Feed cat & dog', completed: false },
    { id: uuidv4(), userId: userId, title: 'Start coding', completed: false },
  ];
  const [todos, setTodos] = useState(initTodos);
  const [completedCount, setCompletedCount] = useState<number>(0); // state variable for completed task count
  const displayCompleted = () => {
    let completed: number | string = completedCount / todos.length;
    completed = todos.length - completedCount === 1 ? 'close' : completed;
    switch (completed) {
      case 0:
        return 'Get tasks started: ';
      case 1:
        return 'Tasks completed!: ';
      case 'close':
        return 'Almost complete: ';
      default:
        return 'Tasks completed: ';
    }
  };

  return (
    <div className='App'>
      <div className='main-content'>
        <span className='header'>
          <h1>To Do It</h1>
          <h2>
            {displayCompleted()}
            <span>
              {completedCount} / {todos.length}
            </span>
          </h2>
        </span>

        <Todos
          todos={todos}
          setTodos={setTodos}
          userId={userId}
          setCompletedCount={setCompletedCount}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
