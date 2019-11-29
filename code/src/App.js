import React, { useState } from 'react'
import { Summary } from './components/Summary'
import './app.css'

export const App = () => {

  //useState Hooks 
  const [question, setQuestion] = useState(1)
  const [text, setText] = useState("")
  const [select, setSelect] = useState("")
  const [radioButton, setRadioButton] = useState()
  const [checkbox, setCheckbox] = useState()
  const [range, setRange] = useState(5)
  const [submitted, setSubmitted] = useState(false)   //False because form is not submitted from start (initial value)

  //Array with values for mapping radio buttons in #3
  const radioButtons = ["Apple", "Banana", "Minions?"]
  //Array with values for mapping checkboxes in #4
  const checkboxes = ["Yes", "No", "The slowest"]

  //Nextbutton only enabled when text input is over 0 chars
  const enabled = text.length > 0

  //Function to handle next-button/onclick
  const handleNext = () => {
    setQuestion(question + 1)
  }

  //Function to handle next-button/onclick
  const handleBack = () => {
    setQuestion(question - 1)
  }

  //Function to handle submit-button/oncklick
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (

    <div className="app">
      <h1>&#x2605; Quiz time &#x2605;</h1>

      <form onSubmit={handleSubmit}>

        {/* Show form content if form is not submitted */}
        {!submitted && (
          <div className="form-questions">

            {question === 1 && (
              <div className="question">
                <label>
                  <h2># Please enter your name to participate *</h2>
                  <input
                    type="text"
                    required
                    placeholder="Type your name here..."
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    // Prevent form to submit if hitting enter after typing name
                    onKeyPress={(event) => { event.key === "Enter" && event.preventDefault() }}
                  />
                </label>
              </div>
            )}

            {question === 2 && (
              <div className="question">
                <label>
                  <h2>#1: What's the best location?</h2>
                  <div className="select-main">
                    <select
                      onChange={event => setSelect(event.target.value)}
                      value={select}
                    >
                      <option value="">- Choose location -</option>
                      <option value="Home">Home</option>
                      <option value="Away">Away</option>
                      <option value="Vacayay!">Vacayay!</option>
                    </select>
                  </div>
                </label>
              </div>
            )}

            {question === 3 && (
              <div className="question" role="radiogroup">
                <h2>#2: What is the Minions favorite fruit?</h2>
                {radioButtons.map((choice) => (
                  <label key={choice} className="radio-btns">
                    <input
                      type="radio"
                      value={choice}
                      checked={radioButton === choice}
                      onChange={() => setRadioButton(choice)}
                    />
                    <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
                    {choice}
                  </label>
                ))
                }
              </div>
            )}

            {question === 4 && (
              <div className="question">
                <h2>#3: Is sloths a slooow animal?</h2>
                {checkboxes.map((choice) => (
                  <label key={choice} className="checkbox-boxes">
                    <input
                      type="checkbox"
                      value={choice}
                      checked={checkbox === choice}
                      onChange={() => setCheckbox(choice)}
                    />
                    <span className="checkmark-box" role="checkbox" aria-checked="false" tabIndex="0"></span>
                    {choice}
                  </label>
                ))
                }
              </div>
            )}

            {question === 5 && (
              <div className="question">
                <label>
                  <h2>#4: How many reindeers does Santa have?</h2>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={range}
                    onChange={(event) => setRange(event.target.value)}
                  />
                </label>
                <div className="show-range">{range}</div>

              </div>

            )}

            <div className="button-wrapper">
              {question !== 1 && (
                <button type="button" onClick={handleBack}>Back</button>
              )}
              {question !== 5 && (
                // Nextbutton disabled until textinput has more than 0 chars
                <button type="button" onClick={handleNext} disabled={!enabled}>Next</button>
              )}
              {question === 5 && (<button className="button-submit" type="submit">Done</button>)}
            </div>
            {/* If Nextbutton not enabled, show this text*/}
            {!enabled && (<div className="name-required">*Please type your name before hitting Next</div>)}
          </div>

        )}

      </form>
      {/* When form is submitted, show the summary */}
      {submitted && (<Summary text={text} select={select} radioButton={radioButton} checkbox={checkbox} range={range} />)}

      <footer>
        <div>Technigo Bootcamp 2019 © Sofie Nyblad</div>
      </footer>

    </div >

  )
}

