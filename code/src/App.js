import React, { useState } from 'react'
import { Summary } from './components/Summary'
import './app.css'

export const App = () => {

  //useState Hooks 
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [fruit, setFruit] = useState()
  const [range, setRange] = useState(50)
  const [submitted, setSubmitted] = useState(false)   //False because form is not submitted from start (initial value)

  //Array with values for mapping radio buttons in #2
  const fruits = ["Apple", "Banana", "Minions?"]

  //Function to handle submit/oncklick
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
      <h1>Quiz time!</h1>


      <form onSubmit={handleSubmit}>

        {!submitted &&
          <div className="questions">
            <div className="question">
              <label>
                <h2>Please enter your name to participate *</h2>
                <input
                  type="text"
                  required
                  placeholder="Type your name here..."
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
              </label>
            </div>

            <div className="question">
              <label>
                <h2>#1: What's your location?</h2>
                <div className="select-main">
                  <select
                    onChange={event => setLocation(event.target.value)}
                    value={location}
                  >
                    <option value="">Choose your location</option>
                    <option value="Home">Home</option>
                    <option value="Away">Away</option>
                    <option value="Vacayay!">Vacayay!</option>
                  </select>
                </div>
              </label>
            </div>

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

            <div className="question">
              <label>
                <h2>#3: How many % has been knocked down by imposter syndrome?</h2>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={range}
                  onChange={(event) => setRange(event.target.value)}
                />
              </label>
              <div className="show-range">{range}%</div>
            </div>

            <button type="submit" disabled={isDisabled()}>Done</button>
            {isDisabled() && <div className="name-required">* Please type your name before hitting Done *</div>}
          </div>
        }

      </form>


      {submitted && <Summary name={name} location={location} fruit={fruit} range={range} />}

      <footer>Technigo Bootcamp 2019 © Sofie Nyblad</footer>

    </div >
  )
}

