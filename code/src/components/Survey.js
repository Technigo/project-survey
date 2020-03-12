import React, { useState } from 'react'




// const bringWith = ['BFF',
// 'My Pet',
// 'Mother',
// 'No one',
// 'Random Strager',
// 'Michael Scott']

// const [bringWith, setBringWith] = useState()
// const [name, setName] = useState()

const planets = ['Mercury',
'Venus',
'Earth',
'Mars',
'Jupiter',
'Saturn',
'Uranus',
'Neptune']

const Question = {
  Q1: "What's your name?",
  Q2: "Which planet would you like to visit?",
  Q3: "Who would you bring?"}

export const Survey = () => {

  // const [planets, setPlanets] = useState() 
  const [name, setName] = useState()
  const [bringWith, setBringWith] = useState()
  const [whichPlanet, setWhichPlanet] = useState()
  
  return (
    <div className="completeSurvey">

      <form className="nameInput">
        <h2>{Question.Q1} <span>{name}</span></h2>
        <input type="text" 
        onChange={event => setName(event.target.value)} 
        value={name} required />
      </form>


      <div>
        <h2>{Question.Q2}</h2>
        <div>
          {planets.map(planet => (
            <label key={planet} className="radio-btn">
              <input type="radio" 
              value={planet}
              onChange={event => setWhichPlanet(event.target.value)}
              checked={whichPlanet === planet}
              id={planet}/>

            </label>
          ))}
        </div>
      </div>


      <div className="question">
        <h2>{Question.Q3}</h2>

        <div>
        <select
          onChange={event => setBringWith(event.target.value)}
          value={bringWith}>

          <option defaultValue>---</option>
          <option value="BFF">BFF</option>
          <option value="Pet">Pet</option>
          <option value="Mother">Mother</option>
          <option value="Random stranger">Random Stranger</option>
          <option value="Micheal Scott">Michael Scott</option>
        </select>
        </div>

        </div>
    </div>
  )
}