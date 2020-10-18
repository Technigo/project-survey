import React, { useState } from 'react'
// import { InputCheckbox } from './InputCheckbox'
// import { InputRadio } from './InputRadio'
// import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { Button } from './Button'
import { Summary } from './Summary'
import { Header } from './Header'
import './Questions.css'
import { InputRadio } from './InputRadio'



export const Questions = () => {
  const [question, setQuestion] = useState(0) //one question at a time
  const nextQuestion = () => setQuestion(question + 1) //to get next question in line
  const [name, setName] = useState('')
  const [ageGroup, setAge] = useState();


  const [submit, setSubmit] = useState(false) //since we don't want to show result before submitted. 
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true) //show summary on submit
    console.log('form submitted')
  }

  //array for radio btn
  const ageGroups = [
    '0-18',
    '19-30',
    '31-40',
    '41-50',
    '51-60',
    '60 +'
  ]

  return (
    <section className="content-wrapper">
      <Header />
      <section className="main-content">
        {!submit && (
          <form onSubmit={handleSubmit}>

            {question === 0 && (
              <section className="introduction">
                <h2>Welcome, please take a few minutes to answer this servey!</h2>
                <div className="navigation">
                  <Button button="button" click={nextQuestion} text="Start survey" />
                </div>
              </section>
            )}

            {question === 1 && (
              <section className="question-container">
                <InputText
                  id="name"
                  question="What is your name?"
                  value={name}
                  setText={setName} />
                <div className="navigation">
                  <Button button="button" click={nextQuestion} disable={!name} text="Next" />
                </div>
              </section>
            )}

            {question === 2 && (
              <section className="question-container">
                <InputRadio
                  question="How old are you?"
                  array={ageGroups}
                  setAge={setAge}
                  selected={ageGroup}
                />
                <div className="navigation">
                  <Button button="button" click={handleSubmit} disable={!name} text="Submit" />
                </div>
              </section>
            )}
          </form>
        )}

        {submit && (
          <section className="summary-container">
            <Summary
              name={name}
            />
          </section>
        )}
      </section>
    </section>
  )




  {/* <InputRadio
        onKeyPress={(event) => {
          if (event.key === 'Enter') { handleOtherQuestion() }
        }} />
      <InputSelect
        onKeyPress={(event) => {
          if (event.key === 'Enter') { handleOtherQuestion() }
        }} />
      <InputCheckbox
        onKeyPress={(event) => {
          if (event.key === 'Enter') { handleOtherQuestion() }
        }} />
      <Submit onSubmit={(showSummary)}
      /> */}

}