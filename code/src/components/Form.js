import React, { useState } from 'react'
import { TextInput } from './TextInput.js'
import { SelectInput } from './SelectInput'
import { RadiobuttonInput } from './RadiobuttonInput'
import { Summary } from './Summary'


export const Form = () => {
  /* declaring the useState variables and functions that will later be passed on as props in to the different form components. */
  const [displaySummary, setDisplaySummary] = useState(false)
  const [name, setName] = useState('');
  const [spiritAnimal, setSpiritAnimal] = useState();
  const [personality, setPersonality] = useState('');

 /*function that prevents default loading of the page when the form is submitting, changes the setDisplaySummary to true and finally hides the form by getting the id of the form element and setting it to display: none*/ 
  const handleSubmit = event => {
    event.preventDefault();
    setDisplaySummary(true);
    document.getElementById("form-container").style.display= "none"; /*finns det ett sätt utan css?*/
  }

  return (
    <>
    <form id="form-container">
    <h2>Name here please!</h2>
    <TextInput name={name} setName={setName}/>
    <h2>Pick one word that describes you the best</h2>
    <SelectInput personality={personality} setPersonality={setPersonality}/>
    <h2>Pick an animal!</h2>
    <RadiobuttonInput spiritAnimal={spiritAnimal} setSpiritAnimal={setSpiritAnimal}/>
    <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    {displaySummary && <Summary name={name} personality={personality} spiritAnimal={spiritAnimal}/>}
    </>
  )

}



