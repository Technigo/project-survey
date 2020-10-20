import React, { useState } from 'react'
import { TextInput } from './TextInput.js'
import { SelectInput } from './SelectInput'
import { RadiobuttonInput } from './RadiobuttonInput'
import { RangeSliderInput } from './RangeSliderInput'
import { Summary } from './Summary'


export const Form = () => {
  /* declaring the useState variables and functions that will later be passed on as props in to the different form components. */
  const [displaySummary, setDisplaySummary] = useState(false)
  const [name, setName] = useState('');
  const [spiritAnimal, setSpiritAnimal] = useState();
  const [personality, setPersonality] = useState('');
  const [temperature, setTemperature] = useState(50);

 /*function that prevents default loading of the page when the form is submitting, changes the setDisplaySummary to true.*/
  const handleSubmit = event => {
    event.preventDefault();
    setDisplaySummary(true);
  }
  /* if the displaySummary is false then the form will display. If the value is false then the summary will display.*/
  return (
    <>
    {! displaySummary ?(
    <form onSubmit={handleSubmit}>
      <section className="input-container">
        <TextInput 
          name={name} 
          setName={setName}
        />
      </section>
      <section className="input-container">
      <SelectInput 
        personality={personality} 
        setPersonality={setPersonality}
      />
      </section>
      <section className="input-container">
        <RangeSliderInput
        temperature={temperature}
        setTemperature={setTemperature}/>
      </section>
      <section className="input-container">
      <RadiobuttonInput 
        spiritAnimal={spiritAnimal}
        setSpiritAnimal={setSpiritAnimal}
      />
      </section>
      <div className="submit-button-container">
        <button className="submit-button" type="submit">Submit</button>
      </div>
    </form> ) : (
    <Summary 
      name={name}
      personality={personality} 
      spiritAnimal={spiritAnimal}
      temperature={temperature}
    />
    )}
    </>
  )
}



