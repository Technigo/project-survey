import React, { useState } from 'react'
import { Summary } from './Summary'


export const App = () => {
  const ageGroups=["0-18", "19-30", "31-40", "41+"]
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [food, setFood] = useState("")
  const [tvseries, setTvseries] = useState("")
  
  const [submitted, setSubmitted] = useState(false)
  const [showText, setShowText] = useState(true)
  const showSummary = () => {
    setSubmitted(true);
    setShowText(!showText);
  }

  return (
    <div className="menu-container">
      
    {showText && <div className="form-container">
    <h1>Welcome to my survey!</h1>
    <p>Please answer the following questions about yourself</p>
    
    <form 
      onSubmit={event => event.preventDefault()}>
      <p>Name</p>
      <label>
      <input 
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
      </label>

    <br></br>

      Age group:
      {ageGroups.map(group => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setAge(event.target.value)}
            checked={age === group}
          />
          {group}
        </label>
      ))}

    <br></br><br></br>
      
      <label>
      <select
        onChange={event => setFood(event.target.value)}
        value={food}
      >
        <option value="">Select your favourite food</option>
        <option value="hamburger">Hamburger</option>
        <option value="sushi">Sushi</option>
        <option value="pasta">Pasta</option>
        <option value="pizza">Pizza</option>
        <option value="pizza">Tacos</option>
        <option value="other">Other</option>
      </select>
      </label>

    <br></br>
      
      <label>
      <select
        onChange={event => setTvseries(event.target.value)}
        value={tvseries}
      >
        <option value="">Select your favourite tv-series</option>
        <option value="strangerthings">Stranger Things</option>
        <option value="homeland">Homeland</option>
        <option value="truedetective">True Detective</option>
        <option value="biglittlelies">Big Little Lies</option>
        <option value="thehandmaidstale">The Handmaids Tale</option>
        <option value="breakingbad">Breaking Bad</option>
        <option value="twinpeaks">Twin Peaks</option>
        <option value="other">Other</option>
      </select>
      </label>

    </form>

    <button type="submit" onClick={() => showSummary()}>
    Submit
    </button>

    </div> }

    <br></br>

    {submitted && <Summary name={name} age={age} food={food} tvseries={tvseries} />}
    </div>
  )
}
