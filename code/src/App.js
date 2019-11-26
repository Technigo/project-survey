import React, { useState } from 'react'
import { Summary } from './components/Summary'
import './app.css'

export const App = () => {

  //useState Hooks 
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [fruit, setFruit] = useState()
  const [range, setRange] = useState(50)
  const [submitted, setSubmitted] = useState(false)   //False because form is not submitted from start (initial value)

  //Array with values for mapping radio buttons in #2
  const fruits = ["Apple", "Banana", "Minions?"]

  //Function to handle submit/oncklick
  const handleSubmit = () => {
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

      <form onSubmit={event => event.preventDefault()}>

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
            <h2>#1: What's your place?</h2>
            <div className="select-main">
              <select
                onChange={event => setPlace(event.target.value)}
                value={place}
              >
                <option value="">Choose your place</option>
                <option value="Home">Home</option>
                <option value="Away">Away</option>
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
              <div>{choice}</div>
            </label>
          ))
          }
        </div>

        <div className="question">
          <label>
            <h2>#3: How many % has been knocked down by imposter syndrome?</h2>
            <input
              className="slider"
              type="range"
              min={1}
              max={100}
              value={range}
              onChange={(event) => setRange(event.target.value)}
            />
          </label>
          <div className="show-range">{range}%</div>
        </div>


        <button type="submit" onClick={handleSubmit} disabled={isDisabled()}>Done</button>
        {isDisabled() && <div className="name-required">* Please type your name before hitting Done *</div>}
        {submitted && <Summary name={name} place={place} fruit={fruit} range={range} />}

      </form>

      <footer>Technigo Bootcamp 2019 © Sofie Nyblad</footer>

    </div >
  )
}

