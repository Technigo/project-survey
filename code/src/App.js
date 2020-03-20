import React, { useState } from 'react'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'


export const App = () => {
  const moodGroups=["Tired", "Okey", "Spring feelings", "Geat"]
  const [name, setName] = useState("")
  const [mood, setMood] = useState("")
  const [animal, setAnimal] = useState("")
  const [colorhue, setColorhue] = useState("")
  const [purple, setPurple] = useState("0")
  const [percentage, setPercentage] = useState("0")
  
  const [question, setQuestion] = useState("name")
  const [submitted, setSubmitted] = useState(false)
  const [showText, setShowText] = useState(true)
  const [error, setError] = useState(false)
  
  const nextQuestion = () => {
    if(question==='name' && name.length===0) {
      setQuestion('name')
      setError(true)
      setPercentage("0")
    } else if(question==='name' && name.length>0) {
      setQuestion('mood')
      setPercentage("25")
    } else if(question==='mood') {
      setQuestion('animal')
      setPercentage("50")
    } else if(question==='animal') {
      setQuestion('colorhue')
      setPercentage("75")
    } else if(question==='colorhue') {
      setQuestion('purplelove')
      setPercentage("100")
    } 
  }

  const showSummary = () => {
    setSubmitted(true);
    setShowText(!showText);
  }

  return (
    <div className="menu-container">
      
    {showText && <div className="form-container">
    
    <form 
      onSubmit={event => event.preventDefault()}>

    {question === 'name' && (
    <div>
      <h1>The Purple Appreciation Club 💜 </h1>
      <p className="intro">We would like to know you a little bit about you before joining our club</p>
     
      {!error &&(<p>What is your name?</p>)}
      {error &&(<p className="required">Name required</p>)}

      <label>
      <input 
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        placeholder="Enter your name here"
      />
      </label>
    </div>
    )}
      
    {question === 'mood' && (
    <div>
      <h1>The Purple Appreciation Club 💜</h1>
      <p>How are you feeling?</p>

      {moodGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setMood(event.target.value)}
            checked={mood === group}
          />
          {group}
        </label>
      ))}
      <br></br><br></br>
    </div>
    )}
      
    {question === 'animal' && (
    <div>
      <h1>The Purple Appreciation Club 💜</h1>
      <p>Choose your spirit animal!</p>

      <label>
      <select
        onChange={event => setAnimal(event.target.value)}
        value={animal}
      >
        <option value=""></option>
        <option value="Cat">Cat 🐱</option>
        <option value="Unicorn">Unicorn 🦄 </option>
        <option value="Frog"> Frog 🐸</option>
        <option value="Snake">Snake 🐍</option>
        <option value="Badger">Badger🦡</option>
        <option value="Eagle">Eagle 🦅</option>
        <option value="Lion">Lion 🦁</option>
      </select>
      </label>
    </div>
    )}

    {question === 'colorhue' && (
    <div>
      <h1>The Purple Appreciation Club 💜</h1>
      <p>What is your Favorite hue of purple?</p>
  
      <label>
      <select
        onChange={event => setColorhue(event.target.value)}
        value={colorhue}
      >
        <option value=""></option>
        <option value="Deeppurple">Deep purple</option>
        <option value="Lilac">Lilac</option>
        <option value="periwinkle">Periwinkle</option>
        <option value="plum">Plum</option>
        <option value="mulberry">Mulberry</option>
      
      </select>
      </label>
    </div>
    )}
      
  

    {question === 'purplelove' && (
    <div>
      <h1>The Purple Appreciation Club 💜</h1>
      <p>How much do you like purple on a scale from 0 to 10?</p>

      <label>
      <input 
        type="range"
        value={purple}
        min="0"
        max="10"
        className="slider"
        onChange={event => setPurple(event.target.value)}
      />
      <p className="purple-points">{purple}</p>
      </label>
      
      <button type="submit" onClick={() => showSummary()}>
        Submit
      </button>

    </div>
    )}
      
    {question !=='purplelove' && (
    <div>
      <button type="button" onClick={nextQuestion}>
        Continue
      </button>

      {question !=='name' && (
        <ProgressBar percentage={percentage}/>
      )}

    </div>
    )}

    </form>
    </div> }

    {submitted && 
      <Summary name={name} mood={mood} animal={animal} colorhue={colorhue} purple={purple} />
    }
    </div>
  )
}
