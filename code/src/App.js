import React, { useState} from 'react'
import "./index.css"

const activities = ["skiing", "snowboarding", "ski touring"]
const foods = ["wine", "beer", "whisky"]

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

    <header>
      <h1>Win a trip to the finest winter wonderland in world!</h1>
      <p>The only thing you have to do is answering a few question in our short survey and send us a photo od your best adventure from last season!</p>
    </header>

    {!showResult && (
        <section onSubmit={handleSubmit}>

      <div className='survey'>

      <form onSubmit={event => event.preventDefault()}>
          <h2>Name</h2>
          <input
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
          />
    
      
      {/* <div role="img" aria-label="snowflakes">
      <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span>
      </div> */}
    
       
        <h2>Favourite type of skiiing</h2>
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
        
      {/* <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span> */}

    
        <h2>Select your dreamed place to ski</h2>
            <select
              onChange={event => setPlace(event.target.value)}
              value={place}
            >
              <option value=''>Select</option>
              <option value='Dolomites'>Dolomites 4ver!</option>
              <option value='Zermatt'>Anywhere in Switzerland</option>
              <option value='Åre'>I don't like to travel any far, and Åre is my place</option>
              <option value='Aspen'>Aspen is my snowy paradise</option>
            </select>

       {/*  <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span> */}

       <h2>What do you prefer to eat after?</h2>
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

        <button type='submit'>Submit</button>
        </form>          

        <footer>
        <h3>Winter is coming</h3>
      </footer>

    </div>
    </section> 
  
    )}

  {showResult && (
        <p className='result'>
          You're lucky, {name}! Your chances to win a trip to {place} are really big! Now send us a photo from your last {activity} adventure on season2020@skiingparadise.com and relax with a glass of {food}! We'll write you back as soon we pick the happy winer!  
        </p>
      )}
    
  </div>

)
}
