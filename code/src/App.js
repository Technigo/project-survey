import React, { useState } from 'react'
import { Summary } from './Summary'
// import { ProgressBarContainer } from './ProgressBar'
import "./app.css"
import './progressbar.css';


export const App = () => {

  // Use State Hooks
  const [name, setName] = useState("");
  const [lookForward, setLookForward] = useState("");
  const [yearEvent, setYearEvent] = useState("");
  // const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState("0-18");
  // Array for what age group you are in
  const ageGroups = ["0-20", "20-30", "31+"]
  const [happiness, setHappiness] = useState("happy")
  const [readyness, setReadyness] = useState("ready")
  const [question, setQuestion] = useState(1)
  //False because form is not submitted from start (initial value)
  const [submitted, setSubmitted] = useState(false)
  //True because...?
  const [showResult, setShowResult] = useState(true)
  const [range, setRange] = useState(0)
  // Progress bar
  const [percentRange, setProgress] = useState(0);



  // Function for button to continue to next question. Would want help to make the code shorter.
  const handleContinueClick = () => {
    if (question === 1) {
      setQuestion(2);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    } else if (question === 2) {
      setQuestion(3);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    } else if (question === 3) {
      setQuestion(4);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    } else if (question === 4) {
      setQuestion(5);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    } else if (question === 5) {
      setQuestion(6);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    } else if (question === 6) {
      setQuestion(7);
      setProgress(percentRange < 100 ? percentRange + 16.7 : 100);

    }
  }
  // Function for button to go to previous question. Would want help to make the code shorter.
  const handleGoBackClick = () => {
    if (question === 7) {
      setQuestion(6);
      setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    } else if (question === 6) {
      setQuestion(5);
      setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    } else if (question === 5) {
      setQuestion(4);
      setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    } else if (question === 4) {
      setQuestion(3);
      setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    } else if (question === 3) {
      setQuestion(2);
      setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    } else if (question === 2) {
      setQuestion(1); setProgress(percentRange > 0 ?
        percentRange - 16.7 : 0)
    }
  }

  const handleSubmit = (event) => {
    setSubmitted(true)
    setShowResult(!showResult)
  }


  const Range = () => {
    return (
      <div className="range" style={{ width: `${percentRange}%` }} />
    );
  };

  const ProgressBar = () => {
    return (
      <div className="progress-bar">
        <Range percentRange={percentRange} />
      </div>
    );
  };

  const ProgressBarContainer = () => {
    return (
      <div className="progress-container">
        <ProgressBar percentRange={percentRange} />
      </div>
    );
  };


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
          )}

          {question === 3 && (
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

          {question === 4 && (
            <div className="question">
              <label>
                <h3>What was your one favorite happening in 2019?</h3>
                <select className="select-css"
                  onChange={event => setYearEvent(event.target.value)}
                  value={yearEvent}
                >
                  <option value="">Select:</option>
                  <option value="Sweden's new smoking ban">Sweden's new smoking ban</option>
                  <option value="when Zlatan bought Hammarby">Zlatan bought Hammarby</option>
                  <option value="FIFA Women's World Cup in France">FIFA Women's World Cup in France</option>
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
              <h3>Mention one thing you look forward to in 2020?</h3>
              <label>
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  onChange={event => setLookForward(event.target.value)}
                  value={lookForward}
                />
              </label>
              <div className="buttons">
                <button type="submit" onClick={() => handleSubmit()}>
                  Submit
                </button>
              </div>
            </div>
          )}

          <div className="button-back-front">
            {question !== 1 && (
              <button type="button" onClick={handleGoBackClick}>
                Go back
            </button>
            )}
            {question !== 7 && (
              <button type="button" onClick={handleContinueClick}>
                Continue
            </button>
            )}
          </div>
          <ProgressBarContainer />

        </form>
      )
      }


      {
        submitted && (
          <Summary name={name}
            ageGroup={ageGroup}
            readyness={readyness}
            yearEvent={yearEvent}
            range={range}
            happiness={happiness}
            lookForward={lookForward}
          />
        )
      }

      <footer>Technigo Bootcamp 2019 © Linda Isell</footer>
    </div >
  );
};
