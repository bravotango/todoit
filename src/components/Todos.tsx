import React, { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  userId: number;
  todos: Todo[];
  category: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedCount: React.Dispatch<React.SetStateAction<number>>;
}

const Todos: React.FC<Props> = ({
  userId,
  todos,
  category,
  setTodos,
  setCompletedCount,
}) => {
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

  useEffect(() => {
    // update completed task count every time the todos array changes
    setCompletedCount(todos.filter((todo) => todo.completed).length);
  }, [todos]);

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
      category: category,
    }));
  };

  const handleCompletedToggle = (todo: Todo) => () => {
    setTodos((prevState) =>
      prevState.map((prevTodo) =>
        prevTodo.id === todo.id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  const displayTodos = (): JSX.Element => {
    const htmlTodos = [];
    htmlTodos.push(
      todos.map((todo: Todo, i: number) => {
        return (
          todo.category === category && (
            <li key={i}>
              {editIndex === i ? (
                // we are editing - input with save button
                <React.Fragment>
                  <input
                    type='text'
                    defaultValue={todo.title}
                    onChange={(e) => {
                      setEditTitle(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter' && editTitle) {
                        handleSaveClick();
                      }
                    }}
                  />
                  <button className='active' onClick={() => handleSaveClick()}>
                    Save
                  </button>
                </React.Fragment>
              ) : (
                // we are displaying - each todo with edit & delete buttons
                <React.Fragment>
                  <span
                    onClick={handleCompletedToggle(todo)}
                    className='clickable'
                  >
                    <span>{todo.completed ? '✔️ ' : '⬜ '}</span>
                    {todo.completed ? (
                      <span className='line-through'>{todo.title}</span>
                    ) : (
                      <span>{todo.title}</span>
                    )}
                  </span>

                  <span className='buttons'>
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
                    <button
                      aria-label={`Edit ${todo.title}`}
                      onClick={() => {
                        setEditIndex(i);
                        setEditTitle(todo.title);
                      }}
                    >
                      Edit
                    </button>
                  </span>
                </React.Fragment>
              )}
            </li>
          )
        );
      })
    );
    return <ul data-testid='Todos'>{htmlTodos}</ul>;
  };

  return (
    <React.Fragment>
      <span className='formContainer'>
        <label>
          <span>New Todo: </span>
          <input
            className='newTodo'
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter' && newTodoTitle) {
                setNewTodoObject({
                  id: uuidv4(),
                  userId: userId,
                  title: newTodoTitle,
                  completed: false,
                  category: category,
                });
              }
            }}
          />
        </label>
        <button onClick={handleAddClick}>Add</button>
      </span>
      {displayTodos()}
    </React.Fragment>
  );
};

export default Todos;
