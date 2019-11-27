import React, { useState } from "react";
import ReactDOM from "react-dom"
import { Summary } from './Summary';

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [ageGroup, setAgeGroup] = useState();
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="myForm">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log('Submit!')
        }}
      >
        <div className="header">
          <h1>WIN EXCLUSIVE TICKETS TO YOUR DREAM DESTINATION!</h1>  </div>
        <h2>
          We are giving one lucky winner this unique opportunity.
          All you have to do is to
          fill out the form beneath and cross your fingers!
        </h2>
        <h3>Your name: {name} ✍️</h3>
        <input type="text" onChange={(event) => setName(event.target.value)} value={name} required />
        <h3> Choose your dream destination: </h3>
        <h3>🏝️</h3>
        <select onChange={(event) => setLocation(event.target.value)} value={location}>
          <option value="">Where to?</option>
          <option value="New York">New York 🇺🇸</option>
          <option value="Tokyo">Tokyo 🇯🇵</option>
          <option value="Paris">Paris 🇫🇷</option>
        </select>
        <h3>Choose your age group:</h3>
        <label>
          <input
            type="radio"
            value="18-25"
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === "18-25"}
          />
          18-25
      </label>
        <label>
          <input
            type="radio"
            value="25-35"
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === "25-35"}
          />
          25-35
      </label>
        <label>
          <input
            type="radio"
            value="35+"
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === "35+"}
          />
          35+
      </label>
        <h3>Submit your application!</h3>
        <h3>👇</h3>

        <button onClick={() => setSubmitted(true)} type="submit">Submit</button>
      </form>
      {submitted && <Summary name={name} location={location} ageGroup={ageGroup} />}
    </div>
  )
}




