import React, { useState } from "react";

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
        <label>
          Hey you, what's your name?
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
        {/* RADIOBUTTONS */}
        What drink do you prefer to your "fika":
        {drinkGroups.map(group => (
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={event => setDrinkgroup(event.target.value)}
              checked={drinkGroup === group}
            />
            {group}
          </label>
        ))}
        <label>
          What do you prefer to eat when you "fikar"?
          <input
            className="fikaField"
            type="text"
            onChange={event => setFika(event.target.value)}
            value={fika}
            required
          />
        </label>
        <label>
          {/* DROPDOWN */}
          <p>Where do you want to "fika"?</p>
          {/* use select instead of form on dropdown */}
          <select
            className="formDropdown"
            onChange={event => setPlace(event.target.value)}
            value={place}
          >
            <option value="">Choose one!</option> {/* Label, no value */}
            <option value="at a café">at a café</option>
            <option value="at home">at home</option>
            <option value="outside in the sun">outside in the sun</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>

      {summary && (
        <section>
          {" "}
          <h1>
            Hey {name}! So you like to eat {fika} and drink {drinkGroup} {place}
            . Sounds sweet! Let's go...
          </h1>
        </section>
      )}
    </div>
  );
};
