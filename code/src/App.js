// import React from 'react'
import React, { useState } from 'react'
import { Header } from './Header'
import { Summary } from './Summary'


const ageGroups = ["20-30", "31-40", "41-50"];

export const App = () => {
  const [name, setName] = useState("");

  const [capetown, setCapetown] = useState(false);
  const [grandcanyon, setGrandCanyon] = useState(false);
  const [maldives, setMaldives] = useState(false);
  const [bali, setBali] = useState(false);

  // const [temperature, setTemperature] = useState(20);
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState()
  const [submitted, setSubmitted] = useState(false)


  return (
    <div className="Button">
      <form onSubmit={event => event.preventDefault()}>

        <h1>Welcome to the dream trip survey!</h1>
        <h2>Please answer the questions below.</h2>

        <p>What's your name?</p>
        <input
          className="formField"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />

        <div className="destinations">
          What destination do you like the most?
          <br />
          <label>
            <input
              type="checkbox"
              checked={capetown}
              onChange={(event) => setCapetown(event.target.checked)}
            />
            Capetown
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={grandcanyon}
              onChange={(event) => setGrandCanyon(event.target.checked)}
            />
            Grand Canyon
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={maldives}
              onChange={(event) => setMaldives(event.target.checked)}
            />
            Maldives
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={bali}
              onChange={(event) => setBali(event.target.checked)}
            />
            Bali
          </label>
          <br />
        </div>



        {/* <p>How is the weather in Capetown?</p>
        {/* the temperature is {temperature} degrees</p> */}
        {/* 
        <button onClick={() => setTemperature(-5)}>Freezeing!</button>
        <button onClick={() => setTemperature(30)}>Warm!</button>
        <button onClick={() => setTemperature(120)}>Hot!</button> */}

        {/* {temperature > 100 && <p>and really steamy</p>} */}

        {/* onChange={event => setName(event.target.value)}
        value={temperature} */}


        <p>Your next dream destination is</p>
        <select className="formDropdown"
          onChange={event => setLocation(event.target.value)}
          value={name}
        >
          <option value="">Select destination</option>
          <option value="Cinque Terre">Cinque Terre</option>
          <option value="Svalbard">Svalbard</option>
          <option value="Harbor Island">Harbor Island</option>
        </select>

        <p>Please select your age</p>
        {ageGroups.map(group => (
          <label key={group}>
            <input className="radioBtn"
              type="radio"
              value={group}
              onChange={event => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
            {group}
            <br />

          </label>
        ))}


        <button className="submitBtn"
          onClick={() => setSubmitted(true)}
        >SUBMIT
            </button>

      </form>

      {submitted && <Summary name={name} capetown={" Capetown"} grandcanyon={" Grand Canyon"} maldives={" Maldives"} bali={" Bali"} location={location} ageGroup={ageGroup} />}

    </div>

  )
}
