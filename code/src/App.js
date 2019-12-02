import React, { useState } from 'react'
import { Summary } from './Summary.js'
import { Happiness } from './Happiness'
import { Input } from './Input'
import { Dropdown } from './Dropdown'

export const App = () => {
  const [happiness, setHappiness] = useState('')
  const [feeling, setFeeling] = useState('')
  const [today, setToday] = useState('') //används inte
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('feeling')
  const [location, setLocation] = useState('');
  

  const handleSubmit = (event) => {
   event.preventDefault() //spara informationen så att sidan inte laddas om (det vanliga sidobeteendet)
    setShowResult(true)
  }

  const handleContinueClick = () => {
    console.log('click continue')
    if (question === 'feeling') {
      setQuestion('happiness') 
    } else if (question === 'happiness') {
        setQuestion('location')
      
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
        <div className="feelingQuestion">
          
          <h1>Fill in your name:</h1>
        
          <Input 
          label="Name"
          value={feeling}
          setValue={setFeeling} />

         </div>
      )}

      {question === 'happiness' && (
        <div className="grading">

          <hi>How did you like our service?</hi>

          <Happiness 
          happiness={happiness} 
          setHappiness={setHappiness} />
        </div>
      )}

      {question === 'location' && (
        <div>
        <Dropdown
           option value={location}
           option value={setLocation}
        />

          <button type="submit">
          Send my feelings
          </button>
        </div>
      )}

      {question !== 'location' && (
        <button type="button" onClick={handleContinueClick}>
          Continue
        </button>
      )} 
    </form>
    )}
  </div>  
  )
}
