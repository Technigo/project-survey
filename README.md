# Survey form with React

The task was to use React to build a survey form.
I have created the multi-step Reading Habits Survey with 5 questions by using different form input types (radio buttons, select dropdown, text input, checkbox). I have also included the summary of answers when the survey is submitted.

## The problem

I started by creating the survey component with form elements. I decided to have it as a parent component for all the following components. In the survey component I created all the hook states and functions. When I had all the survey questions ready I added a page handler to show one question at the time and I used a ternary operator to the form to render the summary when the form is submitted. And then I moved input elements to the components step by step, making sure everything works. For questions with radio buttons and checkboxes I used a map method to iterate over an array of possible answers and create a JSX structure for each element in the array.  Lastly I styled the page. I made the website with a mobile-first approach and used flexbox for the layout.

The most challenging part was to create a question with multiple possible checkboxes to choose from and figure out how to store multiple values and display them in the summary later on. I found some answers on StackOverflow, however, I was able to solve this problem by asking questions and receiving the answer in a Q&A session. I used the approach of creating the state for the checkbox group with the array value and a function that would update the value of an array.

For accessibility purposes I used semantic HTML and I also used tabindex='0' to focus elements which were not available by keyboard navigation. To test accessibility for my website I used W3C Validation, WAVE and NVDA screen reader.

If I had more time I would add custom validation to the survey to make sure that current question is answered before the next question appears.
 
Contributions: Background photo by NordWood Themes: https://unsplash.com/photos/2JyITHXZpaw


## View it live

See it live: https://pedantic-cori-ac3eec.netlify.app