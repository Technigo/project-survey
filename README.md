# Survey form with React

This project was created with the purpose of practising the use of states in React. It is a form that lets you create your custom business card - with some prechosen themes. The styling is playful and girly.

## The problem

The task was to make a form and to display a summary of the result, but without necessarily posting it somewhere. As I would like the result to be more than just a text, I decided to let the end result be a business-card. I started out with creating the form and decided how the business card would be put together. Two of the inputs are not displayed as text in the summary, but in an indirect way, as they affect the styling of the business card. These inputs are "my favourite colour" (background colour of the business card) and "my style" (font-family of the business-card). 

There are lots of use state hooks in this process. They are all declared in App.js and passed down to the components as props. In some places the props are deconstructed to make them easier to use. The states are used to catch the input values from the form and pass them to the business-card content and styling. States are also used to enable the Submit button when the form is completed, to show the result after the submit button is clicked and to take the visitor back to the form when clicking the "Make another one"-button in the result's page.

The first hurdle in the process was passing states as props. I got very good help from team mate Katharina to solve that. 

Another tricky part of the project was to make custom radio buttons. I found useful examples from both W3Schools.com and moderncss.dev that helped me solve that problem.

I am proud of how I managed to make use of values from the form input to create styling.

Making the website accessable was one of the requirements of this project. To do that I tested the site in WAVE from webaim and The W3C Markup Validation Service. I also checked contrast by using a contrast checker from Webaim. I also checked other accessibility requirements from a checklist I had in Trello. An accessability issue I haven't yet solved is that there are no page regions deteced in WAVE. I have used semantic html such as <form> and <section>, but maybe it's because they are inside components that they are not visible?

If I had had more time I would like to add form input validation and automatic scroll to next question or perhaps make the form a multi-step one. I would also see if I should add any ARIA tags.

## View it live

https://my-businesscard-generator.netlify.app/ 
