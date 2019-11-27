import React, { useState } from 'react'
import { Summary } from './components/Summary'
import './app.css'

export const App = () => {

  //useState Hooks 
  const [question, setQuestion] = useState("name")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [fruit, setFruit] = useState()
  const [range, setRange] = useState(5)
  const [submitted, setSubmitted] = useState(false)   //False because form is not submitted from start (initial value)

  //Array with values for mapping radio buttons in #2
  const fruits = ["Apple", "Banana", "Minions?"]

  //Function to handle next-button/onclick
  const handleNext = () => {
    if (question === "name") {
      setQuestion("location")
    } else if (question === "location") {
      setQuestion("fruit")
    } else if (question === "fruit") {
      setQuestion("range")
    }
  }

  //Function to handle submit-button/oncklick
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  //Funtion to validate name input, if name is empty isDisabled is true and the button is disabled (called inside <button>)
  const isDisabled = () => {
    if (name.length === 0) {
      return true
    }
  }

  return (

    <div className="app">
      <h1>&#x2605; Quiz time &#x2605;</h1>

      <form onSubmit={handleSubmit}>

        {!submitted && (
          <div className="form-questions">

            {question === "name" && (
              <div className="question">
                <label>
                  <h2># Please enter your name to participate *</h2>
                  <input
                    type="text"
                    required
                    placeholder="Type your name here..."
                    onChange={event => setName(event.target.value)}
                    value={name}
                  />
                </label>
              </div>
            )}

            {question === "location" && (
              <div className="question">
                <label>
                  <h2>#1: What's the best location?</h2>
                  <div className="select-main">
                    <select
                      onChange={event => setLocation(event.target.value)}
                      value={location}
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

            {question === "fruit" && (
              <div className="question" role="radiogroup">
                <h2>#2: What is the Minions favorite fruit?</h2>
                {fruits.map((choice) => (
                  <label key={choice} className="radio-buttons">

                    <input
                      type="radio"
                      value={choice}
                      onChange={(event) => setFruit(event.target.value)}
                      checked={fruit === choice}
                    />
                    <span className="radio-label">{choice}</span>
                  </label>
                ))
                }
              </div>
            )}

            {question === "range" && (
              <div className="question">
                <label>
                  <h2>#3: How many reindeers does Santa have?</h2>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={range}
                    onChange={(event) => setRange(event.target.value)}
                  />
                </label>
                <div className="show-range">{range}</div>

                <button type="submit">Done</button>

              </div>

            )}

            {question !== "range" && (
              <button type="button" onClick={handleNext} disabled={isDisabled()}>Next</button>
            )}
            {isDisabled() && (<div className="name-required">Please type your name before hitting Next</div>)}
          </div>

        )}

      </form>

      {submitted && <Summary name={name} location={location} fruit={fruit} range={range} />}

      <footer>Technigo Bootcamp 2019 © Sofie Nyblad</footer>

    </div >
  )
}

