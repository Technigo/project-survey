import React, { useState } from 'react'




const company = ['BFF',
'My Pet',
'Mother',
'No one',
'Random Strager',
'Michael Scott']

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
        <input type="text" className="text-input"
        onChange={event => setName(event.target.value)} 
        value={name} placeholder="Your Name" required />
      </form>


      <div className="select-planet">
        <h2>{Question.Q2}</h2>
        <div className="planets">
          {planets.map(planet => (
            <label key={planet} className="radio-btn">
              <input type="radio" 
              value={planet}
              onChange={event => setWhichPlanet(event.target.value)}
              checked={whichPlanet === planet}
              id={planet}/>

              <span className="check" role="radio"></span>
              {planet}

            </label>
          ))}
        </div>
      </div>


      <div className="question">
        <h2>{Question.Q3}</h2>

        <div>
        <select
          onChange={event => setBringWith(event.target.value)}
          // value={bringWith} 
          checked={bringWith === company}
          defaultValue="---">
          
          <option disabled>---</option>
          {company.map(who => (
            <option key={who} value={who}>{who}</option>
          ))}
        </select>
        </div>

        </div>
    </div>
  )
}