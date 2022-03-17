import React, { useState } from 'react'
import Intro from 'Components/Intro'
import FirstQuestion from 'Components/FirstQuestion'
import SecondQuestion from 'Components/SecondQuestion'
import ThirdQuestion from 'Components/ThirdQuestion'
import FourthQuestion from 'Components/FourthQuestion'
import FifthQuestion from 'Components/FifthQuestion'
import Summary from 'Components/Summary'


const Form = () => {
    const [nameInput, setName] = useState("")
    const [qualityInput, setQuality] = useState("")
    const [homeInput, setHome] = useState("")
    const [spellInput, setSpell] = useState ("")
    const [likeInput, setLike] = useState("1")
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

    const onSpellInputChange = (event) => {
        setSpell(event.target.value)
    }

    const onLikeInputChange = (event) => {
       setLike(event.target.value)
    }

    const onStepChange = () => {
        setStep (step + 1)
    }

return (
    <main className="main">
            {step===0 && 
            <Intro onStepChange={onStepChange} />}
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
                <FourthQuestion
                spellInput = {spellInput}
                onSpellInputChange = {onSpellInputChange}
                onStepChange = {onStepChange}
                />
            )}

             {step===5 && (
                <FifthQuestion
                likeInput = {likeInput}
                onLikeInputChange = {onLikeInputChange}
                onStepChange = {onStepChange}
                /> 
            )}

            {step===6 && (
              <Summary
              homeInput={homeInput}
              nameInput={nameInput}
              qualityInput={qualityInput}
              spellInput={spellInput}
              likeInput={likeInput}

              />
            )} 

    </main>
)
}


export default Form