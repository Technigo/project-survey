import React, { useState } from 'react'

import FirstQuestion from './FirstQUestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './ForthQuestion'
import Overview from './Overview'

const Form = () => {
    const [nameInput, setNameInput] = useState("")
    const [surnameInput, setSurnameInput] = useState("")
    const [travelPersonInput, setTravelPersonInput] = useState('travel')
    const [travelDestination, setTravelDestination] = useState('Stockholm')
    const [step, setStep] = useState(1)

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }
    
    const onSurnameInputChange = (event) => {
        setSurnameInput(event.target.value)
    }

    const onTravelPersonChange = (travel) => {
        setTravelPersonInput(travel)
    }

    const onTravelDestinationChange = (Stockholm) => {
        setTravelDestination(Stockholm)
    }
    
    const onStepChange = () => {
        setStep(step + 1)
    }


    return (
    <div className="page">
    {step === 1 && (
        <FirstQuestion 
        nameInput={nameInput} 
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
        />
    )}
    {step === 2 && (
        <SecondQuestion 
        surnameInput={surnameInput} 
        onSurnameInputChange={onSurnameInputChange}
        onStepChange={onStepChange}
        />
    )}
    {step === 3 && (
        <ThirdQuestion
        travelPersonInput={travelPersonInput}
        onTravelPersonChange={onTravelPersonChange}
        onStepChange={onStepChange}
        />
    )}

    {step === 4 && (
        <FourthQuestion
        travelDestination={travelDestination}
        onTravelDestinationChange={onTravelDestinationChange}
        onStepChange={onStepChange}
        />
    )}
    {step === 5 && (
        <Overview 
        nameInput={nameInput}
        surnameInput={surnameInput}
        travelPersonInput={setTravelPersonInput}
        travelDestination={travelDestination}
        onStepChange={onStepChange}
        />
    )}
    </div>
    )
}

export default Form
