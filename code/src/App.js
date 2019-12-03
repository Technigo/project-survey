import React, { useState } from 'react'
import 'App.css'

export const App = () => {
  // const for text input
  const [name, setName] = useState("");
  // Const for list
  const [list, setList] = useState("");
  // Const for checkbox
  const [wantNachos, setWantNachos] = useState(false);

  const [bread, setBread] = useState()

  const [strength, setStrength] = useState(15)

  // Show result
  const [showResult, setShowResult] = useState(false);

  // One question at the time
  const [question, setQuestion] = useState('1')

  //Adjectives
const adjectives = ["tasty", "delicious", "yummy"]

  const handlePrevious = () => {
    if (question === 'last') {
      setQuestion ('4')
    } else if (question === '4') {
      setQuestion ('3')
    } else if (question === '3') {
      setQuestion ('2')
    } else if (question === '2') {
      setQuestion ('1')
    }
  }

  const handleNext = () => {
    if (question === '1') {
      setQuestion ('2')
    } else if (question === '2') {
      setQuestion ('3')
    } else if (question === '3') {
      setQuestion ('4')
    } else if (question === '4') {
      setQuestion ('last')
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  const redoForm = (event) => {
    event.preventDefault()
    setShowResult(false)
    setQuestion('1')
    setName('')
    setStrength(15)
    setList("")
    setBread()
    setWantNachos(false)
  }

  const handleSalsa = () => {
    if (strength < 10) {
    return ("mild")}
    else if (strength < 20) {
    return ("medium")}
    else {
    return ("spicy")}
  }

  let sauce = handleSalsa(strength)

  const randomizer = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  let adjective = randomizer(adjectives)



  return (
    <div className="FirstForm">
      <h1>TALK THAT TACO</h1>
      <h3>How'd you like your taco?</h3>
      <div>
        {showResult && 
        
        <div className="summary" onReset={redoForm}>
          <span>
            {name}, you want your taco with {bread} and some nice {sauce} salsa, {adjective}! 
            But please, no {list}!
          </span>
          <button type='reset' onClick={redoForm}>Another taco!</button>
          </div>}
          
        {!showResult && 
      <form onSubmit={handleSubmit}>

        {question === '1' && (
          <div className="question">
            <h3>What's your name?</h3>
            <input 
            onKeyPress={(e) => {
              if (e.key === 'Enter') { handleNext() }
            }}
            type="text"
            onChange = {event => setName(event.target.value)}
            value = {name}
            autoFocus
            required
            />
          </div>
        )}

        {question === '2' && (
          <div className="question">
          <h3>What kind of taco wrapper?</h3>
          <div className="choices">
            <label>
              <input 
            onKeyPress={(e) => {
              if (e.key === 'Enter') { setBread("tortilla") }
            }}
                type="radio"
                value={bread}
                onChange={() => setBread("tortilla")}
                checked={bread === "tortilla"}
                 />
              <span role="img" aria-label="tortilla" tabIndex="0">🌯</span>
            </label>
            <label>
              <input 
            onKeyPress={(e) => {
              if (e.key === 'Enter') { setBread("hard shell") }
            }}
                type="radio"
                value={bread}
                onChange={() => setBread("hard shell")}
                checked={bread === "hard shell"}
                />
              <span role="img" aria-label="hard shell" tabIndex="0" >🌮</span>
            </label>  
            </div>     
          </div>
        )}

        {question === '3' && (
          <div className="question">
            <h3>How do you like your salsa?</h3>
            <div className="choices">
              <span role="img" aria-label="One hot pepper">🌶</span>
              <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={strength}
                    onChange={(event) => setStrength(event.target.value)}
                    id="salsaRange" />
              <span role="img" aria-label="Three hot peppers">🌶🌶🌶</span>
            </div>
          </div>
        )}  
  
        {question === '4' && (
          <div className="question">
            <h3>What do you definitly not want?</h3> 
            <select
              onChange={event => setList(event.target.value)}
              value={list}
              required>
              <option value="">Please no</option>
              <option value="cilantro">Cilantro</option>
              <option value="corn">Corn</option>
              <option value="banana">Banana</option>
            </select>
          </div>
        )} 
          
    
        {question === 'last' && (
          <div className="question">
            <label className="nachos">
            <input
              type = "checkbox"
              checked = {wantNachos}
              value = {wantNachos}
              onChange= {event => setWantNachos(event.target.checked)} />
              <span className="fakeCheckbox"></span> Nachos on the side?
            </label>
          </div> 
        )} 

{/* If not on the first / last question, render a previous / continue-button */}
<div className="navigationButtons">
          {question !== '1' && (
           <button type="button" className="previous" onClick={handlePrevious}>Back</button>
         )}

         {question !== 'last' && (
           <button type="button" className="next" onClick={handleNext}>Continue</button>
         )}
          {question === 'last' && (
           <button type="submit">Submit</button>
         )}
         </div>
               
      </form>
      }
      </div>
    </div>
  )
}