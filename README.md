# TodoIt

## Description

TodoIt is a todo application that allows users to add, edit, delete, complete, and undo complete their todos. Users can create categories and add todo items within those categories. This React application is built with TypeScript and SCSS, and it is bootstrapped with create-react-app. The application utilizes local storage to save todo lists on the user's device, eliminating the need for login credentials.

<a target="_blank" href="https://bravotango.github.io/todoit/">![example image](/public/ToDoIt.png)</a><br/>

## Usability

- Aria-labels have been added to the 'Delete' and 'Edit' buttons for improved accessibility.
- Pressing 'Enter' is enabled on input fields for user convenience.
- The application has a responsive design that ensures optimal viewing on both mobile and desktop devices.

## Todo Array

The `Todo` array is an array of type `Todo`:

<a target="_blank" href="https://bravotango.github.io/todoit/">![example image](/public/Todo.png)</a><br/>

## Possible Future Enhancements

- LOGIN: Allow users to create an account and save data to a database.
- LOCALIZATION: Make all displayed text localized for users in their respective countries.

## Table of Contents

- [User Story](#user-story)
- [Satisfied Acceptance Criteria](#satisfied-acceptance-criteria)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## User Story

AS A person with lots to do,
I WANT to be able to view and manage my todo list,
SO THAT I can get more done.

## Satisfied Acceptance Criteria

GIVEN a react application that accepts user input:

- WHEN I start the application for the first time,
  THEN I am presented with a select category dropdown with '+ Add new category' as the last option.

- WHEN I select a category,
  THEN I am presented with a 'New Todo' form that consists of an input field and an 'Add' button.

- WHEN I select a category,
  THEN I am presented with all the todos listed under the 'New Todo' form.

- WHEN I click on a todo that is not complete,
  THEN I am presented with the todo crossed out, a checkmark indicating completion, and the completed count is incremented.

- WHEN I click on a todo that is complete,
  THEN I am presented with the todo, an unchecked checkbox preceding the todo indicating incompleteness, and the completed count is decremented.

- WHEN I click 'Edit' next to a todo,
  THEN I am presented with a formatted input field with the value set to the todo.title, a 'Delete' button, and a 'Save' button that allows me to delete or modify the selected todo.

- WHEN I click 'Delete' next to a todo,
  THEN I am presented with an updated list of todos with the deleted todo removed.

## Contributing

Author's GitHub profile: [https://github.com/BravoTango](https://github.com/BravoTango)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Questions

If you have any questions, you can reach out to the repository owner:

- GitHub: [https://github.com/BravoTango](https://github.com/BravoTango)
- Email: brian.tracy@btgraphix.com

Deployed location: [https://bravotango.github.io/todoit/](https://bravotango.github.io/todoit/)
