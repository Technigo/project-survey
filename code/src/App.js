import React, { useState } from 'react'
import './components/form.css'

export const App = () => {
  const [destination, setDestination] =useState('')
  const [whatToBring, setWhatToBring] =useState('')
  const [whenToGo, setWhenToGo] =useState('')
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }


  return (
    <div className="form-dream-destination">

  {showResult && (
    <div>
      <h1>Book a vacation:</h1>

      <p>To {destination}</p>
      <p>and bring <span className="emoji" role="img" arial-label="whatToBring">{whatToBring}</span></p>
      <p>Lets do it {whenToGo}!</p>
    </div>
  )}
    
    {!showResult && (
    <div>
      
<h2>It's time for a holiday !</h2>


 <form onSubmit={handleSubmit}>
 <div className="destination">
  <h3>What is your dream destination?</h3>
  <input type="text" value={destination} onChange={(event) => setDestination(event.target.value)} />
 </div>
 
 <div className="subject-bring">
 <h3>What item would you bring?</h3>
 </div>
 <div className="what-to-bring">
 <label>
   <input
   type="radio"
   value="camera"
   onChange={event => setWhatToBring(event.target.value)}
    checked={whatToBring === "camera"} />
    <span className="emoji" role="img" arial-label="camera">📸</span>
 </label>

 <label>
   <input
   type="radio"
   value="ball"
   onChange={event => setWhatToBring(event.target.value)}
    checked={whatToBring === "ball"} />
    <span className="emoji" role="img" arial-label="ball">⚽️</span>
 </label>

 <label>
   <input
   type="radio"
   value="sunglasses"
   onChange={event => setWhatToBring(event.target.value)}
    checked={whatToBring === "sunglasses"} />
    <span className="emoji" role="img" arial-label="sunglasses">🕶</span>
 </label>
 </div>

 <div className="dropdwon-menu">
 <select className="dropdown" onChange={event => setWhenToGo(event.target.value)}
   value={whenToGo}>
   
   <option value="">When are you going?</option>
   <option value="Now!">Now!</option>
   <option value="This Year">This Year!</option>
   <option value="Next Year">Next Year!</option>
   <option value="Probably Never">Probably Never!</option>
 </select>
 </div>

 <div className="submit">
 <button className="submit-button" type="submit">
     <p>Lets go!</p>
   </button>
   </div>
 </form>
</div>
)}
      
    </div>
  )
}