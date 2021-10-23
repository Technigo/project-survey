import React, { useState} from 'react'

import ProgressBar from './ProgressBar'

import FirstPage from './FirstPage'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import { Overview } from './Overview'
import FavouriteAnimal from './FavouriteAnimal'
import FavouriteColour from './FavouriteColour'
import AeroplaneQuestion from './AeroplaneQuestion'
import OlderQuestion from './OlderQuestion'
import SellotapeQuestion from './SellotapeQuestion'

  export const Form = () => {
  
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
  const onStepChange = () => {
      setStep(step + 1)
  }
  const onStepMinusChange = () => {
    setStep(step - 1)
  }
 
  if (step === 1) {
    return (
      <div className = "intro"> 
      <FirstPage 
      onStepChange = {onStepChange}/>
      </div> 
    )
  }
   else if (step === 2) {
    return (
      <div className = "main"> 
      <NameQuestion 
      nameInput = {nameInput} 
      onNameInputChange = {onNameInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      />
     </div> 
    )
  } else if (step === 3) {
    return (
      <div ClassName="body-container">
        <div className = "main"> 
        <LocationQuestion 
        locationInput = {locationInput} 
        onLocationInputChange = {onLocationInputChange}
        onStepChange = {onStepChange}
        onStepMinusChange = {onStepMinusChange}
        /></div> 
          <div ClassName="progress"><ProgressBar
          bgcolor="#86E5D1" 
          progress='15'  
          height={50}/></div>
      </div>
      
    )
    
  } else if (step === 4) {
    return ( 
    <div ClassName="body-container">
      <div className = "main"> 
      <FavouriteAnimal
      animalInput = {animalInput}
      onAnimalInputChange = {onAnimalInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='30'  
      height={50}/></div>
      </div>
    )
  } else if (step === 5) {
    return (
      <div ClassName="body-container">
      <div className = "main"> 
      <FavouriteColour 
      colourInput = {colourInput}
      onColourInputChange = {onColourInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='45'  
      height={50}/></div>
    </div>
    )
  } else if (step === 6) {
    return (
      <div ClassName="body-container">
      <div className="main"> 
      <AeroplaneQuestion 
      aeroplaneInput = {aeroplaneInput}
      onAeroplaneInputChange = {onAeroplaneInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='60'  
      height={50}/></div>
      </div>
    )
  } else if (step === 7) {
    return (
      <div ClassName="body-container">
      <div className = "main"> 
      <OlderQuestion 
      olderInput = {olderInput}
      onOlderInputChange = {onOlderInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='75'  
      height={50}/></div>
      </div>
    )
  } else if (step === 8) {
    return (
      <div ClassName="body-container">
      <div className = "main"> 
      <SellotapeQuestion 
      sellotapeInput = {sellotapeInput}
      onSellotapeInputChange = {onSellotapeInputChange}
      onStepChange = {onStepChange}
      onStepMinusChange = {onStepMinusChange}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='90'  
      height={50}/></div>
      </div>
    )
  } else if (step === 9) {
    return (
      <div ClassName="body-container">
      <div className = "main"> 
      <Overview
      nameInput = {nameInput}
      locationInput ={ locationInput}
      animalInput = {animalInput}
      colourInput = {colourInput}
      aeroplaneInput = {aeroplaneInput}
      olderInput = {olderInput}
      sellotapeInput = {sellotapeInput}
      /></div>
      <div ClassName="progress"><ProgressBar
      bgcolor="#86E5D1" 
      progress='100'  
      height={50}/></div>
      </div>
    )
  }
 
}
