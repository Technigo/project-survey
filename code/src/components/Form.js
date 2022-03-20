import React, { useState } from 'react'

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import SummitBtn from "./SummitBtn";


const Form = () => {
const [nameInput, setNameInput] = useState('')
const [typeInput, setTypeInput] = useState('')
const [buyInput, setBuyInput] = useState('')
const [step, setStep] = useState(1)


const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onTypeInputChange = (event) => {
    setTypeInput(event.target.value)
  }

  const onBuyInputChange = (event) => {
    setBuyInput(event.target.value)
  }


    const onStepChange = (e) => {
        e.preventDefault()
        setStep(step + 1)
      }

 return (
 <div> 
   {step=== 1 && 
   <FirstQuestion
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
    onStepChange={onStepChange}
  />    

  }
    
 {step=== 2 && 
   <SecondQuestion
    typeInput={typeInput}
    onTypeInputChange={onTypeInputChange}
    onStepChange={onStepChange}
  />   
 
 }

 {step=== 3 && 
   <ThirdQuestion
    buyInput={buyInput}
    onBuyInputChange={onBuyInputChange}
    onStepChange={onStepChange} 
  />   
 
 }
 
 {step=== 4 && 
   <SummitBtn
    nameInput={nameInput}
    typeInput={typeInput}
    buyInput={buyInput} 

  />   
  
  }
 </div>

)}

export default Form