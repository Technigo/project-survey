import React from 'react'
import { useState } from 'react'
import './app.css'
// import { HandleSubmit } from './components/HandleSubmit'

export const App = () => {
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const numbers = ["11", "32", "55"]
  const [number, setNumber] = useState()

  const handleSubmit = () => {
    // const [submitted, setSubmittet] = useState()
    return (
      alert(`${name}, ${place}, ${number}`)
    )
  }

  return (
    <div className="app">
      <h1> Quiz time!</h1>

      <form onSubmit={event => event.preventDefault()}>

        <div className="question">
          <label>
            <h2>Question One...</h2>
            <input
              type="text"
              placeholder="Type your name here..."
              required
              onChange={event => setName(event.target.value)}
              value={name}
            />
          </label>
        </div>

        <div className="question">
          <label>
            <h2>Question Two...</h2>
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

        <div className="question">
          <h2>Question Three...</h2>
          {numbers.map((choice) => (
            <label key={choice} className="label-radio">
              <input
                type="radio"
                value={choice}
                onChange={(event) => setNumber(event.target.value)}
                checked={number === choice}
              />
              <span className="checkmark"></span>
              {choice}
            </label>
          ))
          }
        </div>

        <button onClick={handleSubmit} type="submit">Done!</button>

      </form>

    </div>
  )
}

