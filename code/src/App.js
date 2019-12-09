import React, {useState} from 'react'
import ReactDom from 'react-dom'
import './index.css'

export const App = () => {
const [happiness,setHappiness] = useState('happy')
const [feeling, setFeeling] = useState('')
const [reason, setReason] = useState('')
const [color, setColor] = useState('Blue')

const [showResult, setShowResult] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault()
  setShowResult(true)
}

  return (
    <div className="myResult">
      {showResult && (
        <div className="theResult">
          <h1>Here's your result!</h1>
          <p>You are {happiness ==='happy' ? 'Super happy!' : 'Sad :('}</p>
          <p>And you are feeling {feeling}</p>
          <p>Coz of {reason}</p>
          <p>You feel {color}</p>
        </div>


      )}
      {!showResult && (

        <form onSubmit={handleSubmit}>
          <div className="feelings">
            <h1>Choose your mood:</h1>
            <label>
              <input
                type="radio"
                value="happy"
                onChange={() => setHappiness('happy')}
                checked={happiness === 'happy'} />
              <span role="img" aria-label="Happy face">
                😀
        </span>
            </label>

            <label>
              <input type="radio"
                value="sad"
                onChange={() => setHappiness('sad')}
                checked={happiness === "sad"} />
              <span role="img" aria-label="Sad face">
              😭
       </span>
            </label>
          </div>
          <div className="thought">
            <label>
            <h2>How are you feeling?</h2>
        <input type="text" value={feeling} onChange={(event) => setFeeling(event.target.value)} />
            </label>
            <label>
              <h2>And why is that?</h2>
              <input type="text" value={reason} onChange={(event) => setReason(event.target.value)} />
            </label>
            <h2>Your mood-color</h2>
            <select onChange={(event) => setColor(event.target.value)}>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
            </select>
           </div>
          <br></br>
          <button type="submit">Send my feelings!</button>
        </form>


      )}
    </div>
  )
}
