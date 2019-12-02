import React, { useState } from 'react'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'


export const App = () => {
  const ageGroups=["0-18", "19-30", "31-40", "41+"]
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [food, setFood] = useState("")
  const [tvseries, setTvseries] = useState("")
  const [artist, setArtist] = useState("")
  const [christmas, setChristmas] = useState("0")
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
      setQuestion('age')
      setPercentage("16.67")
    } else if(question==='age') {
      setQuestion('food')
      setPercentage("33.34")
    } else if(question==='food') {
      setQuestion('artist')
      setPercentage("50")
    } else if(question==='artist') {
      setQuestion('tvseries')
      setPercentage("66.67")
    } else if(question==='tvseries') {
      setQuestion('christmasenjoy')
      setPercentage("83.35")
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
      <h1>Welcome to my survey!</h1>
      <p className="intro">I am curious about your favourite food,
      music artist and tv-series</p>
     
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
      
    {question === 'age' && (
    <div>
      <h1>Michels survey</h1>
      <p>What is your age group?</p>

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
      <h1>Michels survey</h1>
      <p>Favourite food</p>

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
        <option value="pancakes">Pancakes</option>
        <option value="other">Other</option>
      </select>
      </label>
    </div>
    )}

    {question === 'artist' && (
    <div>
      <h1>Michels survey</h1>
      <p>Favourite artist</p>
  
      <label>
      <select
        onChange={event => setArtist(event.target.value)}
        value={artist}
      >
        <option value="">Select your favourite music artist</option>
        <option value="madonna">Madonna</option>
        <option value="michaeljackson">Michael Jackson</option>
        <option value="whitneyhouston">Whitney Houston</option>
        <option value="prince">Prince</option>
        <option value="celinedion">Céline Dion</option>
        <option value="davidbowie">David Bowie</option>
        <option value="georgemichael">George Michael</option>
        <option value="sting">Sting</option>
        <option value="mariahcarey">Mariah Carey</option>
        <option value="other">Other</option>
      </select>
      </label>
    </div>
    )}
      
    {question === 'tvseries' && (
    <div>
      <h1>Michels survey</h1>
      <p>Favourite tv-series</p>

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
        <option value="thehandmaidstale">The Handmaid's Tale</option>
        <option value="breakingbad">Breaking Bad</option>
        <option value="twinpeaks">Twin Peaks</option>
        <option value="other">Other</option>
      </select>
      </label>
    </div>
    )}

    {question === 'christmasenjoy' && (
    <div>
      <h1>Michels survey</h1>
      <p>How much do you like Christmas on a scale from 0 to 10?</p>

      <label>
      <input 
        type="range"
        value={christmas}
        min="0"
        max="10"
        className="slider"
        onChange={event => setChristmas(event.target.value)}
      />
      <p className="christmas-points">{christmas}</p>
      </label>
      
      <button type="submit" onClick={() => showSummary()}>
        Submit
      </button>

    </div>
    )}
      
    {question !=='christmasenjoy' && (
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
      <Summary name={name} age={age} food={food} artist={artist} tvseries={tvseries} christmas={christmas} />
    }
    </div>
  )
}