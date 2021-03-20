import React, { useState } from 'react'

import Survey from './components/Survey'
import Start from './components/Start'
import Summary from './components/Summary'

export const App = () => {

  const [section, setSection] = useState(0)
  const [tech, setTech] = useState('')
  const [hours, setHours] = useState('')
  const [pets, setPets] = useState('Choose below')
  const [coffee, setCoffee] = useState('')

  return (
    <main className="main">
      <Start 
        setSection={setSection} 
        section={section}/>

      <Summary 
        setSection={setSection} 
        section={section} 
        tech={tech} 
        hours={hours} 
        pets={pets} 
        coffee={coffee}/>

      <Survey 
        setTech={setTech} 
        setHours={setHours} 
        setPets={setPets} 
        pets={pets}
        setCoffee={setCoffee} 
        coffee={coffee}
        section={section}
        setSection={setSection}
      />
    </main>  
  )
}
