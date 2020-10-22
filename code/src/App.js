import React, {useState} from 'react'

import { Radio } from './components/Radio'
import { Factors } from './components/RadioFactors'
import { DropDown } from './components/DropDown'
import Summary from './components/Summary'

export const App = () => {
 const [frequency, setFrequency] = useState('')
 const [age, setAge] = useState('')
 const [factor, setFactor] = useState('')
 const [summary, setSummary] = useState(false)
 
 const handleSubmit = event => {
   event.preventDefault()
   setSummary(true)
 }
 
  return (
    <section className='surveyContainer' name="survey-container">
      
      <header>
        <h1>Product Survey</h1>
        <h2>Your anonymous feedback is important to us and helps us develop better products.</h2>
      </header>
      {!summary ? (
        <form onSubmit={handleSubmit}   className='form'>
        
          <Radio 
            frequency={frequency}
            setFrequency={setFrequency}
          />
        
          <Factors 
            factor={factor}
            setFactor={setFactor}
          />
        
          <DropDown 
            age={age}
            setAge={setAge}
          />
        
          <button
            type="submit"
            disabled={frequency === '' || age === '' || factor === '' 
            name="submit button"}
          >Submit
          </button>
        </form> ) : (
        
          <Summary 
            frequency={frequency}
            age={age}
            factor={factor}
          />
      )}
    </section>
  )
}