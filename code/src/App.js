import React from 'react'
import { useState } from 'react'
import { DogOrCat } from 'Components/DogOrCat'
import { ChooseVacation } from 'Components/ChooseVacation'
import { FavoriteFood } from 'Components/FavoriteFood'
import { Button } from 'Components/Button'
import { Summary } from './Summary' 

import './App.css'

export const App = () => {

  const [animalLover, setAnimalLover] = useState('')
  const [vacation, setVacation] = useState('')
  const [food, setFood] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  const vacations = [
    'a Weekend in Paris',
    'Spring in Tokyo',
    'Oktoberfest in München',
    'an Ice Cave tour in Iceland',
    'Relaxing and yoga in Bali'
    ]

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className='container'>
       
      <section className='header'>
        <h1>Hey stranger!</h1>
        <p>Will you please answer some questions?</p>
        <p>I want to get to know you 👀</p>
      </section>

      {!showSummary && <section className='questions'>
         <form onSubmit={handleSubmit} className='form'>

          <DogOrCat animalLover={animalLover} setAnimalLover={setAnimalLover} />
          <ChooseVacation vacations={vacations} vacation={vacation} setVacation={setVacation} />
          <FavoriteFood food={food} setFood={setFood} />
          <Button animalLover={animalLover} food={food} vacation={vacation}/>

        </form>
      </section>}

      {showSummary && ( 
        <Summary animalLover={animalLover} vacation={vacation} food={food}/>
      )}

    </div>
    
  )
}
