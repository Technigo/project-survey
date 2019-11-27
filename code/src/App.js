// import React from 'react'
import React, { useState } from 'react'
import { Header } from './Header'
import { Summary } from './Summary'


const ageGroups = ["20-30", "31-40", "41-50"];

export const App = () => {
  const [name, setName] = useState("");
  const [temperature, setTemperature] = useState(20);
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState()
  const [submitted, setSubmitted] = useState(false)


  return (
    <div className="Button">
      <form onSubmit={event => event.preventDefault()}>
        {/* <div className="Button"> */}
        <h1>Jambo everyone!</h1>
        <p>What's your name?</p>
        <input
          className="formField"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />

        <p>How is the weather in Capetown?</p>
        {/* the temperature is {temperature} degrees</p> */}

        <button onClick={() => setTemperature(-5)}>Freezeing!</button>
        <button onClick={() => setTemperature(30)}>Warm!</button>
        <button onClick={() => setTemperature(120)}>Hot!</button>

        {temperature > 100 && <p>and really steamy</p>}

        {/* onChange={event => setName(event.target.value)}
        value={temperature} */}


        <p>Select your next destination</p>
        <select className="formDropdown"
          onChange={event => setLocation(event.target.value)}
          value={name}
        >
          <option value="">Select destination</option>
          <option value="stockholm">Stockholm</option>
          <option value="capetown">Capetown</option>
          <option value="bali">Bali</option>
        </select>

        <p>select your age</p>
        {ageGroups.map(group => (
          <label key={group}>
            <input className="radioBtn"
              type="radio"
              value={group}
              onChange={event => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
            {group}
          </label>
        ))}



        <button
          onClick={() => setSubmitted(true)}
        >SUBMIT
            </button>

      </form>

      {submitted && <Summary name={name} temperature={temperature} location={location} ageGroup={ageGroup} />}

    </div>

  )
}
