import React, { useState } from 'react'

export const Survey = () => {
  const [answerOne, setAnswerOne] = useState('')
  const [answerTwo, setAnswerTwo] = useState('')
  const [answerThree, setAnswerThree] = useState('')
  const [surveyStep, setSurveyStep] = useState(0)

  return (
    <>
      {surveyStep === 0 && (
        <>
          <h1>Survey one!</h1>
          <input type="text" value={answerOne} onChange={(e) => setAnswerOne(e.target.value)} />
          <button type="button" onClick={() => setSurveyStep(1)}>Next</button>
        </>
      )}
      {surveyStep === 1 && (
        <>
          <h1>Survey two! {answerOne}</h1>
          <label htmlFor="first-select">
            <input
              type="radio"
              name="two"
              value="Hej"
              id="first-select"
              checked={answerTwo === 'Hej'}
              onChange={(e) => setAnswerTwo(e.target.value)} />
          Hej
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              name="two"
              value="Tjo"
              id="2"
              checked={answerTwo === 'Tjo'}
              onChange={(e) => setAnswerTwo(e.target.value)} />
          Tjo
          </label>
          <label htmlFor="3">
            <input
              type="radio"
              name="two"
              value="Tjenixen"
              id="3"
              checked={answerTwo === 'Tjenixen'}
              onChange={(e) => setAnswerTwo(e.target.value)} />
          Tjenixen
          </label>

          <button type="button" onClick={() => setSurveyStep(2)}>Next</button>
        </>
      )}
      {surveyStep === 2 && (
        <>
          <h1>Survey three! {answerOne} + {answerTwo}</h1>
          <select
            value={answerThree}
            onChange={(e) => setAnswerThree(e.target.value)}>
            <option value="lol">Lol</option>
            <option value="bruh">Bruh</option>
            <option value="yessir">Yessir</option>
          </select>
          <button type="button" onClick={() => setSurveyStep(3)}>Next</button>
        </>
      )}
      {surveyStep === 3 && (
        <h1>Thank you! {answerOne} + {answerTwo} + {answerThree}</h1>
      )}
    </>
  )
}