import React, { useState} from 'react'
import "./index.css"

const activities = ["downhill", "snowboarding", "ski-touring", "cross-country", "I'm rather into aprés-ski then ski"]
const foods = ["a mug of mulled wine", "a pint of beer", "whisky on the rocks", "a couple of shots", "I'd rather go to sleep"]

export const App = () => {
  const [name, setName] = useState()
  const [activity, setActivity] = useState("")
  const [food, setFood] = useState("")
  const [place, setPlace] = useState("")
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setShowResult(true)
  }

  return (
  <div>

    {!showResult && (
        <section onSubmit={handleSubmit}>

      <div className='survey'>

      <header>
      <h1>What kind of skier are you?</h1>
    </header>  

      <h2>A ski personality test</h2>

      <form onSubmit={event => event.preventDefault()}>
          <h2>Name</h2>
          <input
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
          />
    
        <h2>First, pick your style:</h2>
        
        {activities.map(group => (
              <label className='radioButtons' key={group}>
                <input
                  type='radio'
                  value={group}
                  onChange={event => setActivity(event.target.value)}
                  checked={activity === group}
                />
                {group}
              </label>
            ))}
            
    
        <h2>Where is your winter wonderland</h2>
            <select
              onChange={event => setPlace(event.target.value)}
              value={place}
            >
              <option value=''>You can choose only one</option>
              <option value='Cortina'>I'm an Italian in my heart!</option>
              <option value='Zermatt'>Anywhere in Switzerland</option>
              <option value='Åre'>I don't like to travel any far, so Åre is my place.</option>
              <option value='Canada'>Whistler Blackcomb is my snowy paradise!</option>
              <option value='Tignes'>There is no real skiing outside of France.</option>
            </select>

        <h2>And the last question!</h2>
        <h2>After the great day in {place}, would you rather opt for...?</h2>
            {foods.map(group => (
              <label className='radioButtons' key={group}>
                <input
                  type='radio'
                  value={group}
                  onChange={event => setFood(event.target.value)}
                  checked={food === group}
                />
                {group}
              </label>
            ))}

        <div><button type='submit'>Submit</button></div>
        
        </form>          

        <footer>
        <h3>Winter is coming</h3>
      </footer>

    </div>
    </section> 
  
    )}

  {showResult && (
        <p className='result'>
          Hi {name}! You're a true adventurer! You can't wait to go to {place} and bring a fresh {activity} adventure to this season! But hold you horses. You still have to wait for a bit more snow! Relax yourself with some great <a href="https://www.mountainsonstage.com/">mountain movies </a> and {food} till then.
        </p>
      )}
    
  </div>

)
}
