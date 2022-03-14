import React, { useState } from 'react'
import Intro from 'Components/Intro'
import FirstQuestion from 'Components/FirstQuestion'
import SecondQuestion from 'Components/SecondQuestion'
import ThirdQuestion from 'Components/ThirdQuestion'
import Summary from 'Components/Summary'

const Form = () => {
    const [nameInput, setName] = useState("")
    const [qualityInput, setQuality] = useState("")
    const [homeInput, setHome] = useState("")
    const [step, setStep] = useState(0)

    const onNameInputChange = (event) => {
        setName(event.target.value)
    }

    const onQualityInputChange = (event) => {
        setQuality(event.target.value)
    }

    const onHomeInputChange = (event) => {
        setHome(event.target.value)
    }

    const onStepChange = () => {
        setStep (step + 1)

    }

return (
    <main className="main">
        <section class="contentContainer">
            {step===0 && <Intro onStepChange={onStepChange} />}
            {step===1 && (
                <FirstQuestion 
                nameInput = {nameInput}
                onNameInputChange = {onNameInputChange}
                onStepChange = {onStepChange}
                />
            )}
            {step===2 && (
            <SecondQuestion
            qualityInput = {qualityInput}
            onQualityInputChange = {onQualityInputChange} 
            onStepChange={onStepChange}
            />
            )}

            {step===3 && (
                <ThirdQuestion
                homeInput = {homeInput}
                onHomeInputChange = {onHomeInputChange}
                onStepChange = {onStepChange} 
                />
            )}

            {step===4 && (
                <Summary 
                nameInput = {nameInput}
                qualityInput = {qualityInput}
                homeInput = {homeInput}
                />


            )}
        </section>

    </main>


)
}


export default Form