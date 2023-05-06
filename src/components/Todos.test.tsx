import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todos from './Todos';

fdescribe('Todos component', () => {
  const mockTodos = [
    {
      id: '1',
      userId: 1,
      title: 'Test Todo 1',
      completed: false,
      category: 'test',
    },
    {
      id: '2',
      userId: 1,
      title: 'Test Todo 2',
      completed: true,
      category: 'test',
    },
    {
      id: '3',
      userId: 1,
      title: 'Test Todo 3',
      completed: false,
      category: 'test',
    },
  ];
  const mockSetTodos = jest.fn();
  const mockSetCompletedCount = jest.fn();

  it('should render the component with initial state', () => {
    const { getByText } = render(
      <Todos
        userId={1}
        todos={mockTodos}
        category='mock'
        setTodos={mockSetTodos}
        setCompletedCount={mockSetCompletedCount}
      />
    );

    expect(getByText('New Todo:')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
    expect(getByText('Test Todo 1')).toBeInTheDocument();
    expect(getByText('Test Todo 2')).toBeInTheDocument();
    expect(getByText('Test Todo 3')).toBeInTheDocument();
  });

  it('should add a new todo on click of Add button', () => {
    const { getByText, getByPlaceholderText } = render(
      <Todos
        userId={1}
        todos={mockTodos}
        category='mock'
        setTodos={mockSetTodos}
        setCompletedCount={mockSetCompletedCount}
      />
    );

    fireEvent.change(getByPlaceholderText('Enter a new todo...'), {
      target: { value: 'New Todo Test' },
    });
    fireEvent.click(getByText('Add'));

    expect(mockSetTodos).toHaveBeenCalledTimes(1);
    expect(mockSetTodos).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          userId: 1,
          title: 'New Todo Test',
          completed: false,
        }),
      ])
    );
  });

  it('should not add a new todo if title is empty', () => {
    const { getByText, getByPlaceholderText } = render(
      <Todos
        userId={1}
        todos={mockTodos}
        category='mock'
        setTodos={mockSetTodos}
        setCompletedCount={mockSetCompletedCount}
      />
    );

    fireEvent.change(getByPlaceholderText('Enter a new todo...'), {
      target: { value: '' },
    });
    fireEvent.click(getByText('Add'));

    expect(mockSetTodos).not.toHaveBeenCalled();
  });
});
