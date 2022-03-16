import React, { useState } from 'react';
import IntroPage from './IntroPage';
import TheChoice from './TheChoice';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import SubmitSurvey from './SubmitSurvey';
import Summary from './Summary';

const Form = () => {
    const [destinationInput, setDestinationInput] = useState('');
    const [budgetInput, setBudgetInput] = useState('');
    const [awayInput, setAwayInput] = useState('');
    const [step, setStep] = useState(0);


    const handleDestinationInputChange = (event) => {
        setDestinationInput(event.target.value);
    };

    const handleBudgetInputChange = (event) => {
        setBudgetInput(event.target.value);
    };

    const handleAwayInputChange = (event) => {
        setAwayInput(event.target.value);
    };

    const nextQuestion = (event) => {
        setStep(step + 1)
        event.preventDefault()
    };

    if (step === 0) { 
    return < IntroPage nextQuestion={nextQuestion} />

    } else if (step === 1 ){ 
        return < TheChoice 
        nextQuestion={nextQuestion}
        step={step}
        />

    } else if (step === 2 ) {
        return ( 
        <FirstQuestion 
        destinationInput={destinationInput}
        onDestinationInputChange={handleDestinationInputChange}
        nextQuestion={nextQuestion}
        step={step}
        />
        )
    } else if (step === 3) {
        return (
            <SecondQuestion 
            budgetInput={budgetInput}
            onBudgetInputChange={handleBudgetInputChange}
            nextQuestion={nextQuestion}
            step={step}
         />
        )
    } else if (step === 4) {
        return (
            <ThirdQuestion 
            awayInput={awayInput}
            onAwayInputChange={handleAwayInputChange}
            nextQuestion={nextQuestion}
            step={step}
         />
        )
    } else if (step === 5) {
        return (
            <SubmitSurvey 
            nextQuestion={nextQuestion}
            />
        )
    } else if (step === 6) {
        return (
            <Summary 
            destinationInput={destinationInput}
            budgetInput={budgetInput}
            awayInput={awayInput}
            /> 
        )
    }
}  

export default Form;

