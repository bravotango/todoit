import React, { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';

interface props {
  todos: Todo[];
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}
const Categories: React.FC<props> = ({
  todos,
  categories,
  setCategories,
  category,
  setCategory,
}): JSX.Element => {
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    console.log('sorting');
    const updatedCategories = [...categories, category];
    setCategories(
      Array.from(new Set(updatedCategories.map((c) => c))).sort((a, b) => {
        return a.localeCompare(b);
      })
    );
  }, [todos, category]);

  const handleAdd = () => {
    setCategory(newCategory);
    setAddingCategory(false);
    setNewCategory('');
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'new') {
      setAddingCategory(true);
      setNewCategory('');
      setCategory('');
    } else {
      setCategory(e.target.value);
      setNewCategory('');
      setAddingCategory(false);
    }
  };

  const displayCategories = (): JSX.Element => {
    const htmlOptionCategories = [];

    htmlOptionCategories.push(
      categories.map((c, i) => {
        if (!!c) {
          return (
            <option value={c} key={i}>
              {c}
            </option>
          );
        }
      })
    );

    htmlOptionCategories.unshift(
      <option key={uuidv4()} value=''>
        Select category
      </option>
    );

    htmlOptionCategories.push(
      <React.Fragment>
        <option key={htmlOptionCategories.length} value='new' className='add'>
          + Add new category
        </option>
      </React.Fragment>
    );

    return (
      <select onChange={(e) => handleCategoryChange(e)} value={category}>
        {htmlOptionCategories}
      </select>
    );
  };
  return (
    <span className='formContainer'>
      {!addingCategory && (
        <label>
          <span>Category:</span>
          {displayCategories()}
        </label>
      )}

      {addingCategory && (
        <span>
          <label>
            <span>New category:</span>
            <input
              onChange={(e) => {
                setNewCategory(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleAdd();
                }
              }}
            />
          </label>
          <button onClick={handleAdd}>Add</button>
          <button onClick={() => setAddingCategory(false)}>Cancel</button>
        </span>
      )}
    </span>
  );
};

export default Categories;
