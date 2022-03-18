import React, {useState} from "react";

import  {FirstQuestion}  from "components/FirstQuestion";
import  {SecondQuestion}  from "components/SecondQuestion";
import  {ThirdQuestion}  from "components/ThirdQuestion";
import  {Summary}  from "./Summary";



export const CalculationForm=()=>{


const [nameInput, setNameInput] = useState('')
const [locationInput, setLocationInput]=useState('')
const [interestInput, setInterestInput]=useState('')
const [step, setStep] = useState(1)

const onNameInputChange=(event)=>
{setNameInput(event.target.value)
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


return (
    <div className="form-wrapper">
        <div>
            <h1>Welcome!</h1>
            <h3>Sign up for cultural news in your city!
            </h3>
        </div>
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
     <Summary
     nameInput={nameInput}
     locationInput={locationInput}
     interestInput={interestInput}
            />}
    </div>
)

}
