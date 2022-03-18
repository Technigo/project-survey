import React, { useState } from 'react'

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";


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

const onStepChange = () => {
    setStep(step + 1)
 
}



 return (
 <div className='intro-wrapper'>
  <div>
<h1>Hey BIKER, which typ of bike do you prefer?</h1>
   </div>

   {step=== 1 && (
   <FirstQuestion
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
    onStepChange={onStepChange}
  />    

  )}
    
 {step=== 2 && (
   <SecondQuestion
    typeInput={typeInput}
    onNameInputChange={onTypeInputChange}
    onStepChange={onStepChange}
  />   
 
 )}

step=== 3 && (
   <ThirdQuestion
   buyInput={buyInput}
    onBuyInputChange={onBuyInputChange}
    onStepChange={onStepChange}
  />   
 
 
 )}
 
 
 </div>



)

}

export default Form