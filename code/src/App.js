import React, { useState } from 'react'
import { Header } from './components/Header.js'
import { Summary } from './components/Summary.js'
import "./app.css"

export const App = () => {

  const [showSummary, setShowSummary] = useState(false)
  const howManyPlants = ['0', '1-3', '3-6', '6-10', '10-20', '20 +']
  const [numberOfPlants, setNumberOfPlants] = useState('')
  const [livingPlace, setLivingPlace] = useState('')
  const [favouritePlant, setFavouritePlant] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div class='app'>
      <Header />
      {!showSummary ? (
        <form onSubmit={handleSubmit} className='box form'>
          <div>
            <label>
              <h3>How do you live?</h3>
              <select
                onChange={event => setLivingPlace(event.target.value)}
                value={livingPlace}
                required>
                <option value=''>Select housing</option>
                <option value='apartment'>Apartment</option>
                <option value='house'>House</option>
                <option value='shared'>Shared housing</option>
                <option value='castle'>Castle</option>
                <option value='cottage'>Cottage</option>
                <option value='other'>Other</option>
              </select>
            </label>
          </div>
          <div>
            <h3>How many plants do you have?</h3>
            {howManyPlants.map(number => (
              <label key={number}>
                <input
                  type='radio'
                  value={number}
                  onChange={event => setNumberOfPlants(event.target.value)}
                  checked={numberOfPlants === number}
                  required /> {number}
              </label>
            ))}
          </div>
          <div>
            <label>
              <h3>What's your favourite plant?</h3>
              <input
                type='text'
                onChange={event => setFavouritePlant(event.target.value)}
                value={favouritePlant}
                required />
            </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      ) : (
          <Summary house={livingPlace} number={numberOfPlants} favourite={favouritePlant} />
        )}
    </div>)
}