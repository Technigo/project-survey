import React, { useState } from 'react'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { InputRadio } from './InputRadio'
import { InputRange } from './InputRange'
import { Button } from './Button'
import { Summary } from './Summary'
import './Form.css'
// import Image from '/Users/MAC/Technigo/project-survey/code/src/Images/season-unsplash.jpg'




export const Form = () => {
  const [question, setQuestion] = useState(0) //show first "question"
  const nextQuestion = () => setQuestion(question + 1) //to get next question in line (add +1 later)
  const [name, setName] = useState('') //text
  const [ageGroup, setAge] = useState([]) //radio
  const [season, setSeason] = useState('') //drop-down
  const [value, setValue] = useState('10') //range

  const [submit, setSubmit] = useState(false) //since we don't want to show result before submitted. 

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true) //show summary on submit
    console.log('form submitted')
  }

  //array for radio btn
  const ageGroups = [
    '0-18 years',
    '19-30 years',
    '31-40 years',
    '41-50 years',
    '51-60 years',
    '60 + years'
  ]

  return (
    <section className="form-wrapper">
      {!submit && (
        <form onSubmit={handleSubmit}>
          {/* <img src={Image} alt="different leafs" /> */}
          {question === 0 && (
            <article className="introduction">
              <h2>Welcome, please take a few minutes to answer this survey!</h2>
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
              <InputSelect
                question="What's your favorit season?"
                id="season"
                setSeason={setSeason}
                value={season}
              />
              <div className="navigation">
                <Button button="button" click={nextQuestion} text="Next" />
              </div>
            </article>
          )}

          {question === 3 && (
            <article className="question-container">
              <InputRange
                id="range"
                question="From a 1-10 scale how much do you like {season} ?"
                value={value}
                setValue={setValue}
              />
              <div className="navigation">
                <Button button="button" click={nextQuestion} disabled={!name} text="Next" />
              </div>
            </article>
          )}

          {question === 4 && (
            <article className="question-container">
              <InputRadio
                question={`How many {season} have you experienced?`}
                array={ageGroups}
                setAge={setAge}
                selected={ageGroup}
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