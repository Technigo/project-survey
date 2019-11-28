import React, { useState } from 'react'
import { Summary } from './Summary'

const ageGroups = ["Alone", "With family members", "With friends"];
const destinationGroup = ["Mount Everest", "Machu Picchu", "Grand Canyon", "Bali"];

export const App = () => {
  const [name, setName] = useState("");
  const [destinations, setDestinations] = useState();
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState()
  const [submitted, setSubmitted] = useState(false)



  return (
    <div className="Button">
      <form onSubmit={event => event.preventDefault()}>

        <div className="heroHeader">
          <h1>Plan your 2020 adventure now!</h1>
        </div>


        <div className="nameBox">
          Your name:
        <input
            className="formField"
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}

          />
        </div>


        <p>What kind of adventure are you up for?</p>
        <div className="Destinations">
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



        <div className="nextDestinationBox">

          <p>What’s the most important thing when you travel?</p>
          <select className="formDropdown"
            onChange={event => setLocation(event.target.value)}
            value={name}
          >
            <option value="">Choose here!</option>
            <option value="Cinque Terre">Travelling to areas with low-impact tourism policy </option>
            <option value="Svalbard">To enjoy great food & beverage</option>
            <option value="Harbor Island">Tourist attractions</option>
          </select>
        </div>

        <div className="ageBox">
          <p>How do you prefer to travel?</p>
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



