import React, { useState } from 'react'
import { Radio } from './Radio'
import { Summary } from './Summary'


export const App = () => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("default")
  const [wanstNewsletter, setWantsNewsletter] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="App">
      {!showSummary && (
        <form onSubmit={handleSubmit}>
          <h1>Hello, {name}!</h1>
          <label>
            What's your name?
          <input
              type="text"
              onChange={event => setName(event.target.value)}
              value={name}
              required
            />
          </label>

          <label>
            Where are you from?
          <select
              onChange={(event) => setLocation(event.target.value)}
              value={location}
            >
              <option value="default">select option</option>
              <option value="stockholm">Stockholm</option>
              <option value="seoul">Seoul</option>
              <option value="cornwall">Cornwall</option>
            </select>
          </label>
          <Radio />
          <label>
            Yes, I want to subscribe to newsletter.
          <input
              type='checkbox'
              checked={wanstNewsletter}
              onChange={event => setWantsNewsletter(event.target.checked)}
            />
          </label>
          <button type="submit">submit</button>
        </form>)}
      {showSummary && <Summary name={name} location={location} />}


    </div>
  )
}
