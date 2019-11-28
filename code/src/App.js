import React, { useState} from 'react'
import "./index.css"

const activities = ["skiing", "snowboarding", "ski touring"]

export const App = () => {
  const [name, setName] = useState()
  const [activity, setActivity] = useState("")


  return (
  <div>

    

    <div className='survey'>

    <header>
      <h1>Skiing survey</h1>
    </header>

      <form onSubmit={event => event.preventDefault()}>
          <h2>Name</h2>
          <input
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
          />
      </form>

      
      <div role="img" aria-label="snowflakes">
      <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span>
      </div>
        

      <form>
          <h2>Favourite type of skiiing</h2>
          <select onChange={event => setActivity(event.target.value)} value={activity}>
            <option value=''>Select</option>
            <option value='activity1'>skiing</option>
            <option value='activity2'>snowboarding</option>
            <option value='activity3'>ski touring</option>
          </select>
        </form>

      <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span>

      <form>
          <h2>Which type of skiing you prefer?</h2>
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
              )
            )
          }   
        </form>

        <span>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</span>

        <button type='submit'>Submit</button>

        <footer>
        <h3>Winter is coming</h3>
      </footer>

    </div>

    
  </div>

)
}
