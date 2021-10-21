import React, { useState} from 'react'

import FirstPage from './FirstPage'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import Overview from './Overview'
import FavouriteAnimal from './FavouriteAnimal'
import FavouriteColour from './FavouriteColour'
import AeroplaneQuestion from './AeroplaneQuestion'
import OlderQuestion from './OlderQuestion'
import SellotapeQuestion from './SellotapeQuestion'

 const Form = () => {
  
  const [nameInput, setNameInput] = useState ('');
  const [locationInput, setLocationInput] = useState ('')
  const [animalInput, setAnimalInput] = useState ('')
  const [colourInput, setColourInput] = useState ('')
  const [aeroplaneInput, setAeroplaneInput] = useState ('')
  const [olderInput, setOlderInput] = useState ('')
  const [sellotapeInput, setSellotapeInput] =useState ('')
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
  const onOlderInputChange = (event) => {
    setOlderInput(event.target.value)
  }
  const onSellotapeInputChange = (event) => {
    setSellotapeInput(event.target.value)
  }
  const onstepChange = () => {
      setStep(step + 1)
  }

  if (step === 1) {
    return (
      <div className="intro"> < FirstPage 
      onstepChange = {onstepChange}/></div> 
    )
  }
  if (step === 2) {
    return (
      <div className="main"> < NameQuestion 
      nameInput={nameInput} 
      onNameInputChange={onNameInputChange}
      onstepChange = {onstepChange}/></div> 
    )
  } else if (step === 3) {
    return (
      <div className="main"> <LocationQuestion 
      locationInput={locationInput} 
      onLocationInputChange={onLocationInputChange}
      onstepChange = {onstepChange}/> </div>
    )
    
  } else if (step === 4) {
    return (
      <div className="main"> <FavouriteAnimal
      animalInput={animalInput}
      onAnimalInputChange={onAnimalInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  } else if (step === 5) {
    return (
      <div className="main"> <FavouriteColour 
      colourInput={colourInput}
      onColourInputChange={onColourInputChange}
      onstepChange = {onstepChange}
      /> </div>
    )
  } else if (step === 6) {
    return (
      <div className="main"> <AeroplaneQuestion 
      aeroplaneInput={aeroplaneInput}
      onAeroplaneInputChange={onAeroplaneInputChange}
      onstepChange = {onstepChange}/>
      </div>
    )
  } else if (step === 7) {
    return (
      <div className="main"> <OlderQuestion 
      olderInput ={olderInput}
      onOlderInputChange ={onOlderInputChange}
      onstepChange = {onstepChange}/>
      </div>
    )
  }else if (step === 8) {
    return (
      <div className="main"> <SellotapeQuestion 
      sellotapeInput = {sellotapeInput}
      onSellotapeInputChange = {onSellotapeInputChange}
      onstepChange = {onstepChange}/>
      </div>
    )
} else if (step === 9) {
  return (
    <div className="main"> <Overview 
    nameInput = {nameInput}
    locationInput ={ locationInput}
    animalInput = {animalInput}
    colourInput = {colourInput}
    aeroplaneInput = {aeroplaneInput}
    olderInput = {olderInput}
    sellotapeInput = {sellotapeInput}
    /></div>
  )
}
 }
export default Form