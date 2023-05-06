import { useState, useEffect } from 'react';
import Todos from './components/Todos';
import { Todo } from './types/Todo';
import Footer from './components/Footer';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => {
  const loadedTodos: Todo[] = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos')!)
    : []; // new

  const [userId, setUserId] = useState<number>(1);
  const [todos, setTodos] = useState<Todo[]>(loadedTodos);
  const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(
    Array.from(new Set(todos.map((todo) => todo.category))).sort((a, b) => {
      return a.localeCompare(b);
    })
  );
  const [completedCount, setCompletedCount] = useState<number>(0);

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='App'>
      <Header
        completedCount={completedCount}
        todos={todos}
        category={category}
      />
      <div className='main-content'>
        <span>
          <Categories
            todos={todos}
            categories={categories}
            setCategories={setCategories}
            category={category}
            setCategory={setCategory}
          />
        </span>
        <span>
          {category && (
            <Todos
              todos={todos}
              setTodos={setTodos}
              userId={userId}
              setCompletedCount={setCompletedCount}
              category={category}
            />
          )}
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default App;
