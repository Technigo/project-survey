import React, { useState } from 'react'
import { Summary } from './Summary.js'
import { Happiness } from './Happiness'
import { Input } from './Input'
import { Dropdown } from './Dropdown'

export const App = () => {
  const [happiness, setHappiness] = useState('')
  const [feeling, setFeeling] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('feeling')
  const [treatment, setTreatment] = useState("");
  

  const handleSubmit = (event) => {
   event.preventDefault() //spara informationen så att sidan inte laddas om (det vanliga sidobeteendet)
    setShowResult(true)
  }

  const handleContinueClick = () => {
    console.log('click continue')
    if (question === 'feeling') {
      setQuestion('happiness') 
    } else if (question === 'happiness') {
        setQuestion('treatment')
      
    }
  }

  return (
  <div>
    {showResult && (
      <Summary feeling={feeling} happiness={happiness} />
    )}

    {!showResult && (
      <form onSubmit={handleSubmit}>

      {question === 'feeling' && (
        <div className="question">
          
          <h1>Fill in your name:</h1>
        
          <Input 
          label="Name"
          value={feeling}
          setValue={setFeeling} />

        </div>
      )}

      {question === 'happiness' && (
        <div className="question">

          <hi>How did you like our service?</hi>

          <Happiness 
          happiness={happiness} 
          setHappiness={setHappiness} />
        </div>
      )}

      {question === 'treatment' && (
        <div className="question">
        <Dropdown
           treatment={treatment}
           setTreatment={setTreatment}
        />

          <button type="submit">
          Send
          </button>
        </div>
      )}

      {question !== 'treatment' && (
        <button type="button" onClick={handleContinueClick}>
          Continue
        </button>
      )} 
    </form>
    )}
  </div>  
  )
}
