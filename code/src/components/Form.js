import React, { useState } from 'react'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { InputRadio } from './InputRadio'
import { Button } from './Button'
import { Summary } from './Summary'
import './Form.css'
import Image from '/Users/MAC/Technigo/project-survey/code/src/Images/season-unsplash.jpg'




export const Form = () => {
  const [question, setQuestion] = useState(0) //show first "question"
  const nextQuestion = () => setQuestion(question + 1) //to get next question in line (add +1 later)
  const [name, setName] = useState('')
  const [ageGroup, setAge] = useState([]);
  const [season, setSeason] = useState('')
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
    <section className="form-wrapper">
      {!submit && (
        <form onSubmit={handleSubmit}>
          {/* <img src={Image} alt="different leafs" /> */}
          {question === 0 && (
            <article className="introduction">
              <h2>Welcome, please take a few minutes to answer this servey!</h2>
              <div className="navigation">
                <Button button="button" click={nextQuestion} text="Start survey" />
              </div>
            </article>
          )}

          {question === 1 && (
            <article className="question-container">
              <InputText
                id="name"
                question="What is your name?"
                value={name}
                setText={setName}
              />
              <div className="navigation">
                <Button button="button" click={nextQuestion} disabled={!name} text="Next" />
              </div>
            </article>
          )}

          {question === 2 && (
            <article className="question-container">
              <InputRadio
                question="How old are you?"
                array={ageGroups}
                setAge={setAge}
                selected={ageGroup}
              />
              <div className="navigation">
                <Button button="button" click={nextQuestion} text="Next" />
              </div>
            </article>
          )}

          {/* {question === 3 && (
              <article className="question-container">
                <InputCheckbox
                  question="Are you happy?"
                  checked={agreeOnTerms}
                  setAgreeOnTerms={setAgreeOnTerms}
                // id="season"
                // setSeason={setSeason}
                // value={season}
                />
                <div className="navigation">
                  {/* <StartButton button="button" click={nextQuestion} disable={!season} text="Next" /> */}
          {/* <StartButton button="button" click={nextQuestion} text="Next" />
                </div>
              </article>
            )} */}

          {question === 3 && (
            <article className="question-container">
              <InputSelect
                question="What's your favorit season?"
                id="season"
                setSeason={setSeason}
                value={season}
              />
              <div className="navigation">
                <Button type="submit" click={handleSubmit} text="Submit" disable={!season} />
              </div>
            </article>
          )}
        </form>
      )
      }

      {
        submit && (
          <section className="summary-container">
            <Summary
              name={name}
              selected={ageGroup}
              season={season}
            />
          </section>
        )
      }
    </section >
  )
}