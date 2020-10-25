# Survey form with React

Site built with the aim to make a survey in React with components, props, and state, with accessibility in mind. 
I was inspired by the WWF climate calculator


## The problem

The site is built in React with the header, the survey, the progress bar, and every input type as its own component. I first put the state hooks within each input component but was made aware of the problems with this when wanting to use those states so show the results of the survey. Now all state hooks are declared in the survey component which makes them easy to reach within that component and its children. 

I used conditional rendering to only display one question at a time and to hide the form and show the result when the submit button is clicked. Validation of the form stopped working when setting the current question to hide when clicked on the next button. This was solved by setting an if statement in the onClick function that handles the next button, to only show the next question if the current input field had a value of more than an empty string. 

If had more time I would add more custom styling of radio buttons and add more input types and questions to make a more usable survey. 

## View it live

View it live here: https://climate-react-survey.netlify.app/