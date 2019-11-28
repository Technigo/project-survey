import React, { useState } from 'react'
import { Summary } from './Summary'
import "./app.css"

export const App = () => {

  // Use State Hooks
  const [name, setName] = useState("");
  const [impression, setImpression] = useState("");
  const [location, setLocation] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState();
  // Array for what age group you are in
  const ageGroups = ["0-18", "19-30", "31+"]
  //False because form is not submitted from start (initial value)
  const [submitted, setSubmitted] = useState(false)
  const [happiness, setHappiness] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app">
      {submitted && (
        <p>Heres your result</p>
      )}
      <header>
        <h1>Tell me what you think</h1>
        <h2>Thanks for agreeing on giving me some feedback.</h2>
      </header>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="question">
          <h3>What is you name?</h3>
          <label>
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
          <h3>What is your first impression of this page?</h3>
          <label>
            <input
              type="text"
              required
              placeholder="Type your answer here..."
              onChange={event => setImpression(event.target.value)}
              value={impression}
            />
          </label>
        </div>

        <div className="question">
          <label>
            <h3>Where do you live?</h3>
            <select className="select-css"
              onChange={event => setLocation(event.target.value)}
              value={location}
            >
              <option value="">Select location:</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Oslo">Oslo</option>
            </select>
          </label>
        </div>

        <div className="question">
          <h3>Age Group:</h3>

          {ageGroups.map((group) => (
            <label key={group} className="radio-buttons">
              <input
                type="radio"
                value={group}
                onChange={() => setAgeGroup(group)}
                checked={ageGroup === group}
              />
              <div className="age"> {group}</div>
              <div className="check"><div className="inside"></div></div>
            </label>
          ))
          }

        </div>
        <div className="question">
          <div className="feelings">
            <h3>How are you feeling?</h3>
            <label>
              <input type="radio"
                value="happy"
                onChange={() => setHappiness("happy")}
                checked={happiness === "happy"}
              />
              <span role="img" aria-label="Happy face">
                😃
                </span>
            </label>
            <label>
              <input type="radio"
                value="sad"
                onChange={() => setHappiness("sad")}
                checked={happiness === "sad"}
              />
              <span role="img" aria-label="Sad face">
                😞
                </span>
            </label>
          </div>
        </div>


        <div className="question">
          <label>
            <h3>Newsletter:</h3>
            Newsletter ?
              <input
              type="checkbox"
              checked={wantsNewsletter}
              onChange={event => setWantsNewsletter(event.target.checked)}
            />
          </label>
        </div>
      </form>

      <div className="buttons">
        <button type="submit" onClick={() => setSubmitted(true)}>
          Submit
        </button>
        {submitted && <Summary name={name} impression={impression} ageGroup={ageGroup} location={location} />}
      </div>

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>
    </div>
  );
};
