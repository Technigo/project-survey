import React, { useState } from 'react'
import { Summary } from './Summary'
// import { ProgressBarContainer } from './ProgressBar'
import "./app.css"

export const App = () => {

  // Use State Hooks
  const [name, setName] = useState("");
  const [impression, setImpression] = useState("");
  const [location, setLocation] = useState("");
  // const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState("0-18");
  // Array for what age group you are in
  const ageGroups = ["0-20", "20-100", "100+"]
  const [happiness, setHappiness] = useState("happy")
  const [readyness, setReadyness] = useState("ready")

  const [feeling, setFeeling] = useState("")
  const [question, setQuestion] = useState(1)
  //False because form is not submitted from start (initial value)
  const [submitted, setSubmitted] = useState(false)
  //True because...?
  const [showResult, setShowResult] = useState(true)
  const [range, setRange] = useState(0)


  // Function for button to continue to next question. Would really want help to make the code shorter.
  const handleContinueClick = () => {
    if (question === 1) {
      setQuestion(2)
    } else if (question === 2) {
      setQuestion(3)
    } else if (question === 3) {
      setQuestion(4)
    } else if (question === 4) {
      setQuestion(5)
    } else if (question === 5) {
      setQuestion(6)
    } else if (question === 6) {
      setQuestion(7)
    }
  }
  // Function for button to go to previous question. Would really want help to make the code shorter.
  const handleGoBackClick = () => {
    if (question === 7) {
      setQuestion(6)
    } else if (question === 6) {
      setQuestion(5)
    } else if (question === 5) {
      setQuestion(4)
    } else if (question === 4) {
      setQuestion(3)
    } else if (question === 3) {
      setQuestion(2)
    } else if (question === 2) {
      setQuestion(1)
    }
  }

  const handleSubmit = (event) => {
    setSubmitted(true)
    setShowResult(!showResult)
  }

  return (
    <div className="app">

      {showResult && (
        <form className="form-container" onSubmit={event => event.preventDefault()}>

          {/* {!showResult && (
         <form className="form-container" onSubmit={handleSubmit}> */}

          <header>
            <h1>HAPPY NEW YEAR</h1>
            <h2>Time to say goodbye to 2019 and hello to 2020!</h2>
          </header>

          {question === 1 && (
            <div className="question">
              <h3>First, what's your name?</h3>
              <label>
                <input
                  type="text"
                  placeholder="Type your name here..."
                  required
                  onChange={event => setName(event.target.value)}
                  value={name}
                />
              </label>
            </div>
          )}

          {question === 2 && (
            <div className="question">
              <div className="ready-for">
                <h3>Are you ready for 2020?</h3>
                <div className="emojis">
                  <label>
                    <input type="radio"
                      value="ready"
                      onChange={() => setReadyness("ready")}
                      checked={readyness === "ready"}
                    />
                    <span role="img" aria-label="yes, bring it on">
                      🙋‍♀️
                </span>
                  </label>
                  <label>
                    <input type="radio"
                      value="notReady"
                      onChange={() => setReadyness("notReady")}
                      checked={readyness === "notReady"}
                    />
                    <span role="img" aria-label="hell no">
                      🙅‍♀️
                </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* {question === 5 && (
            <div className="question">
              <label>
                <h3>Are you ready for 2019?</h3>
                <input
                  type="checkbox"
                  checked={wantsNewsletter}
                  onChange={event => setWantsNewsletter(event.target.checked)}
                />
              </label>
            </div>
          )} */}
          {question === 3 && (
            <div className="question">
              <h3>Mention one thing you look forward to in 2020?</h3>
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

          {question === 4 && (
            <div className="question">
              <label>
                <h3>What was your one favorite happening in 2019?</h3>
                <select className="select-css"
                  onChange={event => setLocation(event.target.value)}
                  value={location}
                >
                  <option value="">Select:</option>
                  <option value="Smoking">Sweden's new smoking ban</option>
                  <option value="Hammarby">Zlatan bought Hammarby</option>
                  <option value="Technigo">FIFA Women's World Cup in France</option>
                </select>
              </label>
            </div>
          )}

          {question === 5 && (
            <div className="question">
              <h3>How many beer's have you had in 2019? </h3>
              <div className="range-container">
                <label>
                  <input
                    type="range"
                    min={1}
                    max={500}
                    value={range}
                    onChange={(event) => setRange(event.target.value)}
                  />
                </label>
              </div>
              <div className="show-range">{range}</div>
            </div>
          )}


          {/* {question === 5 && (
            <div className="question">
              <h3>How many beer's have you had in 2019? <span role="img" aria-label="beer">🍺</span></h3>

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
          )} */}

          {question === 6 && (
            <div className="question">
              <div className="feelings">
                <h3>Are you happy with that amount?</h3>
                <div className="emojis">
                  <label>
                    <input type="radio"
                      value="happy"
                      onChange={() => setHappiness("happy")}
                      checked={happiness === "happy"}
                    />
                    <span role="img" aria-label="Happy sweaty face">
                      😅
                </span>
                  </label>
                  <label>
                    <input type="radio"
                      value="sad"
                      onChange={() => setHappiness("sad")}
                      checked={happiness === "sad"}
                    />
                    <span role="img" aria-label="sad sweaty face">
                      😓
                </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {question === 7 && (
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
              {/* Why is the submit button inside this div? */}
              <div className="buttons">
                <button type="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </div>
            </div>
          )}

          {question !== 7 && (
            <button type="button" onClick={handleContinueClick}>
              Continue
            </button>
          )}
          {question !== 1 && (
            <button type="button" onClick={handleGoBackClick}>
              Go back
            </button>
          )}
        </form>
      )}

      {/* <ProgressBarContainer /> */}

      {submitted && (
        <Summary name={name} happiness={happiness} readyness={readyness} feeling={feeling} impression={impression} ageGroup={ageGroup} location={location} />
      )}

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>
    </div>
  );
};
