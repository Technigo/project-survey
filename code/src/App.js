import React from 'react'
import { useState } from 'react'
import { Summary } from './Summary' 

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
      <section className="header">
        <h1>Hey stranger!</h1>
        <p>Will you please answers some questions?</p>
        <p>I want to get to know you 👀</p>
      </section>

      {!showSummary && <section className="questions">
         <form onSubmit={handleSubmit} className="form">
          <div className="question">
            <label>
              <h3>Are you a dog person or a cat person?</h3>
                <div className="dropdown">
                  <select
                    onChange={event => setAnimalLover(event.target.value)}
                    value={animalLover}
                    required
                    >
                        <option value= "">Pick one!</option>
                        <option value= "a dog">Dog Lover</option>
                        <option value= "a cat">Cat Lover</option>
                        <option value= "not a">No animals!</option>
                        <option value= "a hamster">Hamsters!</option>
                  </select>
                </div>
            </label>
          </div>
          

          <label className="vacation question">
            <h3>Your idea of the perfect vacation: </h3>
            {vacations.map((tour) => (
              <label key={tour}>
                <input
                className="radio"
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

          <div className="question">
            <label>
              <h3>What is your favorite food?</h3>
              <input
                className="text-imput"
                type='text'
                placeholder="Omnom"
                onChange={event => setFood(event.target.value)}
                value={food}
                required
              />
            </label>
          </div>
          
          <section className="button-section">
            <button className="btn" type="submit">Submit!</button>
          </section>
          
        </form>
        
      </section>}

      {showSummary && ( 
        <Summary animalLover={animalLover} vacation={vacation} food={food}/>
      )}
      
     
    </div>
    
  )
}
