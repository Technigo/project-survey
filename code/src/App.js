import React, { useState } from "react";
import { Summary } from "./Summary";
import "./slide.css";

export const App = () => {
  const [name, setName] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [sideKick, setsideKick] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [range, setRange] = useState();

  const sideKickQ = ["Oh yes I want one!", "No, I work alone", "Maybe later"];

  return (
    <div className="wrapper">
      <form onSubmit={event => event.preventDefault()}>
        <h1>Hello Stranger!</h1>
        <h4>What's you superhero name?</h4>
        <input
          required
          placeholder="Write name here.."
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </form>

      <form className="super-power">
        <h4>Choose your superpower!</h4>
        <select
          required
          onChange={event => setSuperPower(event.target.value)}
          value={superPower}
        >
          <option value="">Choose your superpower!</option>
          <option value="Flying higher than the skies!">I can fly!</option>
          <option value="Invisible">I'm invisible!</option>
          <option value="Stronger then them all!">
            I'm the strongest of them all!
          </option>
        </select>
      </form>

      <form className="side-kick">
        <h4>Do you want a sidekick?</h4>
        {sideKickQ.map(group => (
          <label key={group}>
            <input
              required
              type="radio"
              value={group}
              onChange={event => setsideKick(event.target.value)}
              checked={sideKick === group}
            />
            {group}
          </label>
        ))}
      </form>

      <form>
        <h4>Wanna be good or evil?</h4>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="5"
            onClick={event => setRange(event.target.value)}
            value={range}
            className="slider"
            required
          />
        </div>
      </form>

      <button onClick={() => setSubmitted(true)} type="submit">
        Submit
      </button>
      {submitted && (
        <Summary
          name={name}
          superPower={superPower}
          sideKick={sideKick}
          range={range}
        />
      )}
    </div>
  );
};
