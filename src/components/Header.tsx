import React from 'react';
import { CompletedStates } from '../enums/CompletedStates';
import { Todo } from '../types/Todo';

interface Props {
  completedCount: number;
  todos: Todo[];
  category: string;
}

const Header: React.FC<Props> = ({ completedCount, todos, category }) => {
  let completedCountForCategory = 0;
  let totalCountForCategory = 0;
  const htmlLabel = (cat: string): JSX.Element => {
    let completedPercent: number =
      todos.length === 0 ? 0 : completedCount / todos.length;

    if (!!cat) {
      completedPercent = completedCountForCategory / totalCountForCategory;
    }
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

  const displayCompleted = (): JSX.Element => {
    todos.map((todo) => {
      if (todo.category === category) {
        totalCountForCategory++;
        if (todo.completed) {
          completedCountForCategory++;
        }
      }
    });

    const htmlCompleted: JSX.Element = (
      <>
        {htmlLabel('')}
        <span>
          {completedCount}/{todos.length}
        </span>
        <br />
        {htmlLabel('cat')}
        <span>
          {completedCountForCategory}/{totalCountForCategory}
        </span>
      </>
    );

    return <React.Fragment>{htmlCompleted}</React.Fragment>;
  };

  return (
    <span className='header'>
      <h1>TodoIt</h1>
      <h2>{displayCompleted()}</h2>
    </span>
  );
};

export default Header;
