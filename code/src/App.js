import React, { useState } from 'react'

import Tech from './components/Tech'
import Hours from './components/Hours'
import Pets from './components/Pets'
import Coffee from './components/Coffee'
import Summary from './components/Summary'

export const App = () => {

  // const [tech, setTech] = useState('')
  // const [hours, setHours] = useState('')
  // const [coffee, setCoffee] = useState('')
  // const [pets, setPets] = useState('')

  const [section, setSection] = useState(0)
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSection(5)
  }

  const handleUserInput = (e) => {
      if (e.type === 'checkbox') {
        setInput(e.target.checked)
    } else {
        setInput(e.target.value)
      }
  }

  return (
    <>
    <main className="main">

      {section === 0 && (
        <>
        <h1>SURVEY</h1>
        <h2>━ Programming habits</h2>
        </>
      )}

      {section === 1 && (
        <Tech handleUserInput={handleUserInput} input={input} />
      )}  

      {section === 2 && (
        <Hours handleUserInput={handleUserInput} input={input} />
      )}  

      {section === 3 && (
         <Pets handleUserInput={handleUserInput} input={input} />
      )}  

      {section < 4 && (
        <button className="button" onClick={() => setSection(section + 1)}>{section === 0 ? 'START' : 'Next question'}</button>
        
      )}

      {section === 4 && (
         <>
         <Coffee handleUserInput={handleUserInput} input={input} />
         <button onClick={handleSubmit} className="button" type="submit">SEND</button>
         </>
      )} 

      {section === 5 && ( 
         <Summary input={input}/>
      )}

    </main>  
    </>
  )
}
