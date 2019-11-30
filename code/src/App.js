import React, { useState } from 'react'
import { Summary } from './Summary'


const adventureGroup = ["surfing", "climbing", "yoga retreat", "hiking"];
const destinationGroup = ["Costa Rica", "Mount Everest", "Bali", "Machu Picchu",];
const ageGroups = ["alone", "with family members", "with friends"];

export const App = () => {
  const [name, setName] = useState("");
  const [adventures, setAdventures] = useState();
  const [destinations, setDestinations] = useState();
  // const [location, setLocation] = useState("");
  const [mostImportant, setMostImportant] = useState("");
  const [ageGroup, setAgeGroup] = useState()
  // const [companionGroup, setCompanionGroup] = useState()
  const [submitted, setSubmitted] = useState(false)



  return (
    <div>

      {!submitted && (

        <div className="Button">
          <form onSubmit={event => event.preventDefault()}>

            <div className="heroHeader">
              <h2>Plan your 2020 adventure now!</h2>
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
            <div className="Adventures">
              {adventureGroup.map(group => (
                <label key={group}>
                  <input className="adventures"
                    type="checkbox"
                    value={group}
                    onChange={event => setAdventures(event.target.value)}
                    checked={adventures === group}
                  />
                  {group}

                </label>
              ))}
            </div>

            <p>Where would you like to go?</p>
            <div className="Destinations">
              {destinationGroup.map(group => (
                <label key={group}>
                  <input className="destinations"
                    type="checkbox"
                    value={group}
                    onChange={event => setDestinations(event.target.value)}
                    checked={destinations === group}
                  />
                  {group}

                </label>
              ))}
            </div>


            <div className="mostImportant">

              <p>What’s the most important thing when you travel?</p>
              <select className="formDropdown"
                onChange={event => setMostImportant(event.target.value)}
                value={name}
              >
                <option value="">Choose here!</option>
                <option value="low-impact tourism policy">to step out of the comfort zone </option>
                <option value="low-impact tourism policy">low-impact tourism policy </option>
                <option value="food and beverage">great food and beverage</option>
                <option value="tourist attractions">many tourist attractions</option>
              </select>
            </div>



            {/* <div className="companion">
              <p>How do you prefer to travel?</p>
              {companyGroup.map(group => (
                <label key={group}>
                  <input className="radioBtn"
                    type="radio"
                    value={group}
                    onChange={event => setCompanionGroup(event.target.value)}
                    checked={companionGroup === group}
                  /> */}

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
        </div>
      )}

      {submitted && <Summary name={name} adventures={adventures} destinations={destinations} mostImportant={mostImportant} ageGroup={ageGroup} />}

    </div>

  )
}

