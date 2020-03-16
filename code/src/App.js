/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-parens */
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { Radio } from './components/Radio'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'
import './app.css'

const likeBlue = ['Yes', 'No', 'Only certain shades']
const blueFeelings = ['Positive', 'Negative', 'Neutral', 'Mixed']
const option1 = 'Blue are the feelings that live inside me'
const option2 = 'I’m blue da ba dee da ba daa'
const option3 = 'That’s sad'
const blue1 = 'Anthony Costa'
const blue2 = 'Duncan James'
const blue3 = 'Lee Ryan'
const blue4 = 'Simon Webbe'

export const App = () => {
  const [mind, setMind] = useState('')
  const [likeScale, setLikeScale] = useState()
  const [feelingScale, setFeelingScale] = useState()
  const [optionBlue, setOptionBlue] = useState('')
  const [optionBlueMember, setOptionBlueMember] = useState('')
  const [submit, setSubmit] = useState(false)
  const enabled = mind.length > 0
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

            <label>
              <h2>What comes into mind when you think about the color Blue?</h2>
              <Text
                value={mind}
                onChange={event => setMind(event.target.value)}
                placeholder="Enter your thoughts here..." />
            </label>

            <label>
              <h2>Do you like the color Blue?</h2>
              {likeBlue.map(like => (
                <Radio
                  value={like}
                  onChange={event => setLikeScale(event.target.value)}
                  checked={likeScale === like} />
              ))}
            </label>

            <label>
              <h2>What are your feelings associated with the color Blue?</h2>
              {blueFeelings.map(feeling => (
                <Radio
                  value={feeling}
                  onChange={event => setFeelingScale(event.target.value)}
                  checked={feelingScale === feeling} />
              ))}
            </label>

            <label>
              <h2>Blue are the words I say and what I think</h2>
              <div className="drop-down">
                <select
                  value={optionBlue}
                  onChange={event => setOptionBlue(event.target.value)}
                  required>
                  <option value="">~ Select option ~</option>
                  <option value={option1}>{option1}</option>
                  <option value={option2}>{option2}</option>
                  <option value={option3}>{option3}</option>
                </select>
              </div>
            </label>

            <label>
              <h2>Who is your favourite Blue member?</h2>
              <div className="drop-down">
                <select
                  value={optionBlueMember}
                  onChange={event => setOptionBlueMember(event.target.value)}
                  required>
                  <option value="">~ Select option ~</option>
                  <option value={blue1}>{blue1}</option>
                  <option value={blue2}>{blue2}</option>
                  <option value={blue3}>{blue3}</option>
                  <option value={blue4}>{blue4}</option>
                </select>
              </div>
            </label>

            <button type="submit" disabled={!enabled}>Submit</button>

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
