import React from 'react';
import { CompletedStates } from '../enums/CompletedStates';
import { Todo } from '../types/Todo';

interface Props {
  completedCount: number;
  todos: Todo[];
  category: string;
}

const Header: React.FC<Props> = ({ completedCount, todos, category }) => {
  const displayCompleted = (): JSX.Element => {
    let categoryNumerator = 0;
    let categoryDenominator = 0;
    todos.map((todo) => {
      if (todo.category === category) {
        categoryDenominator++;
        if (todo.completed) {
          categoryNumerator++;
        }
      }
    });

    const htmlLabel = (cat: string): JSX.Element => {
      let completedPercent: number =
        todos.length === 0 ? 0 : completedCount / todos.length;
      const prefix = cat ? category + ' ' : '';
      switch (completedPercent) {
        case 0:
          return <>{prefix + CompletedStates.StartTodos}: </>;
        case 1:
          return <>{prefix + CompletedStates.TodosDone}! </>;
        default:
          return <>{prefix + CompletedStates.TodosInProgress}: </>;
      }
    };

    const htmlCompleted: JSX.Element = (
      <>
        {htmlLabel('')}
        <span>
          {completedCount}/{todos.length}
        </span>
        <br />
        {htmlLabel('cat')}
        <span>
          {categoryNumerator}/{categoryDenominator}
        </span>
      </>
    );

    return <React.Fragment>{htmlCompleted}</React.Fragment>;
  };

  return (
    <span className='header'>
      <h1>ToDoIt</h1>
      <h2>{displayCompleted()}</h2>
    </span>
  );
};

export default Header;
