import React, { useState } from 'react'

import QA from './QA.json'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'


const Form = () => { 
  const [questionOne, setQuestionOne] = useState('')
  const [questionTwo, setQuestionTwo] = useState('') 
  const [questionThree, setQuestionThree] = useState('') 
  const [questionFour, setQuestionFour] = useState('')  
  

  const isFormComplete = () => {
    if (questionOne === '') {
      return false;
    }

    if (questionTwo === '') {
      return false;
    }

    if (questionThree === '') {
      return false;
    }

    if (questionFour === '') {
      return false;
    }

    return true;
  };

  if (isFormComplete()) {
    console.log(`Survey Complete!`);
  }

  return (
      <>
        <section className="question-container">
        <h2>{QA.form_content.questions[0].question.valueOf((question) => {
          return (
            {question}
          )
          })}
        </h2>
        {QA.form_content.questions[0].alternatives.map((alternative) => {
          return (
            <RadioInput 
              QuestionAlternative={alternative}
              setAlternative={setQuestionOne}
              key={alternative}
            />
          )
        })}
        </section>
        <section className="question-container">
        <h2>{QA.form_content.questions[1].question.valueOf((question) => {
          return (
          {question}
          )
        })}
        </h2>
        {QA.form_content.questions[1].alternatives.map((alternative) => {
          return (
            <RadioInput 
              QuestionAlternative={alternative}
              setAlternative={setQuestionTwo}
              key={alternative}
            />
          )
        })}
        </section>
        <section className="question-container">
          <h2>{QA.form_content.questions[2].question.valueOf((question) => {
            return (
            {question}
            )
          })}
          </h2>
          {QA.form_content.questions[2].alternatives.map((alternative) => {
            return (
              <RadioInput 
                QuestionAlternative={alternative}
                setAlternative={setQuestionThree}
                key={alternative}
              />
            )
          })}
        </section>
        <section className="question-container">
          <h2>{QA.form_content.questions[3].question.valueOf((question) => {
            return (
            {question}
            )
          })}
          </h2>
          <select name="selectInput" id="selectInput">
            {QA.form_content.questions[3].alternatives.map((alternative) => {
            return (
              <SelectInput 
                QuestionAlternative={alternative}
                setAlternative={setQuestionFour}
                key={alternative}
              />
            )
          })}
          </select>
        </section>
      </>
  )
}

export default Form;

