# Survey form with React

The project was a practice in how to build a survey form in React including a summary of the users answers. 
## The problem

I began with sketching the survey questions. I did a mock survey for a project targeted to lessen loneliness during the Covid-19 pandemic by the Swedish organization Riksförbundet Hjärt Lung (https://tillsammansivinter.se/). Then I moved on to sketch the components. I planned early on to do a multi-step form, so I based the structure on each question to get a natural flow all the way through. Styling was the last step.

The biggest challenges proved to be the checkbox group as well as disabling the buttons. At first glance the checkbox group seemed like an easy task, until I discovered that the group in fact worked as radio buttons (i.e. you could only click one at a time). When that was solved I noticed that only the last item clicked was being stored in the state. With some more tweaking on the function for handling users clicks on the checkbox group value I got the function to work and store data as intended.

To disable buttons I took the long way round. With a conditional rendering checking if the default state was the same as the current state I managed to disable the buttons, but I ended up with a lot of code for a simple task. And, unfortunately, got the button to interfer with my checkbox group so it once again worked as radio buttons. Finding out about the disabled prop for buttons made my day.

## Learning objectives

- Use form fields with React, with minimum 3 questions whereof one radio button group and one select dropdown. 
- How to use useState 
- How to use state to show different components based on where you are in the survey
- Begin with styled components


## Tech

- React
- JSX
- Styled components


## View it live

https://digital-elders-survey.netlify.app/