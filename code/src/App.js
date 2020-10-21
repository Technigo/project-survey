import React, {useState} from 'react'

import { Radio } from './components/Radio'
import { Checkbox } from './components/Checkbox'
import { DropDown } from './components/DropDown'
import Summary from './components/Summary'

export const App = () => {
 const [frequency, setFrequency] = useState('')
 const [age, setAge] = useState('')
 const [checkbox, setCheckbox] = useState([])
 const [summary, setSummary] = useState(false)
 
 const handleFactors = productValue => {
   checkbox.includes(productValue)
    ? setCheckbox(checkbox.filter(item => item !== productValue))
    : setCheckbox([...checkbox,productValue])
 }

 const handleSubmit = event => {
   event.preventDefault()
   setSummary(true)
 }
 
  return (
    <section className='surveyContainer'>
      
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
        
          <Checkbox 
            userValues={checkbox}
            onFactorChange={handleFactors}
          />
        
          <DropDown 
            age={age}
            setAge={setAge}
          />
        
          <button
            type="submit"
            disabled={frequency === '' || age === '' || checkbox === [] }
          >Submit
          </button>
        </form> ) : (
        
          <Summary 
            frequency={frequency}
            age={age}
            userValues={checkbox}
          />
      )}
    </section>
  )
}