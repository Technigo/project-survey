import React, { useState } from 'react'
import "./style.css"
import "./app.css"
import { Summary } from './Summary'
import { NameQuestion } from './NameQuestion'
import { LocationQuestion } from './LocationQuestion'

export const App = () => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  };

  return (
    <div className="text-input">
      
      {/* {showSummary && <h1>Survey</h1>} */}

      <h1 className={showSummary ? "black" : "white"}>Survey</h1>

      {!showSummary ? (
      <form className="text-form" onSubmit={handleSubmit}>
        <NameQuestion name={name} setName={setName}/>
        <LocationQuestion location={location} setLocation={setLocation}/>
        
        <button className="btn" type="submit" disabled={name === '' || location === ''}>Submit</button>
      </form>
  ) : (
        <Summary name={name}/>
  )}
       {/* {showSummary && <Summary name={name} />} */}
    </div>
  )
}
