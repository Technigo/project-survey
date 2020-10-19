import React, { useState } from 'react'
import { TextInput } from './TextInput.js'
import { SelectInput } from './SelectInput'
import { RadiobuttonInput } from './RadiobuttonInput'
import { Summary } from './Summary'


export const Form = () => {
  const [displaySummary, setDisplaySummary] = useState(false)
  const [name, setName] = useState('');
  const [spiritAnimal, setSpiritAnimal] = useState();
  const [personality, setPersonality] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setDisplaySummary(true);
  }

  return (
    <>
    <form>
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



