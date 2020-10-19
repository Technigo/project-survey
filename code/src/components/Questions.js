import React, { useState } from 'react'
import { InputCheckbox } from './InputCheckbox'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { Button } from './Button'
import { Summary } from './Summary'
import './Questions.css'
import { InputRadio } from './InputRadio'



export const Questions = () => {
  const [question, setQuestion] = useState(0) //one question at a time
  //const nextQuestion = () => setQuestion(question + 1) //to get next question in line (add +1 later)
  const [name, setName] = useState('')
  const [ageGroup, setAge] = useState();
  const [season, setSeason] = useState('')
  const [agreeOnTerms, setAgreeOnTerms] = useState(false)

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
      <section className="main-content">
        {!submit && (
          <form onSubmit={handleSubmit}>

            {/* {question === 0 && (
              <article className="introduction">
                <h2>Welcome, please take a few minutes to answer this servey!</h2>
                <div className="navigation">
                  <Button button="button" click={nextQuestion} text="Start survey" />
                </div>
              </article>
            )} */}

            {question === 0 && ( //ändra till 1 när välkomstext blir 0
              <article className="question-container">
                <InputText
                  id="name"
                  question="What is your name?"
                  value={name}
                  setText={setName}
                />
                {/* <div className="navigation">
                  <Button button="button" click={nextQuestion} disable={!name} text="Next" />
                </div> */}
              </article>
            )}

            {question === 0 && ( //ändra 0 till turordning
              <article className="question-container">
                <InputRadio
                  question="How old are you?"
                  array={ageGroups}
                  setAge={setAge}
                  selected={ageGroup}
                />
                {/* <div className="navigation">
                  <Button button="button" click={handleSubmit} disable={!name} text="Submit" />
                </div> */}
              </article>
            )}

            {question === 0 && ( //ändra 0 till turordning
              <article className="question-container">
                <InputCheckbox
                  question="Are you happy?"
                  checked={agreeOnTerms}
                  setAgreeOnTerms={setAgreeOnTerms}
                // id="season"
                // setSeason={setSeason}
                // value={season}
                />
                {/* <div className="navigation">
                  <Button button="button" click={handleSubmit} disable={!season} text="Submit" />
                </div> */}
              </article>
            )}

            {question === 0 && ( //ändra 0 till turordning
              <article className="question-container">
                <InputSelect
                  question="What's your favorit season?"
                  id="season"
                  //question="Favorite season?"
                  setSeason={setSeason}
                  value={season}
                />
                <div className="navigation">
                  <Button button="button" click={handleSubmit} disable={!season} text="Submit" />
                </div>
              </article>
            )}
          </form>
        )}

        {submit && (
          <section className="summary-container">
            <Summary
              name={name}
              selected={ageGroup}
              season={season}
              checked={agreeOnTerms}
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