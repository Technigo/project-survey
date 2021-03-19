import React, { useState } from 'react'
import 'index.css'

export const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('');
  const [time, setTime] = useState();
  const [showSummary, setShowSummary] = useState (false);

  const timeGroups = ["Utspring at 13-14", "Ravinvägen at 14-16", "Party at 16-20"];

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="surveyPage">
      {!showSummary &&
      <form onSubmit = {handleSubmit}>
        <h1>Hjalmar is graduating june 2021!</h1>
        <p>Graduation date is pending due to pandemic restrictions, but will be 7, 8 or 9 of june!</p>
        <label>
          <p>Tell us who you are?</p>
          <input
          type = "text"
          onChange = {(event) => setName (event.target.value)}
          value = {name}
          />
        </label>
        <label>
          <p>What is your email adress?</p>
          <input
          type = "email"
          onChange = {(event) => setEmail (event.target.value)}
          value = {email}
          />
        </label>

        <label>
          <p>How many people are coming?</p>
          <select
            onChange = {(event) => setNumber (event.target.value)}
            value = {number}>
              <option value=""></option>
              <option value="1 person">Just me</option>
              <option value="2 people">2 people</option>
              <option value="3-4 people">3-4 people</option>
              <option value="5-6 people">5-6 people</option>
              <option value="not">I can't come!</option>
          </select>
        </label>
        
        <div>
        <p>When will you be attending?</p>
        {timeGroups.map (group => (
        <label key = {group}> 
          <input 
            type = "radio"
            value = {group}
            onChange = {(event) => setTime(event.target.value)}
            checked = {time === group}
          />
          {group}
        </label>
      ))}
      </div>

        <button type="submit">Submit</button>
      </form>}

      {showSummary && 
      <section>
        <h1>Thank you {name}!</h1>
        <p>You are {number} coming to Hjalmars graduation and attending {time} o'clock!</p>
        <p>When we know the date we will send and update to {email}.</p>
      </section>}
    </div> 
  )
}