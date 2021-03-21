import React, { useState } from 'react'

import QA from './QA.json'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'
import Submit from './Submit'
import Summary from './Summary'


const Form = () => { 
  const [questionOne, setQuestionOne] = useState('')
  const [questionTwo, setQuestionTwo] = useState('') 
  const [questionThree, setQuestionThree] = useState('') 
  const [questionFour, setQuestionFour] = useState('')
  const [summary, setSummary] = useState(false) 
  

  
  return (
    <>
    {!summary ? (
      <form className="form">
        <h1> Daily standup🕴 </h1>
          <section className="question-container">
            <h2>{QA.form_content.questions[0].question.valueOf((question) => {
              return (
                {question}
              )})}
            </h2>
            {QA.form_content.questions[0].alternatives.map((alternative) => {
              return (
                <RadioInput 
                  QuestionAlternative={alternative}
                  setAlternative={setQuestionOne}
                  key={alternative}
                />
            )})}
          </section>
          <section className="question-container">
            <h2>{QA.form_content.questions[1].question.valueOf((question) => {
              return (
              {question}
              )})}
            </h2>
            {QA.form_content.questions[1].alternatives.map((alternative) => {
              return (
                <RadioInput 
                  QuestionAlternative={alternative}
                  setAlternative={setQuestionTwo}
                  key={alternative}
                />
            )})}
          </section>
          <section className="question-container">
            <h2>{QA.form_content.questions[2].question.valueOf((question) => {
              return (
              {question}
              )})}
            </h2>
            {QA.form_content.questions[2].alternatives.map((alternative) => {
              return (
                <RadioInput 
                  QuestionAlternative={alternative}
                  setAlternative={setQuestionThree}
                  key={alternative}
                />
            )})}
          </section>
          <section className="question-container">
            <h2>{QA.form_content.questions[3].question.valueOf((question) => {
              return (
              {question}
              )})}
            </h2>
            <SelectInput 
                setAlternative={setQuestionFour}
            />
          </section>
          <section>
            <Submit
              setSummary={setSummary}
            />
          </section>
      </form>
        ):(
          <section> 
            <Summary
              achieved={questionOne}
              today={questionTwo}
              blockers={questionThree}
              help={questionFour}
            />         
          </section>
      )}
    </>
  )
}

export default Form;

