import React, { useState } from "react";

import StartPage from "./Start";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Summary from "./Summary";



//useState
const Form = ( ) => {
const [step, setStep] = useState(0);
const [nameInput, setNameInput] = useState(' ');
const [flavourInput, setFlavourInput] = useState(' '); 
const [sizeInput, setSizeInput] = useState(' ');

//events
const onStepChange = (event) => {
setStep(step + 1)
event.preventDefault();
}

const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

const onFlavourInput = (event)=> {
    setFlavourInput(event.target.value)
}

const onSizeInput = (event) => {
    setSizeInput(event.target.value)
}


return (
<>



{step === 0 && (
    <StartPage
onStepChange={onStepChange} 
/>
)}

{step === 1 && (
    <FirstQuestion
nameInput={nameInput}
onNameInputChange={onNameInputChange}
onStepChange={onStepChange}
/>
)}

{step === 2 && (
    <SecondQuestion
flavourInput={flavourInput}
onFlavourInput={onFlavourInput}
onStepChange={onStepChange}
/>
)}

{step === 3 && (
    <ThirdQuestion
sizeInput={sizeInput}
onSizeInput={onSizeInput}
onStepChange={onStepChange}
/>
)}

{step === 4 && (
    <Summary
nameInput={nameInput}
flavourInput={flavourInput}
sizeInput={sizeInput}
onStepChange={onStepChange}
/>
)}



</>
);
};

export default Form;