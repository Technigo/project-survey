import React, { useState } from 'react'
import 'App.css'

export const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('');
  const [age, setAge] = useState();
  const [showSummary, setShowSummary] = useState (false);

  const ageGroups = ['0-18','19-30','30+']

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="section">
      {!showSummary &&
      <form onSubmit = {handleSubmit}>
        <h1>Graduate invitation</h1>
        <label htmlFor='name'>
          <p>Your name </p>
          <input
              id='name'
              type = "text"
              onChange = {(event) => setName (event.target.value)}
              value = {name}
          />
          </label>
        <label htmlFor='email'>
          <p>What is your email adress?</p>
          <input
              id='email'
              type = "email"
              onChange = {(event) => setEmail (event.target.value)}
              value = {email}
          />
        </label>

        <label htmlFor='guestNumber'>
          <p>How many people are coming?</p>
          <select
            id='guestNumber'
            onChange = {(event) => setNumber (event.target.value)}
            value = {number}>
              <option value="No">Just me</option>
              <option value="2">2 person</option>
              <option value="3">3 person</option>
              <option value="4">4 person</option>
          </select>
        </label>
        
        <div>
        <p>What is their age?</p>
        {ageGroups.map (group => (
        <label key = {group}> 
          <input 
            type = "radio"
            value = {group}
            onChange = {(event) => setAge(event.target.value)}
            checked = {age === group}
          />
          {group}
        </label>
      ))}
      </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>}

      {showSummary && 
      <section>
        <h1>Thank you {name}!</h1>
        <p>You are registered with {number} guest and their age: {age} years.</p>
        <p>You will receive details in {email}</p>
      </section>}
    </div> 
  )
}