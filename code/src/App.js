import React, { useState } from 'react'
import { InputSelect } from 'components/InputSelect.js'

const genders = ['Woman', 'Man', 'Other']

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [genderChoice, setGenderChoice] = useState('')


  return (
    <div>
      <form id="form" onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />

        <InputSelect location={location} setLocation={setLocation} />

        <input
          type="checkbox"
          value={newsletter}
          onChange={event => setNewsletter(event.target.checked)}
        />

        {genders.map(gender => (
          <label key={gender}>
            <input
              type="radio"
              value={gender}
              onChange={event => setGenderChoice(event.target.value)}
              checked={genderChoice === gender}
            />
            {gender}
          </label>
        ))}

        <button onClick={() => {
          // document.querySelector('#form').remove()
          console.log(name)
        }}>Submit</button>


      </form>


    </div>
  )
}
