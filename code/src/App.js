import React, { useState } from 'react'
import { Summary } from 'Summary';

const ageGroups = ["Red", "Orange", "Blue", "Purple"];

export const App = () => {

  const [name, setName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [color, setColor] = useState();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="formStyle">
      <form onSubmit={event => event.preventDefault()}>

        <h1>Cowabunga Dude!</h1>

        <p>What's your turtle name?</p>
        <input
          className="formField"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />

        <p>Select your weapon</p>
        <select className="formDropdown"
          onChange={event => setWeapon(event.target.value)}
          value={weapon}
        >
          <option value="">Select weapon</option>
          <option value="Ninja Sword">Ninja Sword</option>
          <option value="Ninja Bo Staff">Ninja Bo Staff</option>
          <option value="Ninja Nunchucks">Ninja Nunchucks</option>
          <option value="Ninja Sais">Ninja Sais</option>
        </select>

        <p>Select your colour</p>
        {ageGroups.map(group => (
          <label key={group}>
            <input className="formRadiobtn"
              type="radio"
              value={group}
              onChange={event => setColor(event.target.value)}
              checked={color === group}
            />
            {group}
          </label>
        ))}

        <button
          onClick={() => setSubmitted(true)}
        >SUBMIT</button>

      </form>

      {submitted && <Summary name={name} colour={color} weapon={weapon} />}

    </div>

  );
};
