import React, { useState } from 'react'

export const Question2 = () => {
  const [ wouldYouRather, setwouldYouRather]= useState()
  const [ wouldYouRatherNot, setwouldYouRatherNot]= useState()

  return (
    <form>
      <h2>Choose one...</h2>
      <h1>Would you rather...</h1>
      <label>
       have edible spaghetti hair that regrows every night 
        <input
          id= 'spagetti'
          type="checkbox"
          checked={wouldYouRather}
          onChange= {event => setwouldYouRather(event.target.checked)}
          />
      </label>
      <label>
      or sweat maple syrup?

        <input
          id= 'syrup'
          type="checkbox"
          checked={wouldYouRatherNot}
          onChange= {event => setwouldYouRatherNot(event.target.checked)}
          />
      </label>

    </form>


  )
}

