# A survey form using React

This week's project was to use React to build a survey form. It should consist of at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.

## Learning objectives

- How to use form fields with React
- How to use `useState`
- How to use state to show different components based on where you are in the survey

## How I built it

My approach was to really go step by step, from simple to more complex.

1. Adding all the elements/questions in the form.js. Summary section and button that will show the summary included.

2. Mapping of radio button input in the main component. This also helped to make the code shorter.

3. Creating the components for each question.

4. Styling the page following "mobile first" approach. Then Ipad and desktop view.

5. Accesibility testing in:

- Chrome, Edge and Firefox on Mac OS. On Edge the option elements are not visible unless they are on hover.

- Chrome on Iphone 8 plus and Ipad.

- WAVE: 0 errors.
  W3C markup and CSS validator: 0 errors
  Webdev: Accesibility 100%.

## The problem

I had some issues when creating the components for each question as the states wasnt updating but I got support by a classamte to understand this step and then I could easily create them.

## View it live

https://survey-by-dannuzak.netlify.app/
