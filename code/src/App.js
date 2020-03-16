import React, { useState } from 'react'
import { Summary } from 'Compontents/Summary'
// import { Input } from 'Compontents/Input'
// import { Select } from 'Compontents/Select'
// import { Radio } from 'Compontents/Radio'
// import { Checkbox } from 'Compontents/Checkbox'

export const App = () => {
  const [name, setName] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  };

  return (
    <div class="survey-card">
      <form onSubmit={handleSubmit}>
        <label>
          What's your name?
        <input
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {showSummary && (
        <Summary name={name} />
      )}
    </div>
  )
}
