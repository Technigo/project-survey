import React, { useState } from 'react'
//import "./form.css"
import { Summary } from "./Summary"

export const Form = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState('true')
  const [ageGroup, setAgeGroup] = useState()
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  const generalInfo = [
    'firstName',
    'lastName',
    'gender'
  ]

  const ageGroups = [
    '0-18',
    '19-30',
    '30+'
  ]

  const news = wantsNewsletter ? 'News' : 'No News'

  return (
    <div className="Form">

      {showSummary ? (
        <Summary name={name} />

      ) : (

          <form onSubmit={handleSubmit}>

            <h1>The state is: {name}{location}{news}{ageGroup}</h1>

            <input
              type="text"
              onChange={event => setName(event.target.value)}
              value={name}
              required
            ></input>

            <select
              onChange={event => setLocation(event.target.value)}
              value={location}
            >
              <option value="">Select location:</option>
              <option value="stockholm">Stockholm</option>
              <option value="oslo">Oslo</option>
              <option value="london">London</option>
            </select>

            <label>
              Newsletter?
        <input type="checkbox"
                checked={wantsNewsletter}
                onChange={event => setWantsNewsletter(event.target.checked)}
              />
            </label>

      Age Group:
            {ageGroups.map(group => (
              <label key={group}>
                <input
                  type="radio"
                  name="age"
                  value={group}
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroup === group}
                  required
                />
                {group}
              </label>
            ))}

            <button type="submit">Submit</button>
          </form >
        )}
    </div >
  )
}


