import React, { useState} from 'react'
import FirstPage from './FirstPage'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import Overview from './Overview'
import FavouriteAnimal from './FavouriteAnimal'
import FavouriteColour from './FavouriteColour'
import AeroplaneQuestion from './AeroplaneQuestion'


 const Form = () => {
  const [nameInput, setNameInput] = useState ('');
  const [locationInput, setLocationInput] = useState ('')
  const [animalInput, setAnimalInput] = useState ('')
  const [colourInput, setColourInput] = useState ('')
  const [aeroplaneInput, setAeroplaneInput] = useState ('')
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
  const onAeroplaneInputChange = (event) => {
    setAeroplaneInput(event.target.value)
  }
  const onstepChange = () => {
      setStep(step + 1)
  }

  if (step === 1) {
    return (
      <div> < FirstPage 
      onstepChange = {onstepChange}/></div> 
    )
  }
  else if (step === 2) {
    return (
      <div> < NameQuestion 
      nameInput={nameInput} 
      onNameInputChange={onNameInputChange}
      onstepChange = {onstepChange}/></div> 
    )
  } else if (step === 3) {
    return (
      <div> <LocationQuestion 
      locationInput={locationInput} 
      onLocationInputChange={onLocationInputChange}
      onstepChange = {onstepChange}/> </div>
    )
    
  } else if (step === 4) {
    return (
      <div> <FavouriteAnimal
      animalInput={animalInput}
      onAnimalInputChange={onAnimalInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  } else if (step === 5) {
    return (
      <div> <FavouriteColour 
      colourInput={colourInput}
      onColourInputChange={onColourInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  } else if (step === 6) {
    return (
      <div> <AeroplaneQuestion 
      AeroplaneInput={aeroplaneInput}
      onAeroplaneInputChange={onAeroplaneInputChange}
      onstepChange = {onstepChange}/>
      </div>
    )
  } else if (step === 7) {
    return (
      <div> <Overview 
      nameInput={nameInput}
      locationInput={locationInput}
      animalInput={animalInput}
      colourInput={colourInput}
      aeroplaneInput={aeroplaneInput}/></div>
    )
  }
}

export default Form