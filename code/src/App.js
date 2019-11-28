import React, { useState } from 'react'
import { Summary } from './Summary'
import "./app.css"

export const App = () => {

  // Use State Hooks
  const [name, setName] = useState("");
  const [impression, setImpression] = useState("");
  const [location, setLocation] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState("0-18");
  // Array for what age group you are in
  const ageGroups = ["0-18", "19-30", "31+"]
  const [happiness, setHappiness] = useState("happy")
  const [feeling, setFeeling] = useState("")
  //False because form is not submitted from start (initial value)
  // const [submitted, setSubmitted] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const [section, setSection] = useState('firstQuestion')


  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }
  const handleContinue = (event) => {

  }

  return (
    <div className="app">

      <header>
        <h1>What do you remember of 2019?</h1>
        <h2>Check you memory by answering the questions below</h2>
      </header>
      {!showResult && (
        <form className="form-container" onSubmit={handleSubmit}>

          {section === 'firstQuestion' && (
            <div className="question" onSubmit={handleContinue}>
              <h3>To participate, please write your name: </h3>
              <label>
                <input
                  type="text"
                  placeholder="Type your name here..."
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
              </label>
            </div>
          )}

          {section === 'firstQuestion' && (
            <div className="question">
              <h3>What is your first impression of this page?</h3>
              <label>
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  onChange={event => setImpression(event.target.value)}
                  value={impression}
                />
              </label>
            </div>
          )}

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
            <div className="thought">
              <label>
                <h3>How are you feeling?</h3>
                <input
                  type="text"
                  value={feeling}
                  onChange={(event) => setFeeling(event.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="buttons">
            <button type="submit">
              Send my feelings
          </button>
          </div>
        </form>

      )}
      {showResult && (
        <Summary name={name} happiness={happiness} impression={impression} ageGroup={ageGroup} location={location} />
      )}


      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>
    </div>
  );
};
