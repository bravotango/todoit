import { useState } from 'react';
import Todos from './components/Todos';
import { Todo } from './types/Todo';
import { CompletedStates } from './enums/CompletedStates';
import { v4 as uuidv4 } from 'uuid';
import Footer from './components/Footer';
import React from 'react';

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
  const [completedCount, setCompletedCount] = useState<number>(0);

  const displayCompleted = (): JSX.Element => {
    const htmlCompleted: JSX.Element = (
      <span>
        {completedCount}/{todos.length}
      </span>
    );

    const htmlLabel = (): JSX.Element => {
      let completedPercent: number =
        todos.length === 0 ? 0 : completedCount / todos.length;
      switch (completedPercent) {
        case 0:
          return <>{CompletedStates.StartTodos}: </>;
        case 1:
          return <>{CompletedStates.TodosDone}! </>;
        default:
          return <>{CompletedStates.TodosInProgress}: </>;
      }
    };

    return (
      <React.Fragment>
        {htmlLabel()}
        {htmlCompleted}
      </React.Fragment>
    );
  };

  return (
    <div className='App'>
      <span className='header'>
        <h1>ToDoIt</h1>
        <h2>{displayCompleted()}</h2>
      </span>
      <div className='main-content'>
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
