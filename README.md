# Survey form with React

This survey is created with different components using React.
It contains of 5 compulsory questions reagrding food and agegroup, one checkbox question and one compulsory free text input.

## The problem

I'm very proud of how this turned out, since I wanted it to be completely reusable. All components are using props and the different options and radiobuttons are objects within arrays, so it's easy to add or remove more options/radiobuttons if you want to. You can change the questions by specifying the question when each component is mounted.

If I had more time I would probably have added some more features to this project. I would also have liked to split the survey up to even more components so that I wouldn't have to have them all mounted inside "Survey.js", because at the moment there is a lot of code there. That would have made it more readable for other coders using this.

This project fill the following requirements:
**🔵  Blue Level (Minimum Requirements)**

- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.
- Your site should follow accessibility guidelines

**🔴  Red Level (Intermediary Goals)**
- Add validation to your survey! Use either HTML input validation attributes (such as required) or implement custom logic when the user clicks the submit button to make the form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.

**⚫  Black Level (Advanced Goals)**

- Create a multi-step form

- Visualize to the user how far through the survey they are, and how much is left, by creating a progress bar



## View it live
https://xenodochial-johnson-f4667d.netlify.app/

