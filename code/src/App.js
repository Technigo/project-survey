import React, { useState } from 'react'
import 'App.css'

export const App = () => {
  // const for text input
  const [name, setName] = useState("");
  // Const for list
  const [bread, setBread] = useState("");
  // Const for radio buttons
  const when = ["Yes", "No"]
  const [whenTime, setWhen]= useState();
  // Const for checkbox
  const [wantCat, setWantCat] = useState(false);

  return (
    <div className="FirstForm">
      <form onSubmit={event => event.preventDefault()}>
      
    <div className="textInput">
      <h2>{name}</h2>
      <input 
      type="text"
      onChange = {event => setName(event.target.value)}
      value = {name}
      />
      </div>


    <div className="listInput"> 
      <h2>{bread}</h2>
      <select
      onChange={event => setBread(event.target.value)}
      value={bread}
      >
        <option value="">What type of bread?</option>
        <option value="tortillas">Soft tortillas</option>
        <option value="standNStuff">Stand'n'stuff</option>
        <option value="tacoShells">Hard taco shells</option>
        <option value="tacoTubes">Hard taco tubes</option>
      </select>
    </div>

        
    <div className="radioButtons">
      Do you want a banana in your taco?
      {when.map(time => (
        <label key = {time}>
          <input
          type = "radio"
          value={time}
          onChange={event => setWhen(event.target.value)}
          checked={whenTime === time}
           />
          {time}
        </label>
            ))
            }
    </div>

        <label>
        Do you want a banana in your taco?
            <input
            type = "checkbox"
            checked = {wantCat}
            onChange= {event => setWantCat(event.target.checked)}
            />
        </label>
      </form>
    </div>
  )
}
