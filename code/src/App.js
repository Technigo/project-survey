// import React from 'react'
import React, { useState } from 'react'
import { Summary } from './Summary'

const ageGroups = ["20-30", "31-40", "41-50"];
const destinationGroup = ["Capetown", "Grand Canyon", "Maldives", "Bali"];

export const App = () => {

  const [name, setName] = useState("");
  const [destinations, setDestinations] = useState();

  // const [capetown, setCapetown] = useState(false);
  // const [grandcanyon, setGrandCanyon] = useState(false);
  // const [maldives, setMaldives] = useState(false);
  // const [bali, setBali] = useState(false);

  // const [temperature, setTemperature] = useState(20);
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState()
  const [submitted, setSubmitted] = useState(false)


  return (
    <div className="Button">
      <form onSubmit={event => event.preventDefault()}>

        <div classname="heroHeader">
          <h1>Welcome to dream trip survey!</h1>
        </div>
        <h2>Please answer the questions below.</h2>

        <div className="nameBox">
          Your name:
        <input
            className="formField"
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}

          />
        </div>

        <div className="Destinations">
          <p>Which destination is most interesting?</p>

          {destinationGroup.map(group => (
            <label key={group}>
              <input className="destinations"
                type="checkbox"
                value={group}
                onChange={event => setDestinations(event.target.value)}
                checked={destinations === { group }}
              />
              {group}

            </label>
          ))}
        </div>





        {/* <label>
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
        </div> */}

        <div className="nextDestinationBox">
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
        </div>

        <div className="ageBox">
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
        </div>

        <button className="submitBtn"
          onClick={() => setSubmitted(true)}
        >SUBMIT
            </button>
      </form>


      {submitted && <Summary name={name} destinations={destinations} location={location} ageGroup={ageGroup} />}

    </div>

  )
}



