import React, { useState } from "react";
import ReactDOM from "react-dom"

export const App = () => {
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')

  return (
    <div className="myForm">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log('Submit!')
        }}
      >
        <h1>WIN EXCLUSIVE TICKETS TO YOUR DREAM DESTINATION!</h1>
        <h2>
          We are giving away one lucky winner for this unique opportunity. All you have to do is to
          fill out the form beneath and cross your fingers!
        </h2>
        <h2>Motivate why you should be one of the lucky winners: {name}</h2>
        <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        <h1> *** </h1>
        <select onChange={(event) => setLocation(event.target.value)} value={location}>
          <option value="">Where to?</option>
          <option value="newYork">New York</option>
          <option value="tokyo">Tokyo</option>
          <option value="paris">Paris</option>
        </select>
      </form>
    </div>
  )
}