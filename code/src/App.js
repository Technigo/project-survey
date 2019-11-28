import React, { useState } from 'react'

export const App = () => {
  const [happiness, setHappiness] = useState('happy');
  const [feeling, setFeeling] = useState('');
  const [showResult, setShowResult] = useState(false)
  

  const handleSubmit = (event) => {
   event.preventDefault() //spara informationen så att sidan inte laddas om (det vanliga sidobeteendet)
    setShowResult(true)
  }

  return (
  <div>
    {showResult && (
      <div>
        <h1>Hello!</h1>
        <p>You are {happiness === 'happy' ? 'Super happy' : 'Sad :('}</p>
        <p>{feeling}</p>
        </div>
    )}

    {!showResult &&(

    <form onSubmit={handleSubmit}>
      <div className="feelings">
        <label>
          <input
           type="radio"
           value="happy" 
           onChange={() => setHappiness('Happy')} checked={happiness ==='happy'}/>
          
          <span role="img" aria-label="Happy-face">
            :happy
          </span>
        </label>
        <label>
          <input 
          type="radio" 
          value="sad" 
          onChange={() => setHappiness('Sad')} checked={happiness ==='sad'} />
          
          <span role="img" aria-label="Sad-face">
            :sad
          </span>
        </label>
      </div>

      <div className="thought">
        <label>
          How are you feeling?
          <input type="text" value={feeling} onChange={(event) => setFeeling(event.target.value)} />
        </label>
      </div>

      <button type="submit">Send my feelings</button>
    </form>
    )}
  </div>  
  )
}
