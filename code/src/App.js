import React, { useState } from 'react'

import Survey from './components/Survey'
import Start from './components/Start'
import Summary from './components/Summary'

export const App = () => {

  const [section, setSection] = useState(0)
  const [enjoy, setEnjoy] = useState('')
  const [feels, setFeels] = useState('')
  const [options, setOptions] = useState('Choose below')
  const [coffee, setCoffee] = useState('')

  return (
    <main className="main">
      <Start 
        setSection={setSection} 
        section={section}/>

      <Summary 
        setSection={setSection} 
        section={section} 
        enjoy={enjoy} 
        feels={feels} 
        options={options} 
        coffee={coffee}/>

      <Survey 
        setEnjoy={setEnjoy} 
        setFeels={setFeels} 
        setOptions={setOptions} 
        options={options}
        setCoffee={setCoffee} 
        coffee={coffee}
        section={section}
        setSection={setSection}
      />
    </main>  
  )
}