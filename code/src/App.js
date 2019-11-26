import React, { useState } from 'react'
import { Summary } from './components/Summary'
import './app.css'

export const App = () => {
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  //Array with values for mapping radio buttons in #2
  const fruits = ["Apple", "Banana", "Minions?"]
  const [fruit, setFruit] = useState()
  //Array with values for mapping radio buttons in #3
  const numbers = ["11", "34", "47"]
  const [number, setNumber] = useState()
  //False because form is not submitted from start (initial value)
  const [submitted, setSubmitted] = useState(false)
  //If input for name is empty, isDisabled is true and the button is disabled (called inside <button>)
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
            <h2>Please enter your name to participate</h2>
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
            <h2>#1: What place?</h2>
            <div className="select-main">
              <select
                onChange={event => setPlace(event.target.value)}
                value={place}
              >
                <option value="">Choose your place</option>
                <option value="place1">Place1</option>
                <option value="place2">Place2</option>
                <option value="place3">Place3</option>
              </select>
            </div>
          </label>
        </div>

        <div className="question" role="radiogroup">
          <h2>#2: What is the Minions favorite fruit?</h2>
          {fruits.map((choice) => (
            <label key={choice} className="radio-fruits">
              <input
                type="radio"
                value={choice}
                onChange={(event) => setFruit(event.target.value)}
                checked={fruit === choice}
              />
              <span className="checkmark" role="radio" aria-checked="false" tabIndex="0"></span>
              {choice}
            </label>
          ))
          }
        </div>

        <div className="question" role="radiogroup">
          <h2>#3: Whats your number?</h2>
          {numbers.map((choice) => (
            <label key={choice} className="radio-buttons">
              <input
                type="radio"
                value={choice}
                onChange={(event) => setNumber(event.target.value)}
                checked={number === choice}
              />
              <div>{choice}</div>
            </label>
          ))
          }
        </div>

        <button onClick={() => setSubmitted(true)} type="submit" disabled={isDisabled()}>Done</button>
        {submitted && <Summary name={name} place={place} fruit={fruit} number={number} />}

      </form>

    </div >
  )
}

