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
  
  const [question, setQuestion] = useState("name")
  const [submitted, setSubmitted] = useState(false)
  const [showText, setShowText] = useState(true)
  
  const nextQuestion = () => {
    if(question==='name') {
      setQuestion('age')
    } else if(question==='age') {
      setQuestion('food')
    } else if(question==='food') {
      setQuestion('artist')
    } else if(question==='artist') {
      setQuestion('tvseries')
    } else if(question==='tvseries') {
      setQuestion('christmasenjoy')
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
      <p>What is your name?</p>
      <label>
      <input 
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
        required
      />
      </label>
      <br></br><br></br>
      </div>
      )}
      
      {question === 'age' && (
      <div>
      <h1>Michel's survey</h1>
      <p>What is your age group?</p>
      <br></br>

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
      <h1>Michel's survey</h1>
      <p>Favourite food</p>
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
        <option value="pancakes">Pancakes</option>
        <option value="other">Other</option>
      </select>
      </label>
      <br></br><br></br>
      </div>
      )}

      {question === 'artist' && (
      <div>
      <h1>Michel's survey</h1>
      <p>Favourite artist</p>
      <br></br>
  
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
      <br></br><br></br>
      </div>
      )}
      
      {question === 'tvseries' && (
      <div>
      <h1>Michel's survey</h1>
      <p>Favourite tv-series</p>
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
        <option value="thehandmaidstale">The Handmaid's Tale</option>
        <option value="breakingbad">Breaking Bad</option>
        <option value="twinpeaks">Twin Peaks</option>
        <option value="other">Other</option>
      </select>
      </label>

      <br></br><br></br>
      </div>
      )}

      {question === 'christmasenjoy' && (
      <div>
      <h1>Michel's survey</h1>
      <p>How much do you like Christmas on a scale from 0 to 10?</p>
      <label>
      <input 
        type="range"
        value={christmas}
        min="0"
        max="10"
        onChange={event => setChristmas(event.target.value)}
      />
      <p>{christmas}</p>
      </label>
      <br></br><br></br>
      
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
        </div>
      )}

    </form>
    </div> }

    {submitted && <Summary name={name} age={age} food={food} artist={artist} tvseries={tvseries} christmas={christmas} />}
    </div>
  )
}

// {question !=='name' && (
//   <div className="progress">
//     <br></br>
//     <ProgressBar/>
//   </div>
// )}