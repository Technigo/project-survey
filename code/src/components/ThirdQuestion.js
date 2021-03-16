import React, { useState } from 'react' 
import Summary from './Summary'

const favoritePlace = [
  'In a library',
  'While commuting',
  'In a park',
  'At home',
  'In a group', 
  'Other'
]


const ThirdQuestion = () => {
  const [place, setPlace] = useState ([0])
  const [submit, setSubmit] = useState(false)

  
  return (
    <form onSubmit={(event) => event.preventDefault()}>
    <p>What is your favorite place to read</p>
    {favoritePlace.map(places => (
      <label key={places}>
        <input
        type='radio'
        value={places}
        onChange={event => setPlace(event.target.value)}
        checked={place === places}
        />
        {places}
        </label>
    ))}

      <div>
        <button type="submit" 
        onClick={() => setSubmit(true)}
        >SEND 
        </button>
      </div>

      {submit && (
        <div>
        <Summary />   
      </div>
      )}
  </form>
)

}

export default ThirdQuestion