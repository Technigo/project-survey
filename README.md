# Build a survey form using React

This week's project is to use React to build a survey form, similar to typeform. Your completed project should consist of at least 3 questions which need to be answered by users. When the user presses submit, they should see a summary of their answers.

You can choose what you'd like your survey to be about. Perhaps you'd like to ask other developers what they think about different technologies, or perhaps you'd like to ask people about their favourite foods or hobbies. It's completely up to you.

Once a user has submitted the survey you create, it doesn't actually need to be submitted anywhere - the focus here is to practice using React state and controlling forms.

## What you will learn 🧠

* How to use form fields with React
* How to use `useState`
* How to use state to show different components based on where you are in the survey

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Design 🎨

How you design your page is up to you, but take into account accessibility when you are styling your form elements - so inputs should have labels and should be easily readable and usable.

Feel free to use other survey tools such as typeform as inspiration.

## Requirements 🧪

* Your survey should consist of at least 3 questions.
* At least one question should use radio buttons.
* At least one question should use a select dropdown.
* There should be a submit button, which when pressed should hide the form and show a summary of the user's submissions.
* Code follows Technigo’s code guidelines.
* Contribute by helping others with this project on Stack Overflow.
* If selected; demo your solution for your team.

## How to hand in the code 🎯

* When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

* Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
* Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the '[TAG]' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call. 

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Multi-step form_**

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

**_Validation_**

Use either HTML input validation attributes (such as `required`) or implement custom logic when the user clicks the submit button to make form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.

**_Use different input types_**

In the videos for this week, we introduce how to think when connecting a bunch of common input types to React. For this stretch goal, you should try to find new and interesting input types (such as a [range slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)) and connect it to React state. You can find a list of input types [here](https://www.w3schools.com/html/html_form_input_types.asp).

**_Show a progress bar_**

Visualise to the user how far through the survey they are, and how much is left.

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
