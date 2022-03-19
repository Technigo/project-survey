import React, { useState } from "react";

import StartPage from "./Start";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Summary from "./Summary";

//useState
const Form = ( ) => {
const [step, setStep] = useState(1);
const [nameInput, setNameInput] = useState(' ');
const [flavourInput, setFlavourInput] = useState(' '); 
const [sizeInput, setSizeInput] = useState(' ');

//events
const onStepChange = () => {
setStep(step + 1)
}

const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

const onFlavourInput = (flavourInput) => {
    setFlavourInput(flavourInput)
}

const onSizeInput = (sizeInput) => {
    setSizeInput(sizeInput)
}


return (
<>



{step === 1 && (
    <StartPage
onStepChange={onStepChange} 
/>
)}

{step === 2 && (
    <FirstQuestion
nameInput={nameInput}
onNameInputChange={onNameInputChange}
onStepChange={onStepChange}
/>
)}

{step === 3 && (
    <SecondQuestion
flavourInput={flavourInput}
onFlavourInput={onFlavourInput}
onStepChange={onStepChange}
/>
)}

{step === 4 && (
    <ThirdQuestion
SizeInput={sizeInput}
onSizeInput={onSizeInput}
onStepChange={onStepChange}
/>
)}

{step === 5 && (
        <Summary 
          nameInput={nameInput} 
          flavourInput={flavourInput}
          sizetInput={sizeInput}
        />
        )}

</>
);
};



export default Form;