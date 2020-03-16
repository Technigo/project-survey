import React from 'react'
import { useState } from 'react'



export const App = () => {

  const [animalLover, setAnimalLover] = useState('')
  const [vacation, setVacation] = useState()
  const vacations = [
    'Weekend in Paris',
    'Spring in Tokyo',
    'Oktoberfest in München',
    'Ice Cave tour in Iceland',
    'Relaxing and yoga in Bali'
    ]
  const [food, setFood] = useState()

  return (
    <form onSubmit={(event) => event.preventDefault}>
      <label>
          <select
            onChange={event => setAnimalLover(event.target.value)}
            value={animalLover}
            >
                <option value= "">Select option:</option>
                <option value= "dogs">Dog Lover</option>
                <option value= "cats">Cat Lover</option>
                <option value= "hatesAnimals">No animals!</option>
                <option value= "hamsters">Hamsters!</option>
            </select>
          </label>

      <label>
        Your idea of the perfect vacation: 
        {vacations.map((tour) => (
          <label key={tour}>
            <input
            type="radio"
            value={tour}
            onChange={(event) => setVacation(event.target.value)}
            checked={vacation === tour}
            />
            {tour}
          </label>
        ))}
      </label>

      <label>
        <p>What is your favorite food?</p>
        <input
          type='text'
          onChange={event => setFood(event.target.value)}
          value={food}
        />
      </label>
    </form>
  )
}
