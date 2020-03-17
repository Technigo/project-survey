import React, { useState } from 'react'
import { Summary } from "./Summary";
import './app.css'


export const App = () => {
  const [happy, setHappy] = useState("");
  const [proud, setProud] = useState("");
  const [smile, setSmile] = useState("");
  const [showSummary, setShowSummary] = useState(false);


  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <main>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <header id="header">
            <h3>Survey</h3>
            <h1>Reflections of your day</h1>
            <a href="#happy"><img className="arrow" src="../assets/arrow.png" alt="arrow"></img></a>
          </header>
          <section className="happy-section" id="happy">
            <h2>How was your day?</h2>
            <select
              onChange={event => setHappy(event.target.value)}
              value={happy}
              required
            >
              <option value="">Select answer</option>
              <option value="an ok day">Ok</option>
              <option value="a great day">Great</option>
              <option value="the best day ever">The best</option>
            </select>
            <button><a href="#proud">Next</a></button>
          </section>

          <section className="proud-section" id="proud">
            <h2>What are you most proud of from today?</h2>
            <input className="proud-input"
              type="text"
              onChange={event => setProud(event.target.value)}
              value={proud}
              required
            />
            <button><a href="#smile">Next</a></button>
          </section>

          <section className="smile-section" id="smile">
            <h2>Did you make someone smile?</h2>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  className="radio-button"
                  onChange={event => setSmile(event.target.value)}
                  checked={smile === "Yes"}
                />
                <p>Yes</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  className="radio-button"
                  onChange={event => setSmile(event.target.value)}
                  checked={smile === "No"}
                />
                <p>No</p>
              </label>
              <label>
                <input
                  type="radio"
                  value="Maybe"
                  className="radio-button"
                  onChange={event => setSmile(event.target.value)}
                  checked={smile === "Maybe"}
                  required
                />
                <p>Maybe</p>
              </label>
            </div>
            <button>Submit</button>
          </section>
        </form>
      ) : (
          <Summary happy={happy} proud={proud} smile={smile} />
        )}
    </main>
  )
}
