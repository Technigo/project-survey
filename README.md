# Survey form with React

This weeks project was to build a survey using React (and more specifically state/hook). The survey was supposed to consist of multiple questions with radio buttons and select dropdown for answer alternatives. The users was also supposed to be able to view a summary of their answers in the end of the survey.

## The problem

First I created different components and wrote the questions inside these components. I used different kind of elements for the answers, such as checkbox, radio buttons, dropdown and input field. 

Then I created a Form-component that I used to render all my other components in, and then the Form-component itself was rendered in App.js. In Form-component I fetched data from the other components/questions with { use state }. I also gathered all the functions in the Form-component and created new functions for all the eventlisteners. 

Next up I created different pages for all components and added a next-button for the user to click to get to the next question. I also created a summary-component which held all the users answers from the previous questions.

Before handing in the project I did some simple styling to the survey. I also ran the website through WAVE to see how the accessibility could be improved. I fixed some semantic tags and added a background to the text according to the tips I got from WAVE.

If I had more time I would definitely make the survey a bit more complex using conditionals and custom questions. I would also add validation to at least the name-input.

## View it live

https://cinema-survey.netlify.app/
