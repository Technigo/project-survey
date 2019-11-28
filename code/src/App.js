import React, { useState } from 'react'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'


export const App = () => {
  const ageGroups=["0-18", "19-30", "31-40", "41+"]
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [food, setFood] = useState("")
  const [tvseries, setTvseries] = useState("")
  
  const [question, setQuestion] = useState("name")
  const [submitted, setSubmitted] = useState(false)
  const [showText, setShowText] = useState(true)
  
  const nextQuestion = () => {
    if(question==='name') {
      setQuestion('age')
    } else if(question==='age') {
      setQuestion('food')
    } else if(question==='food') {
      setQuestion('tvseries')
    }
  }

  const showSummary = () => {
    setSubmitted(true);
    setShowText(!showText);
  }

  return (
    <div className="menu-container">
      
    {showText && <div className="form-container">
    <br></br>
    
    <form 
      onSubmit={event => event.preventDefault()}>

      {question === 'name' && (
      <div>
      <h1>Welcome to my survey!</h1>
      <p>Please provide the following information about yourself</p>
      <p>Name</p>
      <label>
      <input 
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
      </label>
      <br></br><br></br>
      </div>
      )}
      
      {question === 'age' && (
      <div>
      <h1>My survey</h1>
      <p>Please provide the following information about yourself</p>
      <br></br>

      Age group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setAge(event.target.value)}
            checked={age === group}
          />
          {group}
        </label>
      ))}
      <br></br><br></br>
      </div>
      )}
      
      {question === 'food' && (
      <div>
      <h1>My survey</h1>
      <p>Please answer the following question about yourself</p>
      <br></br>

      <label>
      <select
        onChange={event => setFood(event.target.value)}
        value={food}
      >
        <option value="">Select your favourite food</option>
        <option value="hamburger">Hamburger</option>
        <option value="sushi">Sushi</option>
        <option value="pasta">Pasta</option>
        <option value="pizza">Pizza</option>
        <option value="pizza">Tacos</option>
        <option value="other">Other</option>
      </select>
      </label>
      <br></br><br></br>
      </div>
      )}
      
      {question === 'tvseries' && (
      <div>
      <h1>My survey</h1>
      <p>Please answer the following question about yourself</p>
      <br></br>

      <label>
      <select
        onChange={event => setTvseries(event.target.value)}
        value={tvseries}
      >
        <option value="">Select your favourite tv-series</option>
        <option value="strangerthings">Stranger Things</option>
        <option value="homeland">Homeland</option>
        <option value="truedetective">True Detective</option>
        <option value="biglittlelies">Big Little Lies</option>
        <option value="thehandmaidstale">The Handmaids Tale</option>
        <option value="breakingbad">Breaking Bad</option>
        <option value="twinpeaks">Twin Peaks</option>
        <option value="other">Other</option>
      </select>
      </label>

      <br></br><br></br>

      <button type="submit" onClick={() => showSummary()}>
      Submit
      </button>
      </div>
      )}
      
      {question !=='tvseries' && (
        <div>
        <button type="button" onClick={nextQuestion}>
        Continue
        </button>
        </div>
      )}

    </form>
    </div> }

    {submitted && <Summary name={name} age={age} food={food} tvseries={tvseries} />}
    </div>
  )
}