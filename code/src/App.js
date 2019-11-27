
import React, { useState } from 'react'
import { Summary } from 'Summary'


const hairstyle = ["Golden horn", "Pretty pink", "Rainbow pony", "Giltter puff"]

export const App = () => {
  const [name, setName] = useState(" ");
  const [unicorn, setUnicorn] = useState("");
  const [hair, setHair] = useState(" ")
  const [submit, setSubmit] = useState(true);

  return (
    <div className="container">
      <form onSubmit={event => event.preventDefault()}>
        <h1>Adopt a Unicorn!</h1>

        <p>what's your unicorn name?</p>
        <input
          className="formfield"
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />

        <p>What magical kingdom does you unicorn come from?</p>
        <select className="dropdown"
          onChange={event => setUnicorn(event.target.value)}
          value={unicorn}
        >
          <option value="">Chocie the kingdom.</option>
          <option value="Crouhan Kingdom">Crouhan Kingdom.</option>
          <option value="Shothia Dynasty">Shothia Dynasty.</option>
          <option value="Vedduilyra Dynasty">Vedduilyra Dynasty.</option>
          <option value="Crouhan Kingdom">Oquqarian Empire.</option>

        </select>
        <p>Select a funky Fresh hairstyle!</p>
        {hairstyle.map(uni => (
          <label key={uni}>
            <input className="Radiobtn"
              type="radio"
              value={uni}
              onChange={event => setHair(event.target.value)}
              checked={hair === uni}
            />
            {uni}
          </label>
        ))}
        <button
          onClick={() => setSubmit(true)}>Adopt me!</button>
      </form>
      {submit && <Summary name={name} unicorn={unicorn} hair={hair} />}
    </div>
  )
}
