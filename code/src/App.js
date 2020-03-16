import React, { useState } from 'react'
import './app.css'


const ageGroups = ['too young', '19-35', '35-65', '+65'];

export const App = () => {
  const [ageGroup, setAgeGroup] = useState();
  const [hobby, setHobby] = useState("");
  const [name, setName] = useState("");

  return (
    <div className='intro'>
      <h1>Win a very special evening for you and someone equally as special!</h1>
      <h3>Just fill in the form below to participate in the competion</h3>
      <p>... and you could be the lucky one winning a custom made evening for you and your friend.</p>

      <form onSubmit={event => event.preventDefault()}>
        <h2>What is your name?</h2>
        <input type='text'
          onChange={event => setName(event.target.value)}
          value={name}>
        </input>
        <h2>{`How old are you ${name}?`}</h2>
        {ageGroups.map(group => (
          <label key={group}>
            <input type='radio'
              value={group}
              onChange={event => setAgeGroup(event.target.value)}
              checked={ageGroups === group}
            />
            {group}
          </label>
        ))}

        <h2> What is a perfect evenig according to you?</h2>
        <select
          onChange={event => setHobby(event.target.value)}
          value={hobby}>
          <option value="resturant"> Candlelight dinner in a cosy resturant</option>
          <option value="netflix"> Netlfix and Chill</option>
          <option value="dancing"> Dancing on my own</option>
          <option value="party"> Party with my friends</option>
          <option value="concert"> Headbangers ball concert</option>
        </select>

        <h2> {`${name}`}, please type in your email address?</h2>
        <input type="text" required></input>

        <h2>How exicited are you?!</h2>

        <button type="submit">Join the competion!</button>

      </form>


    </div>
  )
}

