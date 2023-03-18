import React, { useState } from 'react'
import { Result } from './Result'

export const Survey = () => {
  const [answerOne, setAnswerOne] = useState('')
  const [answerTwo, setAnswerTwo] = useState('not good')
  const [answerThree, setAnswerThree] = useState('noodles')
  const [surveyStep, setSurveyStep] = useState(0)

  return (
    <div className="survey-container">
      <div className="survey-title-container">
        <h1>🎸 which midwest emo-ish song are you? 💔</h1>
      </div>
      <div className="survey-question-container">
        {surveyStep === 0 && (
          <>
            <h2>what is your name?</h2>
            <input type="text" value={answerOne} onChange={(e) => setAnswerOne(e.target.value)} className="survey-text-input" />
            <button type="button" onClick={() => setSurveyStep(1)} className="survey-next-button">next</button>
          </>
        )}
        {surveyStep === 1 && (
          <>
            <h2>how bad was your time in highschool?</h2>
            <label htmlFor="not-good">
              <input
                type="radio"
                name="not-good"
                value="not good"
                id="not-good"
                checked={answerTwo === 'not good'}
                onChange={(e) => setAnswerTwo(e.target.value)} />
          not good...
            </label>
            <label htmlFor="bad">
              <input
                type="radio"
                name="bad"
                value="bad"
                id="bad"
                checked={answerTwo === 'bad'}
                onChange={(e) => setAnswerTwo(e.target.value)} />
          bad...
            </label>
            <label htmlFor="really-bad">
              <input
                type="radio"
                name="really-bad"
                value="really bad"
                id="really-bad"
                checked={answerTwo === 'really bad'}
                onChange={(e) => setAnswerTwo(e.target.value)} />
          really bad...
            </label>

            <button type="button" onClick={() => setSurveyStep(2)} className="survey-next-button">next</button>
          </>
        )}
        {surveyStep === 2 && (
          <>
            <h2>what is your favourite type of pasta? </h2>
            <select
              value={answerThree}
              onChange={(e) => setAnswerThree(e.target.value)}>
              <option value="noodles">plain spaghetti</option>
              <option value="ravioli">ravioli</option>
              <option value="tortellini">tortellini</option>
            </select>
            <button type="button" onClick={() => setSurveyStep(3)} className="survey-results-button">so which song am I?</button>
          </>
        )}
        {surveyStep === 3 && (
          <Result answerOne={answerOne} answerTwo={answerTwo} answerThree={answerThree} />
        )}
      </div>
    </div>
  )
}