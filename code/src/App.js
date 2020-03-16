import React from 'react'
import { useState } from 'react'

import './App.css'



export const App = () => {

  const [animalLover, setAnimalLover] = useState('')
  const [vacation, setVacation] = useState('')
  const vacations = [
    'a Weekend in Paris',
    'Spring in Tokyo',
    'Oktoberfest in München',
    'an Ice Cave tour in Iceland',
    'Relaxing and yoga in Bali'
    ]
  const [food, setFood] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="container">
      <h1>I want to get to know you friend!</h1>
      <form onSubmit={handleSubmit}>
      <label className="question">
        <p>Are you a dog person or a cat person?</p>
          <select
            onChange={event => setAnimalLover(event.target.value)}
            value={animalLover}
            required
            >
                <option value= "">Select option:</option>
                <option value= "a dog">Dog Lover</option>
                <option value= "a cat">Cat Lover</option>
                <option value= "not a">No animals!</option>
                <option value= "a hamster">Hamsters!</option>
            </select>
          </label>

      <label className="vacation">
        Your idea of the perfect vacation: 
        {vacations.map((tour) => (
          <label key={tour}>
            <input
            type="radio"
            value={tour}
            onChange={(event) => setVacation(event.target.value)}
            required
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
          placeholder="Omnom"
          onChange={event => setFood(event.target.value)}
          value={food}
          required
        />
      </label>

      <button type="submit">Submit!</button>
    </form>

    {showSummary && <section>
      <h1>Summary:</h1>
        <p>You are {animalLover} lover!</p>
        <p>Your dream vacation is {vacation}</p>
        <p>Your favorite food is {food}. Yum!</p>
    </section>}
    </div>
    
  )
}
