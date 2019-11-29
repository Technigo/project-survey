import React, { useState} from 'react'
import "./index.css"

const activities = ["downhill", "snowboarding", "ski-touring", "cross-country"]
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
    </header>

    {!showResult && (
        <section onSubmit={handleSubmit}>

      <div className='survey'>

      <p>The only thing you have to do is answering a few question in our short survey and send us a photo od your best adventure from last season!</p>

      <form onSubmit={event => event.preventDefault()}>
          <h2>Name</h2>
          <input
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
          />
    
        <h2>First, pick your favourite style:</h2>
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
    
        <h2>Now, where would you like to go?</h2>
            <select
              onChange={event => setPlace(event.target.value)}
              value={place}
            >
              <option value=''>Choose only one!</option>
              <option value='Cortina'>Dolomites 4ver!</option>
              <option value='Zermatt'>Anywhere in Switzerland</option>
              <option value='Åre'>I don't like to travel any far, so Åre is my place</option>
              <option value='Canada'>Whistler Blackcomb is my snowy paradise</option>
            </select>

        <h2>Last question! What would you like to drink after the great day in {place}?</h2>
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
          You're lucky, {name}! Your chances to win a trip to {place} are really big! Now send us a photo from your last {activity} adventure on <a href ="url">season2020@skiingparadise.com</a> and relax with a glass of {food}! We'll write you back as soon we pick the happy winer!  
        </p>
      )}
    
  </div>

)
}
