import React from 'react'
import { RadioButton } from './RadioButton.js'
import { Housing } from './Housing.js'
import { FavouritePlant } from './FavouritePlant.js'
import { SubmitButton } from './SubmitButton.js'
import "./form.css"
import "./button.css"

export const Form = () => {
  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>How do you live?</label>
      <select
        onChange={event => setLivingPlace(event.target.value)}
        value={livingPlace}
        required>
        <option value="">Select housing</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="shared">Shared housing</option>
        <option value="castle">Castle</option>
        <option value="cottage">Cottage</option>
        <option value="other">Other</option>
      </select>
        How many plants do you have?
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

      <label> What's your favourite plant?
      <input
          type='text'
          onChange={event => setFavouritePlant(event.target.value)}
          value={favouritePlant}
          required />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}