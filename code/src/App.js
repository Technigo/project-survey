import React, { useState } from "react";
// import SerializedForm from "./SerializedForm";

export const App = () => {
  const [isAnswered, setAnswered] = useState(false);

  return (
    <div>
      {!isAnswered ? <Form setAnswered={setAnswered} /> : <Answers />}
      {/* <SerializedForm /> */}
    </div>
  );
};

const Form = ({ setAnswered }) => {
  const questions = [
    /* Dynamic list of questions as JSON */
    {
      index: 0,
      type: "input",
      text: "HejHej Question 1?",
      alternatives: null,
      defaultAnswer: 1
    },
    {
      index: 1,
      type: 'radio',
      text: 'HejHej Question 2?',
      alternatives: ['one', 'two', 'three'],
      defaultAnswer: 1
    },
    {
      index: 2,
      type: 'select',
      text: 'HejHej Question 3?',
      alternatives: ['alpha', 'beta', 'gamma', 'delta'],
      defaultAnswer: 'alpha'
    }
  ];

  const defaultAnswers = questions.map(question => question.defaultAnswer);
  const [answers, setAnswers] = useState(defaultAnswers);

  const [currentQuestion, setQuestion] = useState(questions[0]) /* start at the first question */
  console.log(currentQuestion)
  console.log(answers)
  return (
      <form onSubmit={() => setAnswered(true)}>
        <h2>Form</h2>
        <p>{currentQuestion['text']}</p>
          
        {currentQuestion['type'] === 'input' && 
          <input
            required
            type='input'
            defaultValue={answers[currentQuestion['index']] === null ? currentQuestion['defaultAnswer'] : answers[currentQuestion['index']]}
            onChange={event => {
              let tempAnswers = answers
              tempAnswers[currentQuestion['index']] = event.target.value
              setAnswers(tempAnswers)
            }}
          />
        }


    
      
        {/* <input required placeholder="placeholder" type="input" />
        <input required type="radio"></input>
        <select required type=""></select>

        <select>
          <option value="">Label</option>
          <option value="">Label</option>
          <option value="">Label</option>
        </select>
         */}
        {/* <button type="submit">Submit</button> */}
        <div>
        <button 
          onClick={() => setQuestion(questions[currentQuestion['index'] - 1])} 
          type="button"
          disabled={currentQuestion['index'] === 0 && true}
        >Prev</button>
        <button 
          onClick={() => setQuestion(questions[currentQuestion['index'] + 1])} 
          type="button"
          disabled={currentQuestion['index'] === questions.length - 1 && true}
        >Next</button>
        <button 
          onClick={() => setQuestion(questions[currentQuestion['index'] + 1])} 
          type="submit"
          disabled={answers.includes(null) && true}
        >Submit</button>
       <button 
          onClick={() => setAnswers(() => {
            answers[currentQuestion['index']] = 'hexj'
            return answers
          })}
            
          type="button"
        >TEst</button>
        </div>
      </form>
  );
};
{/* 
const Input = (props) => {

  const currentQuestion = props.currentQuestion
  console.log(currentQuestion)
  
  
} */}

const Answers = () => {
  return (
    <div>
      <h2>Answers</h2>
      <p>Lorem...</p>
    </div>
  );
};
