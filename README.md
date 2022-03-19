# Survey form with React
The purpose of this project was to practice using the `useState` hook in React to connect HTML form inputs to state and show different components based on state. The assignment was to create a controlled form with at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.

# Approach

My ambition for this project was to try to build a form that could be used in many different contexts, therefore I decided to create a data object that would control the content of the form and how answers are formatted.

The form is configured by modifying the `questions` object that is declared in the `Form` component.

The form supports the following types of HTML input elements: `select`, `radio`, `range`, and `text`. In the `questions` object, `input_type` must be exactly one of the supported HTML input elements. Example:

```javascript
// For input type="text"
{
	id: "", //required
	question_text: "", //required
	input_type: "text", //required
	format_answer: , //optional
	options: [], //optional
}

//For input type="range"
{
	id: "", //required
	question_text: "", //required
	input_type: "range", //required
	format_answer: , //optional
	options: [], //required
}

//For input type="radio"
{
	id: "", //required
	question_text: "", //required
	input_type: "radio", //required
	format_answer: , //optional
	options: [], //required
}

//For input type="select"
{
	id: "", //required
	question_text: "", //required
	input_type: "select", //required
	format_answer: , //optional
	options: [], //required
}
```
If a question is assigned a type not included in this list, an error message will log in the console.

If special formatting is required for input values, you can use the `format_answer` property of the `questions` object to specify format. Example:

```javascript
  {
    id: "spiciness",
    question_text: "How well can you handle spice?",
    input_type: "range",
    format_answer: (value) => `Spice level: ${value} ${Number(value) === 1 ? "chili" : "chilis"}`,
    options: [
      { value: 1, label: "\u{1F336}" },
      { value: 2, label: "\u{1F336}\u{1F336}" },
      { value: 3, label: "\u{1F336}\u{1F336}\u{1F336}" },
    ],
  }
```

# View it live

https://supper-society-survey.netlify.app/
