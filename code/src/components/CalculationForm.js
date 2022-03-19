import React, {useState} from "react";

import  {FirstQuestion}  from "components/FirstQuestion";
import  {SecondQuestion}  from "components/SecondQuestion";
import  {ThirdQuestion}  from "components/ThirdQuestion";
import {FourthQuestion} from "components/FourthQuestion"
import  {Summary}  from "./Summary";



export const CalculationForm=()=>{


const [nameInput, setNameInput] = useState('')
const [emailInput, setEmailInput] = useState('')
const [locationInput, setLocationInput]=useState('')
const [interestInput, setInterestInput]=useState('')
const [step, setStep] = useState(1)

const onNameInputChange=(event)=>
{setNameInput(event.target.value)
}
const onEmailInputChange=(event)=>
{setEmailInput(event.target.value)
}
const onLocationInputChange=(event)=>
{setLocationInput(event.target.value)
}
const onInterestInputChange=(event)=>
{setInterestInput(event.target.value)
}
const onStepChange = () => 
{setStep(step + 1)
}
const restart=()=>{window.location.reload(false)}



return (
    <div className="form-wrapper">
     
        {step===1 && 
    <FirstQuestion 
    nameInput={nameInput} 
    onNameInputChange={onNameInputChange}
    onStepChange={onStepChange}
    />}
        {step === 2 &&
    <SecondQuestion 
    locationInput={locationInput}
    onLocationInputChange={onLocationInputChange}
    onStepChange={onStepChange}
    />}

    {step === 3 &&
     <ThirdQuestion
     interestInput={interestInput}
     onintererestInputChange={onInterestInputChange}
     onStepChange={onStepChange}
            />}

     {step === 4 &&
     <FourthQuestion
     onStepChange={onStepChange}
     onEmailInputChange={onEmailInputChange}
     emailInput={emailInput}/>}
         

    {step === 5 &&
     <Summary
     nameInput={nameInput}
     locationInput={locationInput}
     interestInput={interestInput}
     emailInput={emailInput}
     restart={restart}
            />}
    </div>
)

}
