# Survey form with React

This week's project was to use React to build a survey form. The main focus with this project was to practice using React state and controlling forms, with accessibility in mind.

I aimed for the blue requirements for this week but decided to try out some of the red requirements as well. 

## My project 

- I wanted to have my App component as clean as possible so most of the main functionality is in the form component. I created seperate components for each question in the form, the summary and the submitbutton.
- The useState hooks and the onChange eventhandlers are declared in the Form component and then passed on to each part of the form as props. 
- I used ternery operators to show/hide different parts of the website.
- In the summary I tried out a switch statement that changes the image src depending on the value picked from the radio buttons.
- I used the required attribute for validation on the text input and the radio buttons. For the select dropdown I used the disabled attribute on the submit button instead. The range slider however doesn't have any validation yet. 
- designed it with mobile first in mind.

Accessibility testing:

- screen reader with ChromeVox
- lighthouse

The website was tested in Chrome, Safari, Firefox on desktop and Safar on mobile. The main content looks the same, but there are som minor differences in the design for the different form elements.

## TECH 
- React
- JSX
- Javascript
- API 
- CSS
- HTML 

## If I had more time:

- I would have made a dynamic form! I would like to display one question at a time and scroll down/show next if the user clicks on a button. I will go back to this project and update this later! 
- Add validation text to the select dropdown. The functionality is there, but I couldn't figure out how to add a message to the user that the answer from the dropdown is missing.
- Look in to how you can validate a range slider since it already has a value from the start?

## View it live

https://wonderful-tesla-389576.netlify.app/
