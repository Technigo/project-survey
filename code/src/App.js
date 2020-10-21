import React, {useState} from 'react'

import { Radio } from './components/Radio'
import { DropDown } from './components/DropDown'


export const App = () => {
 const [frequency, setFrequency] = useState()
 const [age, setAge] = useState('')
 
 
 
  return (
    <section className='surveyContainer'>
      
      <header>
        <h1>Product Survey</h1>
        <h2>Your anonymous feedback is important to us and will enable us to develop more useful products.</h2>
      </header>

      <form onSubmit={(event) => event.preventDefault()} className='form'>
        <Radio frequency={frequency} setFrequency={setFrequency} />
        <DropDown ageGroup={age} setAgeGroup={setAge} />
        {/* <Checkbox /> */}

      </form>
   
    </section>
  )
}