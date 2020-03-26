import React, { useState } from "react";
import "./app.css";
const drinkGroups = ["coffee", "tea", "water"];

/* Statehooks */
export const App = () => {
  const [name, setName] = useState("");
  const [fika, setFika] = useState("");
  const [drinkGroup, setDrinkgroup] = useState();
  const [place, setPlace] = useState("");
  const [summary, setSummary] = useState(false);

  /*   Show the summary when clicking submit */
  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <section className="questionCard">
          <label>
            <p>Hey you, what's your name?</p>
            {/* controlled form */}
            <input
              className="nameField"
              type="text"
              onChange={event =>
                setName(event.target.value)
              } /* invoke setName with event.target.value */
              value={name} /* reflect current state */
              required
            />
          </label>
        </section>
        {/* RADIOBUTTONS */}
        <section className="questionCard">
          <p>What drink do you prefer to your "fika":</p>
          {drinkGroups.map(group => (
            <div className="radioDiv">
              <label key={group}>
                <input
                  type="radio"
                  value={group}
                  onChange={event => setDrinkgroup(event.target.value)}
                  checked={drinkGroup === group}
                />
                {group}
              </label>
            </div>
          ))}
        </section>

        <section className="questionCard">
          <label>
            <p>What do you prefer to eat when you "fikar"?</p>
            <input
              className="fikaField"
              type="text"
              onChange={event => setFika(event.target.value)}
              value={fika}
              required
            />
          </label>
        </section>

        <section className="questionCard">
          <label>
            {/* DROPDOWN */}
            <p>Where do you want to "fika"?</p>
            {/* use select instead of form on dropdown */}
            <select
              className="formDropdown"
              onChange={event => setPlace(event.target.value)}
              value={place}
            >
              <option value="" disabled>Choose one!</option> {/* Label, no value */}
              <option value="at a café">at a café</option>
              <option value="at home">at home</option>
              <option value="outside in the sun">outside in the sun</option>
            </select>
          </label>
        </section>

        <button type="submit">Submit</button>
      </form>

      {summary && (
        <section className="summarySection">
          {" "}
          <h2>Hey {name}! </h2>{" "}
          <p>
            So you like to eat {fika} and drink {drinkGroup} {place}. Sounds
            sweet! Let's go...
          </p>
        </section>
      )}
    </div>
  );
};
