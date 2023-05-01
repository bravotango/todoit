import React, { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  userId: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ userId, todos, setTodos }) => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const [editTitle, setEditTitle] = useState<string | undefined>(undefined);
  const [newTodoObject, setNewTodoObject] = useState<Todo | undefined>(
    undefined
  );

  useEffect(() => {
    if (newTodoObject) {
      setTodos([...todos, newTodoObject]);
      setNewTodoObject(undefined);
      setNewTodoTitle('');
    }
  }, [newTodoObject, setTodos, todos]);

  const handleSaveClick = (): void => {
    if (editIndex === undefined) {
      return;
    }
    const updatedTodos = [...todos];
    updatedTodos[editIndex].title = editTitle || '';
    setTodos(updatedTodos);
    setEditIndex(undefined);
    setEditTitle(undefined);
  };

  const handleAddClick = (): void => {
    if (!newTodoTitle) {
      return;
    }

    setNewTodoObject(() => ({
      id: uuidv4(),
      userId: userId,
      title: newTodoTitle,
      completed: false,
    }));
  };

  const displayTodos = (): JSX.Element => {
    const htmlTodos = [];
    htmlTodos.push(
      todos.map((todo: Todo, i: number) => {
        return (
          <li key={i}>
            {editIndex === i ? (
              // we are editing - input with save button
              <>
                <input
                  type='text'
                  defaultValue={todo.title}
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                />
                <button onClick={() => handleSaveClick()}>Save</button>
              </>
            ) : (
              // we are displaying - each todo with edit & delete buttons
              <>
                <span>{todo.title}</span>{' '}
                <button
                  aria-label={`Edit ${todo.title}`}
                  onClick={() => {
                    setEditIndex(i);
                    setEditTitle(todo.title);
                  }}
                >
                  Edit
                </button>
                <button
                  aria-label={`Delete ${todo.title}`}
                  onClick={() => {
                    const updatedTodos = [...todos];
                    updatedTodos.splice(i, 1);
                    setTodos(updatedTodos);
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        );
      })
    );
    return <ul data-testid='Todos'>{htmlTodos}</ul>;
  };

  return (
    <React.Fragment>
      New Todo:{' '}
      <input
        placeholder='Enter a new todo...'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && newTodoTitle) {
            setNewTodoObject({
              id: uuidv4(),
              userId: userId,
              title: newTodoTitle,
              completed: false,
            });
          }
        }}
      />
      <button onClick={handleAddClick}>Add</button>
      <span>{newTodoObject && newTodoObject.title}</span>
      {displayTodos()}
    </React.Fragment>
  );
};

export default Todos;
