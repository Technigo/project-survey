import React, { useState } from 'react'
import { Summary } from "./Summary";
import './app.css'


export const App = () => {
  const [happy, setHappy] = useState("");
  const [proud, setProud] = useState("");
  const [smile, setSmile] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const smileOptions = ["Yes", "No", "Maybe"]

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
          <section className="section-content happy" id="happy">
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

          <section className="section-content proud" id="proud">
            <h2>What are you most proud of from today?</h2>
            <input className="proud-input"
              type="text"
              onChange={event => setProud(event.target.value)}
              value={proud}
              required
            />
            <button><a href="#smile">Next</a></button>
          </section>

          <section className="section-content smile" id="smile">
            <h2>Did you make someone smile?</h2>
            <div className="radio-buttons">
              {smileOptions.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    className="radio-button"
                    required
                    onChange={event => setSmile(event.target.value)}
                    checked={smile === group}
                  />
                  {group}
                </label>
              ))}
            </div>
            <button>Submit</button>
          </section>
        </form>
      ) : (
          <Summary happy={happy} proud={proud} smile={smile} />
        )
      }
    </main >
  )
}