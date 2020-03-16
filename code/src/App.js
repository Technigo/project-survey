import React, { useState } from 'react'
// import { Input } from 'Compontents/Input'
// import { Select } from 'Compontents/Select'
// import { Radio } from 'Compontents/Radio'
// import { Checkbox } from 'Compontents/Checkbox'
import { Button } from 'Compontents/Button'

const handleSubmit = event => {
  event.preventDefault()
};


export const App = () => {
  const [name, setName] = useState("")
  const [showSummary, SetShowSummary] = useState(false)
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
      </form>
      <Button title="edit" className="warning" />
      <section>
        <h1>Hello {name}</h1>
      </section>
    </div>
  )
}
