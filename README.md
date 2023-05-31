# To Do It

## Description

A todo application that allows user's to Add, Edit, Delete, Complete & Un-complete a todo. User's are able to create infinite number of categories & add as many todos under each category. This React application is bootstrapped with create-react-app and written with TypeScript & SCSS. This application leverages local storage to save your todo list to your device; by doing this, no login is required.

<a target="_blank" href="https://bravotango.github.io/todoit/">![example image](/public/ToDoIt.png)</a><br/>

### Usability

- Aria-labels added to 'Delete' and 'Edit' buttons
- Clicking 'Enter' enabled on inputs
- Responsive design for mobile & desktop viewing

### Todo Array

The Todo array is an array of type Todo:

<a target="_blank" href="https://bravotango.github.io/todoit/">![example image](/public/Todo.png)</a><br/>

### Possible Future Enhancements

- LOGIN - Allow users to create an account and save data to database
- LOCALIZATION - Make all text displayed localized for the user's country

## Table of Contents

- [User Story](#user-story)
- [Satisfied Acceptance Criteria](#satisfied-acceptance-criteria)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## User Story

```md
AS A person with lots to do

I WANT to be able to view and manage my todo list
SO THAT I can get more done
```

## Satisfied Acceptance Criteria

```md
GIVEN a react application that accepts user input

WHEN I start the application for the first time
THEN I am presented with select category dropdown with '+ Add new category' as the last option

WHEN I select a category
THEN I am presented with a 'New Todo' form that consists of an input and 'Add'button

WHEN I select a category
THEN I am presented with all the todos listed under the 'New Todo' form

WHEN I click on a todo that is not complete
THEN I am presented with the todo crossed out, a checkmark indicating complete, and the completed count is incremented

WHEN I click on a todo that is complete
THEN I am presented with the todo, an unchecked checkbox preceding the todo indicating not complete, and the completed count is decremented

WHEN I click 'Edit' next to a todo
THEN I am presented with a formatted input with the value set to the todo.title, a 'Delete' & 'Save' button that allows the user to delete or modify the selected todo

WHEN I click 'Delete' next to a todo
THEN I am presented with a updated list of todos with the deleted todo removed.
```

## Contributing

Author's gitHub profiles:

[https://github.com/BravoTango](https://github.com/BravoTango)<br/>

## License

[![License: The MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This material licensed under the "The MIT License". All rights not explicitly granted in the "The MIT License" are reserved.

## Questions

Repository owner:
[https://github.com/BravoTango](https://github.com/BravoTango)

Repository email:
<a href="mailto:brian.tracy@btgraphix.com">brian.tracy@btgraphix.com</a>

Deployed location:
<a href="https://bravotango.github.io/todoit/">https://bravotango.github.io/todoit/</a>
