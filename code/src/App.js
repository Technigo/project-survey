import React, { useState } from 'react'
import './app.css'

export const App = () => {
  const [destination, setDestination] = useState('beach')
  const [type, setType] = useState('romantic')
  const [budget, setBudget] = useState('low-cost')
  const [summary, setSummary] = useState(false)
  const [question, setQuestion] = useState('destination')

  const submitForm = (event) => {
    event.preventDefault()
    setSummary(true)
  }

  const nextQuestion = () => {
    if (question === 'destination') {
      setQuestion('type')
    } else if (question === 'type') {
      setQuestion('budget')
    }
  }

  return (
    <div>
      {summary && (
        <div className="summary">
          <h1>Got it!</h1>
          <p>We are taking you in {budget === 'low-cost' ? 'a ' + budget : 'an ' + budget} {type === 'familyFriendly' ? 'family friendly' : type} experience to {destination === 'beach' ? 'sandy beaches' : 'the ' + destination}!</p>
        </div>

      )}

      {!summary && (
        <form onSubmit={submitForm}>

          {question === 'destination' && (
            <div className="destination">
              <p>Where do you wanna go?</p>
              <label>
                <input
                  type="radio"
                  value="beach"
                  onChange={() => setDestination('beach')}
                  checked={destination === 'beach'} />
                <span>Beach</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="countryside"
                  onChange={() => setDestination('countryside')}
                  checked={destination === 'countryside'} />
                <span>Countryside</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="city"
                  onChange={() => setDestination('city')}
                  checked={destination === 'city'} />
                <span>City</span>
              </label>
            </div>
          )}

          {question === 'type' && (
            <div className="type">
              <p>What kind of trip you're looking for?</p>
              <label>
                <input
                  type="checkbox"
                  value="romantic"
                  onChange={() => setType('romantic')}
                  checked={type === 'romantic'} />
                <span>Romantic</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="adventurous"
                  onChange={() => setType('adventurous')}
                  checked={type === 'adventurous'} />
                <span>Adventurous</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  value="familyFriendly"
                  onChange={() => setType('familyFriendly')}
                  checked={type === 'familyFriendly'} />
                <span>Family Friendly</span>
              </label>
            </div>
          )}

          {question === 'budget' && (
            <div className="budget">
              <p>How much do you want to spend?</p>
              <label>
                <select onChange={(event) => setBudget(event.target.value)} value={budget}>
                  <option value="low-cost">{"< 1000 SEK"}</option>
                  <option value="affordable">1001 - 3000 SEK</option>
                  <option value="expensive">3001 - 5000 SEK</option>
                  <option value="overpriced">{"> 5000 SEK"}</option>
                </select>
              </label>

              <button type="submit">
                Book now!
              </button>
            </div>
          )}

          {question !== 'budget' && (
            <button type="button" onClick={nextQuestion}>
              Continue
            </button>
          )}
        </form>
      )}
    </div>
  )
}
