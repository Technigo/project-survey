# Survey form with React

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem
Blue
- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.
- Your site should follow accessibility guidelines

Red
- Use a form element you haven't tried before (such as a [range slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)) and connect it to React state. You can find a list of input types [here](https://www.w3schools.com/html/html_form_input_types.asp).
- Add validation to your survey! Use either HTML input validation attributes (such as `required`) or implement custom logic when the user clicks the submit button to make the form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.
- Create a button that, when clicked, will scroll down to the top of the next question in the survey (if possible)

Black
- Create a multi-step form
    - **Example**
        
        Show each question in its own 'page' with a continue button to progress to the next question (like how typeform does it).
        
        If you decide to split your form into sections, then one approach you could take is to try to think of these sections as a single `useState` hook which you can use to conditionally render different groups of inputs. For example, you could have some state like `const [section, setSection] = useState('firstQuestion')` and then when the user presses a button to progress, you'd use the `setSection()` function to progress them to the second question, etc. Then, in your JSX, you could conditionally render, like this:
        
        ```
        const Example = () => {
          const [section, setSection] = useState('firstQuestion')
        
          return (
            <div>
              {section === 'firstQuestion' && (
                <div>
                  First question...
                </div>
              )}
        
              {section === 'secondQuestion' && (
                <div>
                  Second question...
                </div>
              )}
            </div>
          )
        }
        ```
        
        As always, there's many ways to approach this! This is just one suggestion. :)
        
- Visualize to the user how far through the survey they are, and how much is left, by creating a progress bar
- Use Regex validation for some input on your survey
- Show different questions depending on the answer to a specific question

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
