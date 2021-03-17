import React, { useState } from 'react'

import Start from './components/Start'
import Tech from './components/Tech'
import Hours from './components/Hours'
import Pets from './components/Pets'
import Coffee from './components/Coffee'
import Summary from './components/Summary'

export const App = () => {

  const [section, setSection] = useState(0)
  const [tech, setTech] = useState('')
  const [hours, setHours] = useState('')
  const [pets, setPets] = useState('Choose below')
  const [coffee, setCoffee] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    setSection(5)
  }

  return (
    <>
    <main className="main">

      {section === 0 && (
        <Start />
      )}

      {section === 1 && (
        <Tech setTech={setTech} tech={tech} />
      )}  

      {section === 2 && (
        <Hours setHours={setHours} hours={hours} />
      )}  

      {section === 3 && (
         <Pets setPets={setPets} pets={pets} />
      )}  

      {section < 4 && (
        <button className="button" onClick={() => setSection(section + 1)}>{section === 0 ? 'START' : 'Next question'}</button>
      )}

      {section === 4 && (
         <>
         <Coffee setCoffee={setCoffee} coffee={coffee} />
         <button onClick={handleSubmit} className="button" type="submit">SEND</button>
         </>
      )} 

      {section === 5 && ( 
        <>
         <Summary tech={tech} hours={hours} pets={pets} coffee={coffee}/>
         <button onClick={() => setSection(0)} className="button">RESTART</button>
         </>
      )}

    </main>  
    </>
  )
}
