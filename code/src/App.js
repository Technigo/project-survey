
import React, { useState } from 'react'
import { Summary } from "./Summary";
import './app.css'


export const App = () => {
  const [drink, setDrink] = useState("");
  const [snack, setSnack] = useState("");
  const [party, setParty] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const partyOptions = ["Yes", "No", "Maybe"]

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };
 
  return (
    <main>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <header id="header">
            <h3>Glögg</h3>
            <h1>What´s your favorite?</h1>
            <a href="#drink"><img className="glogg" src="../assets/gloggdown.png" alt="glogg"></img></a>
          </header>
          <section className="section-content drink" id="drink">
            <h2>How do you like your glögg?</h2>
            <select
              onChange={event => setDrink(event.target.value)}
              value={drink}
              required
            >
              <option value="">Select answer</option>
              <option value="to drink it strong">With alcohol</option>
              <option value="to have a weak one">Without alcohol</option>
              <option value="to not drink glögg, you drink svagdricka?">Just Saft</option>
            </select>
            <button><a href="#snack">Next</a></button>
          </section>

          <section className="section-content snack" id="snack">
            <h2>What do you add in your glögg?</h2>
            <h4>For example: Raisins, almond, cinnamon?</h4>
            <input className="snack-input"
              type="text"
              onChange={event => setSnack(event.target.value)}
              value={snack}
              required
            />
            <button><a href="#party">Next</a></button>
          </section>

          <section className="section-content party" id="party">
            <h2>Are you having a glöggmingel?</h2>
            <div className="radio-buttons">
              {partyOptions.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    className="radio-button"
                    required
                    onChange={event => setParty(event.target.value)}
                    checked={party === group}
                  />
                  {group}
                </label>
              ))}
            </div>
            <button>Submit</button>
          </section>
        </form>
      ) : (
          <Summary drink={drink} snack={snack} party={party} />
        )
      }
    </main >
  )
}