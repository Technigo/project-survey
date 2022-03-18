# Survey form with React

## **🔵  Blue Level (Minimum Requirements)**

- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.
- Your site should follow accessibility guidelines

## **🔴  Red Level (Intermediary Goals)**

- Use a form element you haven't tried before (such as a [range slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)) and connect it to React state. You can find a list of input types [here](https://www.w3schools.com/html/html_form_input_types.asp).
- Add validation to your survey! Use either HTML input validation attributes (such as `required`) or implement custom logic when the user clicks the submit button to make the form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.
- Create a button that, when clicked, will scroll down to the top of the next question in the survey (if possible)

## **⚫  Black Level (Advanced Goals)**

- Create a multi-step form
    - **Example**
        
        Show each question in its own 'page' with a continue button to progress to the next question (like how typeform does it).
        
        If you decide to split your form into sections, then one approach you could take is to try to think of these sections as a single `useState` hook which you can use to conditionally render different groups of inputs. For example, you could have some state like `const [section, setSection] = useState('firstQuestion')` and then when the user presses a button to progress, you'd use the `setSection()` function to progress them to the second question, etc. Then, in your JSX, you could conditionally render, like this:
        
        As always, there's many ways to approach this! This is just one suggestion. :)
        
- Visualize to the user how far through the survey they are, and how much is left, by creating a progress bar
- Use Regex validation for some input on your survey
- Show different questions depending on the answer to a specific question

## View on live

https://cranky-wescoff-f5b98a.netlify.app

