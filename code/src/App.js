import React, { useState } from 'react'

import Tech from './components/Tech'
import Hours from './components/Hours'
import Pets from './components/Pets'
import Coffee from './components/Coffee'
import Summary from './components/Summary'

export const App = () => {

  const [showSummary, setShowSummary] = useState(false)
  const [tech, setTech] = useState('')
  const [hours, setHours] = useState('')
  const [coffee, setCoffee] = useState('')
  const [pets, setPets] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSummary(true)
    alert(`Submitted!`)
  }

  return (
    <>
      <h1>SURVEY</h1>
      <h2>━ Programming habits</h2>
      <form onSubmit={handleSubmit} className="form">
        <Tech/>
        <Hours hours={hours} setHours={setHours}/>
        <Pets pets={pets} setPets={setPets}/>
        <Coffee coffee={coffee} setCoffee={setCoffee} />
        <button className="submit-button" type="submit">Send</button>
      </form>
      {showSummary && <Summary pets={pets} />}
    </>
  )
}
