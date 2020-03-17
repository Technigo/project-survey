/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-parens */
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { Radio } from './components/Radio'
import { Option } from './components/Option'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'
import './app.css'

/* Variables */

const likeBlue = ['Yes', 'No', 'Only certain shades']
const blueFeelings = ['Positive', 'Negative', 'Neutral', 'Mixed']
const optionValueEmpty = ''
const optionValue0 = '~ Select option ~'
const optionValue1 = 'Blue are the feelings that live inside me'
const optionValue2 = 'I’m blue da ba dee da ba daa'
const optionValue3 = 'That’s sad'
const blueEmpty = ''
const blue0 = '~ Select option ~'
const blue1 = 'Anthony Costa'
const blue2 = 'Duncan James'
const blue3 = 'Lee Ryan'
const blue4 = 'Simon Webbe'

const optionValues = [
  { value: optionValueEmpty, text: optionValue0 },
  { value: optionValue1, text: optionValue1 },
  { value: optionValue2, text: optionValue2 },
  { value: optionValue3, text: optionValue3 }
]
const blueMembers = [
  { value: blueEmpty, text: blue0 },
  { value: blue1, text: blue1 },
  { value: blue2, text: blue2 },
  { value: blue3, text: blue3 },
  { value: blue4, text: blue4 }
]

export const App = () => {
  const [question, setQuestion] = useState(1)
  const nextQuestion = () => {
    setQuestion(question + 1)
  }
  const previousQuestion = () => {
    setQuestion(question - 1)
  }
  const [mind, setMind] = useState('')
  const [likeScale, setLikeScale] = useState()
  const [feelingScale, setFeelingScale] = useState()
  const [optionBlue, setOptionBlue] = useState('')
  const [optionBlueMember, setOptionBlueMember] = useState('')
  const [submit, setSubmit] = useState(false)
  /* const enabled = [feelingScale, setFeelingScale] !== optionValues[0]; */
  const handleSubmit = event => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <section className="content-wrapper">
      <Header />
      <section className="main-container">

        {!submit && (
          <form onSubmit={handleSubmit}>

            {question === 1 && (
              <label>
                <h2>What comes into mind when you think about the color Blue?</h2>
                <Text
                  value={mind}
                  onChange={event => setMind(event.target.value)}
                  placeholder="Enter your thoughts here..." />
              </label>
            )}

            {question === 2 && (
              <label>
                <h2>Do you like the color Blue?</h2>
                {likeBlue.map(like => (
                  <Radio
                    value={like}
                    name="like"
                    onChange={event => setLikeScale(event.target.value)}
                    checked={likeScale === like} />
                ))}
              </label>
            )}

            {question === 3 && (
              <label>
                <h2>What are your feelings associated with the color Blue?</h2>
                {blueFeelings.map(feeling => (
                  <Radio
                    value={feeling}
                    name="feeling"
                    onChange={event => setFeelingScale(event.target.value)}
                    checked={feelingScale === feeling} />
                ))}
              </label>
            )}

            {question === 4 && (
              <label>
                <h2>Blue are the words I say and what I think</h2>
                <div className="drop-down">
                  <select
                    value={optionBlue}
                    onChange={event => setOptionBlue(event.target.value)}
                    required>
                    {optionValues.map(option => (
                      <Option value={option.value} text={option.text} />
                    ))}
                  </select>
                </div>
              </label>
            )}

            {question === 5 && (
              <label>
                <h2>Who is your favourite Blue member?</h2>
                <div className="drop-down">
                  <select
                    value={optionBlueMember}
                    onChange={event => setOptionBlueMember(event.target.value)}
                    required>
                    {blueMembers.map(member => (
                      <Option value={member.value} text={member.text} />
                    ))}
                  </select>
                </div>
              </label>
            )}

            <section className="button-container">
              {question < 5 && (
                <button type="button" onClick={nextQuestion}>Next</button>
              )}

              {question !== 1 && (
                <button type="button" onClick={previousQuestion}>Go Back</button>
              )}

              {question === 5 && (
                <button type="submit"/* disabled={!enabled} */>Submit</button>
              )}

            </section>

          </form>
        )}

        <section className="summary-wrapper">
          {submit &&
            <div className="summary-content">

              <Summary
                mind={mind}
                like={likeScale}
                feeling={feelingScale}
                dabadee={optionBlue}
                blue={optionBlueMember} />

              <div className="summary-buttons">
                <button type="button" onClick={() => window.location.reload()}>Reset</button>
                <button type="button" onClick={() => setSubmit(false)}>Go back</button>
              </div>

            </div>}
        </section>

      </section>

      <Footer />

    </section>
  )
}
