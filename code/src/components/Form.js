import React, { useState} from 'react'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import Overview from './Overview'
import FavouriteAnimal from './FavouriteAnimal'
import FavouriteColour from './FavouriteColour'


 const Form = () => {
  const [nameInput, setNameInput] = useState ('');
  const [locationInput, setLocationInput] = useState ('')
  const [animalInput, setAnimalInput] = useState ('')
  const [colourInput, setColourInput] = useState ('')
  const [step, setStep] = useState (1)
  
  
  const onNameInputChange = (event) =>{
    setNameInput(event.target.value)
  }
  const onLocationInputChange = (event) =>{
    setLocationInput(event.target.value)
  }
  const onAnimalInputChange = (event) => {
    setAnimalInput(event.target.value)
  }
  const onColourInputChange = (event) => {
    setColourInput(event.target.value)
  }
  const onstepChange = () => {
      setStep(step + 1)
  }

  if (step === 1) {
    return (
      <div> < NameQuestion 
      nameInput={nameInput} 
      onNameInputChange={onNameInputChange}
      onstepChange = {onstepChange}/></div> 
    )
  } else if (step === 2) {
    return (
      <div> <LocationQuestion 
      locationInput={locationInput} 
      onLocationInputChange={onLocationInputChange}
      onstepChange = {onstepChange}/> </div>
    )
    
  } else if (step === 3) {
    return (
      <div> <FavouriteAnimal
      animalInput={animalInput}
      onAnimalInputChange={onAnimalInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  } else if (step === 4) {
    return (
      <div> <FavouriteColour 
      colourInput={colourInput}
      onColourInputChange={onColourInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  }
  else if (step === 5) {
    return (
      <div> <Overview 
      nameInput={nameInput}
      locationInput={locationInput}
      animalInput={animalInput}/> 
      colourInput ={colourInput}</div>
    )
  }
}

export default Form